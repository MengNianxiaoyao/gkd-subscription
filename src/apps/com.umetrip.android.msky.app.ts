import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 8,
      name: '全屏广告-酒店-弹窗广告',
      desc: '关闭酒店预订页面的全屏弹窗广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.ume.lib_weex.view.WeexActivity',
      rules:
        'View[desc="立即预订"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]',
      snapshotUrls: 'https://i.gkd.li/import/12909632',
    },
    {
      key: 10,
      name: '功能类-进入飞行模式-提示弹窗',
      desc: '关闭进入飞行模式时的提示弹窗',
      enable: false,
      fastQuery: true,
      activityIds: 'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
      rules:
        '[id="com.umetrip.android.msky.app:id/imageView"] + [id="com.umetrip.android.msky.app:id/iv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12750185',
    },
    {
      key: 11,
      name: '局部广告-首页广告',
      desc: '关闭首页的局部广告',
      rules: [
        {
          key: 0,
          name: '右侧悬浮广告',
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches:
            '@[id="com.umetrip.android.msky.app:id/iv_close_envelope"] + [id="com.umetrip.android.msky.app:id/media_view_envelope"]',
          snapshotUrls: 'https://i.gkd.li/import/12783264',
        },
        {
          key: 1,
          name: '底部横幅广告',
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches: '[vid="iv_bottomOperateClose"]',
          snapshotUrls: 'https://i.gkd.li/i/18702163',
        },
      ],
    },
  ],
});
