import request from '@/utils/request'

export function loginByUsername(username, password, openId, accessToken) { // 登录
  const data = {
    username,
    password,
    openId,
    accessToken
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout(token) { // 退出
  return request({
    url: '/logout',
    method: 'get'
  })
}

export function getUserInfo(token) { // 根据token获取用户信息
  return request({
    url: '/user/getCurrentUserInfo',
    method: 'post',
    data: { 'token': token }
  })
}
