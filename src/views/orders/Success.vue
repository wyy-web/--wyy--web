<template>
    <div>
        <span class="success">支付成功</span>
        <van-icon name="passed" />
        <p>等待
            <span class="time">{{time}}</span>
            秒后跳转至个人中心</p>
        <div class="to">
            <router-link to="/my" style="color: #c0c0c0">点击直接跳转</router-link>
        </div>
    </div>
</template>

<script>
    import { Icon } from 'vant';
    export default {
        name: "Success",
        data(){
            return{
                time:3
            }
        },
        components:{
            VanIcon:Icon
        },
        methods:{
            go(){
                let t= setInterval(()=>{
                    this.time--;
                    if(this.time === 0){
                        clearInterval(t)
                        this.$router.push('/my')
                    }
                },1000)

            }
        },
        mounted() {
            this.go()
        }
    }
</script>

<style scoped>
    div{
        text-align: center;
        margin-top: 3rem;
    }
    .success{
        font-weight: bold;
        color: #2a3746;
        text-align: center;
        font-size: 0.8rem;
    }
    .van-icon{
        font-size: 0.65rem;
        color: #0a84c9;
        margin-left: 0.1rem;
    }
    p{
        font-size: 0.5rem;
        margin-top: 0.5rem;
    }
    .time{
        font-size: 0.7rem;
        color: #c7254e;
    }
    .to{
        margin-top: 0.4rem;
    }
</style>