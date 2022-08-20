<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

return [
    //默认支付模式
    'default' => 'wechat_pay',
    //支付方式
    'payType' => ['weixin' => '微信支付', 'yue' => '余额支付', 'offline' => '线下支付'],
    //提现方式
    'extractType' => ['alipay', 'bank', 'weixin'],
    //配送方式
    'deliveryType' => ['send' => '商家配送', 'express' => '快递配送'],
    //驱动模式
    'stores' => [
        //微信支付
        'wechat_pay' => [],
        //支付宝支付
        'ali_pay' => [],
        //余额支付
        'yue' => [],
    ]
];
