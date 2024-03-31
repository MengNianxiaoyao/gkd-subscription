import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '权限提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.sinovatech.unicom.basic.ui.activity.MainActivity',
        'com.sinovatech.unicom.basic.ui.activity.WelcomeClient',
      ],
      rules: '[text="去开启"] - [vid="custom_dialog_cancel_button"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13331268',
        'https://i.gkd.li/i/14751210',
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13511386',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '首页弹窗',
          forcedTime: 10000,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[text="首页弹窗"] >3 Image[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13761130',
            'https://i.gkd.li/i/14504242',
          ],
        },
      ],
    },
    {
      key: 4,
      quickFind: true,
      name: '局部广告-首页右下角卡片悬浮窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[id="com.sinovatech.unicom.ui:id/home_xuanfu_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13930543',
        },
      ],
    },
  ],
});
