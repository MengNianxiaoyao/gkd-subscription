import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过应用启动时的开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[desc="跳过"||desc="GdtCountDownView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775410',
            'https://i.gkd.li/i/13426030',
            'https://i.gkd.li/i/13468987',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.6858',
            top: 'width * 0.3906',
          },
          matches: '[desc="createSkipView"]',
          snapshotUrls: 'https://i.gkd.li/i/14609953',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '关闭播放页面的各种卡片广告',
      matchRoot: true,
      rules: [
        {
          key: 0,
          fastQuery: true,
          forcedTime: 10000,
          activityIds: '.app.MediaActivity',
          matches:
            'ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView <<n [id="android:id/list"]',
          snapshotUrls: 'https://i.gkd.li/i/16434752',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.app.MediaActivity',
          matches:
            '@ImageView[desc="关闭"][visibleToUser=true][clickable=true] <n ViewGroup < LinearLayout <3 [id="android:id/list"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964889',
            'https://i.gkd.li/i/15024041',
            'https://i.gkd.li/i/15468481',
            'https://i.gkd.li/i/16200618',
          ],
        },
        {
          key: 2,
          activityIds: '.app.MediaActivity',
          matches: '[desc="关闭广告"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15024812',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.app.MediaActivity',
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15520336',
        },
        {
          key: 4,
          forcedTime: 10000,
          activityIds: '.app.MediaActivity',
          matches:
            'RelativeLayout > @RelativeLayout[clickable=true] > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/16114590',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.app.MediaActivity',
          matches:
            '@ImageButton[clickable=true][childCount=0][visibleToUser=true] - LinearLayout > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/18207953',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '关闭VIP会员相关弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*="豪华VIP已过期"]',
          snapshotUrls: 'https://i.gkd.li/i/13548005',
        },
        {
          key: 1,
          activityIds: '.app.MediaActivity',
          matches:
            'WebView[text="开通会员"] >7 @TextView[clickable=true][childCount=0] +2 [text="当前歌曲支持蝰蛇全景声"]',
          snapshotUrls: 'https://i.gkd.li/i/17177377',
        },
        {
          key: 2,
          activityIds: '.app.MediaActivity',
          matches:
            '@[text="退出页面"][visibleToUser=true] + View > [text="你的会员已过期"]',
          snapshotUrls: 'https://i.gkd.li/i/18070974',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-[看广告免费听歌]弹窗',
      desc: '点击关闭看广告免费听歌的弹窗',
      enable: false,
      rules: [
        {
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '[desc="看广告，免费听会员歌"] +2 [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14722104',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-[开启音乐DJ]弹窗',
      desc: '勾选[今日不再提醒]并关闭音乐DJ弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@[checked=false] + [text="今日不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@ImageView - * > [text="今日不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-悬浮广告',
      desc: '关闭各界面的悬浮广告',
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'ViewGroup > FrameLayout >2 FrameLayout[childCount=2] > FrameLayout > FrameLayout[childCount=2] > ImageView[index=1][clickable=true][childCount=0][width<80&&height<80]',
          snapshotUrls: [
            'https://i.gkd.li/i/17004903',
            'https://i.gkd.li/i/18057265',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-签到弹窗',
      desc: '关闭金币中心的签到弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          position: {
            left: 'width * 0.9287',
            top: 'width * 0.8935',
          },
          activityIds: '.app.flexowebview.uploadvideo.ContributeWebActivity',
          matches:
            '@FrameLayout > WebView > WebView[text="金币中心"] > View[id="body"] > TextView[id="root"][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/18071067',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动关闭速听模式',
      desc: '自动关闭播放界面的速听模式',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.app.MediaActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '@[desc="关闭"][visibleToUser=true] < RelativeLayout < RelativeLayout + FrameLayout >3 ViewGroup[desc="速听卡片"] >2 [text="喜欢"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18164732',
        },
        {
          preKeys: [1],
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < RelativeLayout - [desc="暂停"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18165065',
        },
      ],
    },
  ],
});
