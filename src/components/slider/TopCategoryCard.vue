<template>
    <div class="card" @click="gotoCategoryPage(topCategoryInfo)">
        <div class="product-box">
            <div class="image">
                <slot v-if="topCategoryInfo.category_logo!=null">
                    <img v-lazy="baseUrl+topCategoryInfo.category_logo" alt="topCategoryInfo.title">
                </slot>
            </div>
            <!-- <div class="description">
                <router-link class="name" :to="{name:'productPage',params:{slug:productInfo.slug}}" >

                    {{(productInfo.name.length > 15)? productInfo.name.substr(0,15)+'...' : productInfo.name}}
                </router-link>

                               
            </div> -->
            <div class="product-btn">
               
            {{topCategoryInfo.title}} 
            </div>
        </div>
       
    </div>
</template>

<script>
import moment from "moment";

export default {
    name:'card',
    props:{

        topCategoryInfo:Object,
    },
    data() {
        return {
            msg:'card',
            baseUrl:this.$baseUrl,
        }
    },
    methods:{
        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
       
    }
}
</script>


<style scoped>
.description .name{
  text-decoration:none;
  color:inherit;
}

.product-box{
    height: 250px;
}
/* .product-box{
    display: flex;
    flex-flow: column wrap;
    width: 240px;
    height:260px;
    background: white;
    padding:2px;
    border:1px solid #CECECE;
    position:relative;
} */
.discount-sticker{
    position: absolute;
    right:-.1px;
    top:10px;
    width:50px;
    height:25px;
    font-size: .8rem;
    color:white;
    background:#FF4141;
    display: flex;
    justify-content: center;
    align-items: center;

}
/* product image  */
.product-box .image{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 62%;
}
.product-box .image img{
    /* width:105px;
    height:40px; */
    /* object-fit: contain; */
    /* margin-top: 20px; */
    width: 100%;
    height: 100%;
 
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
/* product description  */
.product-box .description{
    width:100%;
    height:22%;
    padding:2px 10px;
    font-size: 1rem;
   
}
.product-box .description .price{
    display: flex;
    grid-column-gap: 60px;
}
.product-box .description .price .main-price{
    color:#FF0000;
}
.product-btn{
    text-align: center;
    margin-top: 27px;
    font-size: 20px;
}
/* product btn  */
.product-box .product-btn{
    width:100%;
    height: 16%;
    padding:0 10px;
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
}
.product-box .product-btn .add-view-btn{
    width:100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:white;
    background: #464545;
    padding-left:5px;
}

</style>