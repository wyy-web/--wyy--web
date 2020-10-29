<template>
    <div>
        <header>
            <van-nav-bar
                    title="订单支付"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </header>
        <div class="time">
            <h1>剩余支付时间</h1>
            <div class="time-background">
                <van-count-down :time="time" />
            </div>
            <p class="price">待支付 <span style="color: #ed757a">158.00</span></p>
            <p class="nopay">30分钟内未支付订单将自动取消</p>
        </div>

        <div class="pay">
            <div>
                <i class="iconfont icon-zhifubao" style="color: #51abf8;"></i>
                支付宝支付
            </div>
            <hr>
            <div>
                <i class="iconfont icon-weixin" style="color: #4ac461;"></i>
                微信支付</div>
        </div>
        <div class="nowpay" @click="handerpay">
            立即支付
        </div>
    </div>
</template>

<script>
    import { NavBar,CountDown,Toast} from 'vant';
    import 'vant/lib/nav-bar/style'
    import 'vant/lib/count-down/style'
    import {payorders} from "../../http/orders";

    export default {
        name: "Pay",
        components:{
            VanNavBar:NavBar,
            VanCountDown:CountDown
        },
        data(){
            return{
                time: 30 * 60 * 1000,
            }
        },
        methods:{
            onClickLeft(){
                this.$router.back();
            },
            handerpay(){
                let oid=this.$route.query.oid ;
                console.log(oid);
                payorders(oid).then(res=>{
                    console.log(res);
                    if(res.code===200){
                        Toast('支付成功')
                        this.$router.push('/success')


                    }else{
                        Toast('支付失败')
                        this.$router.back();


                    }
                }).catch(error=>{
                    console.log(error);
                })
            }
        },
        mounted() {

        }
    }

</script>

<style scoped>
    .time{
        width: 6.38rem;
        height: 3.81rem;
        margin: 0 auto;
        margin-top: 0.3rem;
        background-color: #ffffff;
        box-shadow: 0px 1px 0.3rem 0px
        rgba(242, 242, 242, 0.75);
        border-radius: 0.1rem;
    }

    .time-background{
        width: 5rem;
        height: 1rem;
        background-color: #2c3742;
        border-radius: 6px;
        margin-left: 0.7rem;
        margin-top: 0.4rem;
    }
    .time h1{
        font-size: 0.5rem;
        text-align: center;
        font-weight: bold;

    }
    .van-count-down{
        position: absolute;
        font-size: 0.8rem;
        margin-left: 1rem;
        margin-top: 0.3rem;
        color: #fff;
    }
    .price{
        font-size: 0.4rem;
        margin-top: 0.3rem;
        margin-left: 1.7rem;
    }
    .nopay{
        font-size: 0.2rem;
        margin-left: 1.4rem;
        margin-top: 0.1rem;
        color: #000000;
        opacity: 0.4;
    }
    .pay{
        width: 6.3rem;
        margin:0 auto;
        margin-top: 1rem;

    }
    hr{
        width: 6.39rem;
        height: 0.05rem;
        opacity: 0.1;
        background: #e3e3e3;
    }
    .pay i{

        font-size: 0.5rem;

    }
    .nowpay{
        margin: 0 auto;
        width: 6.38rem;
        height: 0.7rem;
        background-color: #eb666b;
        box-shadow: 0px 6px 0.15rem 0px
        rgba(204, 100, 100, 0.5);
        border-radius: 0.08rem;
        font-size: 0.3rem;
        line-height: 0.7rem;
        vertical-align: middle;
        color: #fff;
        text-align: center;
        margin-top: 4rem;

    }

</style>