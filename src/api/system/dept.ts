import { R } from '@/api/model/resultModel';
import { SysDeptForm, SysDeptQuery, SysDeptVo } from '@/api/system/model/deptModel';
import { request } from '@/utils/request';

// 查询部门列表
export function listDept(query?: SysDeptQuery) {
  return request.get<Array<SysDeptVo>>({
    url: '/system/organizations',
    params: query,
  });
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(id: number) {
  return request.get<R<Array<SysDeptVo>>>({
    url: `/system/organizations?filter=id ne '${id}'`,
  });
}

// 查询部门详细
export function getDept(id: number) {
  return request.get<R<SysDeptVo>>({
    url: `/system/organizations/${id}`,
  });
}

// 新增部门
export function addDept(data: SysDeptForm) {
  return request.post<R<void>>({
    url: '/system/organizations',
    data,
  });
}

// 修改部门
export function updateDept(data: SysDeptForm) {
  return request.put<R<void>>({
    url: '/system/organizations',
    data,
  });
}

// 删除部门
export function delDept(id: number) {
  return request.delete<R<void>>({
    url: `/system/organizations/${id}`,
  });
}
