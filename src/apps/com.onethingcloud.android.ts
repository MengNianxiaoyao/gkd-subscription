import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.onethingcloud.android.MainActivity',
      rules:
        '[id="android:id/content"] >(3,4) View[childCount=2] >2 View[childCount=3] > ImageView[index=2][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12841171',
        'https://i.gkd.li/i/14035418', // 误触快照
        'https://i.gkd.li/i/14766665',
      ],
    },
  ],
});
