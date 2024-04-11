import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '更新提示-关闭花呗升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          quickFind: true,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/i/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/i/12915864',
          ],
        },
        {
          quickFind: true,
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/i/13631362',
        },
        {
          matches:
            '[text="同意协议并确认交易"] < * <2 FrameLayout[childCount=2] + FrameLayout [text="暂不升级，继续付款"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13857535',
            'https://i.gkd.li/i/14001273', // 误触快照
          ],
        },
      ],
    },
    {
      key: 1,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/i/12792688',
    },
    {
      key: 2,
      name: '通知提示-请求通知弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          matches: '@[desc="关闭"] - * >n [text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/i/13194955',
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          matches: '[text="选择通知接收范围"] +3 * > [text="暂时不用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13669620',
            'https://i.gkd.li/i/14944514',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-版本更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          name: '弹窗-"稍后再说"',
          matches:
            'TextView[id="com.alipay.mobile.accountauthbiz:id/update_cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/13327095',
        },
        {
          name: '弹窗-"x"',
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/13580594',
          ],
        },
        {
          name: '卡片-"x"',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/i/13490797',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-设置支付宝小组件',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13327349',
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-小程序-12306',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          matches: '[text="对该内容不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13763315',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13915022',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-支付后自动点击完成',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[id="com.alipay.android.app:id/rl_nav_bar"] > [id="com.alipay.android.app:id/nav_right_textview"]',
          snapshotUrls: 'https://i.gkd.li/i/14008852',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-领新年红包弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14034152',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-"下次支付用花呗"弹窗',
      desc: '点击"30天不再提醒"',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[text$="不再提醒"] <<2 * <3 * - FrameLayout[childCount=3] [text="下次支付用花呗"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
          snapshotUrls: 'https://i.gkd.li/i/14060628',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-小程序-哈啰-专属额度到账弹窗',
      desc: '点击关闭',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          matches:
            '[id="com.alipay.mobile.nebula:id/h5_pc_container"] View[childCount=1] > View[childCount=2] > View > Image < View + Image[text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/bfc87673-cba3-4a5b-ba77-210de8244604',
          snapshotUrls: [
            'https://i.gkd.li/i/14112224',
            'https://i.gkd.li/i/14176001', //不加text=""误触
            'https://i.gkd.li/i/14602610', // 使用 View > Image < View 防止误触
          ],
        },
      ],
    },
    {
      key: 16,
      name: '分段广告-扫码乘车后出现的广告',
      desc: '点击[展开更多]-点击[对该内容不感兴趣]',
      quickFind: true,
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          name: '点击[展开更多]',
          matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d7c12df8-a92e-45be-a462-bef23ca9b5fc',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击[对该内容不感兴趣]',
          matches:
            '@RelativeLayout[clickable=true] >2 [text="对该内容不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7008e1da-738c-4790-9f12-6a5155d42c47',
          snapshotUrls: 'https://i.gkd.li/i/14546047',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-关闭免密支付开关',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: '@[checked=true] < * - [text$="免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1e3a5f01-c42b-4d41-9d7d-21ff96c0075f',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
          ],
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-小程序-红包弹窗',
      desc: '点击关闭',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          matches: 'View[childCount=2] > View > Image < * + [text="X"]',
          exampleUrls:
            'https://m.gkd.li/57941037/19ba92ce-0c57-4559-ab53-89b912fe8506',
          snapshotUrls: 'https://i.gkd.li/i/14783332',
        },
      ],
    },
    {
      key: 19,
      name: '分段广告-服务消息页面-卡片广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      quickFind: true,
      activityIds:
        'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384',
          snapshotUrls: 'https://i.gkd.li/i/14787644',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1',
          snapshotUrls: 'https://i.gkd.li/i/14787585',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-[0元下单权益]弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3575bbbc-717b-466d-b863-443a15629ef6',
          snapshotUrls: 'https://i.gkd.li/i/14893122',
        },
      ],
    },
    {
      key: 21,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=3] > @TextView[text=""][clickable=true][visibleToUser=true] + * > [text!=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/5df9b6fb-7455-492c-a726-fb6a42266a02',
          snapshotUrls: 'https://i.gkd.li/i/14907533',
        },
      ],
    },
  ],
});
