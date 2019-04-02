<template>
    <div>
        <div class="nav">
			<ul>
				<li :class=" index ==0 ? 'active' :'' ">
					<router-link to="/">
					<a><p>首页</p></a>
					</router-link>
				</li>
				<li :class=" index ==1 ? 'active' :'' ">
					<router-link to="/list">
					<a ><p>商城</p></a>
					</router-link>
				</li>
				<li>
					<router-link to="/custome">
					<a ><p>联系客服</p></a>
					</router-link>
				</li>
				<li :class=" index ==3 ? 'active' :'' ">
					<router-link to="/user">
					<a><p>我的</p></a>
					</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
    name:'tabar',
    data () {
        return {
            
        }
	},
	props: ['index'],
	created() {
		if (this.index) {
			console.log(this.index)
		}
	},
	methods: {
		togo(path){
			this.$router.push(path)
		}
	},
}
</script>

<style scope>
.nav{height: 1rem;border-top: 1px solid #d2d2d2;position: fixed;bottom: 0;width: 100%;background: #fff;}
.nav a{display: block;width: 100%;height:1rem;float: left;}
.nav li:nth-child(1){background: url(../../images/nav_hone.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li:nth-child(2){background: url(../../images/nav_shop.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li:nth-child(3){background: url(../../images/nav_call.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li:nth-child(4){background: url(../../images/nav_user.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li.active:nth-child(1){background: url(../../images/nav_home1.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li.active:nth-child(2){background: url(../../images/nav_shop1.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li.active:nth-child(3){background: url(../../images/nav_call1.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li.active:nth-child(4){background: url(../../images/nav_user1.png) no-repeat;background-position:center .1rem ;background-size:.4rem ;}
.nav li{display: block;float: left;width: 25%;position: relative;}
.nav li p{text-align: center;font-size: .24rem;color: #8a8a8a;line-height: .4rem;margin-top: .54rem;}
</style>
