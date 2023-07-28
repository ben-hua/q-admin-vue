/* eslint-disable simple-import-sort/imports */
import TDesign from 'tdesign-vue-next';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { store } from './store';

import 'tdesign-vue-next/es/style/index.css';
import '@/style/index.less';
import './permission';

// add ruoyi

import { getConfigKey, updateConfigByKey } from '@/api/system/config';
import { useDict } from '@/utils/dict';
import { handleTree } from '@/utils/ruoyi';

// 注册指令
import plugins from './plugins'; // plugins

const app = createApp(App);

// 全局方法挂载 ruoyi
app.config.globalProperties.useDict = useDict;
app.config.globalProperties.getConfigKey = getConfigKey;
app.config.globalProperties.updateConfigByKey = updateConfigByKey;
app.config.globalProperties.handleTree = handleTree;

// ruoyi end

app.use(TDesign);
app.use(store);
app.use(router);

app.use(plugins); // ruoyi

app.mount('#app');
