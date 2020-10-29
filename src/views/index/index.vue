<template>
    <div>
        <!-- banner -->
        <div style="overflow: hidden" v-if="banner">
            <div class="swiper-container" style="z-index: 0">
                <div class="swiper-wrapper">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item style="float: left" v-for="item in banner" :key="item.sid">
                            <router-link :to="{name:'detail',query:{sid:item.sid}}">
                                <img :src="item.sthumb" :alt="item.sname"  :title="item.sname"    style="width: 7.5rem;">
                            </router-link>
                        </van-swipe-item>
                    </van-swipe>

                </div>
                <div class="search">
                    <img src="../../assets/搜索.png" alt="">
                </div>


                <div class="area">
                    <div class="search-area">
                        <div class="search-area-left"><router-link to="/province" style="color: #ed7a7e;">{{indexSearch.province}}</router-link></div>
                        <div class="search-area-middle">
                            <input type="text" name="" id="" placeholder="景点 地址 关键字">
                        </div>
                        <div class="search-area-right"><img src="../../assets/position.png" alt=""></div>
                    </div>

                    <div class="time-area">
                        <router-link to="/calendar" class="time-area time-index">
                            <div class="time-day"><span>{{this.indexSearch.startTime}}</span></div>
                            <div class="week-day"><span>{{indexSearch.startDay}}</span></div>
                            <div class="toright"><img src="../../assets/箭头_切换向上.png" alt=""></div>
                            <div class="time-tomorrow"><span>{{indexSearch.endTime}}</span></div>
                            <div class="week-tomorrow"><span>{{indexSearch.endDay}}</span></div>
                        </router-link>
                        <div class="time-area-day"><span>共一晚</span></div>
                    </div>

                    <div class="now-search"><button><span style="font-size: 20px; letter-spacing: 2px;">立即查找</span></button></div>

                    <div class="trust">
                        <div class="moneybag"><img src="../../assets/moneybag.jpg" alt=""><span>信用免押金</span></div>
                        <div class="music"><img src="../../assets/music.jpg" alt=""><span>24小时客服</span></div>
                        <div class="protect"><img src="../../assets/protect.jpg" alt=""><span>房源房东认证</span></div>
                    </div>
                </div>
            </div>

            <!-- 优选PRO开始 -->
            <div class="introduce" style="margin-top: 50px" >
               <span style="font-size: 25px;color:#2d3544;margin-bottom: 30px;margin-left: 20px;font-weight: bold">{{this.indexdata[3]['cname'].substring(0,2)}}
               </span><span style="font-size: 25px;color:#ed757a;margin-left: -0.1rem">{{this.indexdata[3]['cname'].substring(2,3)}}</span>
                <span style="font-size: 26px;">{{this.indexdata[3]['cname'].substring(3)}}</span>
                <div class="introduce-text" style="left:40px">{{this.indexdata[3]['cdesc']}}</div>
                <van-swipe class="my-swipe"  indicator-color="white">
                    <van-swipe-item class="introduce-imgs" v-for="item in prochildren" :key="item.sid">
                        <router-link :to="{name:'detail',query:{sid:item.sid}}">
                            <img :src="IMGURL+item.sthumb" alt="" style="margin-left: 20px">
                            <div class="introduce-text2" style="position: absolute">
                                <span>{{item.sname}}</span>
                                <img src="../../assets/star.png" alt="" >
                                <img src="../../assets/star.png" alt="" >
                                <img src="../../assets/star.png" alt="" >
                                <img src="../../assets/star.png" alt="" >
                                <img src="../../assets/star.png" alt="" >
                                <p>{{item.scity}}-{{item.sarea}}</p>
                                <div class="introduce-price">RMB <span>{{item.sprice}}</span></div>
                            </div>
                        </router-link>
                    </van-swipe-item>
                </van-swipe>

            </div>
            <!-- 优选PRO结束-->


            <!-- 不得不睡开始 -->
            <div class="sleep">
           <span style="font-size: 25px;color:#2d3544;margin-bottom: 15px;margin-left: 20px;font-weight: bold;">
               {{this.indexdata[2]['cname'].substring(0,3)}}<span style="color: #ed757a;font-size: 25px;">{{this.indexdata[2]['cname'].substring(3)}}</span></span>
                <div class="introduce-text" style="margin-bottom: 20px">{{this.indexdata[2]['cdesc']}}</div>
                <div class="swiper-container">

                    <van-swipe class="my-swipe"  indicator-color="white">
                        <van-swipe-item class="my-swipe swiper-wrapper" v-for="item in children" :key="item.sid" style="float:left;height: 7rem">

                            <router-link :to="{name:'detail',query:{sid:item.sid}}" style="color: #000">
                                <div class="swiper-slide">
                                    <img :src="IMGURL+item.sthumb" alt="" style="width: 6.6rem; position: absolute; height: 3.5rem;left: 0.45rem;top:0.2rem"  >
                                    <div class="sleepcon" style="width: 6.6rem;margin-left: 0.05rem;margin-top: 1.6rem;box-shadow:0 0 5px 0 #f0f0f0;height: 3rem;border-radius: 0.2rem">
                                        <span style="margin-left: 0.2rem">{{item.sname}}</span>
                                        <p style="margin-top: 0.6rem;margin-left: 0.2rem">{{item.sdesc}}</p>
                                        <div style="width: 100px;height: 20px;background: #f1505f;color: #fff;float: left;text-align: center;margin-top: 0.2rem;margin-left: 0.2rem">超赞房东</div>
                                        <div style="width: 100px;height: 20px;background: #f9aa00;color: #fff;float: left;text-align: center;margin-left:0.6rem ;margin-top: 0.2rem">拍照好看</div>
                                    </div>
                                </div>
                            </router-link>
                        </van-swipe-item>
                    </van-swipe>

                </div>

            </div>
            <!-- 不得不睡结束 -->




            <!-- 不得不说开始 -->
            <div class="say" style="margin-top: 0rem">
                <div class="say-title">
                   <span style="font-size: 25px;color:#2d3544;margin-bottom: 15px;margin-left:20px">
                       {{this.indexdata[1]['cname'].substring(0,3)}}
                       <span style="font-size: 25px;color:#ed757a;margin-left: -0.13rem">{{this.indexdata[1]['cname'].substring(3)}}</span></span>
                    <div class="introduce-text" style="margin-top: 0.2rem;">{{this.indexdata[1]['cdesc']}}</div>
                    <router-link :to="{name:'detail',query:{sid:indexdata[1].children[0].sid}}">
                        <div style="float: left; margin-top: 5px;margin-left: -20px">
                            <img :src="IMGURL+indexdata[1]['children'][0]['sthumb']" alt="" style="width: 84%; height: 100%;">
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- 不得不说结束 -->
            <!-- 不得不看开始 -->
            <div class="look" v-if="indexdata">
                <div class="look-title" style="margin-left: 20px">
               <span class="must-look">{{this.indexdata[0]['cname'].substring(0,3)}}
               <span style="color: #ed757a;font-size: 25px;margin-left: -0.13rem">{{this.indexdata[0]['cname'].substring(3)}}</span>
               </span>
                </div>
                <div class="look-text" style="margin-left: 20px;margin-top: 15px">{{this.indexdata[0]['cdesc']}}</div>

                <div  style="overflow: hidden; margin-top: 25px;">
                    <div  style="margin-left: 25px; float: left;box-sizing: border-box;width: 150px" v-for="item in seechildren" :key="item.sid" >
                        <router-link :to="{name:'detail',query:{sid:item.sid}}">
                            <div class="swiper-slide mustlook" style="float: left;box-sizing: border-box;width: 100%;">
                                <img :src="IMGURL+item.sthumb" alt="" style="width: 100%;">
                                <div class="heart"><img src="../../assets/heart.png" alt="" style="width: 20px; height: 20px;" class="heartz"></div>
                                <div class="swiper-text">{{item.sname}}</div>
                                <div class="swiper-text-area">{{item.scity}}-{{item.sarea}}</div>
                                <ul class="cleanfloat" style="margin: 0px;">
                                    <li>&#9733;</li>
                                    <li>&#9733;</li>
                                    <li>&#9733;</li>
                                    <li>&#9733;</li>
                                    <li>&#9733;</li>
                                </ul>
                                <div>
                                    <div class="RMB">RMB</div>
                                    <div class="maths">{{item.sprice}}</div>
                                    <div class="everynight">每晚</div>
                                </div>

                            </div>
                        </router-link>
                    </div>

                </div>
            </div>
            <tabbar></tabbar>
        </div>
    </div>
