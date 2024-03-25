import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.antutu.ABenchMark',
  name: '安兔兔评测',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      activityIds: 'com.android.module.app.ui.test.activity.ActivityTestResult',
      rules: '[text="广告"] + TextView + View > TextView',
      snapshotUrls: 'https://i.gkd.li/i/13234012',
    },
  ],
});
