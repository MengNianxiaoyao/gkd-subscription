import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14978239',
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qq.reader:id/tv_i_know"]',
      snapshotUrls: 'https://i.gkd.li/i/13194867',
    },
    {
      key: 3,
      name: '局部广告-右下角悬浮卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.qq.reader.activity.MainActivity',
          matches: '[id="com.qq.reader:id/operating_activity_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/17b6444c-e275-4ee4-b1d7-bd7369e08e55',
          snapshotUrls: 'https://i.gkd.li/i/14140100',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示-内测邀请弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[vid="upgrade_dialog_close_btn"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e',
          snapshotUrls: 'https://i.gkd.li/i/14376088',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-阅读页面广告',
      desc: '点击关闭-点击[关闭本条广告]',
      quickFind: true,
      activityIds: 'com.qq.reader.activity.ReaderPageActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="关闭广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/70e15d7d-0911-44e7-b0d6-a8e74c00b8b1',
          snapshotUrls: 'https://i.gkd.li/i/14767123',
        },
        {
          key: 1,
          matches: '[vid="adv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/eb2bca3c-abbc-4666-b505-cdaeeec6a839',
          snapshotUrls: 'https://i.gkd.li/i/14767126',
        },

        // 预留key
        {
          preKeys: [0, 1],
          key: 50,
          matches: '[vid="view_close_ad_btn_bg"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c985da66-c2cc-4400-bb61-8f7ee6dbba11',
          snapshotUrls: [
            'https://i.gkd.li/i/14767165',
            'https://i.gkd.li/i/14767124',
          ],
        },
      ],
    },
  ],
});
