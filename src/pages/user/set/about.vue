<template>
    <div>
        <headtop back="true" title="关于我们"></headtop>
        <div class="I_con aboutout">
			<h2>今天吃包子</h2>
			<p>今天吃包子今天吃包子今天吃包子今天吃包子今天吃包子今天吃包子今天吃包子今天吃包子今天吃包子</p>
		</div>
    </div>
</template>
<script>
import headtop from '../../../components/header/head'
export default {
    name:'about',
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
.aboutout{padding: 1.08rem .3rem 0;}
.aboutout h2{font-size: .32rem;text-align: center;color: #666;line-height: .5rem;}
.aboutout p{font-size: .24rem;color: #787878;line-height: .4rem;padding-top: .4rem;text-indent: 2em;}
.aboutout textarea{width: 100%;height: 3rem;border: 1px solid #ccc;outline: none;resize: none;color: #787878;padding: .2rem;font-size: .24rem;box-sizing: border-box;}
.aboutout a{border-radius: 10px;background: #ff7b18;color: #fff;font-size: .32rem;margin: .4rem auto;display: block;height: .8rem;line-height: .8rem;text-align: center;}

</style>
