<template>
    <header v-if="tranfrom ==1" class="clearfix top" style="background:transparent">
        <span v-if="back" @click="goBack" class="mui-action-back"></span>
        <p class="title">{{title}}</p>
    </header>
    <header v-else  class="clearfix top" >
        <span v-if="back" @click="goBack" class="mui-action-back"></span>
        <p class="title">{{title}}</p>
    </header>
</template>
<script>
export default {
    name:'headtop',
    data () {
        return {
            
        }
    },
    methods: {
        goBack(){
            this.$router.back(-1)
        }
    },
    props: ['back','title','tranfrom'],
   
}
</script>
<style scope>
.top{height: .88rem;position: fixed;top: 0;width: 100%;z-index: 998; background: linear-gradient(to bottom, #e62b21 0%,#ff7b18 100%);}
.top span{display: block;width: 1.2rem;height: 100%;background: url(../../images/top_back_bg.png) no-repeat;position:absolute;top: 0;left: 0;background-size:.16rem;background-position:center ;}
.top p{line-height: .88rem;text-align: center;font-size: .28rem;color: #fff;}
</style>

