import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dewmobile.kuaiya',
  name: '快牙',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.dewmobile.kuaiya.act.MainActivity',
          matches:
            'ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13477048',
        },
      ],
    },
  ],
});
