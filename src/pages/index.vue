<template>
    <div class="heroPage unselectable loyel-landing-page" ref="top">
        <div class="banner">
            <Banner :toBannerList="toBannerList"/>
        </div>
        <div class="loyel-container">
            <div class="loyel-container category-slider mt-5 ">
             
                <div class="category">
                    <Menu :categoryList="categoryList"/>
                </div>
                <div class="slider">
                    <Slider :sliderList="sliderList"/>
                </div>
                <div class="right-image">
                    <RightMenu :supperProductSliderList="supperProductSliderList"/>
                </div>
            </div>
            <br>
            <div class="supper-product">
               
                <SupperProduct :supperProductSliderList="supperProductSliderList"/>
            </div>
            <br>
            <div class="home-page-background-color">
            <div class="shocking-deal-landing">
                <!-- <div class="shocking">SHOCKING DEAL</div> -->
                <Shockslider :shockingSliderList="shockingSliderList"/>
            </div>
            </div>
          
            <div class="home-page-background-color">
                <div class="brands">
                <div class="loyel-container brands-top"></div>
                <Brandslider title="Our Available Brands" :brandList="brandList"/>
            </div>
          
            <!-- <div class="top-category">
                <div class="loyel-container category-top"></div>
                <SliderCategory/>
            </div> -->
            </div>
           
         
            <div class="home-page-background-color">
           
            <div class="todays-product">
                <FlashSaleProduct title="Flash Deal!" :mostViewProductLis="mostViewProductLis"/>
            </div>

            <br>
            </div>
            <div class="home-page-background-color">
            <div class="letest-products">
                <Latestproduct title="Latest products" :latestProductList="latestProductList"/>
            </div>
            <br>
            
            <div class="todays-product">
                <FeaturedProduct title="Featured Products" :mostViewProductLis="mostViewProductLis"/>
            </div>
            <br>
        </div>
            <!-- <div class="vendors">
                <Vendorslider/>
            </div> -->
          
            <div class="dual-banner loyel-container">
                <Dualbanner1 :bannerList="bannerList"/>
            </div>
            <br>
            <div class="home-page-background-color">
            
                <Tabslider :tabs="['Electronics','Mobile Phone']" :selectedTabIndex="0" :dualCategoryList="dualCategoryList"/>
                </div>
            
          <!--   <br> -->
           
            <!--     <Tabslider :tabs="['Man','Fashion']" :selectedTabIndex="1"/>
            
            <br>
                <Tabslider :tabs="['Women','Dresses']" :selectedTabIndex="0"/>
            
            <br> -->
            <div class="home-page-background-color">
                <div class="letest-products">
                <TodayDealProduct title="Today Deals" :mostViewProductLis="mostViewProductLis"/>
            </div>
          
            
            <div class="recently-view">
                <Recentviewproduct title="Recently Viwed" :recentViewProductList="recentViewProductList"/>
            </div>
           

            </div>
         
            <div class="dual-banner loyel-container">
                <Dualbanner2 :bannerList="bannerList"/>
            </div>
           
            <div class="home-page-background-color">
            <div class="most-view">
                <Mostviewproduct title="Most Viewed" :mostViewProductLis="mostViewProductLis"/>
           
            </div>
            <br>
            </div>
           
        </div>
    </div>
</template>

