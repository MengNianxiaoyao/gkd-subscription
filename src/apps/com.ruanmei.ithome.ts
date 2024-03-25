import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
  groups: [
    {
      key: 1,
      name: '局部广告-资讯页信息流广告',
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      rules: '[id="hongbaotips"] +n @View > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13167193',
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '长按广告-点击[屏蔽]-点击[不喜欢此条]',
      quickFind: true,
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      rules: [
        {
          key: 0,
          action: 'longClick',
          matches: '@[longClickable=true] >4 [text="广告 "]',
          snapshotUrls: 'https://i.gkd.li/i/14734964',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text*="屏蔽"]',
          snapshotUrls: 'https://i.gkd.li/i/14734962',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[vid="rl_dislike"]',
          snapshotUrls: 'https://i.gkd.li/i/14734987',
        },
      ],
    },
  ],
});
