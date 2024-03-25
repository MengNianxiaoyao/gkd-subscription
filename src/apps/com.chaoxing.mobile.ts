import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  deprecatedKeys: [0],
  groups: [
    {
      key: 10,
      name: '通知提示-开启消息通知',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
      snapshotUrls: 'https://i.gkd.li/i/13197374',
    },
  ],
});
