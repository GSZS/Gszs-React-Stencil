/* @description: Reducer
 * @Author: Gszs 
 * @Date: 2019-04-22 09:46:20 
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 23:23:47
 */

import { combineReducers } from 'redux';
import { LoginReducer } from './login';
import { isMobileReducer, logDataReducer } from './settingReducer';
import { searchReducer } from './searchReducer';
import { getTableReducer, delTableReducer, getTableByIdReducer, getAllCityIdReducer } from './controlTableDataReducer';
import { UserReducer, RoleReducer, MenuReducer, AuthReducer } from './authReducer';
import { addProjectReducer } from './project/ProjectReducer';

const appReducer = combineReducers({
	LoginReducer,
	isMobileReducer,
	getTableReducer,
	logDataReducer,
	delTableReducer,
	getTableByIdReducer,
	getAllCityIdReducer,
	UserReducer,
	RoleReducer,
	MenuReducer,
	AuthReducer,
	searchReducer,
	addProjectReducer
});

// 处理退出清除所有state
const rootReducer = (state, action) => {
	if(action.type === '_isLogout'){
		state = undefined	
	}
	return appReducer(state, action)
}

export default rootReducer;

