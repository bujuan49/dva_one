import request from "../utils/request"
//用户管理
export function getUser() {
    return request.get("/user/userInfo")
}
//更新用户
export function updataUser(payload) {
    return request.put("/user/user",payload)
}

//展示用户数据
export function getUserdata() {
    return request.get("/user/user")
}
//展示身份数据
export function getidentity() {
    return request.get("/user/identity")
}
//展示api接口权限
export function api_authority() {
    return request.get("/user/api_authority")
}
//展示身份和api权限关系
export function api_authority_relation() {
    return request.get("/user/identity_api_authority_relation")
}
//展示视图权限数据
export function view_authority() {
    return request.get("/user/view_authority")
}
//展示身份和视图权限数据
export function view_authority_relation() {
    return request.get("/user/identity_view_authority_relation")
}
//添加用户
export function adduser(params) {
    return request.post("/user", params)
}
//添加身份
export function addidentity(payload) {
    console.log(payload)
    return request.get("/user/identity/edit", { params: payload })
}
//添加api接口权限
export function authorityApi(payload) {
    return request.get('/user/authorityApi/edit', { params: payload })
}
//添加视图接口
export function authorityView(params) {
    return request.post("/user/authorityView/edit", params)
}
//给视图设定身份接口权限
export function setIdentityApi(params) {
    return request.post("/user/setIdentityApi", params)
}
//gengz 
export function changeImg(params) {
    return request.post('http://123.206.55.50:11000/upload', params)
}
