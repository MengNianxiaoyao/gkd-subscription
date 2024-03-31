import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.handsgo.jiakao.android',
  name: '驾考宝典',
  deprecatedKeys: [0],
  groups: [
    {
      key: -1,
      name: '开屏广告',
      resetMatch: 'app',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14812686',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches:
            '@[id="com.handsgo.jiakao.android:id/ivDelete"] + [id="com.handsgo.jiakao.android:id/ivRemote"]',
          snapshotUrls: 'https://i.gkd.li/i/13475994',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13476039',
        },
        {
          key: 1,
          name: '课程广告',
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          quickFind: true,
          matches:
            '[id="com.handsgo.jiakao.android:id/adsdk__ids_cta_layout"] - * > [id="com.handsgo.jiakao.android:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13523033',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-请求开启通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[text="开启专属学习资料推送"] + [id="com.handsgo.jiakao.android:id/closeIv"]',
      snapshotUrls: 'https://i.gkd.li/i/13520296',
    },
  ],
});
