import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youku.phone',
  name: '优酷视频',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '青少年模式',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="青少年模式"] +(3) [text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12701050',
        'https://i.gkd.li/i/13498556',
      ],
    },
    {
      key: 3,
      name: '全屏广告-视频推荐弹窗',
      quickFind: true,
      activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
      rules: '[id="com.youku.phone:id/closeView"][desc="关闭弹层"]',
      snapshotUrls: 'https://i.gkd.li/i/12701029',
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '点击[关闭广告]',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[text="关闭广告"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/529c75b6-1a97-4765-856b-dd4d4c810207',
          snapshotUrls: 'https://i.gkd.li/i/14321401',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[vid="xadsdk_pause_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/42773084-a7db-4e70-878d-6a5eacd5ecb2',
          snapshotUrls: 'https://i.gkd.li/i/14321469',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '视频播放时的广告',
          quickFind: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[vid="novelad_corner_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8994fdc0-fce0-4a06-8bc5-2ff23fc3afe5',
          snapshotUrls: 'https://i.gkd.li/i/14321461',
        },
        {
          key: 1,
          name: '历史记录/搜索页面广告',
          quickFind: true,
          activityIds: [
            'com.youku.android.youkuhistory.activity.HistoryActivity',
            'com.soku.searchsdk.activity.SearchActivity',
          ],
          matches: '[vid="novel_banner_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a160f41-b101-40dc-b875-533623228406',
          snapshotUrls: [
            'https://i.gkd.li/i/14670383',
            'https://i.gkd.li/i/14680702',
          ],
        },
      ],
    },
  ],
});
