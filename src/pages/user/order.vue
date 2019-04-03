<template>
    <div>
        <headtop back='true' title="我的订单"></headtop>
        <div class="orderChoose">
			<div class="box clearfix">
				<a href="order.html"><p class="active">全部</p></a>
				<a href="order_wait.html"><p >待支付</p></a>
				<a href="order_already.html"><p >待发货</p></a>
				<a href="order_receipt.html"><p >待收货</p></a>
			</div>
		</div>
		<div class="orderList">
			<ul>
				<li>
					<p class="TPname">
						立白洗衣液
						<img src="../../images/order1.png" />
					</p>
					<div class="Tbox">
						<div class="Timg">
							<img src="../../images/product_detail.png" />
						</div>
						<div class="Tmess">
							<p class="Ttitlename">立白洗衣液</p>
							<p class="Tmoney"><img class="bb" src="../../images/detail.png" />
								<span>200萝卜干</span>×1</p>
						</div>
					</div>
					<div class="Tpay">
						<p>支付萝卜干： <span>200</span>（免运费）</p>
					</div>
					<div class="buttom">
						<a class="again">再次兑换</a>
						<a class="detel">删除订单</a>
					</div>
					<div style="height: .14rem;margin:0 -.16rem;background: #F5F5F5;"></div>
				</li>
				<li>
					<p class="TPname">
						立白洗衣液
						<img src="../../images/order1.png" />
					</p>
					<div class="Tbox">
						<div class="Timg">
							<img src="../../images/product_detail.png" />
						</div>
						<div class="Tmess">
							<p class="Ttitlename">立白洗衣液</p>
							<p class="Tmoney"><img class="bb" src="../../images/detail.png" />
								<span>200萝卜干</span>×1</p>
						</div>
					</div>
					<div class="Tpay">
						<p>支付萝卜干： <span>200</span>（免运费）</p>
					</div>
					<div class="buttom">
						<a class="again">再次兑换</a>
						<a class="detel">删除订单</a>
					</div>
					<div style="height: .14rem;margin:0 -.16rem;background: #F5F5F5;"></div>
				</li>
				<li>
					<p class="TPname">
						立白洗衣液
						<img src="../../images/order1.png" />
					</p>
					<div class="Tbox">
						<div class="Timg">
							<img src="../../images/product_detail.png" />
						</div>
						<div class="Tmess">
							<p class="Ttitlename">立白洗衣液</p>
							<p class="Tmoney"><img class="bb" src="img../../images/detail.png" />
								<span>200萝卜干</span>×1</p>
						</div>
					</div>
					<div class="Tpay">
						<p>支付萝卜干： <span>200</span>（免运费）</p>
					</div>
					<div class="buttom">
						<a class="again">再次兑换</a>
						<a class="detel">删除订单</a>
					</div>
					<div style="height: .14rem;margin:0 -.16rem;background: #F5F5F5;"></div>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'order',
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
.orderChoose{padding: 1.08rem .16rem .2rem;background: #f5f5f5;}
.orderChoose .box p{display: block;width: 23%;height: .78rem;border: 1px solid #e6e6e6;background: #fff;float:left;margin: 0 1%;font-size: .22rem;box-sizing: border-box;line-height: .78rem;text-align: center;color: #3b3b3b;}
.orderChoose .box p.active{border-color:#fd692b;}
.orderList{}
.orderList li{display: block;padding: 0 .16rem ;}
.orderList li p.TPname{line-height: .6rem;font-size: .22rem;color: #2a2a2a;padding-left: .4rem;position: relative;}
.orderList li p.TPname img{padding-left: .2rem;width: .2rem;padding-top: .1rem;}
.orderList li p.TPname a.paystate{position: absolute;right: 0rem;padding: 0rem .4rem;text-align: center;color: #fff;background: #eb361c;font-size: .22rem;line-height: .3rem;border-radius: .15rem;top: .15rem;}
.orderList li .Tbox{height: 1.9rem;border: 1px solid #abd0e0;box-sizing: border-box;}
.orderList li .Tbox .Timg{width: 33.3%;float: left;height: 1.9rem;}
.orderList li .Tbox .Timg img{display: block;width: 90%;height: 90%;margin: 3%;}
.orderList li .Tbox .Tmess{width: 66.6%;float: right;height: 1.9rem;}
.orderList li .Tbox .Tmess p{font-size: .22rem;margin-top: .8rem;float: left;display: block;width: 50%;}
.orderList li .Tbox .Tmess p.Ttitlename{text-align: right;}
.orderList li .Tbox .Tmess p.Tmoney{text-align: left;}
.orderList li .Tbox .Tmess p.Tmoney img{float: left;margin: -.06rem .18rem 0;width: .4rem;}
.orderList li .Tbox .Tmess p.Tmoney span{color: #ff4c00;}
.orderList li .Tpay{height: .6rem;border-bottom: 1px solid #e9e9e9;}
.orderList li .Tpay p{font-size: .22rem;text-align: right;line-height: .6rem;padding-right: .2rem;}
.orderList li .Tpay p span{color: #ff4c00;}
.orderList li .buttom{margin: .2rem 0;height: .6rem;}
.orderList li .buttom a{float: right;display: block;width: 1.56rem;height: .6rem;color: #fff;text-align: center;line-height: .6rem;font-size: .24rem}
.orderList li .buttom a.detel{background: linear-gradient(to right, #ffc900 0%,#ff9503 100%);}
.orderList li .buttom a.again{background: linear-gradient(to right, #ff7402 0%,#ff4a00 100%);}
</style>
