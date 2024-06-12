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
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[id="com.srcb.pmbank:id/chronometer"][vid="chronometer"][text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/15491928',
        },
      ],
    },
  ],
});
