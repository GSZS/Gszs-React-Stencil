/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 21:26:41
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-24 16:18:42
 * @ 文件解释: 请求数据的接口函数
 */

import axios from 'axios';
import {
  get,
  post
} from './tools';
import * as config from './config';
import qs from 'qs';

// npm.json
export const npmDependencies = () =>
  axios
  .get('./npm.json')
  .then(res => res.data)
  .catch(err => console.log(err));

/** 微博 */
export const weibo = () =>
  axios
  .get('./weibo.json')
  .then(res => res.data)
  .catch(err => console.log(err));

// 请求头带上token
const getToken = () =>
  (axios.defaults.headers.common[
    'authorization'
  ] = window.localStorage.getItem('token'));
axios.defaults.withCredentials = true;


/**
 * @description 获取权限
 * @method {GET}
 * @param {username}
 */
export const getLoginAuth = (username) => {
  return get({
    url: config.GETLOGINAUTH + `?username=${username}`
  })
}


/** 
 * @description 登录 
 * @method {POST}
 */
export const handleLogin = (username, password) => {
  // 清除token,方便开发环境
  if (window.localStorage.getItem('token')) {
    window.localStorage.removeItem('token');
  }
  return post({
    url: config.LOGIN_URL,
    data: qs.stringify({
      username: username,
      password: password,
    })
  });
};

/**
 * @description 退出
 */
export const LOGOUT = () => {
  getToken();
  return get({
    url: config.LOGOUT_URL,
  });
};

/**
 * @description 查询本用户权限/最新视频/新闻资讯综合接口
 */
export const GETADMININDEX = () => {
  getToken();
  return get({
    url: config._findAdminIndexInfo,
  });
};


/**
 * @description 日志管理
 * @method {GET}
 * @param {page}  页码
 * @param {limit} 每页要显示的条数
 */
export const LOGMANAGER = (page, limit = undefined) => {
  getToken();
  if (limit !== undefined) {
    return get({
      url: config._getAllLogManager + `?page=${page}&limit=${limit}`,
    });
  } else {
    return get({
      url: config._getAllLogManager + `?page=${page}`,
    });
  }
};

/**
 * @description 新增管理员和运维用户(后台)
 * @param {username} 登录的用户名
 * @param {password} 密码
 * @param {mobile}	 手机号码
 * @param {email}		 邮箱
 * @param {name}		 真实姓名
 */
