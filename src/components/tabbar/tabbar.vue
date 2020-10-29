<template>
    <div>
        <div class="footer">
            <router-link to="/" :class="['footer-item' ,index ===1 ?'active':'']">
                <van-icon size="0.4rem" class="footer-item-icon" name="wap-home" color="#f1505f"/>
                <span class="font">首页</span>
            </router-link>
            <router-link to="/list" :class="['footer-item' ,index ===2 ?'active':'']">
                <van-icon size="0.4rem" class="footer-item-icon" name="orders-o" color="#f1505f"/>
                <span class="font">列表</span>
            </router-link>
            <router-link to="/" :class="['footer-item' ,index ===3 ?'active':'']">
                <van-icon size="0.4rem" class="footer-item-icon" name="eye" color="#f1505f"/>
                <span class="font">视界</span>
            </router-link>
            <router-link to="/my" :class="['footer-item' ,index ===4 ?'active':'']">
                <van-icon size="0.4rem" class="footer-item-icon" name="manager" color="#f1505f"/>
                <span class="font">我的</span>
            </router-link>

        </div>
    </div>
</template>

<script>
    import { Icon } from 'vant';
    import 'vant/lib/icon/style'
    export default {
        name: "tabbar",
        components:{
            VanIcon:Icon
        },
        props:{
            index:{
                type:Number,
                default:1
            }
        }

    }
</script>

<style scoped>
    /* 底部开始 */

    .footer{
        width: 100%;
        /*height: 1.5rem;*/
        background: #fff;
        box-shadow:0px -5px 10px -5px #e5e5e5;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
        box-sizing: border-box;
    }
    .footer-item{
        display: block;
        width: 0.58rem;
        float: left;
        opacity: 0.5;
    }
    .footer-item span{
        display: inline-block;
        width: 100%;
        text-align: center;
        color: #f1505f;
        font-size: 0.24rem;
    }
    .footer-item-icon{
        margin: 0.2rem auto 0.13rem;
        margin-left: 0.07rem;


    }
    /* 底部结束 */
    .active{
        opacity: 1;
    }

</style>