import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 0,
      name: '局部广告-卡片广告',
      desc: '关闭卡片式广告',
      rules: [
        {
          activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12639658',
        },
      ],
    },
  ],
});
