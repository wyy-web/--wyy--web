import instance from "./http";


function orders(data) {
    return  new Promise((resolve,reject)=>{
        instance.post('/index/orders',data).then(res=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}

function getorders(params) {
    return  new Promise((resolve,reject)=>{
        instance.get('/index/orders/1',{params}).then(res=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}

function payorders(oid) {
    return  new Promise((resolve,reject)=>{
        instance.put('/index/orders/'+oid).then(res=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}

export {orders,getorders,payorders}