import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baseus.intelligent',
  name: '倍思',
  groups: [
    {
      key: 1,
      name: '定位提示-定位请求',
      desc: '点击取消-点击取消',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.baseus.intelligent.view.home.MainActivity',
      rules: [
        {
          key: 0,
          matches: '@[text="取消"] + [text="前往设置"]',
          snapshotUrls: 'https://i.gkd.li/i/13827653',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@[text="取消"] + [text="授权"]',
          snapshotUrls: 'https://i.gkd.li/i/13827986',
        },
      ],
    },
  ],
});
