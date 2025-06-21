import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '关闭播放界面、歌单页、我的页等位置的各类卡片广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches:
            '[text^="广告"] + [text="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169', // 播放界面
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@[desc="关闭"][clickable=true] -(1,2) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@[clickable=true][visibleToUser=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15041019',
            'https://i.gkd.li/i/18227243',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18219557',
        },
        {
          key: 5,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15756931',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17450309',
        },
        {
          key: 7,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches: '[text="广告 | 关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18227204',
        },
        {
          key: 8,
          name: '播放页[猜你也会喜欢]推荐',
          fastQuery: true,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '@ImageView[childCount=0][clickable=true] -2 [text="猜你也会喜欢"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18410610',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '关闭各类全屏广告弹窗，包括网页广告、免流弹窗和签到弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          name: '弹窗广告',
          forcedTime: 5000,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches: 'View[id="js_close_btn"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121',
            'https://i.gkd.li/i/14798904',
          ],
        },
        {
          key: 1,
          name: '免流弹窗',
          fastQuery: true,
          activityIds: [
            'com.tencent.qqmusic.activity.AppStarterActivity',
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          ],
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
        {
          key: 2,
          name: '签到弹窗',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[id="android:id/content"] > FrameLayout > FrameLayout > ViewGroup[childCount=2] > ViewGroup > ViewGroup[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15443191',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '关闭看广告免费听歌的弹窗',
      enable: false,
      rules: [
        {
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches: '@[desc="关闭按钮"] <n * > [desc^="看广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13806773',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-VIP弹窗',
      desc: '关闭VIP会员相关弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches:
            '@View[clickable=true][desc="关闭"] +2 * >2 [desc$="确认协议并开通" || desc="立即开通会员"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15209764',
            'https://i.gkd.li/i/15261116',
          ],
        },
        {
          key: 2,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[desc$="不再提示"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18428240',
        },
        {
          key: 3,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] < FrameLayout < FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/20745872',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-音质音效弹窗',
      desc: '关闭音质音效推广弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches:
            '[text^="推荐您开启臻品音质"] -3 [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14549936',
        },
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=6] > FrameLayout[childCount=1][text=null][index=1] > ImageView[visibleToUser=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/16914135',
        },
        {
          key: 2,
          activityIds: '.activity.AppStarterActivity',
          matches: '[desc="关闭弹窗"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17057551',
        },
        {
          key: 3,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] <3 FrameLayout[childCount=3] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/18439138',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-评论区广告',
      desc: '点击不感兴趣，关闭评论区广告',
      enable: false,
      activityIds:
        'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          key: 99,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
  ],
});
