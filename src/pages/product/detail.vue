<template>
    <div>
        <headtop back="true" title="商品详情"></headtop>
        <div class="ncon" >
			<div class="bigimg">
				<img src="../../images/product_detail.png" />
			</div>
			<div class="pro_mess">
				<table>
					<thead>
						<tr>
							<th colspan="2">蓝月亮洗护合一洗衣液</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>品牌：蓝月亮</td>
							<td>商品类别：洗衣液</td>
						</tr>
						<tr>
							<td>规格：3KG</td>
							<td>保质期：3年</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="pro_dmess clearfix">
				<div class="pshop fontclear">
					<span class="pro">蓝月亮洗衣液</span>
					<span class="kuaidi">快递：<a>0</a></span>
				</div>
				<div class="pmoney">
					<img src="../../images/detail.png" />
					<p>200萝卜干</p>
				</div>
			</div>
		</div>
		<div class="buy">
			<router-link to="/custome"><p class="conact">联系客服</p></router-link>
			<router-link to="/pchange"><p class="huan">立即兑换</p></router-link>
		</div>

		
    </div> 
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'detail',
    data () {
        return {
			id:''
        }
    },
    components:{
        headtop
	},
	created () {
		this.id = this.$route.query.id;
	}
}
</script>
<style scope>
.fontclear{font-size: 0}
.bigimg{margin-top: .2rem;height: 5.3rem;border: 1px solid #e5e5e5;text-align: center;position: relative;}
.bigimg img{width: 4rem;height: 4rem;position: absolute;left: 50%;margin-left: -2rem;top: 50%;margin-top: -2rem;}
.pro_mess{margin-top: .2rem;}
.pro_mess table{border:1px solid #c2e5f8;font-size: .22rem;width: 100%;border-collapse:collapse;}
.pro_mess table tr td,.pro_mess table tr th{border:1px solid #c2e5f8;}
.pro_mess table thead tr{height: .48rem;background: #c2e5f8;color: #00568c;font-weight: normal;}
.pro_mess table tbody tr{height: .54rem;color: #4d4d4d;}
.pro_mess table tbody tr td{padding-left: .4rem;}
.pro_dmess{height: .8rem;border: 1px solid #e5e5e5;margin-top: .2rem;}
.pro_dmess .pshop{width: 65%;border-right: 1px solid #e5e5e5;height: .8rem;float: left;box-sizing: border-box;}
.pro_dmess .pshop span{line-height: .8rem;font-size: .22rem}
.pro_dmess .pshop span.pro{color: #0f2582;padding-left: .8rem;}
.pro_dmess .pshop span.kuaidi{float: right;padding-right: .4rem;}
.pro_dmess .pshop span.kuaidi a{color: #f34c12;}
.pro_dmess .pmoney{width: 35%;height: .8rem;float: left;position: relative;}
.pro_dmess .pmoney img{width: 0.54rem;height: .54rem;position: absolute;left: .2rem;top: .13rem;}
.pro_dmess .pmoney p{font-size: .22rem;text-align: center;line-height: .8rem;padding-left: .6rem;color: #ff3c00;}
.buy{height: .8rem;position: fixed;bottom: 0;border-top: 1px solid #c1c1c1;width: 100%;}
.buy p{display: block;line-height: .8rem;float: left;font-size: .22rem;text-align: center;height: .8rem;}
.buy p.conact{width: 35%;background: #fff;color: #000;}
.buy p.huan{width: 65%;background: #f34c12;color: #fff;}
</style>

