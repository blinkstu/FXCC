<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vod/business/vod_edit.proto

namespace Volc\Service\Vod\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Vod.Models.Business.SubmitDirectEditTaskAsyncResult</code>
 */
class SubmitDirectEditTaskAsyncResult extends \Google\Protobuf\Internal\Message
{
    /**
     * 视频编辑执行Id
     *
     * Generated from protobuf field <code>string ReqId = 1;</code>
     */
    protected $ReqId = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $ReqId
     *           视频编辑执行Id
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Vod\Models\GPBMetadata\VodEdit::initOnce();
        parent::__construct($data);
    }

    /**
     * 视频编辑执行Id
     *
     * Generated from protobuf field <code>string ReqId = 1;</code>
     * @return string
     */
    public function getReqId()
    {
        return $this->ReqId;
    }

    /**
     * 视频编辑执行Id
     *
     * Generated from protobuf field <code>string ReqId = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setReqId($var)
    {
        GPBUtil::checkString($var, True);
        $this->ReqId = $var;

        return $this;
    }

}
