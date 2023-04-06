<?php
/**
 *  +----------------------------------------------------------------------
 *  | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
 *  +----------------------------------------------------------------------
 *  | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
 *  +----------------------------------------------------------------------
 *  | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
 *  +----------------------------------------------------------------------
 *  | Author: CRMEB Team <admin@crmeb.com>
 *  +----------------------------------------------------------------------
 */

namespace crmeb\services\crud;

use crmeb\exceptions\CrudException;
use think\App;
use think\helper\Str;

/**
 * Class ViewApi
 * @author 等风来
 * @email 136327134@qq.com
 * @date 2023/4/1
 * @package crmeb\services\crud
 */
class ViewApi extends Make
{

    /**
     * @var string
     */
    protected $name = 'api';

    /**
     * @var string
     */
    protected $fileMime = 'js';

    /**
     * ViewApi constructor.
     * @param App $app
     */
    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->basePath = $this->adminTemplatePath;
    }

    /**
     * @return string
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/4
     */
    protected function setBaseDir(): string
    {
        return 'api' . DS . 'crud';
    }

    /**
     * @param string $name
     * @param string $path
     * @param array $options
     * @return array
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/4
     */
    public function handle(string $name, string $path, array $options = [])
    {

        $action = $options['action'] ?? [];
        if (!$action) {
            $action = ['index', 'create', 'save', 'edit', 'update'];
        }
        $route = $options['route'] ?? '';
        if (!$route) {
            throw new CrudException('缺少路由名称');
        }

        $contentJs = '';

        foreach ($action as $item) {
            $contentJs .= file_get_contents($this->getStub($item)) . "\n";
        }

        $nameCamel = Str::studly($name);

        if ($contentJs) {
            $var = ['{%name%}', '{%route%}', '{%nameCamel%}'];
            $value = [$name, $route, $nameCamel];
            $contentJs = str_replace($var, $value, $contentJs);
        }

        $this->value['content-js'] = $contentJs;

        //生成api
        [$className, $content] = $this->getStubContent($name, $this->name);

        $contentStr = str_replace($this->var, $this->value, $content);
        $filePath = $this->getFilePathName($path, Str::camel($name));

        $content = $this->makeFile($filePath, $contentStr);

        return [$content, $filePath];
    }

    /**
     * @param string $path
     * @param string $name
     * @return string
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/4
     */
    protected function getFilePathName(string $path, string $name): string
    {
        $path = ltrim(str_replace('\\', '/', $path), '/');

        return $this->getBasePath($path) . $name . '.' . $this->fileMime;
    }

    /**
     * 模板文件配置
     * @param string $type
     * @return mixed
     */
    protected function getStub(string $type = 'api')
    {
        $servicePath = __DIR__ . DS . 'stubs' . DS . 'view' . DS . 'api' . DS;

        $stubs = [
            'index' => $servicePath . 'getCrudListApi.stub',
            'create' => $servicePath . 'crudUpdateApi.stub',
            'save' => $servicePath . 'crudSaveApi.stub',
            'edit' => $servicePath . 'getCrudEditApi.stub',
            'update' => $servicePath . 'CrudUpdateApi.stub',
            'api' => $servicePath . 'crud.stub',
        ];

        return $type ? $stubs[$type] : $stubs;
    }

}
