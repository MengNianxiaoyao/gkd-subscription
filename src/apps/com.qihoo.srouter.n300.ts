import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo.srouter.n300',
  name: '360家庭防火墙',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[vid="app_update_later_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13800011',
    },
  ],
});
