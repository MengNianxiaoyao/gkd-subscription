import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_ORDER = -9; // 更新提示
export const YOUNG_ORDER = -8; // 青少年模式
export const REVIEW_PROMPT_ORDER = -7; // 评价提示
export const NOTIFICATION_PROMPT_ORDER = -6; // 通知提示
export const LOCATION_PROMPT_ORDER = -5; // 定位提示
export const PERMISSION_PROMPT_ORDER = -4; // 权限提示
export const PARTIAL_AD_ORDER = -3; // 局部广告
export const FULLSCREEN_AD_ORDER = -2; // 全屏广告
export const SEGMENTED_AD_ORDER = -1; // 分段广告

const COMMON_PREFIX =
  '[name!$=".CheckBox"][name!$=".EditText"][childCount=0][visibleToUser=true][height>0&&width>0][top>0&&left>0]';

// 通知提示
const NEGATION_PART_RULE_TEXT = `${COMMON_PREFIX}[(((text^="不"||text^="现在不要")&&text$="谢谢")||text="没兴趣"||text="否"||text="关闭"||text="跳过"||text="关闭按钮"||text="我没空"||text="不开启"||text="暂时不用"||text="暂时不要"||text="我已知晓"||text="不用了"||text="本次忽略"||text="考虑一下"||text="考慮一下"||text="先不了"||text="不允许"||text^="不了"||text^="不再"||(text^="稍后"&&text!="稍后再看")||text^="忽略"||text^="暂不"||text^="放弃"||text^="取消"||text$="再说"||text$="拒绝"||text$="再想想"||text$="知道了"||text$="稍后提醒我"||text$="稍後提醒我"||((text^="不"||text^="現在不要")&&text$="謝謝")||text="關閉"||text="關閉按鈕"||text="我已知曉"||text="不開啟"||text$="再說"||text$="拒絕"||text^="暫不"||text~="close"||text~="not now"||text~="(?is)Ignore.*"||text~="(?is)cancel.*"||text~="(?is).*later"||text~="(?is).*refuse"||text~="(?is).*i see")&&(text!*="取消全部")&&text.length<=7]`;
const NEGATION_PART_RULE_DESC = `${COMMON_PREFIX}[(((desc^="不"||desc^="现在不要")&&desc$="谢谢")||desc="没兴趣"||desc="否"||desc="关闭"||desc="跳过"||desc="关闭按钮"||desc="我没空"||desc="不开启"||desc="暂时不用"||desc="暂时不要"||desc="我已知晓"||desc="不用了"||desc="本次忽略"||desc="考虑一下"||desc="考慮一下"||desc="先不了"||desc="不允许"||desc^="不了"||desc^="不再"||(desc^="稍后"&&desc!="稍后再看")||desc^="忽略"||desc^="暂不"||desc^="放弃"||desc^="取消"||desc$="再说"||desc$="拒绝"||desc$="再想想"||desc$="知道了"||desc$="稍后提醒我"||desc$="稍後提醒我"||((desc^="不"||desc^="現在不要")&&desc$="謝謝")||desc="關閉"||desc="關閉按鈕"||desc="我已知曉"||desc="不開啟"||desc$="再說"||desc$="拒絕"||desc^="暫不"||desc~="close"||desc~="not now"||desc~="(?is)Ignore.*"||desc~="(?is)cancel.*"||desc~="(?is).*later"||desc~="(?is).*refuse"||desc~="(?is).*i see")&&(desc!*="取消全部")&&desc.length<=7]`;
const NEGATION_PART_RULE_BUTTON = `${COMMON_PREFIX}[(vid~="(?is).*dismiss.*"||vid~="(?is).*iv.*"||vid~="(?is).*guide.*"||vid~="(?is).*alert"||vid~="(?is).*notific.*"||vid~="(?is).*dialog.*"||vid~="(?is).*btn.*"||vid~="(?is).*ad.*"||vid~="(?is).*ab.*")&&(vid~="(?is).*close"||vid~="(?is).*delete"||vid~="(?is).*cancel"||vid~="(?is).*cancle"||vid~="(?is).*exit")||vid~="(?is)close.*"||vid~="(?is)ab.*"||vid~="(?is)closeIv.*"||vid~="(?is)ivDelete.*"||vid~="(?is)deleteIv.*"||vid~="(?is)iv_close_bt.*"||vid~="(?is).*_close"||text=""||desc=""||text="×"||desc="×"||text="✕"||desc="✕"||text="퀺"||desc="퀺"||text=""||desc=""]`;

