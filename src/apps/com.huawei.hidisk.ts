import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hidisk',
  name: '云空间',
  groups: [
    {
      key: 1,
      name: '全屏广告-升级云空间弹窗',
      quickFind: true,
      activityIds:
        'com.huawei.android.hicloud.ui.activity.BackupNotificationActivity',
      rules: [
        {
          key: 0,
          matches: '[text="免费升级云空间"] +2 * > [text="放弃"]',
          exampleUrls:
            'https://m.gkd.li/101449500/e8a5de19-17cf-487b-8452-9c018c64b805',
          snapshotUrls: 'https://i.gkd.li/i/14881774',
        },
        {
          key: 1,
          matches:
            '[vid="space_not_enough_dialog_text_1"] <<n [id="android:id/customPanel"] + [id="android:id/buttonPanel"] >2 [text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/101449500/c2867c70-af3a-48ef-9919-94343ac50b93',
          snapshotUrls: 'https://i.gkd.li/i/14881775',
        },
      ],
    },
  ],
});
