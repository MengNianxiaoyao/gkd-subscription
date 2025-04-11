import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mimikko.mimikkoui',
  name: '兽耳助手',
  groups: [
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      matchDelay: 3000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@TextView[text="今日不再提醒"] < View <3 View < View < ViewGroup < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/19642049',
        },
      ],
    },
  ],
});
