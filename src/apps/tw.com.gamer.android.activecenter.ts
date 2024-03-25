import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tw.com.gamer.android.activecenter',
  name: '巴哈姆特',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="Interstitial close button"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14292691',
    },
  ],
});
