import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mostone.life',
  name: '默往',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/i/13832104',
    },
  ],
});
