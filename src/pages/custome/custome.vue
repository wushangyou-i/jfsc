<template>
  <div>
    <headtop back="true" title="客服"></headtop>
    <div class="chating">
      <div class="box kefu clearfix">
        <div class="headimg">
          <img src="../../images/touxiang.png">
        </div>
        <div class="CMess">
          <p>你好：咱们的商品都是最新的呢</p>
        </div>
      </div>
      <div class="box kefu clearfix">
        <div class="headimg">
          <img src="../../images/touxiang.png">
        </div>
        <div class="CMess">
          <p>请放心兑换</p>
        </div>
      </div>
      <div class="box customer clearfix">
        <div class="headimg">
          <img src="../../images/touxiang.png">
        </div>
        <div class="CMess">
          <p>你好：咱们的商品都是最新的呢</p>
        </div>
      </div>
      <div class="time">
        <span>2018/1/15 18:00</span>
      </div>
      <div class="box kefu clearfix">
        <div class="headimg">
          <img src="../../images/touxiang.png">
        </div>
        <div class="CMess">
          <p>请放心兑换</p>
        </div>
      </div>
      <div class="box customer clearfix">
        <div class="headimg">
          <img src="../../images/touxiang.png">
        </div>
        <div class="CMess">
          <p>你好：咱们的商品都是最新的呢</p>
        </div>
      </div>
    </div>
    <div class="chatnav">
      <div class="inputbox fontclear">
        <input type="text">
        <div class="upimg">
          <p>图片</p>
        </div>
      </div>
      <a class="send">发送</a>
    </div>
  </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'custome',
    data () {
        return {
            
        }
    },
    components:{
        headtop
    }
}
</script>

<style>
.chating{padding:1.18rem .3rem 0rem;height: 11rem;overflow-y: scroll;}
.chating .box{margin: .1rem 0;width: 100%;}
.chating .box .headimg{width: .78rem;height: .78rem;float: left;border-radius: 50%;}
.chating .box .headimg img{display: block;width: 100%;height: 100%;}
.chating .box .CMess {float: left;border: 1px solid #e9e9e9;max-width: 4.9rem;margin-left: .2rem;margin-top: .05rem;}
.chating .box .CMess p{padding: .2rem .2rem;color: #555555;font-size: .22rem;background: #fff;}
.chating .box.customer .headimg{float: right;margin-left: .2rem;}
.chating .box.customer .CMess{float: right;}
.chating .time{border-top: 1px solid #d4d4d4;position: relative;margin: .4rem 0;}
.chating .time span{position: absolute;height: .2rem;line-height: .2rem;text-align: center;width: 1.55rem;top: -.1rem;background: #f4f4f4;left: 50%;margin-left: -.77rem;font-size: .16rem;}
.chatnav{height: 1rem;background: #fff;border-top: 1px solid #dadada;position: fixed;bottom: 0;width: 100%;}
.chatnav .inputbox{width: 67%;margin: .2rem 0 .2rem 4%;border: 2px solid #b9b9b9;height: .54rem;float: left;}
.chatnav .inputbox input{border: none;height: .54rem;outline: none;height: .53rem;padding-left: .2rem;width: 90%;font-size: .22rem;padding-right: .2rem;}
.chatnav .inputbox .upimg{float: right;width:10%;height: .54rem;border-left: 2px solid #b9b9b9;background: url(../../images/picture.png) no-repeat;background-position: center .06rem;box-sizing: border-box;background-size:.3rem ;}
.chatnav .inputbox .upimg p{text-align: center;font-size: .12rem;margin-top: .32rem;}
.chatnav a.send{width: 20%;height: .54rem;float: right;background: #ff4c00;color: #fff;font-size: .22rem;text-align: center;line-height: .54rem;margin: .2rem 4%;display: block; }
</style>

