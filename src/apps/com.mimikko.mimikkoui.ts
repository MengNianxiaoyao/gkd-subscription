import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mimikko.mimikkoui',
  name: '兽耳助手',
  groups: [
    {
      key: 2,
      name: '更新提示',
      desc: '点击[今日不再提醒]',
      matchTime: 9000,
      actionCdKey: 0,
      actionMaximumKey: 0,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '@TextView[text="今日不再提醒"] < View <3 View < View < ViewGroup < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/19642049',
        },
      ],
    },
  ],
});
