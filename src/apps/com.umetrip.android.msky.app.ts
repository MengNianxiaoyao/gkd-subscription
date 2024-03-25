import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.ume.lib_weex.view.WeexActivity',
      rules:
        'View[desc="立即预订"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]',
      snapshotUrls: 'https://i.gkd.li/i/12909632',
    },
    {
      key: 9,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '@[id="com.umetrip.android.msky.app:id/iv_cancel"] - * > [id="com.umetrip.android.msky.app:id/btn_upgrade"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12838294',
        'https://i.gkd.li/i/12838293',
      ],
    },
    {
      key: 10,
      name: '未分类-进入飞行模式-提示弹窗',
      quickFind: true,
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '[id="com.umetrip.android.msky.app:id/imageView"] + [id="com.umetrip.android.msky.app:id/iv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12750185',
    },
    {
      key: 11,
      name: '局部广告-首页右侧悬浮广告',
      quickFind: true,
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '@[id="com.umetrip.android.msky.app:id/iv_close_envelope"] + [id="com.umetrip.android.msky.app:id/media_view_envelope"]',
      snapshotUrls: 'https://i.gkd.li/i/12783264',
    },
  ],
});
