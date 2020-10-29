<template>
    <div v-if="collection">
        <header>我的收藏</header>
        <div class="shop" v-for="item in collection" :key="item.sid">
            <van-card
                    :price="item.sprice"
                    :desc="item.sdesc"
                    :title="item.sname"
                    :thumb="IMGURL+item.sthumb"
            >
                <template #tags>
                    <van-tag plain type="danger" v-for="(item,index) in item.stag" :key="index">
                        {{item}}</van-tag>
                </template>
                <template #footer>
                    <van-button size="mini">取消收藏</van-button>
                </template>
            </van-card>
        </div>
    </div>
</template>

<script>
    import {querycollection} from "../../http/login";
    import { Card,Tag,Button } from 'vant';
    import 'vant/lib/card/style'
    import 'vant/lib/tag/style'
    import 'vant/lib/button/style'
    import {IMGURL} from "../../lib/base";

    export default {
        name: "Collection",
        data(){
            return{
                collection:null,
                IMGURL

            }
        },
        components:{
            'VanCard':Card,
            'VanTag':Tag,
            'VanButton':Button
        },
        methods:{
            initcollection(){
                querycollection().then(res=>{
                    let collection=res.colldata
                    collection=collection.map(ele=>{
                        ele.stag=ele.stag.split(/,|，/);
                        return ele;
                    })
                    this.collection=collection;
                    console.log(this.collection);
                }).catch(error=>{
                    console.log(error);
                })
            }
        },
        mounted() {
            this.initcollection();
        }
    }
</script>

<style scoped>
    header{
        margin: 0 auto;
        margin-top: 0.4rem;
        text-align: center;
        font-weight: bold;

    }
    .shop{
        margin-top: 0.4rem;
    }
</style>