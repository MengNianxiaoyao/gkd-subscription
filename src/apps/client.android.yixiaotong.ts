import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13055837',
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13060116',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds: [],
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13625511',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片式广告',
      activityIds: [
        'client.android.yixiaotong.v3.ui.V3MainActivity',
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathControlActivity',
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      ],
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          matches:
            'ImageView - FrameLayout - FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13451010',
        },
        {
          key: 1,
          name: '快手广告',
          matches:
            '[id="client.android.yixiaotong:id/ksad_container"] >n @TextView + View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13450887',
        },
        {
          key: 2,
          matches:
            'FrameLayout[childCount=3] > FrameLayout > ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/ad8a1bbf-61b5-4a7e-8e16-5e0092f04b8c',
          snapshotUrls: 'https://i.gkd.li/i/14469848',
        },
        {
          key: 3,
          quickFind: true,
          position: {
            left: 'width * 0.9585',
            top: 'width * 0.0424',
          },
          matches: '[vid="native_ad_tpbt_image_iv"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ed6c2c12-ac17-40cc-9842-3dbc2a477d15',
          snapshotUrls: [
            'https://i.gkd.li/i/14469800',
            'https://i.gkd.li/i/14469876',
            'https://i.gkd.li/i/14469878',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-底部卡片广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules:
        '@TextView[clickable=true][text=""] + View [text="广告"] <<n [id="client.android.yixiaotong:id/ksad_container"]',
      snapshotUrls: 'https://i.gkd.li/i/13448963',
    },
  ],
});
