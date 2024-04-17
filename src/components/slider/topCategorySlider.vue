<template>
    <div class="brand-slider">
       

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex">
                <div class="brands" @click="gotoCategoryPage(megaCategory)">
                    <img v-lazy="baseUrl+megaCategory.category_logo" :alt="megaCategory.name" style="height:45px; width:45px; border-radius:50%;">
                    
                </div>
                <span class="font-size"> {{(megaCategory.title.length > 8)? megaCategory.title.substr(0,8)+'...' : megaCategory.title}}</span>
            </slide> 
            <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
        </hooper>
    </div>
</template>


<script>
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard'
export default {
    name:'brand-slider',
    props:{
        title:String
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            // brandList:[],
            categoryList:[],
            msg:'slider',
            baseUrl: this.$baseUrl, 
            hooperSettings: {
                itemsToShow: 9,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: false,
                keysControl: false,
                breakpoints: {
                    1: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    320: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    400: {
                        itemsToShow: 5,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    },
                    800: {
                        itemsToShow: 4
                    },
                    1000: {
                        itemsToShow:5
                    },
                    1100: {
                        itemsToShow:6
                    }
                    ,
                    1540: {
                        itemsToShow:8
                    }
                }
            }
        }
    },
    beforeMount(){
      
        if(window.innerWidth < 768){
         this.getCategory();
        }
    },
    methods:{

        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
        getCategory(){
           this.$http.get("get/category/list")
           .then(response=>{ 
                this.categoryList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
        gotoBrandProductPage(brandInfo){
            this.$router.push({name:'brandProduct',params:{slug:brandInfo.slug.split(' ').join('-')}});
        },
      
    }
}
</script>

<style scoped>
.font-size{
    font-size: 12px;
}
/* .hooper {
    width: calc(100% + 2 * var(--slider-gap));
    margin: var(--slider-gap);
}
.hooper-slide {
    padding: 0 10px;
} */

@media(min-width: 200px) and (max-width: 999px){
    .hooper{
    height:auto;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}


   
}
/* other responsive */



.brands{
    cursor: pointer;
}


.brands{
    width: 45px;
    height:45px;
    border-radius:50%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
.brands > * img{
    width:80px;
    height:80px;
    object-fit: contain;
}
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
    height:20px;
    width:20px;
}


.caption{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}
.seeall-btn:hover{
    color: var(--see-all-color);
}
.seeall-btn{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  
}
.seeall-btn a{
     font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}
/* slider header style end  */
</style>
