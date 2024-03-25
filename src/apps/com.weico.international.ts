import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          order: -1,
          matches: '@[clickable=true] + * > [text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14549281',
            'https://i.gkd.li/i/14549328', // 小窗模式下全局规则触发无效
          ],
        },
        {
          key: 1,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14661654',
            'https://i.gkd.li/i/14661622',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      desc: '出现在主页,搜索页',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角[x]',
          quickFind: true,
          activityIds: [
            'com.weico.international.activity.MainFragmentActivity',
            'com.weico.international.ui.search.SearchActivity',
          ],
          matches: '[id="com.weico.international:id/item_timeline_ad_action"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12857202',
            'https://i.gkd.li/i/14444744',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          activityIds:
            'com.google.android.material.bottomsheet.BottomSheetDialog',
          matches: '@View > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505755',
            'https://i.gkd.li/i/12505764',
          ],
        },
      ],
    },
  ],
});
