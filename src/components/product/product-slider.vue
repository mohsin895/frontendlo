<template>
    <div class="product-slider-details">
        
        <div class="product-slider-laptop">
            <image-magnifier class="magnifire-style" :src="currentImg" :zoom-src="currentImg" zoom-width="600"
                zoom-height="400">
            </image-magnifier>
            <hooper :settings="hooperSettings" :infiniteScroll="false">
                <slide v-for="imageInfo, imageIndex in productInfo.product_images" :key="imageIndex">
                    <img @click="getImg($event)" v-lazy="baseUrl + imageInfo.product_image" :alt="imageInfo.alt_name">

                </slide>
            </hooper>

        </div>
        <div class="product-slider-mobile">
            <hooper  :play-speed="5000">
                <slide v-for="imageInfo, imageIndex in productInfo.product_images" :key="imageIndex">
                    <div class="product-slider-image">
                        <img v-lazy="baseUrl + imageInfo.product_image" :alt="imageInfo.alt_name"
                            style="  display: block;margin-left: auto; margin-right: auto;"
                            class="product-slider-image">
                    </div>
                </slide>
           
                <hooper-pagination slot="hooper-addons" mode="fraction"></hooper-pagination>
            </hooper>

        </div>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide, 
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: 'product-slider-details',
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
        // HooperPagination,        
    },
    // props:{
    //     productInfo:Object,
    // },
    // props:{
    //     title:String,
    //     productInfo:{
    //         type:Array,
    //         default:()=>[]
    //     }
    // },
    data() {
        return {
            productInfo:'',
            productId:null,
            product_images:'',
            baseUrl:this.$baseUrl,
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                // infiniteScroll: true,
                // centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: false,
                keysControl: false,
                breakpoints: {
                    1: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    800: {
                        itemsToShow: 6,
                        centerMode: false,
                    },
                    
                    1000: {
                        itemsToShow:4
                    },
                    1300: {
                        itemsToShow:5
                    }
                    ,
                    1540: {
                        itemsToShow:6
                    }
                }
            },
            currentImg:'',
        }
    },
    beforeMount(){
    this.getProductInfo();
  },
  watch:{
        $route (to, from){ this.getProductInfo(); }
    },
    methods: {
        getImg(event) {
        this.currentImg = event.currentTarget.src;
        },
        async getProductInfo(){
             let slug=this.$route.params.slug;
               await this.$http.get("product/details?slug="+slug)
             .then(response=>{
            //   console.log(response.data);
                this.productInfo=response.data.productInfo;
                this.currentImg =this.$baseUrl +response.data.productInfo.thumbnail_img 
                this.$store.commit("storeProductDetails",response.data.productInfo);
              
              
             })
             .catch(error=>{console.dir(error)})
             .finally();
    }
    },
}
</script>

<style scoped>

.image-magnifier__mask {
    height: 250px;
    width: 250px;
}

.product-view {
    height: 400px;
}

.product-rows {
    height: 1000px;
}


@media (max-width:991px) {
    .hooper {
        margin-top: 10px;
        height: 265px;
        width: 100%;
    }

    .product-slider-image {
        height: 265px;
        width: 265px;
        display: block;
    margin-left: auto;
    margin-right: auto;
  

    }

}

@media (min-width:992px) {
    .hooper {
        margin-top: 10px;
        height: 100px;
        width: 100%;
    }

}


.hooper-track ul li {
    width: 100px;
    height: 50px;
}

@media(max-width:991px) {
    .product-slider-laptop {
        display: none;
    }

    .hooper-track img {
        width: 290px;
        height: 270px;
        object-fit: contain;
        cursor: pointer;
        margin-top: -17px;
    }
    .hooper-list{
        margin-top: -30px;
    }

}

@media (min-width:992px) {
    .product-slider-mobile {
        display: none;
    }

    .hooper-track img {
        width: 70px;
        height: 105px;
        object-fit: contain;
        cursor: pointer;
    }

}
</style>
