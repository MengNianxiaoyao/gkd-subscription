export const tryRun = <T>(fc: () => T, fallbackFc: (e: unknown) => T) => {
  try {
    return fc();
  } catch (e) {
    return fallbackFc(e);
  }
};

export const OPEN_AD_ORDER = -10; // 开屏广告

export const UPDATE_ORDER = -9; // 更新提示

export const YOUNG_ORDER = -8; // 青少年模式

export const REVIEW_PROMPT_ORDER= -7; // 评价提示

export const NOTIFICATION_PROMPT_ORDER = -6; // 通知提示

export const LOCATION_PROMPT_ORDER = -5; // 定位提示

export const PERMISSION_PROMPT_ORDER = -4; // 权限提示

export const PARTIAL_AD_ORDER  = -3; // 局部广告

export const FULLSCREEN_AD_ORDER  = -2; // 全屏广告

export const SEGMENTED_AD_ORDER = -1; // 分段广告