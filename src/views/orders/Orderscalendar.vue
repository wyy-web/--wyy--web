<template>
    <div>
        <van-calendar v-model="show" @confirm="onConfirm"  :max-range="3" type="range" />

    </div>
</template>

<script>
    import { Calendar } from 'vant';
    import 'vant/lib/calendar/style'
    import store from "../../store/store";
    export default {
        name: "Orderscalendar",
        data(){
            return{
                show:true
            }
        },
        components:{
            'van-calendar':Calendar,
        },
        methods:{
            formdate(date){
                let year=date.getFullYear();
                let month=date.getMonth()+1;
                let day=date.getDate();
                return `${year}/ ${month} /${day}`
            },
            onConfirm(date) {
                let [starttime,endtime]=date;
                store.enter_time=this.formdate(starttime);
                store.leave_time=this.formdate(endtime);
                this.$router.back()
            },
        },

    }
</script>

<style scoped>

</style>