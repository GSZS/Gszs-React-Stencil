/* @description: Reducer
 * @Author: Gszs 
 * @Date: 2019-04-22 09:46:20 
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 17:00:18
 */

import { combineReducers } from 'redux';
import { LoginReducer } from './login';
import { isMobileReducer, logDataReducer } from './settingReducer';
import { searchReducer } from './searchReducer';
import { UserReducer, RoleReducer, MenuReducer, AuthReducer } from './authReducer';
import { findAllOgReducer } from './organization/organizationReducer';
import { getAllPjTypesReducer } from './project/ProjectReducer'

const appReducer = combineReducers({
	LoginReducer,
	isMobileReducer,
	logDataReducer,
	UserReducer,
	RoleReducer,
	MenuReducer,
	AuthReducer,
	searchReducer,
	findAllOgReducer,
	getAllPjTypesReducer
});

// 处理退出清除所有state
const rootReducer = (state, action) => {
	if(action.type === '_isLogout'){
		state = undefined	
	}
	return appReducer(state, action)
}

export default rootReducer;