export const ADDOPERATEUSER = formData => {
  getToken();
  return post({
    url: config._addOperateUser,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 查询前/后台用户信息接口
 * @param {key}
 * @param 0:后台
 * @param 1:前台
 */
export const FINDFRONTUSER = (key, page) => {
  getToken();
  return get({
    url: config._findAllUser + `?operatorType=${key}&page=${page}`,
  });
};

/**
 * @description 删除用户
 */
export const DELETEUSER = key => {
  getToken();
  return get({
    url: config._deleteUser + `?key=${key}`,
  });
};

/**
 * @description 重置用户密码
 * @method {GET}
 */
export const RESETUSERPWD = key => {
  getToken();
  return get({
    url: config._resetUser + `?key=${key}`,
  });
};

/**
 * @description 根据ID修改用户角色接口
 * @method {POST}
 * @param {key}    用户id - 必传
 * @param {roleId} 角色id - 必传   
 */
export const CHANGEROLEBYID = formData => {
  getToken();
  return post({
    url: config._changeRole,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 修改用户接口
 * @method {POST}
 * @param {key}
 * @param {mobile}
 * @param {email}
 * @param {name}
 */
export const UPDATEUSER = formData => {
  getToken();
  return post({
    url: config._updateUser,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 冻结用户
 *	@method {GET}
 */
export const LOCKUSER = key => {
  getToken();
  return get({
    url: config._lockUser + `?key=${key}`,
  });
};

/**
 * @description 解除冻结用户
 * @method {GET}
 */
export const UNLOCKUSER = key => {
  getToken();
  return get({
    url: config._unlockUser + `?key=${key}`,
  });
};

/**
 * @description 查询所有权限的接口
 * @method {GET}
 */
export const FINDALLAUTH = (operate = undefined) => {
  getToken();
  if (operate === undefined) {
    return get({
      url: config._findAllAuth,
    });
  } else {
    return get({
      url: config._findAllAuth + `?operatorType=${operate}`,
    });
  }
};

/**
 * @description 添加新角色
 * @method {POST}
 * @param {roleName} 角色名
 * @param {roleDesc} 角色描述
 */
export const ADDCREATEROLE = formData => {
  getToken();
  return post({
    url: config._addCreateRole,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 角色添加权限接口
 * @param {roleId} roleId - 必传
 * @param {itemId} itemId - 必传
 */
export const ROLEITEMADD = formData => {
  getToken();
  return post({
    url: config._roleItemAdd,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 根据用户Id查询用户对应的角色接口
 * @param {key} 必传
 */
export const QUERYROLEBYUSERID = key => {
  getToken();
  return get({
    url: config._queryRoleByUserId + `?userId=${key}`,
  });
};

/**
 * @description 根据角色查询对应的权限
 * @param {roleId}
 * @param {operatorType}
 */
export const QUERYITEM = (roleId, operatorType) => {
  getToken();
  return get({
    url: config._findAuth + `?roleId=${roleId}&operatorType=${operatorType}`,
  });
};

/**
 * @description 新增
 * @method {POST}
 * @param {key} 必传
 * @param {roleName} 必传
 * @param {roleDesc} 必传
 * @param {operatorType} 必传
 * @param {item} 必传
 */
export const CREATEROLE = formData => {
  getToken();
  return post({
    url: config._addCreateRole,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 修改角色权限接口
 * @param {_updateAuth} key 
 */
export const UPDATEAUTH = (formData, operatorType) => {
  getToken();
  formData.operatorType = operatorType;
  return post({
    url: config._updateAuth,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 删除角色接口
 * @method {GET}
 * @param {key}
 */
export const DELETEROLE = key => {
  getToken();
  return get({
    url: config._deleteRole + `?key=${key}`,
  });
};

/**
 * @description 查询所有角色接口
 * @method {GET}
 * @param {page}
 * @param {limit}
 * @param {key}
 */
export const FINDALLROLE = (page, operatorType = undefined) => {
  getToken();
  if (operatorType === undefined && page instanceof Array) {
    return get({
      url: config._findAllRole + `?page=${page[0]}&operatorType=${page[1]}`,
    });
  } else if (operatorType === undefined) {
    return get({
      url: config._findAllRole + `?page=${page}`,
    });
  } else {
    return get({
      url: config._findAllRole + `?page=${page}&operatorType=${operatorType}`,
    });
  }
};

/**
 * @description 当新增权限没有权限展示时,调用这个接口
 * @param {roleId}
 * @param {operatorType}
 */
export const QUERYHASNOTITEM = (roleId, operatorType) => {
  getToken();
  return get({
    url: config._queryHasNotItem +
      `?roleId=${roleId}&operatorType=${operatorType}`,
  });
};

/**
 * @description 查询所有项目类型接口
 * @method {GET}
 */
export const ALLPROJECTTYPE = () => {
  getToken();
  return get({
    url: config._allProjectType
  })
}

/**
 * @description 新增项目接口
 * @method {POST}
 */
export const ADDPROJECT = formData => {
  getToken();
  return post({
    url: config._addProject,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

//////////////////////////
// 重新设计整个项目-axios ////////
/////////////////////////

/**
 * @description 动态获取下拉框数据
 * @param {String} axiosPath 请求地址
 */
export const GETSELECTDATA = axiosPath => {
  getToken();
  return get({
    url: axiosPath
  })
}

/**
 * @description 新增表单
 * @param {String} axiosPath
 */
export const ADDFORM = (axiosPath, formData) => {
  getToken();
  return post({
    url: axiosPath,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 新增组织
export const ADDOG = (axiosPath, formData) => {
  getToken();
  return post({
    url: axiosPath,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}

