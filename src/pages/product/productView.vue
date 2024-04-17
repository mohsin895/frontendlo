<template>
    <div class="loyel-product-details unselectable" ref="top" >
      <div class="loyel-container">
        <div class="products-all-details-desktop loyel-container">
          
          <b-row class="product-rows" cols="1" cols-md="1" cols-lg="3">
            <b-col lg="12" class="breadcrub">
              <router-link to="/" class="home-breadcrub"> <span class="product-breadcrub">Home</span></router-link><span class="third-breadcrub" >/</span><span class="third-breadcrub" @click="gotoCategoryPage(category)">{{category.title}}</span><span class="third-breadcrub" >/</span><span class="third-breadcrub" @click="gotoSubCategoryPage(subCategory)">{{ subCategory.title }}</span><span class="third-breadcrub" >/</span><span class="third-breadcrub" @click="gotoSubSubCategoryPage(subSubCategory)">{{ subSubCategory.title }}</span>
            </b-col>
            <b-col lg="4" class="white-bg">
            
              <ProductSlider  :productInfo="productInfo" />
            </b-col>
            <b-col lg="4" class="white-bg">
              <ProductDetailsInfo  :totalrating="validateTotalRating(totalrating)" :ratingCount="validateRatingCount(ratingCount)"/>
         
            </b-col>
            <b-col lg="4" class="white-of-bg">
                <DeliveryInfo v-if="productInfo" :productInfo="productInfo"/>
            </b-col>
          </b-row>
        </div>
        <div class="products-all-details-mobile loyel-container">
          
          
            <div  class="breadcrub-mobile">
              <router-link to="/" class="home-breadcrub"> <span class="product-breadcrub-mobile">Home</span></router-link><span class="third-breadcrub" >/</span><span class="third-breadcrub" @click="gotoCategoryPage(category)">{{category.title}}</span><span class="third-breadcrub" >/</span><span class="third-breadcrub" @click="gotoSubCategoryPage(subCategory)">{{ subCategory.title }}</span><span class="third-breadcrub" >/</span><span class="third-breadcrub" @click="gotoSubSubCategoryPage(subSubCategory)">{{ subSubCategory.title }}</span>
            </div>
            <div  class="white-bg">
            
              <ProductSlider :productInfo="productInfo" />
            </div>
            <div  class="white-bg-product-info">
              <ProductDetailsMobileInfo :totalrating="validateTotalRating(totalrating)" :ratingCount="validateRatingCount(ratingCount)" />
         
            </div>
            <div  class="white-of-bg-mobile">
                <DeliveryMobileInfo v-if="productInfo" :productInfo="productInfo"/>
            </div>
       
        </div>
       
        <div class="loyel-container product-overview-desktop">
          <div class="tab-buttons">
           <span>
                <h5 
                v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]"
                >
                Product details
                </h5>
           </span>
           <span>
                <h5 
                v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]"
                style="margin-left: 10px;">
                  Customer Reviews
                </h5>
              </span>
            <span>
                <h5 
                v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]"
                style="margin-left: 10px;">
                  Video
                </h5>
              </span>
          </div>
          <br>
          <div class="tabs-section">
            <Overview 
            v-if="activetab ==='1'"
            />
            <!-- <Review 
            v-if="activetab ==='2'"
            /> -->

            <Review v-if="activetab ==='2'" :totalrating="totalrating" :ratingCount="ratingCount"
             :productReview="productReview" :fiveStarRevieTotalCount="fiveStarRevieTotalCount"
             :fourStarRevieTotalCount="fourStarRevieTotalCount" 
             :threeStarRevieTotalCount="threeStarRevieTotalCount"
             :twoStarRevieTotalCount="twoStarRevieTotalCount"
             :oneStarRevieTotalCount="oneStarRevieTotalCount" :productInfo="productInfo"/>
            <Video 
            v-if="activetab ==='3'"
            />
          </div>
          <br>
          <div class="home-page-background-color">
        <RelatedProduct
        title="Related Products" 
        :initialQuantity="6"
        :relatedProducts="relatedProducts"/>
        </div>
        <br>
        </div>
        <div class=" product-overview-mobile">
        
          <div class="product-details-mobile">
            <Overview  />
           
          </div>
          <div class="product-review-mobile">
           
            <Review  :totalrating="totalrating" :ratingCount="ratingCount"
             :productReview="productReview" :fiveStarRevieTotalCount="fiveStarRevieTotalCount"
             :fourStarRevieTotalCount="fourStarRevieTotalCount" 
             :threeStarRevieTotalCount="threeStarRevieTotalCount"
             :twoStarRevieTotalCount="twoStarRevieTotalCount"
             :oneStarRevieTotalCount="oneStarRevieTotalCount" :productInfo="productInfo"/>
         
          </div>
          <div class="product-video-mobile">
         
            <Video />
          </div>
          <br>
         
        <RelatedProductMobile
        title="Related Products" 
        :initialQuantity="6"
       :relatedProducts="relatedProducts" />
     
        <br>
        </div>
       
      </div>
    </div>
