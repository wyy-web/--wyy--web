<template>
    <div>
        <div v-for="item in provincekeys" :key="item">
            <h2 style="  color: #9d9d9d;margin-left: 0.2rem;margin-top: 0.5rem;margin-bottom: 0.4rem;">{{item}}</h2>
            <ul>

                <li v-for="(city,index) in province[item]" :key="index">
                    <el-button type="primary" plain @click="setProvince(city.city)">{{city.city}}</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import city from '../../lib/city.json'
    export default {
        name: "province",
        data(){
            return{
                province:{},
            }

        },
        computed:{
            provincekeys(){
                let arr=[];
                if(JSON.stringify(this.province)!='{}'){
                    arr=Object.keys(this.province).sort();
                }
                return arr;
            },
        },
        methods:{
            initprovince(){
                city.province.forEach(ele=>{
                    let firstchar=ele.en.charAt(0).toUpperCase();
                    if(!this.province[firstchar]){
                        this.$set(this.province,firstchar,[]);
                        // this.province[firstchar]=[];
                    }
                    this.province[firstchar].push(ele);
                })

            },
            setProvince(province){
                this.$store.commit('setProvince',province)
                this.$router.back();
            }
        },
        mounted() {
            this.initprovince()
            // this.$router.go(0);
        }
    }
</script>

<style scoped>
    @import "../../style/province.css";

</style>