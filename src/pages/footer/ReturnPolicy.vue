<template>
    <div class="product-view">
      <div class="loyel-container">
        <div class="loyel-container product-overview">
          
          <div class="tabs-section">
           
            <p class=" mt-3 mb-3 mr-3 ml-3" v-html="dataList.returnPolicy"></p>
         

          
          </div>
        </div>
        <br>
       
        <br>
      </div>
    </div>
</template>

<script>

export default {
    name:'footerComponent',
   
    data() {
        return {
            msg:'footer',
            dataList:'',
            baseUrl:this.$baseUrl,
        }
    },
    beforeMount() {
    this.getDataInfo();
    },
  
    methods:{
      async getDataInfo(){
           
            let url="/get/setting/info";

            await this.$http.get(url)
             .then(response=>{
                   
                       console.log(response.data);
                       this.dataList = response.data;
                      
                    
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
    }
}
</script>


<style scoped>
.mt-3{
  margin-left: 50px;
  margin-right: 50px;
}
@media (min-width: 1540px) {
   
   .products-all-details {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1500px;
}
.product-overview{
  width: 1500px;
}
.product-rows{
  width: 1500px;
}
.category-and-products-wrapper {
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-left: 210px;
  max-width:1500px;
}

.dropdown-select {
   max-width:190px;
   margin-left: auto;
   margin-right:205px;
}
.slider-heading{
  height:40px;
  margin-left: 180px;
  max-width:1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:auto;
  border:1px solid rgb(167, 165, 165);
  margin-bottom:10px;
  padding:0 10px;
  background: white;
  margin-top: 20px;
}
}

@media (min-width: 1200px) and (max-width: 1549px) {
  .products-all-details {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1055px;
}

.product-overview{
  width: 1055px;
}

   /* .product-slider{
   margin-left: 210px;
   max-width:1055px;
 
} */
.dropdown-select {
   max-width:190px;
   margin-left: auto;
   margin-right:205px;
}
.slider-heading{
  height:40px;
  margin-left: 180px;
  max-width:1055px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:auto;
  border:1px solid rgb(167, 165, 165);
  margin-bottom:10px;
  padding:0 10px;
  background: white;
  margin-top: 20px;
}

.category-and-products-wrapper {
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-left: 180px;
  max-width:1055px;
}

}


.white-bg {
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
.white-of-bg {
  background: #F9F9F9;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
}

/* overview css  */
.tab-buttons {
  width: 100%;
  min-height: 40px;
  border: 1px solid #DEDEDE;
  background: white;
  padding: 5px 20px 0px 20px;
}
.tab-buttons > * h5{
  display: inline-block;
  cursor: pointer;
}
/* .overview-col {} */
.reviews-col {
  text-align: center;
}
.video-col {
  text-align: right;
}


.tabs-section {
  width: 100%;
  min-height: 200px;
  border: 1px solid #DEDEDE;
  background: white;
}




/* responsive part  */
@media (max-width: 1000px) {
  .white-bg {
    padding: 20px;
  }
  .white-of-bg {
    padding: 20px;
  }
  .overview-col,
  .reviews-col,
  .video-col {
    text-align: center;
  }
}
</style>