import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/system/dict/data/type/sys_normal_disable',
    method: 'get',
    response: () => ({
      code: 0,
      msg: '操作成功',
      data: [
        {
          dictCode: 6,
          dictSort: 1,
          dictLabel: '正常',
          dictValue: '1',
          dictType: 'sys_normal_disable',
          cssClass: '',
          listClass: 'primary',
          isDefault: 'Y',
          status: '1',
          remark: '正常状态',
          createTime: '2023-07-05 20:49:13',
        },
        {
          dictCode: 7,
          dictSort: 2,
          dictLabel: '停用',
          dictValue: '0',
          dictType: 'sys_normal_disable',
          cssClass: '',
          listClass: 'danger',
          isDefault: 'N',
          status: '1',
          remark: '停用状态',
          createTime: '2023-07-05 20:49:13',
        },
      ],
    }),
  },
] as MockMethod[];
