import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securityadd',
  name: '系统服务组件',
  groups: [
    {
      key: 1,
      name: '全屏广告-游戏广告弹窗',
      desc: '关闭游戏加速弹出的活动广告弹窗',
      enable: false,
      rules: [
        {
          activityIds: 'com.miui.gamebooster.GameBoosterRichWebActivity',
          matches: '[text="活动图片"] +2 Image[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13914659',
            'https://i.gkd.li/i/14668629',
          ],
        },
      ],
    },
  ],
});
