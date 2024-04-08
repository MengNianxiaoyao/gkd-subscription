import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 1,
  version: 0,
  name: '梦念逍遥のGKD订阅',
  author: '梦念逍遥',
  supportUri: 'https://github.com/MengNianxiaoyao/gkd-subscription',
  updateUrl: 'https://registry.npmmirror.com/gkd-subscription/latest/files',
  checkUpdateUrl:
    'https://registry.npmmirror.com/gkd-subscription/latest/files/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
