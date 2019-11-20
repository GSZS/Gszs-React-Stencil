/* @description: Reducer
 * @Author: Gszs 
 * @Date: 2019-04-22 09:46:20 
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-20 11:23:59
 */

import { combineReducers } from 'redux';
import { LoginReducer } from './login';
import { isMobileReducer, logDataReducer } from './settingReducer';
import { searchReducer } from './searchReducer';
import { RoleReducer, MenuReducer, AuthReducer } from './authReducer';
import { addOgReducer } from './organization/organizationReducer';
import { getAllPjTypesReducer } from './project/ProjectReducer';
import { registerReducer } from './user/userReducer';

const appReducer = combineReducers({
	LoginReducer,
	isMobileReducer,
	logDataReducer,
	RoleReducer,
	MenuReducer,
	AuthReducer,
	searchReducer,
	addOgReducer,
	getAllPjTypesReducer,
	registerReducer
});

// 处理退出清除所有state
const rootReducer = (state, action) => {
	if(action.type === '_isLogout'){
		state = undefined	
	}
	// if( action.type === REHYDRATE ){
	// 	return { ...state, ...action.payload, rehidrate: true };
	// }
	return appReducer(state, action)
}

export default rootReducer;