<script>
import Banner from '@/components/home/banner';
import Slider from '@/components/slider/homeMainSlider';
import Tabslider from '@/components/slider/tabSlider';
import Menu from '@/components/home/multiMenu';
import RightMenu from '@/components/home/rightmenu';
import Shockslider from '@/components/slider/shockingSlider'
// import Productslider from '@/components/slider/simpleProductSlider'
import Mostviewproduct from '@/components/slider/mostViewProduct'
import FeaturedProduct from '@/components/slider/featuredProduct'
import TodayDealProduct from '@/components/slider/todayDeals'
import FlashSaleProduct from '@/components/slider/flashSale'
import Latestproduct from '@/components/slider/latestProduct'
import Recentviewproduct from '@/components/slider/recentViewProduct'
import Brandslider from '@/components/slider/brandSlider'
// import Vendorslider from '@/components/slider/vendorSlider'
import Dualbanner1 from '@/components/home/dualBanner1'
import Dualbanner2 from '@/components/home/dualBanner2'
// import SliderCategory from '@/components/slider/TopCategory'
import SupperProduct from '@/components/slider/supperProduct'
export default {
    name: 'heroPage',
   
    components:{
        Banner,
        Slider,
        Menu,
        Shockslider,
        Mostviewproduct,
        Recentviewproduct,
        Latestproduct,
        // Vendorslider,
        Dualbanner1,
        Dualbanner2,
        Tabslider,
        Brandslider,
        RightMenu,
        // SliderCategory,
        SupperProduct,
        FlashSaleProduct,
        TodayDealProduct,
        FeaturedProduct,
        // Productslider
    },
    data() {
    return {
        metaTitle:'',
        siteUrl: this.$siteUrl,
        metaDescription:'',
        ogImageUrl:'',
        baseUrl: this.$baseUrl,
        dataList:[],
        mostViewProductLis:[],
        recentViewProductList:[],
        bannerList:[],
        latestProductList:[],
        brandList:[],
        shockingSliderList:[],
        supperProductSliderList:[],
        sliderList:[],
        categoryList:[],
        dualCategoryList:[],
        dualCategoryList:[],
        toBannerList:[],
    }
},
metaInfo() {
    return {
      title: this.metaTitle,
      titleTemplate: '%s - loyel.com.bd',
      htmlAttrs: {
      lang: 'en-US'
    },
      link: [
        { rel: 'canonical', href: this.siteUrl },
      ],
      meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: this.metaDescription,
        },

        { property: 'og:title', content: this.metaTitle },
        { property: 'og:description', content: this.metaDescription },
        { property: 'og:image', content: this.ogImageUrl },
        { property: 'og:url', content: window.location.href }, // Optional: Set the URL of the current page
        { property: 'og:type', content: 'website' },
      ],
    };
  },
