import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '通知提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="开启系统通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/i/13538351',
    },
    {
      key: 2,
      name: '权限提示',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
      rules:
        '@Button[text="取消"] <<n FrameLayout >n TextView[text*="手机信息"]',
      snapshotUrls: 'https://i.gkd.li/i/13620277',
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="立即升级"] -2 [text="暂不升级"]',
      snapshotUrls: 'https://i.gkd.li/i/13832272',
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14551046',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-搜索结果页广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '@[clickable=true] > [desc$="广告"]',
          excludeMatches: '@[clickable=true] > [desc^="反馈成功"]',
          action: 'longClick',
          snapshotUrls: [
            'https://i.gkd.li/i/14723597',
            'https://i.gkd.li/i/14723718', // excludeMatches
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            '[desc^="不喜欢该商品"] > ImageView[index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14723632',
        },
      ],
    },
  ],
});
