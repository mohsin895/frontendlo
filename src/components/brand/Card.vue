<template>
    <div class="card">
        <div class="product-box" >
          
         
            <div class="image">
                <slot v-if="brandInfo.logo!=null">
                    <img v-lazy="baseUrl + brandInfo.logo" alt="brandInfo.name">
                </slot>
            </div>
            <div class="description">
            

                    {{(brandInfo.name.length > 15)? brandInfo.name.substr(0,15)+'...' : brandInfo.name}}
               
                               
            </div>
        
  
            
        </div>
        <!-- <slot v-if="productInfo.has_discount==1 && isDiscountTimeExpire(productInfo.discount_start,productInfo.discount_end)">
            <div class="discount-sticker" >
                {{productInfo.discount}}%
            </div>
        </slot> -->
    </div>
</template>

<script>


export default {
    name:'card',
   
    data() {
        return {
            msg:'card',
           
        }
    },
   
}
</script>


<style scoped>
.description .name{
  text-decoration:none;
  color:inherit;
}

.product-box{
    display: flex;
    flex-flow: column wrap;
    width: 240px;
    height:260px;
    background: white;
    padding:2px;
    /* border:1px solid #CECECE; */
    position:relative;
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
    height: 62%;
}
.product-box .image img{
    width:180px;
    height:100%;
    object-fit: contain;
}
/* product description  */
.product-box .description{
    width:100%;
    height:22%;
    padding:10px 10px;
    font-size: 1rem;
    text-align: center;
  
}
.product-box .description .price{
    display: flex;
    grid-column-gap: 60px;
}
.product-box .description .price .main-price{
    color:#FF0000;
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

</style>