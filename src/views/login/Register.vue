<template>
    <div>
        <div class="back">
            <span class="title1">远方 即 故乡</span>
            <span class="title2">WELCOME HOME</span>
            <span class="title3">小主 等你好久了</span>
        </div>
        <div class="con">
            <div class="login">
                <van-form  @submit="onSubmit" action="jsvascript:;">
                    <van-field
                            v-model="registerform.nickname"
                            name="用户名"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                            v-model="registerform.password"
                            type="password"
                            name="密码"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <van-field
                            v-model="registerform.phone"
                            name="手机号"
                            label="手机号"
                            placeholder="请输入手机号"
                            :rules="[{ required: true, message: '请填写手机号' }]"
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
                            <van-button size="small" native-type="button"  type="primary" @click="getcode" v-show="!time">发送验证码</van-button>
                            <van-button size="small"   native-type="button"    type="primary" @click="getcode" v-show="time">{{time}}s</van-button>
                        </template>
                    </van-field>

                    <van-checkbox v-model="checked" icon-size="20px" style="font-size: 14px;margin-left: 0.2rem">已同意并阅读《软件许可及服务协议》</van-checkbox>

                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit" >
                            立即注册
                        </van-button>
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
    import {reg} from "../../http/login";

    export default {
        name: "Register",
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
            onSubmit(){
                reg(this.registerform).then(res=>{
                    console.log(res);
                    this.$router.push('/login')
                }).catch(()=>{

                })
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
</style>