</template>

<script>

import ProductDetailsInfo from '@/components/product/product-info'
import ProductDetailsMobileInfo from '@/components/product/mobile/product-info'
import ProductSlider from '@/components/product/product-slider'
import DeliveryInfo from '@/components/product/delivery-info'
import DeliveryMobileInfo from '@/components/product/mobile/delivery-info'
import Overview from '@/components/product/overview-tab'
import Review from '@/components/product/reviews-tab'
import Video from '@/components/product/video-tab'
import RelatedProduct from '@/components/slider/relatedProducts'
import RelatedProductMobile from '@/components/slider/relatedProductsMobile'
import Quantity from "@/components/product/Quantity";
import Rating from '@/components/product/rating-view'
import moment from "moment";
export default {
  components: {
    ProductSlider,
    ProductDetailsInfo,
    ProductDetailsMobileInfo,
    DeliveryMobileInfo,
    RelatedProductMobile,
    DeliveryInfo,
    Overview,
    Review,
    Video,
    RelatedProduct,
    Rating,
    Quantity,
    slide: 0,
   sliding: null,
    
  },
  name: 'loyel-product-details',

  metaInfo() {
    return {
      title: this.pageTitle,
      link: [
        { rel: 'canonical', href: this.siteUrl+'/product/' + this.slug },
      ],
      meta: [
        {
          name: 'description',
          content: this.metaDescription,
        },
        { property: 'og:title', content: this.pageTitle },
        { property: 'og:description', content: this.metaDescription },
        { property: 'og:image', content: this.ogImageUrl },
        { property: 'og:url', content: window.location.href }, // Optional: Set the URL of the current page
        { property: 'og:type', content: 'website' },
      ],
    };
  },
  data() {
    return {
      activetab: '1',
      productInfo:"",
      totalrating:'',
      ratingCount:'',
      category:'',
      subCategory:'',
      subSubCategory:'',
      relatedProducts:[],
      productReview:[],
      fiveStarRevieTotalCount:'',
      fourStarRevieTotalCount:'',
      threeStarRevieTotalCount:'',
      twoStarRevieTotalCount:'',
      oneStarRevieTotalCount:'',
      pageTitle: '',
      slug:'',
      ogImageUrl: '',
      metaDescription: '',
      quantity:1,
      productImage:'',
      baseUrl: this.$baseUrl,
      siteUrl: this.$siteUrl,
      hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    320: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    },
                    1200: {
                        itemsToShow: 4
                    },
                    1500: {
                        itemsToShow: 4
                    }
                }
              }
      
    };
  },
  beforeMount(){
    this.getProductInfo();
    this.getview();
  
  },
  mounted() {
    this.scrollToTop();
     this.$refs.top.scrollIntoView({ behavior: 'smooth', block: 'start' });
     window.scrollTo(0, 0);
  },
  watch:{
        $route (to, from){ this.getProductInfo(); }
    },
  methods: {
    validateTotalRating(value) {
      const parsedValue = parseFloat(value);
      return isNaN(parsedValue) ? 0 : parsedValue;
    },
    validateRatingCount(value) {
      const parsedValue = parseFloat(value);
      return isNaN(parsedValue) ? 0 : parsedValue;
    },
  scrollToTop() {
    
      window.scrollTo(0, 0);
    },
    
    gotoCategoryPage(category){
            this.$router.push({name:'categoryPage',params:{slug:category.slug.split(' ').join('-')}});
        },
        gotoSubCategoryPage(subCategory){
            this.$router.push({name:'categoryPage',params:{slug:subCategory.slug.split(' ').join('-')}});
        },
        gotoSubSubCategoryPage(subSubCategory){
            this.$router.push({name:'subCategoryPage',params:{slug:subSubCategory.slug.split(' ').join('-')}});
        },
     // uniqueSizes(quantityInfos) {   
     //        let sizes=[];      
     //        quantityInfos.forEach(quantityInfo=>{
     //          if(!sizes.some(size => size.size_id === quantityInfo.size_id))
     //            sizes.push(quantityInfo);
     //        });
     //        return sizes;
     //    },
     //     uniqueColors(quantityInfos) {
     //       let colors=[];   
     //        quantityInfos.forEach(quantityInfo=>{
     //          if(!colors.some(color => color.color_id === quantityInfo.color_id))
     //            colors.push(quantityInfo);
     //        }); 
     //        return colors;
     //    },
     //    getDiscountPrice(price,discount){
     //        return parseInt((parseInt(price)*parseInt(discount))/100);
     //    },
     //    getSellPrice(stockInfos){
     //         let sellPrice=0;
     //          stockInfos.forEach(stockInfo=>{
     //              sellPrice=parseInt(stockInfo.sell_price);
     //          });
     //        return parseInt(sellPrice);
     //    },
     //    getQuantityLabel(quantityType){
     //     let label="1 PCS";
     //      if(quantityType!=null){
     //        label=quantityType.smallQuantity+" "+quantityType.label;
     //      }
     //      return label;
     //   },
     //    isDiscountTimeExpire(startAt,endAt){
     //        endAt = moment(endAt); //Date format
     //        startAt = moment(startAt); //Date format
     //        let today = moment();
     //        let isAfter = moment(endAt).isAfter(today);
     //        let isBefore = moment(startAt).isBefore(today);
     //        if(isAfter && isBefore)
     //            return true;
     //        else


     
     //         return false;
     //    },
     //    calculationPrice() {

     //    },
    async getProductInfo(){
      let slug=this.$route.params.slug;
      await this.$http.get("product/details?slug="+slug)
             .then(response=>{
              // console.log(response.data);
                this.productInfo=response.data.productInfo;
                this.productImage =this.$baseUrl +response.data.productInfo.thumbnail_img ;
                this.ogImageUrl=this.$baseUrl +response.data.productInfo.thumbnail_img ;
                this.$store.commit("storeProductDetails",response.data.productInfo);
                this.relatedProducts=response.data.relatedProducts;
                this.category=response.data.category;
                this.subCategory=response.data.subCategory;
                this.subSubCategory=response.data.subSubCategory;
                this.productName=response.data.productInfo.name;
                this.pageTitle = response.data.pageTitle;
                this.slug=response.data.slug;
                this.totalrating=response.data.totalrating;
                this.ratingCount=response.data.ratingCount;
               this.metaDescription = response.data.metaDescription;
                 this.productReview=response.data.productReview;
                this.fiveStarRevieTotalCount=response.data.fiveStarRevieTotalCount;
                this.fourStarRevieTotalCount=response.data.fourStarRevieTotalCount;
                this.threeStarRevieTotalCount=response.data.threeStarRevieTotalCount;
                this.twoStarRevieTotalCount=response.data.twoStarRevieTotalCount;
                this.oneStarRevieTotalCount=response.data.oneStarRevieTotalCount;
                this.scrollToTop();
            // console.dir(response.data.slug);
                
             })
             .catch(error=>{console.dir(error)})
             .finally();
    },

    updateMetaTags() {
      document.title = this.pageTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', this.metaDescription);
      }
    
    },
    async getview(){
      let slug=this.$route.params.slug;
      await this.$http.get("product/view?slug="+slug)
             .then(response=>{
             
              this.scrollToTop();
                
               
             })
             .catch(error=>{console.dir(error)})
             .finally();
    }
  },
  created() {
    this.getProductInfo();
  },
};
</script>


