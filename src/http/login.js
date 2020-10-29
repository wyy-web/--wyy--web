import instance from "./http";
function reg(regdata) {
    return  new Promise((resolve,reject)=>{
        instance.post('/index/User',regdata).then(res=>{

            resolve(res)

        }).catch((error)=>{
            reject(error)
        })
    })
}


function login(body) {
    return new Promise((resolve, reject) => {
        instance.post('/index/login', body).then(res => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function mydata() {
    return new Promise((resolve, reject) => {
        instance.get('/index/user/1').then(res => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function querycollection() {
    return new Promise((resolve, reject) => {
        instance.get('/index/collection/1').then(res => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}
export {reg,login,mydata,querycollection}
