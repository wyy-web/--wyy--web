<template>
    <div >

        <header>
            <van-nav-bar
                    title="立即下单"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </header>
        <div class="container" v-if="stayhome">
            <van-card

                    :desc="stayhome.sdesc"
                    :title="stayhome.sname"
                    :thumb="IMGURL+stayhome.sthumb"
            >
                <template #tags>
                    <van-tag plain type="danger" v-for="(item,index) in stayhome.stag" :key="index">{{item}}</van-tag>

                </template>
            </van-card>
            <van-cell-group>
                <van-cell title="入离日期" class="inout-date">
                    <section class="duration arrow-box clear-fix">
                        <router-link to="/Orderscalendar">
                            <div class="in float-left">
                                <div class="action">入住</div>
                                <div class="date">{{orders.enter_time}}

                                </div>
                            </div>
                            <div class="time float-left">
                                <div class="count">共2晚</div>
                                <div class="underline">
                                    <div class="right-line float-right"></div>
                                </div>
                            </div>
                            <div class="out float-left">
                                <div class="action">离店</div>
                                <div class="date">{{orders.leave_time}}

                                </div>
                            </div>
                            <div class="right-arrow">
                            </div>
                        </router-link>
                    </section>
                </van-cell>
                <van-cell title="入住人数" >
                    <van-stepper v-model="value" />
                </van-cell>
                <van-cell title="住客信息" class="userinfo">
                    <van-field v-model="orders.names" label="姓名" placeholder="请输入姓名"/>
                    <van-field v-model="orders.IDcard" type="digit" label="身份证" placeholder="请输入18位身份证号"/>
                </van-cell>
                <van-field  v-model="orders.phone" type="digit" label="联系方式" placeholder="请输入电话号"
                            style="margin-left: 0.15rem;margin-top: 0.2rem"  />
                <van-cell title="房费" :value="stayhome.sprice" class="sprice" v-if="stayhome.sprice"></van-cell>
                <van-cell title="平台优惠" value="39.00" class="preferential"></van-cell>
                <van-cell title="本单需付" v-model="orders.price" class="preferential" ></van-cell>
            </van-cell-group>
            <div class="notie-container">
                <div class="notice-item">
                    <span class="notice-title">在线押金</span>
                    <span class="notice-des">200元 离店后原路退回</span>
                </div>
                <div class="notice-item">
                    <span class="notice-title">清洁费</span>
                    <span class="notice-des">您将免费享受房东提供的客房清洁服务</span>
                </div>
                <div class="notice-item">
                    <span class="notice-title">发票说明</span>
                    <span class="notice-des">不支持开发票 如果需要请与房东协商</span>
                </div>
                <div class="notice-item">
                    <span class="notice-title">退订规则</span>
                    <span class="notice-des">
                        <span>提前一天退订将退还您全部费用取消订单或者提前离店（需联系客服）将收取未住房费的50%</span>
                    </span>
                </div>
            </div>
        </div>
        <footer>
            <van-submit-bar :price="orders.price*100" button-text="提交订单"  @submit="handerorder()" />
        </footer>

    </div>
</template>

<script>
    import { Card,Tag,NavBar,CellGroup,Stepper,Cell,Field,SubmitBar,Toast} from 'vant';
    import store from "../../store/store";
    import 'vant/lib/card/style'
    import 'vant/lib/tag/style'
    import 'vant/lib/nav-bar/style'
    import  'vant/lib/cell-group/style'
    import 'vant/lib/stepper/style'
    import 'vant/lib/cell/style'
    import 'vant/lib/field/style'
    import  'vant/lib/submit-bar/style'
    import 'vant/lib/toast/style'
    import {IMGURL} from "../../lib/base";
    import {orders} from "../../http/orders";

    export default {
        name: "Orders",
        components:{
            VanCard:Card,
            VanTag:Tag,
            VanNavBar:NavBar,
            VanCellGroup:CellGroup,
            VanStepper:Stepper,
            VanCell:Cell,
            VanField:Field,
            VanSubmitBar:SubmitBar,

        },
        data(){
            return{
                IMGURL,
                value:1,
                orders: {
                    names: '小王',
                    IDcard: '12345678',
                    user_number: 1,
                    phone: '',
                    price: '',
                    enter_time: store.enter_time,
                    leave_time: store.leave_time,
                    user_info:'小王',
                },
                stayhome:null,
            }
        },
        methods:{
            onClickLeft() {
                this.$router.back();
            },
            handerorder(){
                this.orders.user_info=this.orders.names.concat(this.orders.IDcard);
                orders(this.orders).then(res=>{
                    console.log(res);
                    if(res.code === 200){
                        let oid=res.oid;
                        Toast('提交成功')
                        this.$router.replace({name:'pay',query:{oid}})
                    }else{
                        Toast('民宿已被预定')
                        this.$router.back();
                    }


                }).catch(error=>{
                    console.log(error);
                })
            }

        },
        mounted() {
            let {sid,stayhome}=this.$route.query;
            this.orders.sid=sid;
            this.stayhome=JSON.parse(stayhome);
            this.orders.price=this.stayhome.sprice-39;
            console.log(this.stayhome);
        }
    }
</script>

<style scoped>

    @import "../../style/orders.css";
    .van-card{
        width: 6.39rem;
        height: 2.72rem;
        background-color: #ffffff;
        box-shadow: 0px 1px 0.3rem 0px
        rgba(242, 242, 242, 0.75);
        border-radius: 0.08rem;

    }




    * {
        text-align: left;
    }

    .inout-date .van-cell__value {
        position: absolute;
    }

    .van-stepper {
        text-align: right;
    }

    .inout-date {
        height: 2rem;
    }

    .van-cell {
        padding: 10px;
    }

    .van-cell__title {
        font-weight: bold;
    }

    .userinfo {
        height: 2.2rem;
    }

    .userinfo .van-cell__value {
        position: absolute;
        top: 0.7rem;
    }

    .uphone .van-cell__value,
    .sprice .van-cell__value {
        text-align: right;
        font-weight: bold;
    }

    .preferential .van-cell__value {
        text-align: right;
        color: #eb666b;
        font-weight: bold;
    }
    .van-card__title{
        font-weight: bold;
        margin-left: 0.3rem;
        margin-bottom: 0.1rem;
        margin-top: 0.2rem;
    }
    .van-card__content{
        font-weight: bold;
    }
    .van-card__desc{
        margin-bottom: 0.2rem;
    }
    .van-tag--danger.van-tag--plain{
        margin-left: 0.1rem;
    }

</style>