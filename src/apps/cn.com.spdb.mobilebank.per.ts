import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
    {
      key: 1,
      name: '通知提示-消息中心-系统通知请求',
      desc: '关闭消息推送开启提示',
      enable: false,
      ignoreGlobalGroupMatch: true,
      actionMaximum: 1, // 限制只能点击一次
      resetMatch: 'app',
      activityIds:
        'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
      rules: '[text="去开启"] + View > Image[text.length=0]',
      snapshotUrls: [
        'https://i.gkd.li/import/13458535',
        'https://i.gkd.li/import/14161174', // 点击后元素并不会消失
      ],
    },
  ],
});
