import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xsj.app',
  name: '星影视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: ['com.xsj.app.MainActivity', 'com.qq.e.ads.ADActivity'],
          matches:
            'ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625504',
            'https://i.gkd.li/i/13761165',
          ],
        },
        {
          key: 1,
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            'FrameLayout[childCount=3] > TextView[text!=""] + @ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13670176',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告弹窗', //分类存疑
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13875711',
    },
  ],
});
