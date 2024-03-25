import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.haier.uhome.uplus',
  name: '海尔智家',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] + [text="立即更新"||text="立即安装"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12726844',
        'https://i.gkd.li/i/12726801', // activityId: 'com.huawei.android.launcher.unihome.UniHomeLauncher'
      ],
    },
    {
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="通知栏权限"] +n LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/12726829',
    },
  ],
});