// metaInfo: {
//     title: this.metaTitle,
//     titleTemplate: '%s - loyel.com.bd',
//     htmlAttrs: {
//       lang: 'en-US'
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'description', content: 'An example Vue application with vue-meta.' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' }
//     ]
//   },
    mounted() {
    this.scrollToTop();
     this.$refs.top.scrollIntoView({ behavior: 'smooth', block: 'start' });
     window.scrollTo(0, 0);
  },
 beforeMount(){
    this.getDataList();
 },
  methods: {
  scrollToTop() {
    
      window.scrollTo(0, 0);
    },
    // getDataList() {
        
    //         let url = 'get/seo/info';


    //         this.$http.get(url)
    //             .then(response => {
                   
    //                     let dataList = response.data;
    //                     this.metaTitle= dataList.title;
    //                     this.metaDescription=dataList.description;
    //                     this.ogImageUrl=this.$baseUrl +dataList.image ;
                     
                       
                    

    //             })
    //             .catch(error => {
    //                 console.dir(error);
    //             });

    //     },

    getDataList(){
           this.$http.get("home/page")
           .then(response=>{ 
                // this.dataList=response.data;
                let seoDataList = response.data.seodata;
                this.metaTitle= seoDataList.title;
                this.metaDescription=seoDataList.description;
                this.ogImageUrl=this.$baseUrl +seoDataList.image ;
                this.toBannerList=response.data.toBannerList;
                this.categoryList=response.data.categoryList;
                this.sliderList=response.data.sliderList;
                this.supperProductSliderList=response.data.supperProductSliderList;
                this.shockingSliderList=response.data.shockingSliderList;
                this.brandList=response.data.brandList;
                this.mostViewProductLis = response.data.mostViewProductList;
                this.recentViewProductList=response.data.recentViewProductList;
                this.bannerList=response.data.bannerList;
                this.latestProductList=response.data.latestProductList;
                this.dualCategoryList=response.data.dualCategoryList;
                
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
},
created() {
    this.getDataList();
  }
   
   
}
</script>


<style scoped>

.heroPage{
    height:auto;
}
.banner{
    width:100%;
}


.slider{
    /* width:calc(100% - 300px); */
    background: #fff;
}

.owl-theme .owl-nav{
    margin-top:-200px !important;
}

.tab-product-slider{
    height:320px;
}


.supper-product{
    margin-bottom: 20px;
}

.shocking-deal-landing{
    
    margin-top: -30px;
    padding-bottom: 20px;
   
}


@media(min-width: 1px) and (max-width: 767px){

    .shocking  {
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}
.loyel-landing-page{
    margin-top: -35px;
}
.supper-product{
    height:80px
}
.home-page-background-color{
    height:auto;
    max-width: 100%;
    margin-bottom: 20px;

    /* background: #fff; */
    justify-content: space-between;
    align-items: center;
  
    margin-left: auto;
    margin-right: auto;
}
.category{
    display: none;
  }
.top-category{
    display: none;
}
  .right-image{
   display: none;
    /* margin-top: 20px; */
}

.home-slider{
    height: 150px;
}

.shocking{
    margin-left: 0px;
    /* font-weight: bold;
    font-size: 1.3rem; */
}
.shocking-deal{
    /* margin-block: 30px; */
    height: 80px;
    margin-bottom: 20px;
    
}

}
@media(min-width: 768px){
    .shocking{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}
.loyel-landing-page{
    margin-top: -20px;
}
.supper-product{
    height:120px
}

.shocking{
    margin-left: 210px;
   
}
}


@media(min-width: 521px) and (max-width: 767px){
 
.home-slider{
    height: 260px;
}

}


@media (min-width: 768px) and (max-width: 1199px) {
    .home-slider{
    height: 400px;
}
    .category{
    width:25%;
    background: white;
    position:relative;
    margin-top: -35px;
    height: 400px;
}
   
   .category-slider{
    width: 100%;
    align-items: center;
    display: flex;
    height:450px;
   display: flex;
   /* border: 20px solid #fff; */
   background: #fff;
   widows: 100%;
}
.right-image{
   display: none;
}

.dual-banner{
   width: 100%;
  align-items: center;
  margin-top: 20px;
}
.top-category{
    display: none;
}



.slider{
 width: 75%;
 padding-right: 10px;
}


 
 .home-page-background-color{
     height:auto;
     max-width: 100%;
     margin-bottom: 20px;
 
     justify-content: space-between;
     align-items: center;
     background: #fff;
      margin-left: auto;
     margin-right: auto;
 }
}


@media (min-width: 1200px) and (max-width: 1449px) {
    .home-slider{
    height: 400px;
}
  
.category-slider{
    width: 100%;
    align-items: center;
    display: flex;
    height:450px;
   display: flex;
   /* border: 20px solid #fff; */
   background: #fff;
   widows: 100%;
}
.category{
    width:20%;
    background: white;
    position:relative;
    margin-top: -15px;
}
.slider{
   
    background: white;
    position:relative;
    width:60%;
   
  
}
.right-image{
    width:20%;
    background: white;
    position:relative;
    margin-top: 20px;  
}
/* .right-image{
    display: none;
} */

.dual-banner{
    width: 100%;
   align-items: center;
   margin-top: 20px;
}

.shocking{
    margin-left: 210px;
   
   
}

.home-page-background-color{
    height:auto;
    max-width: 100%;
    margin-bottom: 20px;

    justify-content: space-between;
    align-items: center;
    background: #fff;
     margin-left: auto;
    margin-right: auto;
}

/* .right-image{
    width: 282px;
} */

.supper-product{
    display: none;
}
}
@media (min-width: 1450px){
    .home-slider{
    height: 400px;
}

.category-slider{
     width: 1450px;
     align-items: center;
     display: flex;
     height:450px;
    display: flex;
    border: 8px solid #fff;
    background: #fff;
    widows: 1450px;
}
    .category{
    width:282px;
    background: white;
    position:relative;
    margin-top: -5px;
}

.home-page-background-color{
    height:auto;
    max-width: 1450px;
    margin-bottom: 20px;

    justify-content: space-between;
    align-items: center;
    background: #fff;
     margin-left: auto;
    margin-right: auto;
}

    .supper-product{
    display: none;
}
  
/* .right-image{
    display: none;
} */
.right-image{
    width:20%;
    background: white;
    position:relative;
    margin-top: 20px;  
}
.dual-banner{
    width: 1450px;
   align-items: center;
  
}

.shocking{
    margin-left: 210px;
   
}


}

</style>