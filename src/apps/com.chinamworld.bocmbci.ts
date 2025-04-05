import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches: '@[desc="关闭"] > [vid="btn_action"]',
          snapshotUrls: 'https://i.gkd.li/i/17691747',
        },
      ],
    },
  ],
});
