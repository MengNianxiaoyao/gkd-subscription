import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 1,
      name: '功能类-权限授予弹窗',
      desc: '自动点击"仅在使用中允许"',
      activityIds:
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      quickFind: true,
      rules: '[text="仅在使用中允许"]',
      snapshotUrls: 'https://i.gkd.li/i/13761264',
    },
    {
      key: 2,
      name: '通知提示-请求发送通知弹窗',
      desc: '点击拒绝',
      rules: [
        {
          quickFind: true,
          matches: '[text$="发送通知"] <2 * +2 * > [text="拒绝"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0487a113-5b57-402e-96ca-1f351e121d82',
          snapshotUrls: 'https://i.gkd.li/i/14321882',
        },
      ],
    },
  ],
});
