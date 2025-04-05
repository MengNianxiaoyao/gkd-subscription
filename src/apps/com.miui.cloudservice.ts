import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '全屏广告-云存储空间不足弹窗',
      desc: '点击云存储空间不足提示弹窗中的"以后再说"按钮',
      enable: false,
      activityIds:
        'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
      rules: 'View > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12847374',
    },
  ],
});
