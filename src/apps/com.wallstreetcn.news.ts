import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wallstreetcn.news',
  name: '华尔街见闻',
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
          matches: '[text="广告"] +2 [text^="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/40e483a8-61e7-45a0-ac44-df1f472e2863',
          snapshotUrls: 'https://i.gkd.li/i/14525329',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: ['com.wallstreetcn.news.ProxyMainActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[text="广告" || text="活动"] + [id="com.wallstreetcn.news:id/close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13262717',
        },
      ],
    },
  ],
});
