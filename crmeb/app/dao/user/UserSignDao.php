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
declare (strict_types=1);

namespace app\dao\user;

use app\dao\BaseDao;
use app\model\user\UserSign;

/**
 *
 * Class UserSignDao
 * @package app\dao\user
 */
class UserSignDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return UserSign::class;
    }

    /**
     * 获取列表
     * @param array $where
     * @param string $field
     * @param int $page
     * @param int $limit
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where, string $field, int $page, int $limit)
    {
        return $this->search($where)->field($field)->order('id desc')->when($page && $limit, function ($query) use ($page, $limit) {
            $query->page($page, $limit);
        })->select()->toArray();
    }

    /**
     * 获取列表
     * @param array $where
     * @param string $field
     * @param int $page
     * @param int $limit
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getListGroup(array $where, string $field, int $page, int $limit, string $group)
    {
        return $this->search($where)->field($field)->order('id desc')->group($group)->page($page, $limit)->select()->toArray();
    }

    /**
     * 获取周或者月的累积签到次数
     * @param $type
     * @param $uid
     * @return int
     * @author: 吴汐
     * @email: 442384644@qq.com
     * @date: 2023/8/1
     */
    public function getCumulativeDays($type, $uid)
    {
        return $this->getModel()->where('uid', $uid)->where(function ($query) use ($type) {
            if ($type == 1) {
                $query->whereWeek('add_time');
            } elseif($type == 0) {
                $query->whereMonth('add_time');
            }
        })->count();
    }

    /**
     * 获取本周或者本月的签到列表
     * @param $type
     * @param $uid
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author: 吴汐
     * @email: 442384644@qq.com
     * @date: 2023/8/8
     */
    public function getUserSignList($type, $uid): array
    {
        return $this->getModel()->where('uid', $uid)->where(function ($query) use ($type) {
            if ($type == 1) {
                $query->whereWeek('add_time');
            } else {
                $query->whereMonth('add_time');
            }
        })->order('id asc')->select()->toArray();
    }
}
