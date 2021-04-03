import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  //如果存在routes，则无法进入约定式路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  //允许跨域
  proxy: {
    '/api': {
      'target': 'http://localhost:8091/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },


});
