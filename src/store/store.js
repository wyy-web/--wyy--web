import Vue from 'vue'



function formdate(date){
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    return `${year}/ ${month} /${day}`
}

let store=Vue.observable({
    enter_time:formdate(new Date()),
    leave_time:formdate(new Date())
})




export default store;