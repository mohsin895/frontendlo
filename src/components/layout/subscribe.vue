<template>
    <div class="subscribe">
        <form @submit.prevent action="">
            <input type="text" placeholder="Email Address" v-model="email" class="form-control" required>
            <button class="search-button" @click="addSubscriber()">
                Subscribe
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name:'subscribe',
    data() {
        return {
            msg:'search',
            email:'',
        }
    },
    methods:{
        addSubscriber() {
      if (this.formValidation()) {
        this.errMsgFlag = false;
        this.msgFlag = false;
        let formData = new FormData();
        formData.append("email", this.email);


        this.$http
          .post("user/subscriber", formData)
          .then((response) => {
            this.errMsgFlag = response.data.errMsgFlag;
            this.msgFlag = response.data.msgFlag;
            this.msg = response.data.msg;
            this.errMsg = response.data.errMsg;
            if (this.errMsgFlag == true) this.$toaster.warning(this.errMsg);
            if (this.msgFlag == true) {
              this.$toaster.success(this.msg);
              this.resetForm();
            }
          })
          .catch((error) => {})
          .finally();
      }
    },
    formValidation() {
      if (this.email != null ) {
        return true;
      } else {
        if (this.email == null) {
          this.errMsg = "Please Enter Email.";
          this.$toaster.warning(this.errMsg);
        }
       
        this.errMsgFlag = true;
        return false;
      }
    },
    resetForm() {
      this.email = null;

    },
    }
}
</script>

<style scoped>
.search-button{
    height:38px;
    width:95px;
    border:0;
    position: absolute;
    right:0px;
    top:0px;
    background: #F12323;
    color:white;
    border-radius: 4px;
}
input{
    font-size: 13px;
    padding:8px;
}
input:focus{
    outline: 0;
    box-shadow: none;
}
</style>