import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fiveplay',
  name: '5EPlay',
  groups: [
    {
      key: 1,
      name: '通知提示-请求打开消息推送弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '@[vid="iv_close"] - * > [text="打开消息推送"]',
          exampleUrls:
            'https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb',
          snapshotUrls: 'https://i.gkd.li/i/14680645',
        },
      ],
    },
  ],
});
