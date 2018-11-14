<template>
    <div>
       
        <form :action="url" name="" style="display:none;" method="post" id=form1>
            <!--此处url为第三方地址-->
            <input type="text" v-model="res.keySerial">
            <input type="text" v-model="res.platformNo">
            <input type="text" v-model="res.reqData">
            <input type="text" v-model="res.serviceName">
            <input type="text" v-model="res.sign">
            <button type="submit">1435613</button>
        </form>
        <button @click='sub'>第三方跳转</button> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: '',
            res: {
                keySerial: '',
                platformNo: '',
                reqData: '',



                 
                serviceName: '',
                sign: '',
            }

        }
    },
    created: function() {

    },
    methods: {
        slideAuto() {
            var url = 'http://192.168.1.151:3000/getinfo?name=2556'//1、本地连接地址请求第三方接口以及参数
            this.$http.get(url, {
            }).then(res => {
                console.log(res)
                this.res = { ...this.res, ...res.data };//2、得到需要传给第三方的参数，将参数赋值在form表单中
                this.url = res.data.url; //2.1得到第三方的请求地址
                return ''
               
            }).then(()=>{
                 form1.submit();  //3本地请求之后调用form表单中的请求
            }).catch(function(err) {

            })
        },
        sub() {
            this.slideAuto() //
        }
    }
}
</script>

<style>

</style>