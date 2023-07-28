import { App } from 'vue';

import auth from './auth';
import cache from './cache';
import modal from './modal';

export default function installPlugins(app: App) {
  // 认证对象
  app.config.globalProperties.$auth = auth;
  // 缓存对象
  app.config.globalProperties.$cache = cache;
  // 模态框对象
  app.config.globalProperties.$modal = modal;
}
