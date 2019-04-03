<template>
    <div>
        <headtop back="true" title="立即兑换"></headtop>
        <div class="padd" style="padding: 1.08rem .16rem .2rem;">
			<router-link to="/adress">
			<div class="adress">
				<a><p>请添加收货地址</p></a>
			</div>
			</router-link>
		</div>
		<div class="I_con" style="padding: 0 .16rem .2rem;">
			<p class="pname">蓝月亮洗衣液</p>
			<div class="proHbox">
				<div class="proImg">
					<img src="../../images/product_detail.png" />
				</div>
				<div class="proNum">
					<p class="name">蓝月亮洗衣液</p>
					<p class="num"><span>200萝卜干</span>×1</p>
				</div>
			</div>
		</div>
		<div class="clearfix" style="background: #F5F5F5;">
			<div class="Hprice">
				<ul>
					<li class="clearfix">
						<p class="left">运费：</p>
						<p class="right hong">¥：0.00</p>
					</li>
					<li class="clearfix">
						<img class="bb" src="../../images/detail.png" />
						<p class="left" style="padding-left: .8rem;">萝卜干：</p>
						<p class="right hong">- 200萝卜干</p>
					</li>
					<li class="clearfix">
						<p class="right">合计：<span style="color: #f34c12;">200</span></p>
					</li>
				</ul>
			</div>
		</div>
			
		<div class="buy">
			<p class="conact" style="width: 50%;">实付萝卜干：<a style="color: #f34c12;">200</a></p>
			<p class="huan" style="width: 50%;">确认兑换</p>
		</div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:"pchange",
    data () {
        return {
            
        }
    },
    components:{
        headtop,
    }
}
</script>
<style scope>
.padd{padding: 1.08rem .16rem .2rem;background: #f5f5f5;}
.padd .adress{height: 1.2rem;border: 1px solid #fc6705;background: url(../../images/adress.png) no-repeat;background-position:.3rem center;background-size:.5rem ;background-color: #fff;position: relative;}
.padd .adress p{padding-left: 1rem;color: #f6540e;font-size: .24rem;line-height: 1.2rem;}
.padd .adress:after{content: "";position: absolute;width: .2rem;height: .35rem;background: url(../../images/address_back.png) no-repeat;background-position:center ;right: .6rem;top: .45rem;}
.I_con p.pname{line-height: .6rem;font-size: .22rem;color: #2a2a2a;padding-left: .5rem;}
.proHbox{border: 1px solid #e5e5e5;height: 2.3rem;position: relative;}
.proHbox .proImg{float: left;width: 2.48rem;height: 2.3rem;}
.proHbox .proImg img{display: block;width: 100%;height: 100%;}
.proHbox .proNum{float: right;width: 2rem;height: 2.3rem;}
.proHbox .proNum p{font-size: .22rem;line-height: .4rem;}
.proHbox .proNum p.name{color: #0f2178;margin-top: .7rem;}
.proHbox .proNum p.num{color: #2a2a2a;}
.proHbox .proNum p.num span{color: #ee3f18;}
.Hprice{margin: .2rem .16rem .2rem;background: #fff;border: 1px solid #e5e5e5;}
.Hprice li{display: block;line-height: .9rem;border-bottom: 1px solid #E5E5E5;font-size: .24rem;padding: 0 .6rem;position: relative;}
.Hprice li p.left{float: left;}
.Hprice li p.right{float: right;}
.Hprice li p.hong{color: #ff3c00;}
.Hprice li img.bb{width: .55rem;height: .55rem;position: absolute;left: .6rem;top: .17rem;}
.buy{height: .8rem;position: fixed;bottom: 0;border-top: 1px solid #c1c1c1;width: 100%;}
.buy p{display: block;line-height: .8rem;float: left;font-size: .22rem;text-align: center;height: .8rem;}
.buy p.conact{width: 35%;background: #fff;color: #000;}
.buy p.huan{width: 65%;background: #f34c12;color: #fff;}
</style>

