<template>
    <div class="address">
        <div class="mobile-layout">
        
        <p @click="goBack"> <img src="@/assets/images/mobile.png" height="30px"></p>
    </div>
        <div class="loyel-container">
            <div class="form-wrapper" style="background: #fff;">
                <form @submit.prevent="formSubmitPrevent()">
                    <div class="row">
                        <div class="col-lg-6">
                        <div class="form-group">
                            <label for="line1">Name</label>
                            <input type="text" class="form-control" placeholder="Your Name" v-model="name"/>
                        </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="line1">Phone</label>
                            <input type="text" class="form-control" placeholder="Your Phone No" v-model="phone" />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="line1">District</label>
                                <v-select :options="districtList" :reduce="districtList => districtList.id" label="name" v-model="district" >
                                    <template v-slot:option="option">
                                        {{option.name}}
                                    </template>
                                 </v-select>
                            </div>
                        </div>
                        
                        <div class="col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="line1">Thana</label>
                                <select class="form-control" v-model="thana">
                                    <slot v-for="thanaInfo in thanaList">
                                        <option :value="thanaInfo.id" v-if="thanaInfo.district_id==district" :key="thanaInfo.id">{{thanaInfo.name}}</option>
                                    </slot>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="line1">Union</label>
                                <select class="form-control" v-model="union">
                                    <slot v-for="unionInfo in unionList">
                                        <option :value="unionInfo.id" v-if="unionInfo.thana_id==thana" :key="unionInfo.id" >{{unionInfo.name}}</option>
                                    </slot>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-12">
                            <div class="form-group">
                                <label for="line1">Address</label>
                                <textarea class="form-control" rows="4" placeholder="house no,flat-no" v-model="address"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="submit-btn mt-2">
                        <button class="btn btn-sm btn-primary" @click="addAddress()">
                            Update Address
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addres-form',
    data() {
        return {
            districtList:[],
            thanaList:[],
            unionList:[],
            district:null,
            thana:null,
            union:null,
            name:null,
            phone:null,
            address:null,
        }
    },
    beforeMount(){
        this.getDistrictList();
        this.getThanaList();
        this.getUnionList();
        this.getAddressInfo();
    },
    methods:{
        goBack() {
      history.back();
    },
        async getAddressInfo(){
            let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };

            let addressId=this.$route.params.dataId;

            await this.$http.get("customer/get/address/info?dataId="+addressId,config)
               .then(response=>{
                    if(response.data.msgFlag==true){
                        this.name=response.data.dataInfo.name;       
                        this.phone=response.data.dataInfo.phone;       
                        this.address=response.data.dataInfo.address;       
                        this.district=response.data.dataInfo.district_id;       
                        this.thana=response.data.dataInfo.thana_id;       
                        this.union=response.data.dataInfo.union_id;       
                    }
               })
               .catch(error=>{console.dir(error)})
               .finally();
        },
        formSubmitPrevent(e){
            // e.preventDefault();
        },
        resetForm(){
            this.name=null;
            this.phone=null;
            this.address=null;
            this.district=null;
            this.thana=null;
            this.union=null;
        },
        formValidation(){
            if(this.name!=null && this.phone!=null && this.address!=null && this.district!=null && this.thana!=null){
                return true;
            }
            else{
                if(this.name==null)
                    this.$toaster.warning("Please Enter a Name.");
                if(this.phone==null)
                    this.$toaster.warning("Please Enter a Phone Number.");
                if(this.address==null)
                    this.$toaster.warning("Please Enter An Address.");
                if(this.district==null)
                    this.$toaster.warning("Please Select a District.");
                if(this.thana==null)
                    this.$toaster.warning("Please Select a Thana.");
                return false;
            }
        },
        async addAddress(){
            if(this.formValidation()){
                let token=window.localStorage.getItem("customerToken");
           
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
                   let addressId=this.$route.params.dataId;

                    let formData=new FormData();
                    formData.append("dataId",addressId);
                    formData.append("name",this.name);
                    formData.append("phone",this.phone);
                    formData.append("address",this.address);
                    formData.append("district",this.district);
                    formData.append("thana",this.thana);
                    formData.append("union",this.union);

                 await  this.$http.post('/customer/address/update',formData,config)
                     .then(response=>{
                        if(response.data.msgFlag==true){
                            this.$toaster.success(response.data.msg);
                            this.resetForm();
                            this.getAddressInfo();
                        }
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                     })
                     .catch(error=>{console.dir(error)})
                     .finally();
            }
        },
        async getDistrictList(){
            await this.$http.get('get/district/list')
              .then(response=>{
                this.districtList=response.data;
              })
              .catch(error=>{console.log(error)})
              .finally();
        },
        async getThanaList(){
            await this.$http.get('get/thana/list')
              .then(response=>{
                this.thanaList=response.data;
              })
              .catch(error=>{console.log(error)})
              .finally();
        },
        async getUnionList(){
            await this.$http.get('get/union/list')
              .then(response=>{
                this.unionList=response.data;
              })
              .catch(error=>{console.log(error)})
              .finally();
        }
    }
}
</script>


<style scoped>
.mobile-layout{
    margin-bottom: 48px;
    box-shadow: 5px 10px 8px 10px;
}

@media (min-width: 1px) and (max-width: 767px) {
    /* .mobile-layout{
        display: none;
    } */

   

}

@media (min-width: 768px){
    .mobile-layout{
        display: none;
    }

 

}
/* .address {
    padding: 20px;
} */
.form-wrapper {
 
    padding: 20px;
    /* border:1px solid #767676; */
    border-radius: 0px;
    margin: auto;
    
}
.submit-btn {
    display: flex;
    justify-content: right;
}
</style>