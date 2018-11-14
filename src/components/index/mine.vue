<template>
    <div class="self">
        <v-title :title="title"></v-title>
        <div class="self_message clearfix">
            <div class="self_message_left">
                <img src="../../assets/img/tx.jpg" alt="">
            </div>
            <div class="self_message_right">
                <p> 奈何月不明</p>
                <p></p>
            </div>
        </div>
        <div class="self_list clearfix">
            <ul>
                <li>
                    <router-link :to="{name:'binding'}">绑定银行卡<span>></span></router-link>
                </li>
                <li>
                    <router-link :to="{name:'binding'}">修改登录密码<span>></span></router-link>
                </li>
                <li>
                    <router-link :to="{name:'binding'}">修改支付密码<span>></span></router-link>
                </li>
                <li>
                    客戶咨詢<span>></span>
                </li>
                <li>更多詳細<span>></span></li>
                <!--<li></li>
                    <li></li>-->
            </ul>
        </div>
    </div>
</template>

<script>
import Mtitle from '../common/title.vue';
export default {
    name: "app",
    data() {
        return {
            title: '個人中心'
        }
    },
    methods: {

    },
    components: {
        'v-title': Mtitle
    }
}
</script>

<style lang="less" scoped>
.self {
    .self_message {
        //   background-color: skyblue;
        padding: 15px 20px;
        vertical-align: middle;
        border-bottom: 1px solid #cccccc; //  line-height: 50px;
        .self_message_left {

            float: left;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        }
        .self_message_right {

            margin: 20px 0;
            float: right;
            line-height: 25px;
            margin-right: 100px;
        }
    }
    .clearfix:after {
        content: '.';
        display: block;
        height: 0px;
        clear: both;
        visibility: hidden;
    }
    .self_list {
        ul {
            padding: 10px 20px;

            li {
                clear: both;
                line-height: 30px;
                border-bottom: 1px solid #cccccc;
                a {
                    color: #000000;
                }
                span{
                    float: right;
                    font-weight: 700;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>