<template>
    <div>
        <div class="back1">
            <span class="title1">远方 即 故乡</span>
            <span class="title2">WELCOME HOME</span>
            <span class="title3">小主 等你好久了</span>
        </div>
        <div class="con">
            <div class="login">
                <van-form  @submit="onSubmit" >

                    <van-field
                            v-model="registerform.phone"
                            name="phone"
                            label="手机号"
                            placeholder="请输入手机号"
                            :rules="[{ required: true, message: '请填写手机号' }]"
                            aria-autocomplete="none"
                    />
                    <!-- <input type="button" value="获取秘密" class="sub"> -->
                    <van-field
                            v-model="code"
                            center
                            clearable
                            label="短信验证码"
                            placeholder="请输入短信验证码"
                    >
                        <template #button>
                            <van-button size="small" type="primary" native-type="button" @click="getcode" v-show="!time">发送验证码</van-button>
                            <van-button size="small" type="primary" native-type="button" @click="getcode" v-show="time">{{time}}s</van-button>
                        </template>
                    </van-field>

                    <van-checkbox v-model="checked" icon-size="20px" style="font-size: 14px;margin-left: 0.2rem">已同意并阅读《软件许可及服务协议》</van-checkbox>

                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit" >
                            立即登录
                        </van-button>
                        <router-link to="/register">没有账号？点击注册</router-link>
                    </div>
                </van-form>

            </div>
        </div>

    </div>
</template>

<script>
    import { Field, Form ,Button,Checkbox } from 'vant'
    import 'vant/lib/field/style'
    import 'vant/lib/form/style'
    import 'vant/lib/button/style'
    import 'vant/lib/checkbox/style'


    export default {
        name: "Login",
        components:{
            VanForm:Form,
            VanField:Field,
            VanButton:Button,
            VanCheckbox:Checkbox
        },
        data(){
            return{
                registerform:{
                    nickname:'',
                    password:'',
                    phone:''
                },
                checked:true,
                time:0,
                code:'1234',
            }
        },
        methods:{
            onSubmit(value){
                let redirect=this.$route.query.redirect || 'my';
                let query=this.$route.query.params || {};
                let obj=Object.assign({},value,{redirect},{query})
                this.$store.dispatch('handleLogin',obj)
            },

            getcode(){
                if(!this.time) {
                    this.time = 60;
                    this.code=Math.floor(Math.random()*9999-999+1000);
                    setInterval(()=>{
                        if(this.time>0){
                            this.time--;
                        }else{
                            this.time=0
                        }
                    },1000)
                }
            },
        }

    }
</script>

<style scoped>
    @import "../../style/register.css";
    .login{
        top: -2rem;
    }
    .back1{
        width: 100%;
        height: 5.86rem;
        background: url(../../assets/mainback.png);
        background-size: 100% 100%;
    }
</style>