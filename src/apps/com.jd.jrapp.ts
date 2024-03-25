import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '通知提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249998',
        },
        {
          matches: 'View[text="开启并订阅通知"] < View + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13255656',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/i/13628364',
    },
    {
      key: 3,
      name: '评价提示-满意度打分弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@ImageView[clickable=true] - [text$="满意度打几分？"]',
      snapshotUrls: 'https://i.gkd.li/i/13804561',
    },
  ],
});
