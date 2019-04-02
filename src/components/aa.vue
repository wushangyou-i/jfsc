<template>
    <div>
        <router-link to="/hello"><p>我是测试vue{{text}}</p></router-link>
        <p @click="chrenclick">999</p>
        <p @click="big">兄弟组件通信</p>
        <slot></slot>
        
    </div>
    
</template>
<script>
import bus from '../../static/js/bus.js'
export default {
    name:'test',
    data(){
        return{
            mess:'城市近几年缠着你参加寻星科技拿锤子科技',
            t:0,
        }
    },
    props:['text'],
    methods: {
        tryclick:function(){
            this.t++
            console.log(this.t)
        },
        chrenclick:function(){
            this.$emit('parentclick',this.mess)
           
        },
        big:function () { 
            bus.$emit('blur','sichaoyun')
         }
    }
}
</script>
<style scoped>
    p{
        font-size:28px;
        color:red;
    }
</style>