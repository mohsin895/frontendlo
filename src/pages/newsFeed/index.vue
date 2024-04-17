<template>
    <div class="product-view">
      <div class="loyel-container">
        <div class="loyel-container product-overview">
          <div class="tab-buttons mt-3">
            <b-row cols="1" cols-md="1" cols-lg="4">
              <b-col class="overview-col">
                <h5 
                v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]"
                >
                 All Post
                </h5>
              </b-col>
              <b-col class="reviews-col">
                <h5 
                v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]"
                >
                  Announcement
                </h5>
              </b-col>
              <b-col class="video-col">
                <h5 
                v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]"
                >
                 Seller Post
                </h5>
              </b-col>
              <b-col class="video-col">
                <h5 
                v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]"
                >
                 My Post
                </h5>
              </b-col>
            </b-row>
          </div>
          <br>
          <div class="tabs-section">
            <allPost 
            v-if="activetab ==='1'"
            />
            <announcement 
            v-if="activetab ==='2'"
            />
            <sellerPost 
            v-if="activetab ==='3'"
            />

            <myPost 
            v-if="activetab ==='4'"
            />
          </div>
        </div>
        <br>
       
        <br>
      </div>
    </div>
</template>

<script>

import allPost from '@/pages/newsFeed/allPost'
import announcement from '@/pages/newsFeed/announcement'
import myPost from '@/pages/newsFeed/myPost'
import sellerPost from '@/pages/newsFeed/sellerPost'
export default {
  components: {
    allPost,
    announcement,
    myPost,
    sellerPost,

    
  },
  
   
  data() {
    return {
      activetab: '1',
      productInfo:[],

      baseUrl: this.$baseUrl,
     
      
    };
  },
  beforeMount(){
    this.getProductInfo();
  },
  watch:{
        $route (to, from){ this.getProductInfo(); }
    },
  methods: {
    
    async getProductInfo(){
      let slug=this.$route.params.slug;
      await this.$http.get("product/details?slug="+slug)
             .then(response=>{
              console.log(response.data);
                this.productInfo=response.data.productInfo;
                this.productImage =this.$baseUrl +response.data.productInfo.thumbnail_img 
                this.$store.commit("storeProductDetails",response.data.productInfo);
                this.relatedProducts=response.data.relatedProducts;
                this.productReview=response.data.productReview;
                // console.dir(response.data.productInfo);
             })
             .catch(error=>{console.dir(error)})
             .finally();
    }
  },
};
</script>


<style scoped>

.tab-buttons h5{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
  
    border-right: none;
    background-color: #fff;
   
    font-weight: bold;
}

/* .tab-buttons h5:last-child { 
    border-right: 1px solid #ccc;
} */

/* Change background color of tabs on hover */
.tab-buttons h5:hover {
  background-color: black;
    color: #fff;
    /* border-radius: 20px; */
    border-bottom: 2px solid #fff;
    cursor: pointer;
    /* border-radius: 15px; */
    border-radius: 100px;
    line-height: 20px;
    max-width: 423px;
    min-height: 40px;
}

/* Styling for active tab */
.tab-buttons h5.active {
    /* background-color: #fb5858;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default; */

    background-color: black;
    color: #fff;
    /* border-radius: 20px; */
    border-bottom: 2px solid #fff;
    cursor: pointer;
    /* border-radius: 15px; */
    border-radius: 100px;
    line-height: 20px;
    max-width: 423px;
    min-height: 40px;
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