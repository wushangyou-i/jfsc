<template>
    <div>
        <headtop back='true' title="收货地址"></headtop>
        <div class="I_con" style="padding:.88rem .2rem 0;background: transparent;">
            <div class="address_box">
                <div class="address active">
                    <ul>
                        <li><p>姓名：张学友</p></li>
                        <li><p>电话：18566562356</p></li>
                        <li><p>地址：广东省广州市天河区精钢大道合金小区A85</p></li>
                        <li><p>邮编：510510</p></li>
                    </ul>
                </div>
                <div class="address">
                    <ul>
                        <li><p>姓名：张学友</p></li>
                        <li><p>电话：18566562356</p></li>
                        <li><p>地址：广东省广州市天河区精钢大道合金小区A85</p></li>
                        <li><p>邮编：510510</p></li>
                    </ul>
                </div>
                <router-link to="/add">
                <a class="buttom">新增收货地址</a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import headtop from '../../components/header/head'
export default {
    name:'adress',
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
/* body{
    background: #c7e2f5;
} */
.address_box{background: #fff;margin-top: .2rem;padding: .18rem;position: relative;}
.address_box a.buttom{width: 2.4rem;height: 0.64rem;line-height: .64rem;text-align: center;font-size: .22rem;color: #fff;position: absolute;bottom: -1.6rem;left: 50%;margin-left: -1.2rem;background: linear-gradient(to right, #ff7402 0%,#ff4a00 100%);}
.address_box .address{padding: .18rem;}
.address_box .address.active{background: #f5fbff;}
.address_box .address li p{font-size: .24rem;padding-left: .4rem;line-height: .5rem;}
.address_box .address li:nth-child(1){background: url(../../images/adress1.png) no-repeat;background-position:left .08rem;background-size:.3rem ;}
.address_box .address li:nth-child(2){background: url(../../images/adress2.png) no-repeat;background-position:left .08rem;background-size:.3rem ;}
.address_box .address li:nth-child(3){background: url(../../images/adress3.png) no-repeat;background-position:left .08rem;background-size:.3rem ;}
.address_box .address li:nth-child(4){background: url(../../images/adress4.png) no-repeat;background-position:left .08rem;background-size:.3rem ;}
.address_box .box{height: .62rem;background: #f6f6f6;margin-top: .26rem;}
.address_box .box input{height: .62rem;border: none;outline: none;background: transparent;width: 100%;padding: 0 .3rem;font-size: .24rem}

</style>

