import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sdhs.easy.high.road',
  name: 'e高速',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.sdhs.easy.main.activity.MainActivity',
          matches: [
            '[desc^="logoad"]',
            '[desc^="dislike"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13670340',
        },
      ],
    },
  ],
});
