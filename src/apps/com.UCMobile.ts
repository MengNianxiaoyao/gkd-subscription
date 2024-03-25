import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13188653',
        },
        {
          key: 1,
          matches:
            '@View[clickable=true] < RelativeLayout <2 FrameLayout < FrameLayout < FrameLayout <4 FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13197655',
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] +n ImageView[desc="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12880737',
            'https://i.gkd.li/i/12881751', // 限定 visibleToUser=true，尽量减少对正常浏览信息的干扰
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text^="屏蔽"][text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12880772',
            'https://i.gkd.li/i/12881307',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@ImageView - LinearLayout >n [text="开启消息通知"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12880812',
        'https://i.gkd.li/i/12880802',
      ],
    },
    {
      key: 11,
      name: '功能类-请求添加桌面快捷方式权限弹窗',
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: '@ImageView + [text^="添加"][text$="到桌面"]',
      snapshotUrls: 'https://i.gkd.li/i/12880983',
    },
  ],
});
