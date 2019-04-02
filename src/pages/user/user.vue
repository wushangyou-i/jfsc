<template>
    <div>
        <div class="user_bg">
			<img src="../../images/touxiang.png" />
			<p class="name">18607489234</p>
			<a>个人信息</a>
		</div>
		<div class="Ulist">
			<ul>
				<li>
					<a>我的订单</a>
					<span>查看全部</span>
				</li>
				<li>
					<a href="code.html">我的邀请码</a>
					<span>分享</span>
				</li>
				<li>
					<a href="integral.html">我的积分</a>
				</li>
				<li>
					<a href="adress.html">收货地址</a>
				</li>
				<li>
					<a href="security.html">账户安全</a>
				</li>
				<li>
					<a href="set.html">设置</a>
				</li>
			</ul>
		</div>
        <tabar index='3'></tabar>
    </div>
</template>
<script>
import tabar from '../../components/tabar/tabar'
export default {
    name:'user',
    data () {
        return {
            
        }
    },
    components:{
        tabar
    }
}
</script>
<style scope>
.user_bg{height: 3.3rem;background: url(../../images/user.jpg) no-repeat;background-size:100%;position: relative;}
.user_bg img{width: 1.56rem;height: 1.56rem;position: absolute;left: 50%;margin-left: -.78rem;top: 50%;margin-top: -1.3rem;border-radius: 50%;}
.user_bg p{text-align: center;font-size: .26rem;color: #fff;padding-top: 2.2rem;}
.user_bg a{display: block;width: 1.4rem;height: .3rem;text-align: center;font-size: .2rem;border-radius: .15rem;color: #fff;background: #4795f3;margin: .1rem auto 0;}
.Ulist{}
.Ulist li{display: block;line-height: .9rem;border-bottom: 1px solid #e5e5e5;padding: 0 .3rem;position: relative;}
.Ulist li:after{content: "";width: .2rem;height: .3rem;position: absolute;background: url(../../images/user_back.png) no-repeat;background-position:center ;right: .4rem;top: .3rem;background-size:.1rem ;}
.Ulist li a{display: block;line-height: .9rem;font-size: .24rem;padding-left: .6rem;}
.Ulist li span{position: absolute;font-size: .2rem;color: #4888ef;right: .7rem;top: 0;}
.Ulist li:nth-child(1){background: url(../../images/user1.png) no-repeat;background-position:.4rem center;background-size:.4rem ;}
.Ulist li:nth-child(2){background: url(../../images/user2.png) no-repeat;background-position:.4rem center;background-size:.4rem ;}
.Ulist li:nth-child(3){background: url(../../images/user3.png) no-repeat;background-position:.4rem center;background-size:.4rem ;}
.Ulist li:nth-child(4){background: url(../../images/user4.png) no-repeat;background-position:.4rem center;background-size:.4rem ;}
.Ulist li:nth-child(5){background: url(../../images/user5.png) no-repeat;background-position:.4rem center;background-size:.4rem ;}
.Ulist li:nth-child(6){background: url(../../images/user6.png) no-repeat;background-position:.4rem center;background-size:.4rem ;}
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
.Yaocode{width: 4.3rem;height: 4.3rem;position: absolute;top: 50%;margin-top: -2.4rem;left: 50%;margin-left: -2.15rem;}
.Yaocode img{display: block;width: 100%;height: 100%;}
.Yaocode a{display: block;width: 1.88rem;height: .64rem;text-align: center;line-height: .64rem;color: #fff;font-size: .24rem;background: #fd6905;position: absolute;bottom: -1.4rem;left: 50%;margin-left: -.94rem;font-weight: 600;}
</style>

