<template>
    <div>
        <van-calendar v-model="show" @confirm="onConfirm"  :max-range="3" type="range" />

    </div>
</template>

<script>
    import { Calendar } from 'vant';
    import 'vant/lib/calendar/style'

    export default {
        name: "Calendar",
        data(){
            return{
               show:true,
            }
        },
        methods:{
            onConfirm(date){
                let [startTime,endTime]=date;
                let start=startTime.getMonth()+1+'.'+startTime.getDate();
                let end=endTime.getMonth()+1+'.'+endTime.getDate();
                let startDay=startTime.getDay();
                let endDay=endTime.getDay();
                this.$store.commit('setTime',{start,end,startDay,endDay});
                this.$router.back();
            }
        },
        components:{
            'van-calendar':Calendar
        }
    }
</script>

<style scoped>

</style>