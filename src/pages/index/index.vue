<template>
    <div>
        <div class="ITop">
			<div class="ITopSearch fontclear">
				<div class="logo">
					<img />
				</div>
				<div class="search">
					<input type="text" placeholder="输入您想要的积分商品"/>
				</div>
			</div>
		</div>
		<div class="bcon">
			<!--<div class="banner">
				<img src="img/banner.jpg" />
			</div>-->
			<div class="swiper-container banner">
				<div class="swiper-wrapper">
				    <div class="swiper-slide"><img src="../../images/banner.jpg" /></div>
				    <div class="swiper-slide"><img src="../../images/banner.jpg" /></div>
				    <div class="swiper-slide"><img src="../../images/banner.jpg" /></div>
				</div>
				<div class="swiper-pagination fenye"></div>
			</div>
		</div>
		<div class="I_con">
			<div class="INav clearfix">
				<ul>
					<li v-for="(item,index) in nav" :key="index">
						<div class="Limg">
							<img :src="item.url" />
						</div>
						<p>{{item.text}}</p>
						
					</li>
					<!-- <li >
						<div class="Limg">
							<img src="" />
						</div>
						<p>{{item.text}}</p>
						
					</li> -->
				</ul>
			</div>
		</div>
		<div class="I_con" style="margin-top: .1rem;padding-bottom: .2rem;">
			<div class="I_title">
				<div class="Tbg">
					<p>萝卜干抽奖大转盘</p>
				</div>
			</div>
			<div class="ZP">
				<div class="zhuangpan">
					<div class="Zpic turnplate" id="wheelcanvas">
						<img src="../../images/zhuanpan_wai.png" />
					</div>
					
					<div class="nei pointer">
						<img src="../../images/zhuanpan_nai.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="I_con" style="margin-top: .1rem;">
			<div class="P_title">
				<p>推荐商品</p>
				<a>更多</a>
			</div>
			<div class="indexlist clearfix">
				<ul>
					<li class="hot">
						<a href="product_detail.html">
						<div class="picbox">
							<img src="../../images/list16.png" />
						</div>
						<p>蓝月亮洗衣液<a>200萝卜干</a></p>
						</a>
					</li>
					<li class="hot">
						<a href="product_detail.html">
						<div class="picbox">
							<img src="../../images/list17.png" />
						</div>
						<p>蓝月亮洗衣液<a>200萝卜干</a></p>
						</a>
					</li>
					<li>
						<a href="product_detail.html">
						<div class="picbox">
							<img src="../../images/list18.png" />
						</div>
						<p>蓝月亮洗衣液<a>200萝卜干</a></p>
						</a>
					</li>
					<li>
						<a href="product_detail.html">
						<div class="picbox">
							<img src="../../images/list19.png" />
						</div>
						<p>蓝月亮洗衣液<a>200萝卜干</a></p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<tabar index="0"></tabar>
    </div>
