<template>
    <div>
        <headtop back="true" title="修改手机号码" tranfrom="1"></headtop>
        <div class="Useiphone"></div>
		<div class="Res">
			<form>
				 <div class="box iphone fontclear">
				 	<input type="text" placeholder="原手机号码"/>
				 </div>
				 <div class="box ps fontclear">
				 	<input type="password" placeholder="新手机号码"/>
				 </div>
				 <div class="box fontclear">
				 	<input type="text" style="width: 2rem;" placeholder="验证码"/>
				 	<span style="background: #003a76;">获取验证码</span>
				 </div>
				 <div style="border: transparent;margin-top: .66rem;">
				 	<a>确认</a>
				 </div>
			</form>
		</div>
    </div>
</template>
<script>
import headtop from '../../../components/header/head'
export default {
    name:'iphone',
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
.Res{padding:.6rem 0.74rem 0;}
.Res .pic{width: 4rem;height: 2.4rem;background:url(../../../images/res_bg.png) no-repeat;background-size: 100%;background-position:center ;margin: .5rem auto;}
.Res .Userpassword{width: 4rem;height: 2.4rem;background:url(../../../images/password_bg.png) no-repeat;background-size: 100%;background-position:center ;margin: .7rem auto .5rem;}
.Res .box{border: 1px solid #d7d7d7;height: .6rem;margin-bottom: .44rem;}
.Res .box input{border: transparent;outline: none;height: .58rem;margin-left:.7rem;width: 4rem;font-size: .24rem;}
.Res .iphone{background: url(../../../images/iphone.png) no-repeat;background-position: .2rem center;background-size:.3rem ;}
.Res .ps{background: url(../../../images/ps.png) no-repeat;background-position: .2rem center;background-size:.3rem ;}
.Res .box span{float: right;width: 2.1rem;height: .6rem;background: #003a76;text-align: center;line-height: .6rem;color: #fff;font-size: .18rem}
.Res a{display: block;height: .9rem;color: #fff;line-height: .9rem;text-align: center;font-size: .3rem;background: #e11d28;border-radius: 6px;}
.Useiphone{width: 100%;height: 3.26rem;background:url(../../../images/iphone_bg.png) no-repeat;background-size: 100%;background-position:center ;padding: 0;}
</style>

