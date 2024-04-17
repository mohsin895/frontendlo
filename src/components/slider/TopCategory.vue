<template>
    <div class="top-category">
        <div class="top-category-heading">
            <div class="caption pointer">
               Top Category
            </div>
            <div class="seeall-btn pointer">
                <router-link to="/category">View more</router-link>
                <!-- <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span> -->
            </div>
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(topCategoryInfo,productIndex) in dataList" :key="productIndex">
                <div class="product">
                    <Card :topCategoryInfo="topCategoryInfo" />
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
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
import Card from '@/components/slider/TopCategoryCard'
export default {
    name:'recent-viewed-product',
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
            msg:'slider',
            dataList:[],
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                // infiniteScroll: true,
                // centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 1,
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
                    },

                    1540: {
                        itemsToShow: 5
                    }
                }
            }
        }
    },
    beforeMount() {
        this.getTopCategory();
    },
    methods:{
        getTopCategory(){
           this.$http.get("get/category/top")
           .then(response=>{ 
                this.dataList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
    }
}
</script>

<style scoped>
@media (min-width: 1540px){
    .hooper{
    height:auto;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.top-category-heading{
    height:40px;
    max-width:1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
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

.top-category-heading{
    height:40px;
    max-width:1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
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

.top-category-heading{
    height:40px;
    max-width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
}


}

.product{
    width: 233px;
    height:270px;
    cursor: pointer;
}
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
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
.card{
    /* box-shadow: 8px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #F4f4f4;
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
