import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 2,
      name: '分段广告-动态推荐广告卡片',
      desc: '关闭动态页面的广告卡片',
      enable: false,
      fastQuery: true,
      matchDelay: 5000,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://i.gkd.li/import/12700222',
        },
        {
          preKeys: [1],
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12700243',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-视频卡片广告',
      desc: '关闭视频流中的广告卡片，包括视频底部、评论区中间、详情页下方等位置',
      enable: false,
      activityIds: [
        'tv.danmaku.bili.MainActivityV2',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            '[((desc*="广告"||desc*="来自淘宝")&&desc*="查看")||desc$=",,轻点两下查看详情"][visibleToUser=true] >(2,3,4) @ImageView[visibleToUser=true] < [vid$="more"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642260', // n = 2
            'https://i.gkd.li/import/12705266', // n = 3
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://i.gkd.li/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
            'https://i.gkd.li/i/14083540',
            'https://i.gkd.li/i/14059876', // n = 4
            'https://i.gkd.li/i/14588315',
            'https://i.gkd.li/i/14729855',
            'https://i.gkd.li/i/17690786',
            'https://i.gkd.li/i/17690800',
            'https://i.gkd.li/i/17675629',
            'https://i.gkd.li/i/18274379',
          ],
        },
        {
          preKeys: [0],
          key: 49,
          fastQuery: true,
          name: '点击[我不想看]',
          matches: '[vid="recycler"] >n [text="我不想看"]',
          snapshotUrls: ['https://i.gkd.li/i/17786751'],
        },
        {
          preKeys: [0, 49],
          key: 50,
          fastQuery: true,
          name: '点击[不感兴趣]',
          matches:
            '@[clickable=true] > [text="不感兴趣" || text="相似内容过多" || text="up主不感兴趣" || text="此类内容过多" || text="对该up的直播不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13495649',
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/13256605',
            'https://i.gkd.li/i/14155801',
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/13945597',
            'https://i.gkd.li/i/14155272',
            'https://i.gkd.li/i/14059882',
            'https://i.gkd.li/i/13625309',
            'https://i.gkd.li/i/12642261',
            'https://i.gkd.li/i/17676025',
            'https://i.gkd.li/i/17676149',
            'https://i.gkd.li/i/17677147',
            'https://i.gkd.li/i/17786753',
            'https://i.gkd.li/i/18266291',
            'https://i.gkd.li/i/18274380',
            'https://i.gkd.li/i/18292926',
            'https://i.gkd.li/i/18296940',
            'https://i.gkd.li/i/18306839',
          ],
        },
        {
          preKeys: [50],
          key: 51,
          name: '点击关闭',
          fastQuery: true,
          matches: '[vid="close_dislike"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17675894',
            'https://i.gkd.li/i/18587456',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频页广告',
      desc: '关闭视频页面的会员推广弹窗和免流星卡广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.video.videodetail.VideoDetailsActivity',
          ],
          matches: '[id="tv.danmaku.bili:id/toast_x"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12892611',
            'https://i.gkd.li/i/13308344',
            'https://i.gkd.li/i/13538048',
          ],
        },
        {
          key: 2,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[vid="close"][visibleToUser=true] - [text$="免费领B站大会员"]',
          snapshotUrls: 'https://i.gkd.li/i/18165189',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-直播间卡片广告',
      desc: '关闭直播间的底部售卖卡片和关注/投喂弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          name: '直播间底部售卖卡片',
          matches: '[id="tv.danmaku.bili:id/shopping_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13200549',
        },
        {
          key: 1,
          name: '[关注/投喂]弹窗',
          matches: '@[vid="close"] - [vid="up_avatar" || vid="gift_icon"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14782965',
            'https://i.gkd.li/i/18046573',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-搜索结果广告',
      desc: '关闭搜索结果中的广告内容',
      enable: false,
      fastQuery: true,
      activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
      rules: [
        {
          key: 1,
          matches:
            '@[vid="more"][clickable=true][visibleToUser=true] -(3,4) [vid="tag_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17269053',
            'https://i.gkd.li/i/17964354',
          ],
        },
        {
          preKeys: [1],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17269055',
            'https://i.gkd.li/i/17964356',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动关闭故事模式',
      desc: '退出视频播放时的竖屏故事模式',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.video.story.StoryVideoActivity',
          matches: '[vid="story_ctrl_router"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18164075',
        },
      ],
    },
  ],
});
