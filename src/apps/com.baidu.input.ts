import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15376423',
        },
        {
          key: 1,
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14406395',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-创作祝福弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.ImeAppMainActivity',
          matches: '[id="android:id/content"] >2 [vid="button_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14179064',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-底部会员悬浮卡片',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.9269',
            top: 'width * 0.113',
          },
          activityIds:
            'com.baidu.input.layout.store.subshop.activity.SkinShopActivity',
          matches:
            '@[desc="开会员，全部皮肤免费用"] <<n [vid="shop_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/15320905',
        },
        {
          key: 1,
          activityIds: 'com.baidu.input.ImeAppMainActivity',
          matches: '[vid="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15320990',
        },
      ],
    },
  ],
});
