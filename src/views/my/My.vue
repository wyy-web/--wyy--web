<template>
    <div>
        <!-- 头部开始 -->
        <div class="header" v-if="mydata">
            <div class="avatar">
                <img :src="IMGURL+mydata.avatar" alt="">
            </div>
            <div class="uname">
                <span>{{mydata.nickname}}</span>
            </div>
            <div class="vipcenter">
                <div class="viplogo">
                    <img src="../../assets/imgs/viplogo.png" alt="">
                </div>
                <span class="viptitle">收藏中心</span>
                <a href="" class="vipname">
                    <img src="../../assets/imgs/go.png" alt="">
                    <router-link to="/collection">
                        <span>我的收藏</span>
                    </router-link>
                </a>
            </div>
            <div class="info">
                    <img src="../../assets/imgs/info.png" alt="">
            </div>
        </div>
        <!-- 我的订单开始 -->
        <div class="order">
            <div class="ordertitle">
                <span>我的订单</span>
            </div>
            <div class="line"></div>
            <div class="view">
                <img src="../../assets/imgs/goon.png" alt="">
                <span>查看全部订单</span>
            </div>
            <div class="ordermenu">
                <ul>
                    <li>
                        <router-link :to="{name:'orderslist',query:{type:1}}">
                            <img src="../../assets/imgs/done.png" alt="">
                            <div class="orderbtn">
                                <span>未付款</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'orderslist',query:{type:2}}">
                            <img src="../../assets/imgs/pay.png" alt="">
                            <div class="orderbtn">
                                <span>已付款</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'orderslist',query:{type:3}}">
                            <img src="../../assets/imgs/live.png" alt="">
                            <div class="orderbtn">
                                <span>已完成</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'orderslist',query:{type:4}}">
                            <img src="../../assets/imgs/refund.png" alt="">
                            <div class="orderbtn">
                                <span>退款</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 菜单页开始 -->
        <div class="menu">
            <ul>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>红包</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>设置</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>内容管理</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>积分商城</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
                <li>
                    <img src="../../assets/imgs/circle.png" alt="">
                    <span>帮助与反馈</span>
                    <img src="../../assets/imgs/goon.png" alt="" style="margin-left: 6.26rem;">
                </li>
            </ul>
        </div>
        <!-- 提交按钮开始 -->
        <div class="btn">
            <span>成为房东</span>
        </div>
        <!-- 底部开始 -->
        <tabbar :index="4"></tabbar>
    </div>
</template>

<script>
    import tabbar from "../../components/tabbar/tabbar";
    import {mydata} from "../../http/login";
    import {IMGURL} from "../../lib/base";


    export default {
        name: "My",
        components:{
            Tabbar:tabbar
        },
        data(){
            return{
                mydata:null,
                IMGURL,
                collectiondata:null
            }
        },
        methods:{
            initmydata(){
                mydata().then(res=>{
                    this.mydata=res.data;
                    // console.log(res);
                }).catch(error=>{
                    console.log(error);
                })
            },





        },
        mounted() {
            this.initmydata();

        }
    }
</script>

<style scoped>
    @import url('../../style/my.css');

</style>