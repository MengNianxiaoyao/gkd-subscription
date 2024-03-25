import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eastmoney.android.berlin',
  name: '东方财富',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.eastmoney.android.berlin:id/tv_update_next_time"] + [id="com.eastmoney.android.berlin:id/tv_update_now"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12706070', //com.eastmoney.android.module.launcher.internal.home.HomeActivity
        'https://i.gkd.li/i/13399156', //com.bbk.launcher2.Launcher
      ],
    },
    {
      key: 10,
      name: '通知提示-请求通知权限提示信息',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.eastmoney.android.berlin:id/push_on_notify_on"] + [id="com.eastmoney.android.berlin:id/push_on_notify_delete"]',
      snapshotUrls: ['https://i.gkd.li/i/12706065'],
    },
  ],
});