<style scoped>
.home-page-background-color{
  background: #fff;
}

@media (min-width: 1540px){
    .home-page-background-color{
    height:auto;
    max-width: 1540px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;


    justify-content: space-between;
    align-items: center;
    background: #fff;
 
}



}

@media (min-width: 1400px) and (max-width: 1539px) {
    .home-page-background-color{
    height:auto;
    max-width: 1300px;
    margin-bottom: 20px;

    justify-content: space-between;
    align-items: center;
    background: #fff;
     margin-left: auto;
    margin-right: auto;
}



}

@media (min-width: 1200px) and (max-width: 1399px) {
    .home-page-background-color{
    height:auto;
    max-width: 1200px;
    margin-bottom: 20px;

    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-left: auto;
    margin-right: auto;
}




}

@media (min-width: 1000px) and (max-width: 1199px) {
    .home-page-background-color{
    height:auto;
    max-width: 100%;
    margin-bottom: 20px;

    background: #fff;
    justify-content: space-between;
    align-items: center;
  
    margin-left: auto;
    margin-right: auto;
}




}


.container {  
    max-width: 620px; 
    min-width: 420px;
    margin: 40px auto;
    font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
}

/* Style the tabs */
.tab-buttons {
    overflow: hidden;
    margin-bottom: -32px; /* hide bottom border */
    font-size: OpenSans,Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Microsoft YaHei;
   
}

