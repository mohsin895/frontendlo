<template>
    <div class="overview-review">
        <div class="heading">
            Ratings & Reviews of {{productInfo.name}}
        </div>
        <div class="tab-body">
            <div class="tab-container">
                <b-row cols="1" cols-sm="1" cols-lg="3">
                    <b-col>
                        <div class="big-rating">
                            <div class="rating-number">
                                <span>{{totalrating}}</span> <span>/5</span>
                            </div>
                            <div class="ratings" v-if="totalrating==5">
                                <Rating 
                                size="30px"
                                :value="5"
                                />
                                <p>{{ratingCount}} Ratings</p>
                            </div>
                            <div class="ratings" v-else-if="totalrating==4">
                                <Rating 
                                size="30px"
                                :value="4"
                                />
                                <p>{{ratingCount}} Ratings</p>
                            </div>
                            <div class="ratings" v-else-if="totalrating==3">
                                <Rating 
                                size="30px"
                                :value="5"
                                />
                                <p>{{ratingCount}} Ratings</p>
                            </div>
                            <div class="ratings" v-else-if="totalrating==2">
                                <Rating 
                                size="30px"
                                :value="5"
                                />
                                <p>{{ratingCount}} Ratings</p>
                            </div>
                            <div class="ratings" v-else-if="totalrating==1">
                                <Rating 
                                size="30px"
                                :value="5"
                                />
                                <p>{{ratingCount}} Ratings</p>
                            </div>
                            <div class="ratings" v-if="totalrating==0">
                                <Rating 
                                size="30px"
                                :value="0"
                                />
                                <p>{{ratingCount}} Ratings</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="review-ratings">
                            <div class="rating-five">
                                <Rating 
                                size="15px"
                                :value="5"
                                />
                                <Review
                                :reviewer="fiveStarRevieTotalCount"
                                />
                            </div>
                            <div class="rating-four">
                                <Rating 
                                size="15px"
                                :value="4"
                                />
                                <Review
                                :reviewer="fourStarRevieTotalCount"
                                />
                            </div>
                            <div class="rating-three">
                                <Rating 
                                size="15px"
                                :value="3"
                                />
                                <Review
                                :reviewer="threeStarRevieTotalCount"
                                />
                            </div>
                            <div class="rating-two">
                                <Rating 
                                size="15px"
                                :value="2"
                                />
                                <Review
                                :reviewer="twoStarRevieTotalCount"
                                />
                            </div>
                            <div class="rating-one">
                                <Rating 
                                size="15px"
                                :value="1"
                                />
                                <Review
                                :reviewer="oneStarRevieTotalCount"
                                />
                            </div>
                        </div>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </div>
        </div>
        <div class="reviewer-list">
            <div class="reviewer-list-heading">
             
Product Reviews ({{ratingCount}}) <span class="view-all"><router-link :to="{name:'MobileAllReview',params:{dataId:productInfo.id, slug:productInfo.slug}}">view all</router-link></span>  
             
                
            </div>
            <div class="review-list-body">
                <div class="single-review" v-for="(review, index) in productReview " :key="index">
                    <div class="tab-container" v-if="index < 1">
                        <div class="first-step">
                            <div class="reting" v-if="review.rating==5" >
                               
                              
                                <div class="reviewer-name">
                                     {{capitilazitionUserName(review.customer_info.name)}}
                                   
                                </div>
                                <br>
                                <Rating 
                                size="15px"
                                :value="5"
                                />
                            </div>
                            <div class="reting" v-else-if="review.rating==4" >
                                <Rating 
                                size="15px"
                                :value="4"
                                />
                                <br>
                                <div class="reviewer-name">
                                    {{capitilazitionUserName(review.customer_info.name)}}
                                    
                                </div>
                            </div>
                            <div class="reting" v-else-if="review.rating==3" >
                                <Rating 
                                size="15px"
                                :value="3"
                                />
                                <br>
                                <div class="reviewer-name">
                                    {{capitilazitionUserName(review.customer_info.name)}}
                                </div>
                            </div>
                            <div class="reting" v-else-if="review.rating==2" >
                                <Rating 
                                size="15px"
                                :value="2"
                                />
                                <br>
                                <div class="reviewer-name">
                                    {{capitilazitionUserName(review.customer_info.name)}}
                                </div>
                            </div>
                             <div class="reting" v-if="review.rating==1" >
                                <Rating 
                                size="15px"
                                :value="1"
                                />
                                <br>
                                <div class="reviewer-name">
                                    {{capitilazitionUserName(review.customer_info.name)}}
                                </div>
                            </div>
                            <div class="reviewe-timer">
                                {{review.created_at |formatDatesingle}}
                            </div>
                        </div>
                        <div class="second-step">
                            <div class="reviewer-comment">
                             

                               <p v-html="review.description"></p>
                            </div>
                            <div class="reviewer-images">
                                <img v-for="img in review.images" :key="img.id" :src="baseUrl + img.image" alt="">
                            </div>
                        </div>
                        <div class="third-step">
                            <div class="size">
                                <label for="">Size:
                                    <span> {{review.stock_info.size_info.size}}</span>
                                </label>
                                <label for="">, Color:
                                    <span>{{review.stock_info.color_info.color}}</span>
                                </label>
                            </div>
                            <!-- <div class="social-follow">
                                <div class="thumbs-up">
                                    <b-icon icon="hand-thumbs-up"/>
                                </div>
                                <div class="chat">
                                    <b-icon icon="chat-left"/>
                                    <span>0</span>
                                </div>
                                <div class="replay-btn">
                                    Replay
                                </div>
                            </div> -->
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '@/components/product/rating-view'
import Review from '@/components/product/review-amount'
export default {
    name: 'overview-tab',
    props:{
        productInfo:Object,
        totalrating: {
      type: [Number, String], 
      required: true 
    },
    ratingCount: {
      type: [Number, String],
      required: true 
    },
    fiveStarRevieTotalCount: {
      type: [Number, String],
      required: true 
    },
    fourStarRevieTotalCount: {
      type: [Number, String],
      required: true 
    },
    threeStarRevieTotalCount: {
      type: [Number, String],
      required: true 
    },
    twoStarRevieTotalCount: {
      type: [Number, String],
      required: true 
    },
    oneStarRevieTotalCount: {
      type: [Number, String],
      required: true 
    },
    productReview:{
            type:Array,
            default:()=>[]
        }
    },
    components: {
        Rating,
        Review
    },
    data() {
        return {
        
   
            baseUrl:this.$baseUrl,
          

        }
    },

   
    beforeMount(){
 
  },


    methods: {

    
    capitilazitionUserName(name){
        if(name && name.length >0){
            return name.charAt(0).toUpperCase()+ name.slice(1);
        }else{
            return name;
        }
    },
  
   
  },
}
</script>


<style scoped>

.rating-number > :nth-child(1) {
    font-size: 3rem;
    color: black;
}
.rating-number > :nth-child(2) {
    font-size: 1.8rem;
}
.review-ratings > *{
    display: flex;
    grid-column-gap: 8px;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #fff;
    margin-right: 20px;
    margin-block: 25px;
}
.review-list-body {
    height: auto;
    /* overflow-y: auto; */
}

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

.reviewe-timer{
    align-self: flex-end;

}

.reviewer-comment{
    font-size: 14px;
}
.view-all{
    padding-right: 30px;
}
</style>