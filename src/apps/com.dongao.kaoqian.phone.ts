import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dongao.kaoqian.phone',
  name: '会计云课堂',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[vid="tv_welcome_guide"]',
          snapshotUrls: 'https://i.gkd.li/i/14809185',
        },
      ],
    },
  ],
});
