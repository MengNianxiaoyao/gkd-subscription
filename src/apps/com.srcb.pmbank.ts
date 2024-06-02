import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.srcb.pmbank',
  name: '上海农商银行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.yitong.mobile.biz.launcher.app.SplashActivity',
          matches: '[id="com.srcb.pmbank:id/chronometer"][vid="chronometer"]',
          snapshotUrls: 'https://i.gkd.li/i/15491928',
        },
      ],
    },
  ],
});
