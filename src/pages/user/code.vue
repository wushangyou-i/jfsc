<template>
    <div class="codebg">
        <headtop back='true' title="邀请二维码"></headtop>
        <div class="Yaocode">
			<img src="../../images/code_yaoqing.png" />
			<a>点击邀请好友</a>
		</div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'code',
    data() {
        return {
            
        }
    },
    components:{
        headtop
    }
}
</script>
<style scope>
.codebg{background: url(../../images/code_bg.jpg);background-position:center;background-size: 100%;position: absolute;left: 0;top: 0;right: 0;bottom: 0 }
.Yaocode{width: 4.3rem;height: 4.3rem;position: absolute;top: 50%;margin-top: -2.4rem;left: 50%;margin-left: -2.15rem;}
.Yaocode img{display: block;width: 100%;height: 100%;}
.Yaocode a{display: block;width: 1.88rem;height: .64rem;text-align: center;line-height: .64rem;color: #fff;font-size: .24rem;background: #fd6905;position: absolute;bottom: -1.4rem;left: 50%;margin-left: -.94rem;font-weight: 600;}
</style>