// 局部广告
const PA_commonTextPatterns =
  '[text^="广告"||text$="广告"||text^="廣告"||text$="廣告"||text$="限时福利"||text^="热门活动"||text$="热门活动"||text$="限時福利"||text^="限时福利"||text^="限時福利"||((text~="(?is).*AD"||text~="ad")&&((!(text~="(?is).*load.*"))&&(!(text~="(?is).*read.*"))&&(!(text~="(?is).*add.*"))&&!(text~="(?is).*ead.*")))||(text*="申请"||text*="开启"||text*="啟用"||text="開啟"||text*="打开"||text*="获取"||text*="订阅"||text*="接收"||text~="(?is).*Turn on.*")&&(text*="个性化"||text*="推荐"||text*="感兴趣"||text*="個性化"||text*="推薦"||text*="感興趣"||text*="感興趣")]';
const PA_commonDescPatterns =
  '[desc^="广告"||desc$="广告"||desc^="廣告"||desc$="廣告"||desc$="限时福利"||desc^="热门活动"||desc$="热门活动"||desc$="限時福利"||desc^="限时福利"||desc^="限時福利"||((desc~="(?is).*AD"||desc~="ad")&&((!(desc~="(?is).*load.*"))&&(!(desc~="(?is).*read.*"))&&(!(desc~="(?is).*add.*"))&&!(desc~="(?is).*ead.*")))||(desc*="申请"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="打开"||desc*="获取"||desc*="订阅"||desc*="接收"||desc~="(?is).*Turn on.*")&&(desc*="个性化"||desc*="推荐"||desc*="感兴趣"||desc*="個性化"||desc*="推薦"||desc*="感興趣"||desc*="感興趣")]';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    desc: '点击跳过应用启动时的开屏广告',
    order: OPEN_AD_ORDER,
    matchRoot: true,
    actionMaximum: 2,
    matchTime: 9000,
    fastQuery: true,
    resetMatch: 'app',
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        excludeMatches: [
          '[text*="搜索"][text.length<6][visibleToUser=true][height>0&&width>0][top>0&&left>0]',
          '[id~="(?is).*search.*"] < * > [(id~="(?is).*clear.*")||(id~="(?is).*close.*")||(id~="(?is).*back.*")||(text~="(?is).*取消.*")][height>0&&width>0][top>0&&left>0]',
          '[name!$=".EditText"] < * > [(id~="(?is).*clear.*")||(id~="(?is).*close.*")||(id~="(?is).*back.*")||(text~="(?is).*取消.*")][height>0&&width>0][top>0&&left>0]',
        ], // 防止在应用的搜索页面误触
        matches: `${COMMON_PREFIX}[(text.length<=6&&(text*="跳过"||text*="跳過"||text~="(?is).*skip.*"))||id~="(?is).*tt_splash_skip_btn"||vid~="(?is).*skip.*"||(vid~="(?is).*count.*"&&vid~="(?is).*down.*"&&!(vid~="(?is).*load.*")&&!(vid~="(?is).*hour.*")&&!(vid~="(?is).*minute.*")&&!(vid~="(?is).*timing.*")&&!(vid~="(?is).*add.*")&&!(vid~="(?is).*ead.*"))||desc*="跳过"||desc~="(?is).*skip.*"][!(text~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]")][!(desc~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]")]`,
      },
      {
        key: 1,
        name: '字节SDK',
        excludeMatches: [
          '[text*="搜索"][text.length<6][visibleToUser=true][height>0&&width>0][top>0&&left>0]',
          '[id~="(?is).*search.*"] < * > [(id~="(?is).*clear.*")||(id~="(?is).*close.*")||(id~="(?is).*back.*")||(text~="(?is).*取消.*")][height>0&&width>0][top>0&&left>0]',
          '[name!$=".EditText"] < * > [(id~="(?is).*clear.*")||(id~="(?is).*close.*")||(id~="(?is).*back.*")||(text~="(?is).*取消.*")][height>0&&width>0][top>0&&left>0]',
        ], // 防止在应用的搜索页面误触
        action: 'clickCenter',
        anyMatches: [
          '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
          'FrameLayout[visibleToUser=true][height>0&&width>0] > FrameLayout[visibleToUser=true][height>0&&width>0][childCount>2] > @View[clickable=true][height>0&&width>0][visibleToUser=true] + TextView[clickable=true][height>0&&width>0][visibleToUser=true]',
        ],
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '更新提示',
    desc: '关闭应用更新提示弹窗',
    enable: false,
    order: UPDATE_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          `${COMMON_PREFIX}[((text*="内测"||text*="测试版"||text*="新版"||text*="更新"||text*="升级"||text*="体验"||text*="內測"||text*="測試版"||text*="升級"||text*="體驗"||text~="(?is).*Update.*"||text~="(?is).*Upgrade.*"||text~="(?is).*Experience.*")&&text!*="自动"&&text!*="自動"&&(text!*="成功"&&text!*="失败"&&text!*="失敗"&&(text!*="已"||text*="已知")&&text!*="检查更新"&&text!*="卸载")&&text.length>2)]`,
          `${COMMON_PREFIX}[((((text*="立即"||text*="马上"||text*="并"||text*="现在"||text*="立刻"||text*="极速"||text*="抢先")&&(text*="更新"||text*="下载"||text*="安装"||text*="升级"||text*="查看"||text*="体验"||text*="设置"))||text="更新"||text="下载"||text="安装"||text="升级"||text="确定"||text="好,升级"||text="设置")&&text.length<6)||((text~="(?is).*(更新.*?)(\\\\(|（)\\\\d+(\\\\.\\\\d+)?(K|M|G|KB|MB|GB)(\\\\)|）)")&&text.length<15)]`,
          `${NEGATION_PART_RULE_TEXT}`,
        ],
      },
      {
        key: 1,
        matches: [
          `${COMMON_PREFIX}[((desc*="内测"||desc*="测试版"||desc*="新版"||desc*="更新"||desc*="升级"||desc*="体验"||desc*="內測"||desc*="測試版"||desc*="升級"||desc*="體驗"||desc~="(?is).*Update.*"||desc~="(?is).*Upgrade.*"||desc~="(?is).*Experience.*")&&desc!*="自动"&&desc!*="自動"&&(desc!*="成功"&&desc!*="失败"&&desc!*="失敗"&&(desc!*="已"||desc*="已知")&&desc!*="检查更新"&&desc!*="卸载")&&desc.length>2)]`,
          `${COMMON_PREFIX}[((((desc*="立即"||desc*="马上"||desc*="并"||desc*="现在"||desc*="立刻"||desc*="极速"||desc*="抢先")&&(desc*="更新"||desc*="下载"||desc*="安装"||desc*="升级"||desc*="查看"||desc*="体验"||desc*="设置"))||desc="更新"||desc="下载"||desc="安装"||desc="升级"||desc="确定"||desc="好,升级"||desc="设置")&&desc.length<6)||((desc~="(?is).*(更新.*?)(\\\\(|（)\\\\d+(\\\\.\\\\d+)?(K|M|G|KB|MB|GB)(\\\\)|）)")&&desc.length<15)]`,
          `${NEGATION_PART_RULE_DESC}`,
        ],
      },
      {
        key: 2,
        matches: [
          `${COMMON_PREFIX}[((text*="内测"||text*="测试版"||text*="新版"||text*="更新"||text*="升级"||text*="体验"||text*="內測"||text*="測試版"||text*="升級"||text*="體驗"||text~="(?is).*Update.*"||text~="(?is).*Upgrade.*"||text~="(?is).*Experience.*")&&text!*="自动"&&text!*="自動"&&(text!*="成功"&&text!*="失败"&&text!*="失敗"&&(text!*="已"||text*="已知")&&text!*="检查更新"&&text!*="卸载")&&text.length>2)]`,
          `${COMMON_PREFIX}[((((text*="立即"||text*="马上"||text*="并"||text*="现在"||text*="立刻"||text*="极速"||text*="抢先")&&(text*="更新"||text*="下载"||text*="安装"||text*="升级"||text*="查看"||text*="体验"||text*="设置"))||text="更新"||text="下载"||text="安装"||text="升级"||text="确定"||text="好,升级"||text="设置")&&text.length<6)||((text~="(?is).*(更新.*?)(\\\\(|（)\\\\d+(\\\\.\\\\d+)?(K|M|G|KB|MB|GB)(\\\\)|）)")&&text.length<15)]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
      {
        key: 3,
        matches: [
          `${COMMON_PREFIX}[((desc*="内测"||desc*="测试版"||desc*="新版"||desc*="更新"||desc*="升级"||desc*="体验"||desc*="內測"||desc*="測試版"||desc*="升級"||desc*="體驗"||desc~="(?is).*Update.*"||desc~="(?is).*Upgrade.*"||desc~="(?is).*Experience.*")&&desc!*="自动"&&desc!*="自動"&&(desc!*="成功"&&desc!*="失败"&&desc!*="失敗"&&(desc!*="已"||desc*="已知")&&desc!*="检查更新"&&desc!*="卸载")&&desc.length>2)]`,
          `${COMMON_PREFIX}[((((desc*="立即"||desc*="马上"||desc*="并"||desc*="现在"||desc*="立刻"||desc*="极速"||desc*="抢先")&&(desc*="更新"||desc*="下载"||desc*="安装"||desc*="升级"||desc*="查看"||desc*="体验"||desc*="设置"))||desc="更新"||desc="下载"||desc="安装"||desc="升级"||desc="确定"||desc="好,升级"||desc="设置")&&desc.length<6)||((desc~="(?is).*(更新.*?)(\\\\(|（)\\\\d+(\\\\.\\\\d+)?(K|M|G|KB|MB|GB)(\\\\)|）)")&&desc.length<15)]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
    ],
    apps: [...appList.updateBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.updateWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 2,
    name: '青少年模式',
    desc: '关闭通用的青少年模式提示弹窗',
    enable: false,
    order: YOUNG_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          `${COMMON_PREFIX}[(text*="未成年"||text*="儿童"||text*="青少年"||text*="守护")&&text*="模式"&&text.length<15]`,
          `${COMMON_PREFIX}[(text*="开启"||text*="啟用"||text="開啟"||text*="进入"||text*="進入"||text*="设置"||text*="设计"||text*="查看")&&(text*="模式"||text*="去")&&text.length<15]`,
          `${NEGATION_PART_RULE_TEXT}`,
        ],
      },
      {
        key: 1,
        matches: [
          `${COMMON_PREFIX}[(desc*="未成年"||desc*="儿童"||desc*="青少年"||desc*="守护")&&desc*="模式"&&desc.length<15]`,
          `${COMMON_PREFIX}[(desc*="开启"||desc*="啟用"||desc="開啟"||desc*="进入"||desc*="進入"||desc*="设置"||desc*="设计"||desc*="查看")&&(desc*="模式"||desc*="去")&&desc.length<15]`,
          `${NEGATION_PART_RULE_DESC}`,
        ],
      },
      {
        key: 2,
        matches: [
          `${COMMON_PREFIX}[(text*="未成年"||text*="儿童"||text*="青少年"||text*="守护")&&text*="模式"&&text.length<15]`,
          `${COMMON_PREFIX}[(text*="开启"||text*="啟用"||text="開啟"||text*="进入"||text*="進入"||text*="设置"||text*="设计"||text*="查看")&&(text*="模式"||text*="去")&&text.length<15]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
      {
        key: 3,
        matches: [
          `${COMMON_PREFIX}[(desc*="未成年"||desc*="儿童"||desc*="青少年"||desc*="守护")&&desc*="模式"&&desc.length<15]`,
          `${COMMON_PREFIX}[(desc*="开启"||desc*="啟用"||desc="開啟"||desc*="进入"||desc*="進入"||desc*="设置"||desc*="设计"||desc*="查看")&&(desc*="模式"||desc*="去")&&desc.length<15]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 3,
    name: '全屏广告',
    desc: '关闭通用的全屏广告弹窗',
    enable: false,
    order: FULLSCREEN_AD_ORDER,
    matchTime: 10000,
    resetMatch: 'activity',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        name: '快手SDK-类型1',
        matches: `[text="广告"] <<n ViewGroup >n ViewGroup[childCount=1][clickable=true] > ImageView${COMMON_PREFIX}`,
      },
      {
        key: 1,
        name: '快手SDK-类型2',
        matches: `[text="广告"] <<n ViewGroup >n ViewGroup[childCount=4][clickable=true] > [text="跳过"]${COMMON_PREFIX}`,
      },
      {
        key: 2,
        name: '快手SDK-类型3',
        matches: `[text="广告"]  <<n ViewGroup +2 ViewGroup[childCount=3][checked=false] >n ImageView${COMMON_PREFIX}`,
        snapshotUrls: ['https://i.gkd.li/i/13625303'],
      },
      {
        key: 3,
        name: '快手SDK-类型4',
        matches:
          'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] <<(1, 3) ViewGroup +(1, 2, 4) ViewGroup[childCount=2] >(1,3) [text="广告"]',
        snapshotUrls: [
          'https://i.gkd.li/import/13259198',
          'https://i.gkd.li/i/16837806',
          'https://i.gkd.li/i/13259196',
          'https://i.gkd.li/i/15362927',
        ],
      },
      {
        key: 4,
        name: '字节SDK-类型1',
        matches: `[id~="(?is).*tt_reward_full_count_down_after_close"]${COMMON_PREFIX}`,
      },
      {
        key: 5,
        name: '字节SDK-类型2',
        matches: `[vid~="(?is).*ad_flag_source_layout"] + [vid~="(?is).*iv_close"]${COMMON_PREFIX}`,
      },
      {
        key: 6,
        name: '美数SDK-类型1',
        matches: `[vid~="(?is).*ms_activity_sdk_interstitial_cacel"]${COMMON_PREFIX}`,
      },
      {
        key: 7,
        name: '腾讯广告-类型1',
        matches:
          'ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < @FrameLayout[index=1||index=2][text=null][desc=null][id=null] <<n FrameLayout > [name$="FrameLayout"||name$="ImageView"][index=parent.childCount.minus(1)] -(1, 2) FrameLayout[childCount>=2] >(2, 3) [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: [
          'https://i.gkd.li/import/12642482',
          'https://i.gkd.li/import/12646519',
          'https://i.gkd.li/import/12868369',
          'https://i.gkd.li/import/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
          'https://i.gkd.li/import/13695488',
          'https://i.gkd.li/import/12643276',
          'https://i.gkd.li/import/12868503',
          'https://i.gkd.li/import/12646420',
          'https://i.gkd.li/import/13259194',
          'https://i.gkd.li/import/12793180',
          'https://i.gkd.li/import/12646347',
          'https://i.gkd.li/import/12793157',
          'https://i.gkd.li/import/12793177',
          'https://i.gkd.li/import/12868157', // com.xyhui.start.LoadingActivity
          'https://i.gkd.li/import/13348807', // com.bbk.launcher2.Launcher
          'https://i.gkd.li/i/14766902',
          'https://i.gkd.li/i/16921838',
          'https://i.gkd.li/i/13264383',
          'https://i.gkd.li/i/13852448',
          'https://i.gkd.li/i/14318236',
          'https://i.gkd.li/i/15400143',
          'https://i.gkd.li/i/13348663',
          'https://i.gkd.li/i/13343675',
          'https://i.gkd.li/i/16670372',
          'https://i.gkd.li/i/17689929',
          'https://i.gkd.li/i/14345580',
          'https://i.gkd.li/i/13246786',
          'https://i.gkd.li/i/14783306',
          'https://i.gkd.li/i/15173845',
          'https://i.gkd.li/import/13784406',
        ],
      },
    ],
    apps: [...appList.fullAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.fullAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 4,
    name: '局部广告',
    desc: '关闭通用的局部广告弹窗',
    enable: false,
    order: PARTIAL_AD_ORDER,
    matchTime: 10000,
    resetMatch: 'activity',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches: `[(((vid~="(?is)ad.*"||vid~="(?is).*ad")&&vid*="_")||vid~="adIv"||vid~="(?is).*_ad_.*")&&(!(vid~="(?is).*load.*"))&&(!(vid~="(?is).*read.*"))&&(!(vid~="(?is).*add.*"))&&!(vid~="(?is).*ead.*")][height>0&&width>0] <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 12,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    apps: [...appList.partialAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.partialAdWhiteListAppIDs].map((id) => ({
          id,
          enable: true,
        })),
      ),
  },
  {
    key: 5,
    name: '评价提示',
    desc: '关闭通用的评价提示弹窗',
    enable: false,
    order: REVIEW_PROMPT_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          `${COMMON_PREFIX}[((text*="给"||text*="赏"||text*="来个"||text*="一下"||text*="app"||text*="喜欢"||text*="诚邀"||text*="前进的动力")&&(text*="好评"||text*="评分"||text*="评价"||text*="鼓励"||text*="Rate"||text*="吗？"||text*="调研"))&&(text!*="成功"&&text!*="失败"&&(text!*="已"||text*="已知"))||name$=".RatingBar"]`,
          `${COMMON_PREFIX}[(((text*="吐槽"||text*="好评"||text*="鼓励一下"||text*="评价"||text*="评分"||text*="提意见")||(text="确定"||text="提交"||text="满意"||text="马上参加"||text~="RATE NOW"||text~="(?is).*Love it.*"))&&text.length<9)||vid~="(?is).*star.*"]`,
          `${NEGATION_PART_RULE_TEXT}`,
        ],
      },
      {
        key: 1,
        matches: [
          `${COMMON_PREFIX}[((desc*="给"||desc*="赏"||desc*="来个"||desc*="一下"||desc*="app"||desc*="喜欢"||desc*="诚邀"||desc*="前进的动力")&&(desc*="好评"||desc*="评分"||desc*="评价"||desc*="鼓励"||desc*="Rate"||desc*="吗？"||desc*="调研"))&&(desc!*="成功"&&desc!*="失败"&&(desc!*="已"||desc*="已知"))||name$=".RatingBar"]`,
          `${COMMON_PREFIX}[(((desc*="吐槽"||desc*="好评"||desc*="鼓励一下"||desc*="评价"||desc*="评分"||desc*="提意见")||(desc="确定"||desc="提交"||desc="满意"||desc="马上参加"||desc~="RATE NOW"||desc~="(?is).*Love it.*"))&&desc.length<9)||vid~="(?is).*star.*"]`,
          `${NEGATION_PART_RULE_DESC}`,
        ],
      },
      {
        key: 2,
        matches: [
          `${COMMON_PREFIX}[((text*="给"||text*="赏"||text*="来个"||text*="一下"||text*="app"||text*="喜欢"||text*="诚邀"||text*="前进的动力")&&(text*="好评"||text*="评分"||text*="评价"||text*="鼓励"||text*="Rate"||text*="吗？"||text*="调研"))&&(text!*="成功"&&text!*="失败"&&(text!*="已"||text*="已知"))||name$=".RatingBar"]`,
          `${COMMON_PREFIX}[(((text*="吐槽"||text*="好评"||text*="鼓励一下"||text*="评价"||text*="评分"||text*="提意见")||(text="确定"||text="提交"||text="满意"||text="马上参加"||text~="RATE NOW"||text~="(?is).*Love it.*"))&&text.length<9)||vid~="(?is).*star.*"]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
      {
        key: 3,
        matches: [
          `${COMMON_PREFIX}[((desc*="给"||desc*="赏"||desc*="来个"||desc*="一下"||desc*="app"||desc*="喜欢"||desc*="诚邀"||desc*="前进的动力")&&(desc*="好评"||desc*="评分"||desc*="评价"||desc*="鼓励"||desc*="Rate"||desc*="吗？"||desc*="调研"))&&(desc!*="成功"&&desc!*="失败"&&(desc!*="已"||desc*="已知"))||name$=".RatingBar"]`,
          `${COMMON_PREFIX}[(((desc*="吐槽"||desc*="好评"||desc*="鼓励一下"||desc*="评价"||desc*="评分"||desc*="提意见")||(desc="确定"||desc="提交"||desc="满意"||desc="马上参加"||desc~="RATE NOW"||desc~="(?is).*Love it.*"))&&desc.length<9)||vid~="(?is).*star.*"]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
    ],
    apps: [...appList.reviewBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.reviewWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 6,
    name: '通知提示',
    desc: '! 该规则会自动拒绝 APP 一些申请通知提示，如果有影响请关闭',
    enable: false,
    order: NOTIFICATION_PROMPT_ORDER,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          `${COMMON_PREFIX}[(text*="将使用"||text*="可能错过"||text*="是否允许"||text*="申请"||text*="开启"||text*="啟用"||text="開啟"||text*="打开"||text*="获取"||text*="获得"||text*="订阅"||text*="接收"||text~="(?is).*Turn on.*"||text~="(?is).*Enable.*")&&(text*="通知"||text*="推送"||text*="消息"||text~="(?is).*notification.*")&&(text!*="定位"&&text!*="位置"&&!(text~="(?is).*location.*")&&(text!*="权限"||text*="通知权限"||text*="通知栏权限")&&text!*="成功"&&text!*="失败"&&(text!*="已"||text*="已知"))]`,
          `${COMMON_PREFIX}[(((text*="打开"||text*="開啟"||text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="允许")&&(text*="通知"||text*="推送"))||text="是"||text="好"||text="启用"||text="确认"||text="确定"||text="同意"||text="开启"||text*="啟用"||text="開啟"||text="设置"||text="允许"||text="好的"||((text*="去"||text*="立即"||text*="立刻"||text*="马上"||text*="前往"||text*="现在")&&(text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="授权"))||text="尝试一下"||text="开启设置"||text="立即打开"||text~="Authorize"||text~="Let’s go")&&text.length<10]`,
          `${NEGATION_PART_RULE_TEXT}`,
        ],
      },
      {
        key: 1,
        matches: [
          `${COMMON_PREFIX}[(desc*="将使用"||desc*="可能错过"||desc*="是否允许"||desc*="申请"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="打开"||desc*="获取"||desc*="获得"||desc*="订阅"||desc*="接收"||desc~="(?is).*Turn on.*"||desc~="(?is).*Enable.*")&&(desc*="通知"||desc*="推送"||desc*="消息"||desc~="(?is).*notification.*")&&(desc!*="定位"&&desc!*="位置"&&!(desc~="(?is).*location.*")&&(desc!*="权限"||desc*="通知权限"||desc*="通知栏权限")&&desc!*="成功"&&desc!*="失败"&&(desc!*="已"||desc*="已知"))]`,
          `${COMMON_PREFIX}[(((desc*="打开"||desc*="開啟"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="允许")&&(desc*="通知"||desc*="推送"))||desc="是"||desc="好"||desc="启用"||desc="确认"||desc="确定"||desc="同意"||desc="开启"||desc="设置"||desc="允许"||desc="好的"||((desc*="去"||desc*="立即"||desc*="立刻"||desc*="马上"||desc*="前往"||desc*="现在")&&(desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="授权"))||desc="尝试一下"||desc="开启设置"||desc="立即打开"||desc~="Authorize"||desc~="Let’s go")&&desc.length<10]`,
          `${NEGATION_PART_RULE_DESC}`,
        ],
      },
      {
        key: 2,
        matches: [
          `${COMMON_PREFIX}[(text*="将使用"||text*="可能错过"||text*="是否允许"||text*="申请"||text*="开启"||text*="啟用"||text="開啟"||text*="打开"||text*="获取"||text*="获得"||text*="订阅"||text*="接收"||text~="(?is).*Turn on.*"||text~="(?is).*Enable.*")&&(text*="通知"||text*="推送"||text*="消息"||text~="(?is).*notification.*")&&(text!*="定位"&&text!*="位置"&&!(text~="(?is).*location.*")&&(text!*="权限"||text*="通知权限"||text*="通知栏权限")&&text!*="成功"&&text!*="失败"&&(text!*="已"||text*="已知"))]`,
          `${COMMON_PREFIX}[(((text*="打开"||text*="開啟"||text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="允许")&&(text*="通知"||text*="推送"))||text="是"||text="好"||text="启用"||text="确认"||text="确定"||text="同意"||text="开启"||text="设置"||text="允许"||text="好的"||((text*="去"||text*="立即"||text*="立刻"||text*="马上"||text*="前往"||text*="现在")&&(text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="授权"))||text="尝试一下"||text="开启设置"||text="立即打开"||text~="Authorize"||text~="Let’s go")&&text.length<10]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
      {
        key: 3,
        matches: [
          `${COMMON_PREFIX}[(desc*="将使用"||desc*="可能错过"||desc*="是否允许"||desc*="申请"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="打开"||desc*="获取"||desc*="获得"||desc*="订阅"||desc*="接收"||desc~="(?is).*Turn on.*"||desc~="(?is).*Enable.*")&&(desc*="通知"||desc*="推送"||desc*="消息"||desc~="(?is).*notification.*")&&(desc!*="定位"&&desc!*="位置"&&!(desc~="(?is).*location.*")&&(desc!*="权限"||desc*="通知权限"||desc*="通知栏权限")&&desc!*="成功"&&desc!*="失败"&&(desc!*="已"||desc*="已知"))]`,
          `${COMMON_PREFIX}[(((desc*="打开"||desc*="開啟"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="允许")&&(desc*="通知"||desc*="推送"))||desc="是"||desc="好"||desc="启用"||desc="确认"||desc="确定"||desc="同意"||desc="开启"||desc="设置"||desc="允许"||desc="好的"||((desc*="去"||desc*="立即"||desc*="立刻"||desc*="马上"||desc*="前往"||desc*="现在")&&(desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="授权"))||desc="尝试一下"||desc="开启设置"||desc="立即打开"||desc~="Authorize"||desc~="Let’s go")&&desc.length<10]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
    ],
    apps: [...appList.notificationBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.notificationWhiteListAppIDs].map((id) => ({
          id,
          enable: true,
        })),
      ),
  },
]);
