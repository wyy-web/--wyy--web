import instance from "../../../9.14/hello/src/http/http";

function apiIndex() {
    return  new Promise((resolve,reject)=>{
        instance.get('/index/index',).then(res=>{
            resolve(res)

        }).catch((error)=>{
            reject(error)
        })
    })

}

function apiDetail(sid) {
    return  new Promise((resolve,reject)=>{
        instance.get('/index/detail/'+sid).then(res=>{
            resolve(res)

        }).catch(error=>{
            reject(error)
        })
    })

}
//index/list
//index/list?page=
//index/list?page=2
function apiList(params) {
    return  new Promise((resolve,reject)=>{
        instance.get('/index/lists',{
            params
        }).then(res=>{
            resolve(res)

        }).catch((error)=>{
            reject(error)
        })
    })

}

function collection(collection) {
    return  new Promise((resolve,reject)=>{
        instance.post('/index/collection',{collection}).then(res=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}


export {apiIndex,apiDetail,apiList,collection}

