import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sina.weibolite',
  name: '微博极速版',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击广告卡片右上角x图标,点击[不感兴趣]',
      activityIds: 'com.weico.international.activity.MainFragmentActivity',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角x图标',
          matches: '[id="com.sina.weibolite:id/item_timeline_ad_action"]',
          snapshotUrls: 'https://i.gkd.li/i/12738110',
        },
        {
          preKeys: 0,
          name: '点击[不感兴趣]',
          matches:
            '@View[clickable=true][childCount=1] > TextView[text="不感兴趣"||text$="interest"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12738132',
            'https://i.gkd.li/i/13727657',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '评价提示-APP评分弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sina.weibolite:id/ed_btn_negative"]',
      snapshotUrls: 'https://i.gkd.li/i/13727728',
    },
  ],
});
