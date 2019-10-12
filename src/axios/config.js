/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 21:26:41
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-12 11:00:51
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-18 14:36:52
 */

const baseip = 'http://192.168.101.122:5001'; // http是5001，https是5000

//////////
///RBAC///
//////////

 // 删除权限
export const _deleteAuth = baseip + '/web/admin/item/delItem';

// 根据角色查询权限
export const _findAuth = baseip + '/web/admin/item/queryItem';

// 冻结用户
export const _lockUser = baseip + '/web/usermanager/lock';

// 解除冻结用户
export const _unlockUser = baseip + '/web/usermanager/unlock';

// 查询所有权限的接口
export const _findAllAuth = baseip + '/web/admin/item/queryItemAll'

// 添加新角色
export const _addCreateRole = baseip + '/web/role/createRole';

//修改角色权限
export const _updateAuth = baseip + '/web/role/updateRole';

// 查询所有角色接口
export const _findAllRole = baseip + '/web/role/query';

// 根据用户Id查询对应的权限
export const _queryRoleByUserId = baseip + '/web/role/queryRoleByUserId'

// 删除角色接口
export const _deleteRole = baseip + '/web/role/delRole';

// 新增管理员和运维用户
export const _addOperateUser = baseip + '/web/usermanager/add'

// 查询所有用户(查询前台或者后台,用0,1区分)
export const _findAllUser = baseip + '/web/usermanager/queryAll';

// 删除用户(共用)
export const _deleteUser = baseip + '/web/usermanager/del';

// 修改用户接口
export const _updateUser = baseip + '/web/usermanager/update';

// 重置用户密码(通用)
export const _resetUser = baseip + '/web/usermanager/resetPwd';

// 根据ID修改用户角色接口
export const _changeRole = baseip + '/web/usermanager/changerole';

// 登录成功后请求查询首页信息
export const _findAdminIndexInfo = baseip + '/web/usermanager/getAdminIndex';

// 日志管理
export const _getAllLogManager = baseip + '/web/logmanager/query';

// 当新增权限没有权限时展示时,调用这个接口
export const _queryHasNotItem = baseip + '/web/admin/item/queryHasNotItem'

// 角色添加权限接口
export const _roleItemAdd = baseip + '/web/roleItem/add'

/////////////
//常规接口类//
////////////

 // 登录接口
 export const LOGIN_URL = baseip + '/v1/signin';

 // 未登录获取用户信息
export const GETLOGINAUTH = baseip + '/queryUserInfo'

 // 退出接口
export const LOGOUT_URL = baseip + '/v1/signout';

// 注册
export const REGISTER_URL = baseip + '/v1/register';



/////////////
//项目接口类//
////////////

// 查询所有项目类型接口
export const _allProjectType = baseip + '';

// 新增项目接口
export const _addProject = baseip + '/project/createProject';


/////////////
//组织接口类//
////////////

// 新增组织
export const _addOrganization = baseip + '/v2/add_og';

// 查询组织
export const _findAllOrganization = baseip + '/app/group';

/////////////
///用户信息///
/////////////

// 修改密码
export const _updatePwd = baseip + '/v1/update_pwd';

// 修改资料
export const _updateUserInfo = baseip + '/v1/update_userinfo';