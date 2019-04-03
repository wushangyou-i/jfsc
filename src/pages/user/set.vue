<template>
    <div>
        <headtop back='true' title="设置"></headtop>
        <div class="useNum">
			<div class="outBox">
				<router-link to="/about">关于我们</router-link>
			</div>
			<div class="outBox">
                <router-link to="/message">意见反馈</router-link>
			</div>
		</div>
		<div class="tui" style="position: relative;">
			<a class="signout" href="login.html">退出登录</a>
		</div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'set',
    data () {
        return {
            
        }
    },
    components:{
        headtop
    }
}
</script>
<style scope>
.useNum{padding: .88rem .16rem .2rem;background: #f5f5f5;}
.useNum .outBox{height: .92rem;background: #fff;border: 1px solid #e9e9e9;margin-top: .18rem;position: relative;}
.useNum .outBox:after{content: "";width: .2rem;height:.2rem;background: url(../../images/zhanghao.png) no-repeat;background-position:center ;position: absolute;right: .4rem;top: 50%;margin-top: -.1rem;}
.useNum .outBox a{font-size: .24rem;display: block;line-height: .92rem;padding-left: .4rem;color: #787878;}
.tui{position: relative;margin-top: .8rem;}
.tui a.signout{width: 2.6rem;height: .64rem;text-align: center;line-height: .64rem;color: #fff;font-size: .22rem;position: absolute;left: 50%;margin-left: -1.3rem;display: block;background: linear-gradient(to right, #ff7402 0%,#ff4a00 100%);}
</style>

