import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  deprecatedKeys: [6],
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '软件详情页',
          quickFind: true,
          actionDelay: 300, // 没有此字段会导致误触
          activityIds: [
            'com.magicalstory.AppStore.appDetails.AppDetailsActivity',
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          ],
          matches:
            '@ImageView < FrameLayout[childCount=1] <3 [childCount=5] <<n [vid="bannerLayout"] + [vid="itemUser"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14771070',
            'https://i.gkd.li/i/14771175',
            'https://i.gkd.li/i/14771110', // 限定 visibleToUser, 防止误触
          ],
        },
        {
          key: 1,
          name: '搜索页面',
          activityIds: 'com.magicalstory.AppStore.search.searchActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14771429',
        },
        {
          key: 2,
          name: '首页',
          quickFind: true,
          activityIds: 'com.magicalstory.AppStore.main.MainActivity',
          matches: '[vid="button_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/14668408',
        },
        {
          key: 3,
          name: '评论区顶部',
          quickFind: true,
          actionDelay: 300, // 没有此字段会导致误触
          activityIds:
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          matches:
            '@ImageView < FrameLayout[childCount=1] <<n [vid="banner"] +2 [vid="title_browse"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14758809',
            'https://i.gkd.li/i/14783076',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text*="隐藏"][id="com.magicalstory.AppStore:id/btn_selectNegative"]',
          snapshotUrls: 'https://i.gkd.li/i/13437553',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.magicalstory.AppStore:id/tv_update"] <2 * + * > [id="com.magicalstory.AppStore:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13459373',
    },
  ],
});
