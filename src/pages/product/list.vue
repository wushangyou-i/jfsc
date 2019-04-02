<template>
    <div >
		<headtop back="true" title="商城列表"></headtop>
		<div class="I_con" style="padding-top: .88rem;background: transparent;padding-bottom: 0;">
			<div class="PchooseList clearfix">
				<span class="active quan">全部</span>
				<span>价格</span>
			</div>
		</div>
		<div class="I_con">
			<div class="indexlist clearfix">
				<ul>
					<li v-for="(item,index) in list" :key="index" :class="item.hot==1?'hot':''">
						<router-link :to="{path:'/detail',query:{id:item.id}}">
						<div class="picbox">
							<img :src="item.url" />
						</div>
						<p>{{item.name}}<a class="name">{{item.price}}萝卜干</a></p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<taber index="1"></taber>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
import taber from '../../components/tabar/tabar'
export default {
    name:'prolist',
    data () {
        return {
            list:[
				{
					name:"蓝月亮洗衣液",
					price:'200',
					url:"/static/images/list16.png",
					hot:'1',
					id:1,
				},
				{
					name:"蓝月亮洗衣液",
					price:'500',
					url:"/static/images/list17.png",
					hot:'1',
					id:2,
				},
				{
					name:"蓝月亮洗衣液",
					price:'400',
					url:"/static/images/list18.png",
					hot:'0',
					id:3,
				},
				{
					name:"蓝月亮洗衣液",
					price:'100',
					url:"/static/images/list19.png",
					hot:'1',
					id:4,
				},
				{
					name:"蓝月亮洗衣液",
					price:'100',
					url:"/static/images/list19.png",
					hot:'1',
					id:5,
				},
			]
        }
	},
	components:{
		headtop,
		taber
	},
	
}
</script>
<style scope>
.PchooseList{margin: .2rem .2rem;}
.PchooseList span{display: block;width: 48%;box-sizing: border-box;height: 0.72rem;border: 1px solid #f1f1f1;text-align: center;line-height: .72rem;font-size: .24rem;float: left;background: #fff;}
.PchooseList span.active{border: 1px solid #fd6705;}
.PchooseList span.quan{margin-right: 4%;}
.indexlist{padding-bottom: 1rem;}
.indexlist li{display: block;width: 50%;float: left;border-bottom: 1px solid #efefef;border-right: 1px solid #efefef;box-sizing: border-box;position: relative;}
.indexlist li .picbox{width: 2.3rem;height: 2rem;margin:.3rem auto .2rem;}
.indexlist li .picbox img{display: block;width: 100%;height: 100%;}
.indexlist li p{font-size: .24rem;text-align: center;margin-bottom: .2rem;}
.indexlist li p a.name{padding: .05rem .16rem;border-radius: .2rem;background: #eeae00;color: #fff;margin-left: .2rem;}
.indexlist li.hot:before{content: "";width: .39rem;height: .39rem;background: url(../../images/index_hot.png) no-repeat;position: absolute;right: .2rem;top: .2rem;background-position: center;background-size:.36rem ;}
</style>

