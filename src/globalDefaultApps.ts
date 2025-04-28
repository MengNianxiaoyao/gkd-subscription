import { batchImportApps } from '@gkd-kit/tools';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 全局规则黑名单
export const blackListAppIDs: string[] = [
// 在一些常见的应用中禁用
'com.tencent.mm', // 微信
'li.songe.gkd', // GKD
'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.github.android', // GitHub
  'org.telegram.messenger', // Telegram
  'com.perol.pixez', // PixEz
  'com.perol.play.pixez', // PixEz Google Play版
  'com.valvesoftware.android.steam.community', // Steam
  'io.legado.app.release', // 阅读
  'com.xiaoyv.bangumi', // Bangumi for Android
  'com.assistant.ongoingclear', // 固定通知隐藏
  'com.duokan.phone.remotecontroller', // 万能遥控

// https://github.com/gkd-kit/gkd/issues/451
'mark.via', // via浏览器
'mark.via.gp', // via浏览器Google Play版
'com.mmbox.xbrowser', // X浏览器
'com.mmbox.xbrowser.pro', // X浏览器Google Play版
'com.mycompany.app.soulbrowser', // soul浏览器
];

// 如果某应用的规则中已有全局规则中的某一类的规则, 则在此应用禁用对应全局规则
function filterAppsByGroup(apps: any[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length > 0,
    )
    .map((a) => a.id);
}

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '开屏广告'),
]);

// 全屏广告黑名单
export const fullAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '全屏广告'),
]);

// 局部广告黑名单
export const partialAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '局部广告'),
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.android.packageinstaller', // 排除软件包安装程序
  'com.google.android.packageinstaller', // Google Play
  'com.miui.packageinstaller', // 小米系
  'com.samsung.android.packageinstaller', // 三星系
  'com.oplus.appdetail', // 一加系
  ...filterAppsByGroup(apps, '更新提示'),
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.luna.music', // 汽水音乐 全局规则在 https://i.gkd.li/i/15124801 误触
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 评价提示黑名单
export const reviewBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '评价提示'),
]);

// 通知提示黑名单
export const notificationBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '通知提示'),
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.bbk.appstore', // vivo应用商店
  'com.miui.player', // 小米音乐
  'com.tencent.southpole.appstore', // 黑鲨应用市场
]);

// 全屏广告白名单
export const fullAdWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 局部广告白名单
export const partialAdWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 评价提示白名单
export const reviewWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 通知提示白名单
export const notificationWhiteListAppIDs = new Set([...whiteListAppIDs]);
