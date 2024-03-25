import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.newcapec.mobile.ncp',
  name: '完美校园',
  groups: [
    {
      key: 10,
      name: '更新提示',
      desc: '新版本提示弹窗，点击右上角"X"按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.newcapec.mobile.ncp:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12843377',
    },
    {
      key: 11,
      name: '功能类-密码过期提示弹窗',
      desc: '点击"取消"按钮',
      activityIds: 'com.wanxiao.ui.activity.IndexActivity',
      rules: '[id="com.newcapec.mobile.ncp:id/dialog_oppotion"]',
      snapshotUrls: 'https://i.gkd.li/i/12843399',
    },
  ],
});
