<template>
    <div>
        <headtop back='true' title="个人信息"></headtop>
        <div class="infor">
			<div class="box tou">
				<div class="tu"></div>
				<div class="shuchu">
					<input  placeholder="头像"/>
					<img src="../../images/touxiang.png"  class="TX"/>
				</div>
			</div>
			<div class="box InforName">
				<div class="tu"></div>
				<div class="shuchu">
					<input  placeholder="昵称"/>
				</div>
			</div>
			<div class="box max">
				<div class="tu"></div>
				<div class="shuchu">
					<input  placeholder="性别"/>
				</div>
			</div>
			<div class="box BDay">
				<div class="tu"></div>
				<div class="shuchu">
					<input  placeholder="生日"/>
				</div>
			</div>
			<div class="box weixin">
				<div class="tu"></div>
				<div class="shuchu">
					<input  placeholder="绑定微信"/>
				</div>
			</div>
		</div>
		<div class="Inforbutton">
			<a >保存</a>
		</div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'info',
    data () {
        return {
            
        }
    },
    components:{
        headtop
    }
}
</script>
<style>
.infor{padding-top: .88rem;background: #f0f0f0;padding-bottom: .2rem;}
.infor .box{margin: .2rem .2rem 0;border: 1px solid #e9e9e9;height: .94rem;background: #fff;}
.infor .box .tu{float: left;width: .94rem;height: .94rem;border-right: 1px solid #e9e9e9;}
.infor .box .shuchu{position: relative;float: left;width: 80%;}
.infor .box .shuchu img.TX{width: .76rem;height: .76rem;border-radius: 50%;position: absolute;right: -.1rem;top: .09rem;}
.infor .box .shuchu input{margin-left: .2rem;border: none;outline: none;width: 80%;height: .9rem;float: left;font-size: .24rem}
.infor .box.tou .tu{background: url(../../images/infor1.png) no-repeat;background-position: center;background-size: 50%;}
.infor .box.InforName .tu{background: url(../../images/infor2.png) no-repeat;background-position: center;background-size: 40%;}
.infor .box.max .tu{background: url(../../images/infor3.png) no-repeat;background-position: center;background-size: 50%;}
.infor .box.BDay .tu{background: url(../../images/infor4.png) no-repeat;background-position: center;background-size: 50%;}
.infor .box.weixin .tu{background: url(../../images/weixin.png) no-repeat;background-position: center;background-size: 50%;}
.Inforbutton a{width: 2.6rem;height: .73rem;font-size: .22rem;color: #fff;display: block;text-align: center;line-height: .73rem;background: linear-gradient(to left, #e62b21 0%,#ff7b18 100%);margin:.6rem auto 0;}
</style>

