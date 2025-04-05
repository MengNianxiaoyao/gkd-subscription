import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
    {
      key: 2,
      name: '分段广告-游戏浏览页面推荐广告',
      desc: '点击[对此内容不感兴趣]',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.taptap.other.basic.impl.TapMainActivity',
          matches:
            '[id="com.taptap.app.middle:id/decision_layout_mask"] + @[id="com.taptap.app.game:id/app_menu"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840903',
            'https://i.gkd.li/i/12842279',
            'https://i.gkd.li/i/12864810', //需避免点击正常情况下的app menu
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.taptap.game.discovery.impl.findgame.allgame.dialog.FindGameMenuDialog',
            'com.taptap.other.basic.impl.TapMainActivity',
          ],
          matches: '@LinearLayout > [text="对此内容不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840904',
            'https://i.gkd.li/i/13258679',
          ],
        },
      ],
    },
  ],
});
