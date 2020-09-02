import { setStorageSync } from './storage'
import { doLogin } from '../service/user'

// 用户授权登录
export function userLogin() {
	my.getAuthCode({
  scopes: 'auth_user', // 主动授权：auth_user，静默授权：auth_base。或者其它scope
  success: (res) => {
    if (res.authCode) {
			console.log("用户授权码", res.authCode);
      // 认证成功
			// 调用自己的服务端接口，让服务端进行后端的授权认证，并且利用session，需要解决跨域问题
			// doLogin(res.authCode).then(res=>{
				// console.log("用户授权信息", res)
				// 设置token
				// setStorageSync("token", res.token)
			// })
    }
  },
});
}

// token失效重新获取token
export function userCheckSession() {
	// my.checkSession({
	// 	success: function () {
	// 	  //session_key 未过期，并且在本生命周期一直有效
	// 	},
	// 	fail: function () {
	// 	  // session_key 已经失效，需要重新执行登录流程
	// 	  this.login() //重新登录
	// 	}
	// })
}