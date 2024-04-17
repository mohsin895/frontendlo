<template>
    <div class="overview-review">
        <div class="heading">
           Seller Ratings & Reviews 
        </div>
       
        <div class="reviewer-list">
            <div class="reviewer-list-heading">
                <div class="review-list-head-left">
                    Seller Reviews
                </div>
                <div class="review-list-head-right">
                    <div class="relevance">
                        <icon name="sort-amount-up" size="15px"/>
                        <label for=""> Sort:</label>
                        <span> Relevance</span>
                    </div>
                    <div class="all-star">
                        <icon name="filter" size="15px"/>
                        <label for=""> Filter: </label>
                        <span> All star</span>
                    </div>
                </div>
            </div>
            <div class="review-list-body">
                <div class="single-review" v-for="review in dataList " :key="review.id">
                    <div class="tab-container">
                        <div class="row">
                    <div class="col-sm-2 col-md-2 col-lg-2">
                        <img  :src="baseUrl + review.product_info.thumbnail_img" alt="" style="width:60px;height:60px ;" />
                    </div>
                    
                    <div class="col-sm-10 col-md-10 col-lg-10 mb-5 loyel-seller-product-review" >
                        {{ review.product_info.name }}</br>
                        <label for="">Size:
                            <span> {{review.stock_info.size_info.size}}</span>
                            </label>
                        <label for="">, Color:
                             <span>{{review.stock_info.color_info.color}}</span>
                        </label>
                        <div class="reting" v-if="review.rating==5" >
                            <Rating 
                                size="15px"
                                :value="5"
                                />
                        </div>
                        <div class="reting" v-if="review.rating==4" >
                            <Rating 
                                size="15px"
                                :value="5"
                                />
                        </div>
                        <div class="reting" v-if="review.rating==3" >
                            <Rating 
                                size="15px"
                                :value="5"
                                />
                        </div>
                        <div class="reting" v-if="review.rating==2" >
                            <Rating 
                                size="15px"
                                :value="5"
                                />
                        </div>
                        <div class="reting" v-if="review.rating==1" >
                            <Rating 
                                size="15px"
                                :value="5"
                                />
                        </div>

                        <div class="second-step">
                            <div class="reviewer-comment">
                             

                               <p v-html="review.description"></p>
                            </div>
                            <div class="reviewer-images">
                                <img v-for="img in review.images" :key="img.id" :src="baseUrl + img.image" alt="">
                            </div>
                        </div>

                        <div class="reviewer-name">
                                    by {{review.customer_info.name}}  {{review.created_at |formatDateWithDay}}
                                    <span class="status-box bg-green">Verified Purchase</span>
                                </div>
                    
                    </div>
           
    
  
                     </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '@/pages/vandor/shop/rating-review'

export default {
    name: 'overview-tab',
    components: {
        Rating,
      
    },
    data() {
        return {
           
            urlParam:{
              
              slug:this.$route.params.slug,
          },
          baseUrl:this.$baseUrl,
          dataUrl:'seller/product/rating/review',
          totalData:0,
        
          dataList:[],
          

        }
    },
    beforeMount(){
      
        this.getDataList(this.dataUrl,this.urlParam);
    },
  watch:{
        $route (to, from){ this.getProductInfo(); }
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
  },
}
</script>


<style scoped>

.rating-number > :nth-child(1) {
    font-size: 3rem;
    color: black;
}

.loyel-seller-product-review{
    margin-left: -85px;
}
.rating-number > :nth-child(2) {
    font-size: 1.8rem;
}
.review-ratings > *{
    display: flex;
    grid-column-gap: 10px;
    height: 30px;
    align-items: center;
}
.review-ratings > * > :nth-child(1) {
    width: 80px;
}


/* reviewer list css  */

 /* review list heading css  */
.reviewer-list-heading {
    widows: 100%;
    height: 60px;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    display: flex;
    justify-content: space-between;
}
.review-list-head-left {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
    font-size: 1.2rem;
    font-weight: 500;
    border-right: 1px solid #c0c0c0;
}
.review-list-head-right {
    width: 30%;
    display: flex;
}

.relevance {
    border-right: 1px solid #c0c0c0;
}
.review-list-head-right > *{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-gap: 5px;
    cursor: pointer;
}
.review-list-head-right > * > span {
    color: black;
}

/* review list body css  */
.single-review {
    border-bottom: 1px solid #c0c0c0;
}
/* .review-list-body {
    height: 400px;
    overflow-y: auto;
} */

.first-step {
    display: flex;
    justify-content: space-between;
}
.second-step > * {
    margin-top: 10px;
}
.second-step > :nth-child(1){
    font-weight: bold;
}
.second-step > :nth-child(2) > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    background: #E8E8E8;
}
.reviewer-images {
    display: flex;
    grid-column-gap: 10px;
    flex-flow: row wrap;
}
.third-step > * {
    margin-top: 10px;
}
.social-follow {
    display: flex;
    grid-column-gap: 30px;
}
.social-follow > * {
    cursor: pointer;
}

.bg-green {
    background: #00AB4F;
}



/* responsive part  */
@media (max-width: 700px) {
    .review-list-head-left {
        width: 40%;
        font-size: 1rem;
        padding-left: unset;
    }
    .review-list-head-right {
        width: 60%;
    }
}
</style>