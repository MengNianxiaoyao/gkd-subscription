import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yoloho.dayima',
  name: '大姨妈',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14665571',
            'https://i.gkd.li/i/13800282',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches:
            '[id="android:id/content"] >n FrameLayout[index=2] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13800255',
        },
      ],
    },
  ],
});