.tab-buttons h5{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: 700;
    font-size: 16px;
    color:#0c0000
    /* margin-left: 10px; */
}
.tab-buttons h5:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tab-buttons h5:hover {
    background-color: #fff;
    color: #f60;
}

/* Styling for active tab */
.tab-buttons h5.active {
    background-color: #fff;
    color: #f60;
    border-bottom: 2px solid #fff;
    cursor: default;
}
@media (min-width: 770px) {
   
 
.product-overview-mobile{
  display: none;
}

.products-all-details-mobile{
  display: none;

}


}
@media (max-width: 769px) {
   
 
   .product-overview-desktop{
     display: none;
   }
   .products-all-details-desktop{
    display: none;
   }
   
   
   }

@media (min-width: 1540px) {
   
   .products-all-details-desktop {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1500px;
}
.product-overview-desktop{
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
@media (min-width: 1400px) and (max-width: 1539px) {
    .hooper{
    height:auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.products-all-details-desktop {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1300px;
}
.product-overview-desktop{
  width: 1300px;
}
.slider-heading{
    height:40px;
    max-width:1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
}


}

@media (min-width: 1200px) and (max-width: 1399px) {
    .hooper{
    height:auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.products-all-details-desktop {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1200px;
}
.product-overview-desktop{
  width: 1200px;
}
.slider-heading{
    height:40px;
    max-width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
}


}

@media (min-width: 1000px) and (max-width: 1199px) {
    .hooper{
    height:auto;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.product-overview-desktop{
  width: 100%;
}
.products-all-details-desktop {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:100%;
}
.slider-heading{
    height:40px;
    max-width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
}


}
@media (min-width: 1200px) and (max-width: 1549px) {
  /* .products-all-details-desktop {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1055px;
} */

/* .product-overview-desktop{
  width: 1055px;
} */

   /* .product-slider{
   margin-left: 210px;
   max-width:1055px;
 
} */
.dropdown-select {
   max-width:190px;
   margin-left: auto;
   margin-right:205px;
}


}


.white-bg {
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
.white-bg-product-info{
  background: #f8f8f8;
  padding-top: 20px;
  padding-bottom: 20px;
  padding: 10px;
  

}
.breadcrub{
  background: white;
  padding-bottom: 10px;
}

.breadcrub-mobile{
  background: #f8f8f8;
  padding-bottom: 10px;
  padding-left: 10px;
}
.product-breadcrub{
  margin-left: 40px;
  font-size: 12px;
  font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
}
.product-breadcrub-mobile{

  font-size: 12px;
  font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;

}
.breadcrub a{
  color:#333;
}
.white-of-bg {
  background: #F9F9F9;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
  padding-right:0px;
}
.third-breadcrub{
  margin-left: 10px;
  cursor: pointer;
  font-size: 12px;
  font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
}
/* overview css  */
.tab-buttons {
  width: 100%;
  min-height: 40px;
  /* border: 1px solid #DEDEDE; */
  /* background: white; */
  /* padding: 5px 20px 0px 20px; */
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
  border-left: 1px solid #DEDEDE;
  border-right: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
  background: white;
  padding-left: 30px;
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

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; 
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; 
     margin-top: 0px; 
     margin-right: 0px; 
     margin-left: 0px; 
}

.product-details-mobile{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: #fff;
    padding: 10px;
  
}

.product-review-mobile{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
}

.product-video-mobile{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
}

.product-overview-mobile{
  background: #f8f8f8;
    padding: 10px;
}

.white-of-bg-mobile{
  padding: 10px;
  background: #f8f8f8;
}


.loyel-product-details{
  margin-top: 30px;
}
</style>