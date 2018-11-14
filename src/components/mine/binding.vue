<template class="bd">
    <div class="binding">
        <form @submit.prevent="submit">
        <div>
            <div class="binding_title">個人信息</div>
            <p>
                <label for="useName">客户姓名：</label>
                <input type="text"  v-model="list.useName" placeholder="请输入您的姓名">
            <p>
                <label for="useName">证件类型：</label>
                <input type="text"  placeholder="请选择证件类型">
            </p>
            <p>
                <label for="useName">证件号：</label>
                <input type="text"  v-model="list.useid" maxlength="18" placeholder="请输入您的身份证号">
            </p>
        </div>
       
        <div>
            <div class="binding_title">银行卡信息</div>
            <p>
                <label for="useName">银行卡号：</label>
                <input type="text"  v-model="list.card" placeholder="请输入银行卡号">
            </p>
            <p>
                <label for="useName">预留手机号：</label>
                <input type="text"  v-model="list.number" maxlength="11" placeholder="请输入11位数手机号">
            </p>
            <p class="clear">
                <label for="useName">验证码：</label>
                <input type="text"  v-model="list.yzm" placeholder="输入验证码">
                <button class="yzm">获取验证码</button>
            </p>
            <div class="binding_title">
                支持银行
            </div>
        </div>
     
        <div>
            <p>
                <label for="useName">开通授权</label>
                <input type="text"  v-model="list.ktsq" placeholder="授权投标">
            </p>
        </div>

        <div>
            <div class="binding_title">
                设置交易密码
            </div>
            <p>
                <label for="useName">交易密码</label>
                <input type="text"  v-model="list.pws" placeholder="输入交易密码">
            </p>
            <p>
                <label for="useName">确认密码</label>
                <input type="text"  v-model="list.pwss" placeholder="输入交易密码">
            </p>

            <div class="binding_title">密码由6-18位英文字母、数字或者符号组成</div>
        </div>
        </form>  
        <button class="sumbit" type="submit" @click="submit()">同意协议确认绑定</button>
        <transition name="fade">
			<div v-if="close" class="prompt">{{ message }}</div>
		</transition>
    </div>
</template>
<script>
export default {
  data:function(){
     return{
         list:{
            useName:"",
            useid:"",
            card:"",
            number:"",
            yzm:"",
            ktsq:"",
            pws:"",
            pwss:""
         },
         message:"",
         close:false
     }
  },
//watch:{
//    list:{
//        handler:function(val){
//           console.log(val)
//          //  var nameReg=/^[\u4e00-\u9fa5]{2,6}$/
//          //  if(list.useName!=''){
//               
//
//          //  }
//        },
//         deep:true
//
//    }
//},
  methods:{
      submit:function(){
          var _this=this
//      _this.$http.post('',{
//      	params:{
//      		
//      	}
//      }).then(function(res){
//      	console.log(1111)
//      }).catch(function(err){
//      	console.log(2222)
//      })
         if(_this.list.useName==''){
             
             _this.message="请输入客户姓名"
              console.log('_this.message="请输入客户姓名"')
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else if(_this.list.useid==''){
             _this.message="请输入身份证号"
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else if(_this.list.card==''){
             _this.message="请输入银行卡号"
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else if(_this.list.number==''){
             _this.message="请输入手机号"
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else if(_this.list.yzm==''){
             _this.message="请输入验证码"
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else if(_this.list.pws==''){
             _this.message="请输入密码"
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else if(_this.list.pwss==''){
             _this.message="请确认密码"
             _this.close=true
             setTimeout(function () {
						_this.close = false;
					},2000);
         }else{
             
         }
      }
  }
}
</script>
<style lang="less" scoped>
.bd {
    height: 100%;
   
}

.binding {
    height: 100%;
   background-color: #cccccc;
    padding: 10px;
        margin-bottom: 50px;
        position: relative;
    div{
        background-color: #ffffff;
        p{
            border-bottom:2px solid #ccc;
            line-height: 45px;
                padding-left: 15px;
                font-size: 14px;
                .yzm{
                    float: right;
                    width: 100px;
                    height: 32px;
                    // margin: 11px;
                     background-color: #406dbf;
                     color: #fff;
                     border-radius: 5px;
                        margin: 5px 5px 5px 0;
                 
                }
        }
        .binding_title{
            line-height: 45px;
              background-color: #cccccc;
              padding-left: 15px;
        }
    }
    .sumbit{
        display: block;
        margin: 10px auto;
        text-align: center;
        line-height: 45px;
        border-radius:10px;
        background-color: #406dbf;
        color: #fff;
        font-size: 16px; 
            width: 100%;
    }
    .prompt{
        display: inline-block;
        position: absolute;
        background: rgba(0,0,0,0.5);
        z-index: 10000000; 
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 10px;
        padding: 10px 5px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        width:70%;
        // height: 100%;
    }
}
</style>
