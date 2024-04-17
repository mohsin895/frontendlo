<template>
    <div class="overview-review">
    
        <div class="tab-body">
           
        <div class="row">
            <div class="col-sm-5 col-md-3 col-lg-3">
                <div class="contact-container">
                    
                
                    
                    <div class="row seller-form">
                    
                    <div class="loyel-seller-profile">
            
                        <div class="header">
                            
                        <div class="details">About us</div>
                        
                        </div>
                       
                        <div class="loyel-seller-profile-details mt-3">
                        <b-row cols="11" cols-md="12" cols-lg="12">
                            <b-col>
                            <p>
                                <span class="padding-shop" v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]"> Shop Profile</span>
                                
                            </p>
                            
                            <p>
                                <span class="padding-shop" v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">  Shop Details</span>
                            </p>
                            <p>
                                <span class="padding-shop" v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]"> Seller Rating & Review</span>
                            </p>
                            <p>
                                <span class="padding-shop" v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]"> Product Rating & Review</span>
                            </p>
                         
            
                            </b-col>
            
                        
                        </b-row>
                        </div>
                  
                    </div>
            
                    
                    </div>
                
            
                
                </div>
            </div>
           
            <div class="col-sm-7 col-md-9 col-lg-9 mb-5 ml-1" >
                <div class="tabs-section">
            <!-- <Profile 
            v-if="activetab ==='1'" 
            />
            <Details 
            v-if="activetab ==='2'" 
            /> -->
            <SellerReviewRating 
            v-if="activetab ==='3'" 
            /> 
            <ProductRating 
            v-if="activetab ==='4'" 
            />
           
          </div>
               
            </div>
           
    
  
      </div>
            
         

            
        </div>
    </div>
</template>

<script>
import ProductRating from '@/pages/vandor/shop/rating-tab'
import SellerReviewRating from '@/pages/vandor/shop/seller-review-tab'
export default {
    name: 'overview-tab',
    components: {
        ProductRating,
        SellerReviewRating,
      
    },
    data() {
        return {
            activetab: '1',
         errMsgFlag: false,
        msgFlag: false,
        msg: null,
        errMsg: null,
        email:null,
        message:null,
        vandorInfo:null,
            numOfData:44,
            urlParam:{
                
                slug:this.$route.params.slug,
            },
            dataUrl:'seller/product/rating/review',
            totalData:0,
            numberOfDataPage:1,
            lastPage:1,
            dataList:[],
       

        }
    },
    beforeMount(){
      
      this.getDataList(this.dataUrl,this.urlParam);
  },
   watch:{
      $route (to, from){ this.numOfData=44; this.pageIndexReset(); this.showDatas(); }
  },
    methods: {
     
        getDataList(url,param) {
              
              this.$http.get(url,{params:param})
                .then(response => {
                    // console.log(response.data);
                   
                       this.dataList=response.data.sellerProductReview; 
                     
                       
                  
                    
                })
                .catch(error => {
                  console.dir(error);
                });
                
         },
         dataByPaginate(pageIndex){
            this.numOfDataPage=pageIndex;
            this.showDatas();
        },
        showDatas(){
            this.urlParam={
                numOfData:this.numOfData,
                slug:this.$route.params.slug,
            };
            this.getDataList(this.dataUrl,this.urlParam);
            // this.getSideProductsAndPopularTags();
        },
        pageIndexReset()
        {
          this.numOfDataPage=1;
        },
       
   
     
       
    }
}
</script>


<style scoped>
.tabs-section{
    background: #fff;
}
.loyel-seller-profile-details span{
  display: flex;
    cursor: pointer;
    padding: 8px 0px;
    /* transition: background-color 0.2s; */
    border-right: none;
    font-weight: normal;
    font-size: 14px;
    width:100%;
    color: #000;
    padding-left: 40px;
}

/* .caption span:last-child { 
    border-right: 1px solid #ccc;
} */

/* Change background color of tabs on hover */
.loyel-seller-profile-details span:hover {
    background-color: #aaa;
    width: 100%;
    color: #fff;
}

/* Styling for active tab */
.loyel-seller-profile-details span.active {
    background-color: #da0a22;
    color: #fff;
    /* border-bottom: 2px solid #fff; */
    cursor: default;
    width: 100%;
}
.loyel-seller-profile{
   margin-bottom: 20px;
   width: 100%;
    min-height: 200px;
    background: white;
    /* padding-left: 40px; */
    padding-top: 20px;
    padding-bottom: 20px;
  
}
.details{
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    word-break: break-word;
    padding-left: 40px;
}
.padding-shop{
    margin-top: -20px;
   
}

</style>