</template>

<script>
    import {IMGURL} from "../../../../9.14/hello/src/lib/base";
    import {apiIndex} from "@/http/api";
    import {Swipe,SwipeItem} from 'vant';
    import tabbar from "../../components/tabbar/tabbar";

    export default {
        name: "index",
        data(){
            return{
                indexdata:null,
                banner:null,
                children:null,
                seechildren:null,
                prochildren:null,
                IMGURL
            }
        },
        components:{
            // VanLoading:Loading
            VanSwipe:Swipe,
            VanSwipeItem:SwipeItem,
            tabbar,
        },
        computed:{
            indexSearch(){
                return this.$store.state.indexSearch;
            }
        },
        methods:{
            initSearch(){
                this.$store.dispatch('setTime');
                this.$store.dispatch('setProvince','山西');
            },
            initData(){
                apiIndex().then(res=>{
                    this.indexdata=res.data.category;
                    let banner=res.data.banner;
                    banner=banner.map(ele=>{
                        ele.sthumb=IMGURL+ele.sthumb;
                        return ele;
                    })
                    this.banner=banner;
                    this.children=res.data.category[2].children;
                    this.seechildren=res.data.category[0].children;
                    this.prochildren=res.data.category[3].children;
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        mounted() {
            //判断是不是为空
            // JSON.stringify({})==='{}'
            this.initSearch();
            this.initData();
        }
    }
</script>

<style scoped lang="scss">

    @import "../../style/index.css";


    .swiper-container{
        position: relative;
        height: 8rem;
        z-index: 1;
    }
    .swiper-slid{
        z-index: 0;
    }
    .look .swiper-slide{
        width: 50%;
        margin-right: 20px;
        margin-bottom: 30px;
    }
</style>