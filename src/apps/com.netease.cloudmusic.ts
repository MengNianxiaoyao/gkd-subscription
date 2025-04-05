import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击[X]或[直接关闭]/[不感兴趣]以跳过分段广告',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          excludeActivityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity', // 排除评论区，避免节点被遮罩时误触，评论区广告规则见groups key 13
          matches: '[vid="adTagView"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13859634',
            'https://i.gkd.li/i/12829964',
            'https://i.gkd.li/i/12829953',
            'https://i.gkd.li/i/16047087',
          ],
        },
        {
          key: 1,
          name: '推荐页广告',
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="tag_ad_banner"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13927753',
        },
        {
          key: 2,
          name: '评论区内容推荐',
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13526986',
            'https://i.gkd.li/i/13526711',
          ],
        },
        {
          // preKeys: [0, 1],该条分段广告有概率被VIP弹窗插入导致二段不触发，故去掉preKeys
          key: 90,
          fastQuery: true,
          activityIds: [
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12829967',
            'https://i.gkd.li/i/13859635',
            'https://i.gkd.li/i/16047089',
          ],
        },
        {
          preKeys: 2,
          key: 91,
          fastQuery: true,
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@[id="com.netease.cloudmusic:id/artist_container"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13526712',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: '点击关闭各页面局部广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '[我的]页面广告',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            '[id="com.netease.cloudmusic:id/resource_view"] > [id="com.netease.cloudmusic:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12745666',
        },
        {
          key: 1,
          name: '首页卡片广告',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="adTagView"]',
          snapshotUrls: 'https://i.gkd.li/i/15047096',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '[vid="iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
        {
          key: 3,
          activityIds:
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
          matches: '[vid="adCloseIV"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16385547',
        },
        {
          key: 4,
          name: '右上角VIP小悬浮',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches:
            'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402634',
            'https://i.gkd.li/i/13402635',
            'https://i.gkd.li/i/13402636',
          ],
        },
        {
          key: 5,
          name: '巨幅卡片广告1',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13527105',
        },
        {
          key: 6,
          name: '巨幅卡片广告2',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches:
            '@TextView[text!=null][clickable=true][visibleToUser=true] - ViewGroup > [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14045424',
        },
        {
          key: 7,
          name: '巨幅卡片广告3',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches:
            '[vid="iv_ad_close"][clickable=true][visibleToUser=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
        {
          key: 8,
          name: '发现页顶部视频广告',
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[id="com.netease.cloudmusic:id/skipBannerAd"]',
          snapshotUrls: 'https://i.gkd.li/i/13768367',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '关闭全屏弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: 'WebView >n View > TextView + TextView + TextView',
          snapshotUrls: 'https://i.gkd.li/i/13188737',
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.activity.PlayerActivity',
          ],
          excludeMatches: '[text="当前场景"]',
          matches: '[vid="dsl_dialog_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534',
            'https://i.gkd.li/i/13804541',
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/13230603',
            'https://i.gkd.li/i/15404777', // 避免误触
          ],
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            'View[childCount=4] > @TextView[index=2][visibleToUser=true] <<n [vid="popLayerWebViewContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/15160018',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-VIP弹窗',
      desc: '关闭VIP相关的全屏广告弹窗',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          action: 'back',
          activityIds: [
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            'com.netease.cloudmusic.activity.MainActivity',
            '.activity.PlayListActivity',
          ],
          matches: ['[text="支付宝"]', '[text^="确认协议并"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13189055',
            'https://i.gkd.li/i/13260416',
            'https://i.gkd.li/i/13996787',
            'https://i.gkd.li/i/13230605',
            'https://i.gkd.li/i/14268181',
            'https://i.gkd.li/i/13391498',
            'https://i.gkd.li/i/14045917',
            'https://i.gkd.li/i/14926722',
            'https://i.gkd.li/i/16242200',
          ],
        },
        {
          key: 1,
          action: 'back',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          matches: '[text^="邀您开通VIP"]',
          snapshotUrls: 'https://i.gkd.li/i/14956768',
        },
        {
          key: 7,
          action: 'back',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="view_button_main"][text*="立即续费"]',
          snapshotUrls: 'https://i.gkd.li/i/14969806',
        },
      ],
    },
    {
      key: 13,
      name: '分段广告-评论区广告',
      desc: '点击[关闭]和[不感兴趣]以跳过评论区广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
        'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
      ],
      rules: [
        {
          key: 0,
          name: '点击关闭-1',
          matches:
            // 通过广告下方评论visibleToUser=true防止误触
            '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentVHRootId"] [vid="closeAction"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14549836',
        },
        {
          key: 2,
          name: '点击关闭-2',
          matches:
            '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentAdContainer"] >n [vid="adTagView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14275571',
            'https://i.gkd.li/i/14275955',
            'https://i.gkd.li/i/14070500', // 通过广告下方评论visibleToUser=true防止在此页面误触
            'https://i.gkd.li/i/14964827',
            'https://i.gkd.li/i/14964828',
          ],
        },
        {
          preKeys: [2],
          key: 98,
          name: '点击[直接关闭]',
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14932659',
            'https://i.gkd.li/i/14964832',
          ],
        },
        {
          preKeys: [0],
          key: 99,
          name: '点击[不感兴趣]',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14549856',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-扫码后自动点击[授权登录]',
      desc: '自动点击登录确认',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.netease.cloudmusic.module.login.LoginPermissionActivity',
          matches: '[text="授权登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14830218',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-[获得新徽章]弹窗',
      desc: '点击关闭获得新徽章的弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '@ImageView[clickable=true] +7 [text="查看我的勋章"]',
          snapshotUrls: 'https://i.gkd.li/i/14926750',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            'ImageView[visibleToUser=true][childCount=0] < @ViewGroup[clickable=true][childCount=1] + [text$="获得该徽章"]',
          snapshotUrls: 'https://i.gkd.li/i/18492801',
        },
      ],
    },
    {
      key: 16,
      name: '分段广告-搜索页广告',
      desc: '该规则触发时会导致输入法收起，点击关闭广告',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="adTagView" || vid="adTagViewNew"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16357208',
            'https://i.gkd.li/i/16357111',
          ],
        },
        {
          preKeys: [0],
          key: 90,
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/16357210',
        },
      ],
    },
  ],
});
