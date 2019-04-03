<template>
    <div>
        <headtop back="true" title="新增地址"></headtop>
        <div class="I_con" style="padding:.88rem .2rem 0;background: transparent;">
			<div class="address_box clearfix" style="border: 1px solid #e7eff5;padding: .24rem;padding-bottom: 3rem;">
				<form>
					<div class="box fontclear">
						<input type="text" placeholder="姓名:"/>
					</div>
					<div class="box fontclear">
						<input type="text" placeholder="电话："/>
					</div>
					<div class="box fontclear">
						<input type="text" placeholder="地址："/>
					</div>
					<div class="box fontclear">
						<input type="text" placeholder="邮编："/>
					</div>
					<a class="buttom" style="bottom: 1.8rem;">保存</a>
				</form>
			</div>
		</div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'add',
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
body{background: transparent}
.address_box{background: #fff;margin-top: .2rem;padding: .18rem;position: relative;}
.address_box a.buttom{width: 2.4rem;height: 0.64rem;line-height: .64rem;text-align: center;font-size: .22rem;color: #fff;position: absolute;bottom: -1.6rem;left: 50%;margin-left: -1.2rem;background: linear-gradient(to right, #ff7402 0%,#ff4a00 100%);}
.address_box .address{padding: .18rem;}
.address_box .box{height: .62rem;background: #f6f6f6;margin-top: .26rem;}
.address_box .box input{height: .62rem;border: none;outline: none;background: transparent;width: 100%;padding: 0 .3rem;font-size: .24rem}
</style>
