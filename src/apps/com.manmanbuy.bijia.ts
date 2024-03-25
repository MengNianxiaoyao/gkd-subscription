import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.manmanbuy.bijia',
  name: '慢慢买',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text^="关闭"][text.length=4]',
          snapshotUrls: 'https://i.gkd.li/i/13214974',
        },
      ],
    },
  ],
});
