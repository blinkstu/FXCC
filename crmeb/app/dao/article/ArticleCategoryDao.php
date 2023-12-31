<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\dao\article;


use app\dao\BaseDao;
use app\model\article\ArticleCategory;

/**
 * 文章分类
 * Class ArticleCategoryDao
 * @package app\dao\article
 */
class ArticleCategoryDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return ArticleCategory::class;
    }

    /**
     * 获取文章分类列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return mixed
     * @throws \ReflectionException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where, int $page = 0, int $limit = 0)
    {
        return $this->search($where)->when(!$page && !$limit, function ($query) use ($page, $limit) {
            $query->page($page, $limit);
        })->order('sort desc,id desc')->select()->toArray();
    }

    /**
     * 前台获取文章分类
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getArticleCategory()
    {
        return $this->search(['hidden' => 0, 'is_del' => 0, 'status' => 1, 'pid' => 0])->with(['children'])
            ->order('sort DESC,id DESC')
            ->field('id,pid,title')
            ->select()->toArray();
    }

    /**
     * 二级文章分类
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getArticleTwoCategory()
    {
        return $this->getModel()
            ->where('hidden', 0)
            ->where('is_del', 0)
            ->where('status', 1)
            ->order('sort DESC,id DESC')
            ->field('id,pid,title')
            ->select()->toArray();
    }

    /**
     * 添加修改选择上级分类列表
     * @param array $where
     * @return array
     * @throws \ReflectionException
     */
    public function getMenus(array $where)
    {
        return $this->search($where)->order('sort desc,id desc')->column('title,pid,id,is_del,status');
    }

    /**
     * 树形列表
     * @param array $where
     * @param array $field
     * @return array
     * @throws \ReflectionException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author: 吴汐
     * @email: 442384644@qq.com
     * @date: 2023/9/7
     */
    public function getTreeList(array $where, array $field)
    {
        return $this->search($where)->field($field)->order('sort desc,id desc')->select()->toArray();
    }
}
