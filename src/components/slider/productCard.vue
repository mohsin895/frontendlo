<template>
    <div class="product-card">
        <router-link class="name" :to="{name:'productPage',params:{slug:productInfo.slug}}" >
        <div class="product-box">
            <div class="image">
                
                <slot v-if="productInfo.thumbnail_img!=null">
                    <img v-lazy="baseUrl + productInfo.thumbnail_img" alt="productInfo.name">
                </slot>
               
            </div>
            <div class="description" style="text-align: center;">
               

                  <span :title="productInfo.name" class="product-name">  {{(productInfo.name.length > 26)? productInfo.name.substr(0,26)+'...' : productInfo.name}}</span>
              
                <div class="price" v-if="isDiscountTimeExpire(productInfo.startDate,productInfo.endDate)">
                    <!-- <div class="dicount-price">
                       
                    </div> -->
                    <div >
                        &#2547;<span class="dicount-price">{{(productInfo.special_price || formatNumberWithOutDecimal)}}</span>   &#2547;<span ><del>{{productInfo.sell_price || formatNumberWithOutDecimal}}</del> &nbsp;
                     {{getDiscountPrice(productInfo.sell_price,productInfo.special_price) | formatNumberWithDecimal}}% off</span> 
           
                 
                    </div>
                </div>
                <div class="price" v-else>
                    <div class="dicount-price">
                        &#2547; {{productInfo.sell_price || formatNumberWithOutDecimal}}
                    </div>
                </div>                
            </div>
            <!-- <div class="product-btn">
                <div class="add-view-btn pointer" v-if="productInfo.quantity>0" @click="addToCart(productInfo)">
                    Add to cart
                </div>
                <div class="wish pointer">
                    <b-icon icon="heart"/>
                </div>
            </div> -->
        </div>
    </router-link>
        <!-- <slot v-if="productInfo.has_discount==1 && isDiscountTimeExpire(productInfo.discount_start,productInfo.discount_end)">
            <div class="discount-sticker" >
                {{productInfo.discount}}%
            </div>
        </slot> -->
    </div>
</template>

<script>
import moment from "moment";

export default {
    name:'product-card',
    props:{
        productName: String,
        imageName: String,
        discountPrice: Number,
        price: Number,
        productInfo:Object,
    },
    data() {
        return {
            msg:'product-card',
            baseUrl: this.$baseUrl,
        }
    },
    methods:{
        
     
        getDiscountPrice(price,discount){
            
            return ((price - discount) * 100) / price;
        },
   
        
        isDiscountTimeExpire(startAt,endAt){
            endAt = moment(endAt);
            startAt = moment(startAt);
            let today = moment();
            return today.isBetween(startAt, endAt);
        },
    }
}
</script>


<style scoped>

@media(min-width: 1px) and (max-width: 199px){
    .product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 150px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;
    /* border:1px solid #CECECE; */
    position:relative;
}

.product-box .image img{
    width:150px;
    height:100%;
    /* object-fit: contain; */
}

}

@media(min-width: 200px) and (max-width: 320px){
    .product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 150px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;
    /* border:1px solid #CECECE; */
    position:relative;
}

.product-box .image img{
    width:190px;
    height:100%;
    /* object-fit: contain; */
}

}

@media(min-width: 321px) and (max-width: 350px){
   .product-box .image img{
    width:200px;
    height:100%;
    /* object-fit: contain; */
}
.product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 150px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;
    /* border:1px solid #CECECE; */
    position:relative;
}
}

@media(min-width: 351px) and (max-width: 380px){
   .product-box .image img{
    width:230px;
    height:100%;
    /* object-fit: contain; */
}

.product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 150px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;
    /* border:1px solid #CECECE;  */
    position:relative;
}
}

@media(min-width: 381px) and (max-width: 400px){
    .product-box .image img{
    width:170px;
    height:100%;
    /* object-fit: contain; */
}

.product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 170px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;
   /* border:1px solid #CECECE;  */
    position:relative;
}
}

@media(min-width: 401px) and (max-width: 460px){
   .product-box .image img{
    width:150px;
    height:100%;
    /* object-fit: contain; */
}

.product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 190px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;
     /* border:1px solid #CECECE;  */
    position:relative;
}
}



@media(min-width: 461px) and (max-width: 610px){
    .product-box .image img{
    width:180px;
    height:100%;
    /* object-fit: contain; */
}

.product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 220px; */
    height:300px;
    /* background: rgb(180, 173, 173); */
    padding:2px;

    position:relative;
}
  


   
}



@media(min-width: 611px) and (max-width: 640px){
   
   .product-box .image img{
   width:190px;
   height:100%;
   /* object-fit: contain; */
}

.product-box{
   display: flex;
   flex-flow: column wrap;

   height:300px;

   padding:2px;

   position:relative;
}
 

  
}

@media(min-width: 641px) and (max-width: 767px){
   
   .product-box .image img{
   width:180px;
   height:100%;
  
}

.product-box{
   display: flex;
   flex-flow: column wrap;
 
   height:300px;

   padding:2px;

   position:relative;
}
 

  
}

@media(min-width: 768px) and (max-width: 999px){
   
    .product-box:hover {

/* transform: scale(1.1); */
/* box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25); */
/* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
    .product-box{
    display: flex;
    flex-flow: column wrap;

    height:300px;

    padding:2px;
 
    position:relative;
}

.product-box .image img{
    width:212px;
    height:100%;
    /* object-fit: contain; */
}
 

  
}
/* other responsive */

@media(min-width: 1000px){
    .product-box:hover {

/* transform: scale(1.1); */
/* box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25); */
/* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
    .product-box{
    display: flex;
    flex-flow: column wrap;
    /* width: 220px; */
    height:300px;
    /* background: #F4f4f4; */
    padding:2px;
    border:1px solid #F4f4f4;
    position:relative;
}

.product-box .image img{
    width:212px;
    height:100%;
    /* object-fit: contain; */
}
  
}

.product-card .name{
  text-decoration:none;
  color:inherit;
}

.product-card{
    border: 0px;
}

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
    height: 70%;
}

/* product description  */
.product-box .description{
    width:100%;
    height:22%;
    padding:2px 5px;
    font-size: 14px;
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    /* border-bottom: 1px solid black; */
}
.product-name{
    margin-bottom: 12px;
}
.product-box .description .price{
    /* display: flex; */
    grid-column-gap: 60px;
    
    
   
}
.product-box .description .price .dicount-price{
    font-weight: 700;
    font-size: 16px;
}
.product-box .description .price .main-price{
    color:#FF0000;
    font-size: 14px;
}

/* product btn  */
.product-box .product-btn{
    width:100%;
    height: 16%;
    padding:0 10px;
    display: flex;
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

/* .card:hover {

    transform: scale(1.1);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
} */

</style>