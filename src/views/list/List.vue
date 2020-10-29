<template>
    <div  class="list-box" v-if="stayhome">
        <ul class="nav">
            <!--     <li :class="{active:order.field === 'sid'}">综合<i class="iconfont icon-xiajiantou1"></i></li>-->
            <!--     <li :class="{active:order.field === 'score'}">位置<i class="iconfont icon-xiajiantou1"></i></li>-->
            <!--     <li :class="{active:order.field === 'ctime'}">时间<i class="iconfont icon-xiajiantou1"></i></li>-->
            <!--     <li :class="{active:order.field === 'sprice'}">价格<i class="iconfont icon-xiajiantou1"></i></li>-->
            <li v-for="(item,index) in orderarr" :key="index" :class="{active:order.field === item.field}"
                @click="handlefield(item.field)"
            >{{item.text}}<i :class="['iconfont',item.icon]"></i></li>
        </ul>

        <div class="list">
            <van-pull-refresh v-model="isPullrefresh" @refresh="handlerPullrefresh">
                <van-list v-model="isUpper" :finished="upperFinished" :immediate-check="false"	  @load="handlerUpper">
                    <div style="clear: both">
                        <div class="mustsee-item" v-for="item in stayhome" :key="item.sid" >
                            <router-link router-link :to="{name:'detail',query:{sid:item.sid}}" style="color: #000">
                                <img :src="item.sthumb" alt="" class="mustsee-img">
                                <span class="hotelName">{{item.sname}}</span>
                                <br>
                                <span style="color: #999999">{{item.scity}}·{{item.sarea}}</span>
                                <span style="color: #f8606a">RMB</span>
                                <span style="" class="price">{{item.sprice}}</span>
                                <span>每晚</span>
                            </router-link>
                        </div>
                    </div>
                </van-list>
            </van-pull-refresh>

        </div>
        <tabbar :index="2"></tabbar>
    </div>
</template>

<script>
    import { PullRefresh , List ,Toast} from 'vant';
    import 'vant/lib/pull-refresh/style'
    import 'vant/lib/list/style';
    import 'vant/lib/toast/style'
    import {apiList} from "../../http/api";
    import {IMGURL} from "../../lib/base";
    import tabbar from "../../components/tabbar/tabbar";
    export default {
        name: "List",
        components:{
            VanPullRefresh:PullRefresh,
            VanList:List,
            Tabbar:tabbar
        },
        data(){
            return {
                isPullrefresh:false,
                isUpper:false,
                upperFinished:false,
                paginate:{
                    page:0,
                    limit:8
                },
                orderarr:[
                    {text:'综合',icon:'icon-xiajiantou1',field:'sid'},
                    {text:'位置',icon:'icon-xiajiantou1',field:'score'},
                    {text:'时间',icon:'icon-xiajiantou1',field:'ctime'},
                    {text:'价格',icon:'icon-xiajiantou1',field:'sprice'},

                ],
                // 综合 sid , 位置score  时间 ctime 价格 sprice
                order:{
                    field:'sid',
                    type:'desc'
                },
                stayhome:[],
                total:0
            }
        },
        methods:{
            handlerPullrefresh(){
                this.upperFinished=false;
                this.paginate.page=0;
                this.stayhome=[];
                this.total=0;
                this.handlerUpper();
                Toast({
                    message:'刷新成功'
                })
                this.isPullrefresh=false;
            },
            handlerUpper(){
                this.paginate.page++;
                let obj=Object.assign({},this.paginate,this.order)
                apiList(obj).then(res=>{
                    if(res.data){
                        !this.total && (this.total=res.total);
                        let stayhome=res.data;
                        stayhome=stayhome.map(ele=>{
                            ele.sthumb=IMGURL+ele.sthumb
                            return ele;
                        })
                        this.stayhome=this.stayhome.concat(stayhome);
                        if (this.stayhome.length >= res.total){
                            this.upperFinished=true;
                        }
                    }
                    // else {
                    //     Toast({
                    //         message:'暂无数据'
                    //     })
                    // }
                    this.isUpper=false;
                }).catch(()=>{

                })
            },
            handlefield(field){
                this.order.field=field;
                this.upperFinished=false;
                this.paginate.page=0;
                this.stayhome=[];
                this.total=0;
                this.handlerUpper();
            }
        },
        mounted() {
            this.handlerUpper()
        }
    }
</script>

<style scoped>
    .active{
        width: 1.35rem;
        height: 0.63rem;
        border-radius: 0.32rem;
        font-size: 0.26rem;
        color: #fff;
        background: #eb666b;
        text-align: center;
        line-height: 0.63rem;
        vertical-align: middle;
    }
    @import url('../../style/list.css');
</style>