</template>
<script>
import tabar from '../../components/tabar/tabar'
import Swiper from 'swiper' 
export default {
    name:'index',
    data () {
        return {
            nav:[
				{
					text:'衣服鞋帽',
					url:'/static/images/list1.png',
					path:{}
				},
				{
					text:'家居清洁',
					url:'/static/images/list2.png',
					path:{}
				},
				{
					text:'洗护美妆',
					url:'/static/images/list3.png',
					path:{}
				},
				{
					text:'收纳日用',
					url:'/static/images/list4.png',
					path:{}
				},
				{
					text:'母婴用品',
					url:'/static/images/list5.png',
					path:{}
				},
				{
					text:'家用电器',
					url:'/static/images/list6.png',
					path:{}
				},
				{
					text:'副食清洁',
					url:'/static/images/list7.png',
					path:{}
				},
				{
					text:'共享单车',
					url:'/static/images/list8.png',
					path:{}
				},
				{
					text:'闲置品交换',
					url:'/static/images/list9.png',
					path:{}
				},
				{
					text:'共享矿泉水',
					url:'/static/images/list10.png',
					path:{}
				},
				{
					text:'闲置品交换',
					url:'/static/images/list11.png',
					path:{}
				},
				{
					text:'装修物业',
					url:'/static/images/list12.png',
					path:{}
				},
				{
					text:'贷款专区',
					url:'/static/images/list13.png',
					path:{}
				},
				{
					text:'广告策划',
					url:'/static/images/list14.png',
					path:{}
				},
				{
					text:'任务大厅',
					url:'/static/images/list15.png',
					path:{}
				}
			]
        }
    },
    mounted () {
       new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
			 loop : true,
			 pagination: {
			    el: '.swiper-pagination',
			  },
		})
    },
    components:{
        tabar
    }
}
</script>
<style scope>
body{
    background: #f5f5f5;
}
*{
    padding: 0;
    margin: 0
}
.clearfix {zoom: 1;}
.clearfix:after{content: '';clear: both;display: block ;height: 0 ;visibility: hidden;}
.top{height: .88rem;position: fixed;top: 0;width: 100%;z-index: 998; background: linear-gradient(to bottom, #e62b21 0%,#ff7b18 100%);}
.top span{display: block;width: 1.2rem;height: 100%;background: url(../../images/top_back_bg.png) no-repeat;position:absolute;top: 0;left: 0;background-size:.16rem;background-position:center ;}
.top p{line-height: .88rem;text-align: center;font-size: .28rem;color: #fff;}
.ITop{height: .88rem;position: fixed;top: 0;width: 100%;z-index: 998; background: #e11d29;}
.ITop .ITopSearch{margin:0 .3rem;}
.ITopSearch .logo{float: left;width: .7rem;height: .88rem;}
.ITopSearch .logo img{display: block;width: 100;height: 100%;}
.ITopSearch .search{width: 4.9rem;height: .88rem;float: right;background: url(../../images/search.png) no-repeat;background-position:4.2rem center;background-size:.4rem ;}
.ITopSearch .search input{border: none;border-bottom: 1px solid #fff;background: transparent;width: 4rem;height: .7rem;padding:0 8px;outline: none;margin-top: .06rem;float: left;font-size: .24rem;color: #fff;}
.ITopSearch .search input::-webkit-input-placeholder{color: #ff989e;}
.ncon{padding: .88rem .2rem 0;}
.Start{position: absolute;width: 2.8rem;height: .74rem;background: #fff;border-radius: 6px;left: 50%;margin-left: -1.4rem;bottom: 1.45rem;}
.Start a{text-align: center;line-height: .74rem;color: #000;font-size: .36rem;display: block;font-weight: 500;}

.bcon{margin-top: .88rem;}
.banner{height: 2.6rem;overflow: hidden;position: relative;}
.banner img{display: block;width: 100%;}
.banner .fenye span{width: .16rem;height: .16rem;border-radius: 50%;background: #fff;margin: 0 .1rem!important;}
.banner .fenye{bottom: .04rem;}
.I_con{background: #fff;}
.INav{padding: .4rem .3rem 0rem;}
.INav li{display: block;float: left;width: 20%;text-align: center;margin-bottom: .2rem;}
.INav li .Limg img{display: block;width: .8rem;height: .8rem;position: absolute;left: 50%;margin-left: -.4rem;}
.INav li .Limg{width: 100%;height: .8rem;text-align: center;position: relative;}
.INav li  p{font-size: .2rem;line-height: .4rem;color: #6a6a6a;}
.I_title{border-bottom: 1px solid #ededed;height: .5rem;}
.I_title .Tbg{width: 4.3rem;margin: 0 auto;height: .5rem;position: relative;background:url(../../images/itbg.png) no-repeat;background-position:1rem center ;background-size:.4rem ;}
.I_title .Tbg:before{content: "";width: 1rem;left: 0;height: .4rem;top: 0.05rem;background:url(../../images/title_l.png) no-repeat ;position: absolute;background-position:left center;background-size:.7rem ;}
.I_title .Tbg:after{content: "";width: 1rem;right: 0;height: .4rem;top: 0.05rem;background:url(../../images/title_r.png) no-repeat;position: absolute;background-position:right center;background-size:.7rem ;}
.I_title .Tbg p{font-size: .22rem;text-align: center;line-height: .5rem;padding-left: .46rem;}
.ZP{}
.ZP .zhuangpan{width: 5.34rem;height: 5.34rem;margin: .34rem auto;box-shadow: 0px 0px 30px #ececec;border-radius: 50%;position: relative;}
.ZP .zhuangpan .Zpic{width: 5rem;height: 5rem;position: absolute;left: 50%;margin-left: -2.5rem;top: 50%;margin-top: -2.5rem;border-radius: 50%;}
.ZP .zhuangpan .Zpic img{display: block;width: 100%;height: 100%;}
.ZP .zhuangpan .nei{width: 1.46rem;height: 1.46rem;position: absolute;left: 50%;margin-left: -.73rem;top: 50%;margin-top: -.73rem;border-radius: 50%;}
.ZP .zhuangpan .nei img{display: block;width: 100%;height: 100%;}
.P_title{height: .6rem;border-bottom: 1px solid #ededed;position: relative;background: url(../../images/index_pro.png) no-repeat;background-size:.4rem ;background-position: .3rem center;}
.P_title p{line-height: .6rem;color: #f14400;font-size: .24rem;padding-left: .8rem;}
.P_title a{font-size: .24rem;color: #565656;position: absolute;right: .6rem;top: .1rem;}
.P_title a:after{content: "";width: .2rem;height: .26rem;background: url(../../images/indexpb.png) no-repeat;background-size:.1rem ;position: absolute;right: -.3rem;top: 50%;margin-top: -.11rem;}
.indexlist{padding-bottom: 1rem;}
.indexlist li{display: block;width: 50%;float: left;border-bottom: 1px solid #efefef;border-right: 1px solid #efefef;box-sizing: border-box;position: relative;}
.indexlist li .picbox{width: 2.3rem;height: 2rem;margin:.3rem auto .2rem;}
.indexlist li .picbox img{display: block;width: 100%;height: 100%;}
.indexlist li p{font-size: .24rem;text-align: center;margin-bottom: .2rem;}
.indexlist li p a.name{padding: .05rem .16rem;border-radius: .2rem;background: #eeae00;color: #fff;margin-left: .2rem;}
.indexlist li.hot:before{content: "";width: .39rem;height: .39rem;background: url(../../images/index_hot.png) no-repeat;position: absolute;right: .2rem;top: .2rem;background-position: center;background-size:.36rem ;}
</style>

