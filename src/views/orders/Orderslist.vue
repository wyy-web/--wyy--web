<template>
    <div >

        <div class="body">
            <div class="title">
                <van-icon name="arrow-left" @click="handerback" />
                <span>全部订单</span>
            </div>
            <div class="order-buttons"  >
                <ul>
                    <li :class="{tap:item.field === search.field}" v-for="(item,index) in orderlist" :key="index" @click="handertap(item.field)" >
                        <div><span>{{item.text}}</span></div>
                    </li>

                </ul>
            </div>
        </div>

        <div v-if="orders">
            <div class="shop" v-for="item in orders" :key="item.oid" >
                <router-link :to="{name:'detail',query:{sid:item.sid}}">
                    <van-card
                            :price="item.sprice"
                            :desc="item.sdesc"
                            :title="item.sname"
                            :thumb="IMGURL+item.sthumb"
                    >
                        <template #footer>
                            <van-button size="mini">{{item.text}}</van-button>
                        </template>
                    </van-card>
                    <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                </router-link>
            </div>
        </div>
        <div v-else class="noshop">暂无订单</div>
    </div>
</template>

<script>
    import { Icon,Card,Stepper,Button} from 'vant';
    import 'vant/lib/icon/style'
    import 'vant/lib/card/style'
    import 'vant/lib/stepper/style'
    import 'vant/lib/button/style'
    import {getorders} from "../../http/orders";
    import {IMGURL} from "../../lib/base";

    export default {
        name: "Orderslist",
        components:{
            VanIcon:Icon,
            VanCard:Card,
            VanStepper:Stepper,
            VanButton:Button
        },
        data(){
            return{
                IMGURL,
                value: 1,
                orderlist:[
                    {text:'未付款',field:1},
                    {text:'已付款',field:2},
                    {text:'完成',field:3},
                    {text:'退款',field:4},

                ],
                orders:null,
                paginate:{
                    page:1,
                    limit:5
                },
                search:{
                    field:1
                }

            }
        },
        methods:{
            handerback(){
                this.$router.back();
            },
            handertap(index){
                this.search.field=index ;
                this.initorders();
                // console.log(this.search.field);
            },
            initorders(){
                let params=Object.assign({},this.paginate,this.search)
                getorders(params).then(res=>{
                    // console.log(res);
                    this.orders=res.data;
                }).then(error=>{
                    console.log(error);
                })
            },
        },
        mounted() {

            let type=this.$route.query.type || 1;
            this.search.field=type;
            this.initorders();
        }
    }
</script>

<style scoped>

    .van-card{
        margin-top: 0.5rem;
    }
    .van-icon{
        position: absolute;
        left: 0.6rem;
    }
    .body{
        padding-left: 0.56rem;
        padding-right: 0.56rem;
        height: auto;
        background-color: #ffffff;
    }
    .title{
        width: 100%;
        text-align: center;
        margin-top: 0.64rem;
    }
    .title button{
        float: left;
        /*height: 0.02rem;*/
    }
    .title button img{
        height: 0.25rem;
    }
    .search{
        width: 5.58rem;
        height: 0.6rem;
        border-radius: 0.1rem;
        margin: 0.72rem  auto 0;
        background-color: #fafafa;
        padding-left: 0.24rem;
        padding-right: 0.24rem;

    }
    .search-box{
        width:4.5rem;
        height: 100%;
        background-color: #fafafa;

    }
    .search button{
        float: right;
    }
    .search button img{
        height: 0.6rem;
    }

    .order-buttons{
        width: 100%;
        height: 0.63rem;
        margin-top: 0.65rem;
    }
    .order-buttons ul li{
        float: left;
        text-align: center;
        margin-right: 0.3rem;
    }

    .order-buttons ul li div{
        width: 1.35rem;
        height: 0.63rem;
        line-height: 0.63rem;
    }

    .tap{
        color: #fafafa;
        width: 1.35rem;
        height: 0.63rem;
        background-color: #eb666b;
        box-shadow: 0rem 0.12rem 0.3rem 0rem rgba(235, 102, 107, 0.5);
        border-radius: 0.32rem;
    }
    .order-buttons ul li:nth-child(4){
        margin-right: 0;
    }
    /*.order-buttons ul li div span{*/
    /*    position: relative;*/
    /*    top: 0.1rem;*/
    /*}*/
    .shop{
        position: relative;
    }
    .van-stepper{
        position: absolute;
        right: 0.3rem;
        top: 1.2rem;
    }
    .noshop{
        margin: 0 auto;
        width: 6.38rem;
        height: 2rem;
        font-size: 0.4rem;
        font-weight: bold;
        line-height: 2rem;
        text-align: center;
        vertical-align: middle;
        margin-top: 0.5rem;
        box-shadow: 0px 1px 0.72rem 0px
        rgba(245, 245, 245, 1);
        border-radius: 0.08rem;
    }

</style>