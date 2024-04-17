<template>
  <div class="header">

    <nav class="mobile-header-main" style="height:60px ;">
      <sliding-header :threshold-hide="200" :threshold-open="400">
        <template v-slot:first-header>
          <div class="menu-part">
            <b-row>
              <b-col cols="3"><span class="menu-icon"><router-link :to="{name:'productPage',params:{ slug:productInfo.slug}}"><img src="@/assets/images/back.png"
                    style="height: 30px;"></router-link> </span></b-col>
              <b-col cols="6"><span class="menu-text">Ratings & Reviews</span> </b-col>
              <b-col cols="3"><span class="menu-text">Ratings & Reviews</span></b-col>
            </b-row>

          </div>
        </template>

        <template v-slot:second-header>
          <div class="menu-part">
            <b-row>
              <b-col cols="3"><span class="menu-icon"><router-link :to="{name:'productPage',params:{ slug:productInfo.slug}}"><img src="@/assets/images/back.png"
                    style="height:30px;"></router-link> </span></b-col>
              <b-col cols="6"><span class="menu-text">Ratings & Reviews</span> </b-col>
              <b-col cols="3"><span class="menu-text">Ratings & Reviews</span></b-col>
            </b-row>

          </div>
        </template>
      </sliding-header>
    </nav>
    <div class="review-list-body">
      <div class="single-review" v-for="(review, index) in productReview " :key="index">
        <div class="tab-container" >
          <div class="first-step">
            <div class="reting" v-if="review.rating == 5">


              <div class="reviewer-name">
                {{ capitilazitionUserName(review.customer_info.name) }}

              </div>
              <br>
              <Rating size="15px" :value="5" />
            </div>
            <div class="reting" v-else-if="review.rating == 4">
              <Rating size="15px" :value="4" />
              <br>
              <div class="reviewer-name">
                {{ capitilazitionUserName(review.customer_info.name) }}

              </div>
            </div>
            <div class="reting" v-else-if="review.rating == 3">
              <Rating size="15px" :value="3" />
              <br>
              <div class="reviewer-name">
                {{ capitilazitionUserName(review.customer_info.name) }}
              </div>
            </div>
            <div class="reting" v-else-if="review.rating == 2">
              <Rating size="15px" :value="2" />
              <br>
              <div class="reviewer-name">
                {{ capitilazitionUserName(review.customer_info.name) }}
              </div>
            </div>
            <div class="reting" v-if="review.rating == 1">
              <Rating size="15px" :value="1" />
              <br>
              <div class="reviewer-name">
                {{ capitilazitionUserName(review.customer_info.name) }}
              </div>
            </div>
            <div class="reviewe-timer">
              {{ review.created_at | formatDatesingle }}
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
                <span> {{ review.stock_info.size_info.size }}</span>
              </label>
              <label for="">, Color:
                <span>{{ review.stock_info.color_info.color }}</span>
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
</template>
  
<script>
import Rating from '@/components/product/rating-view'
import Review from '@/components/product/review-amount'

import SlidingHeader from "@/layout/SlidingHeader.vue";
export default {
  name: 'headerComponent',
  components: {

    SlidingHeader,
    Rating,
    Review

  },
  data() {
    return {
      categoryList: [],
      msg: 'header',

      baseUrl: this.$baseUrl,
      dataId: this.$route.dataId,
      productInfo: [],
      productReview: [],
      totalrating: '',
      ratingCount: '',
      fiveStarRevieTotalCount: '',
      fourStarRevieTotalCount: '',
      threeStarRevieTotalCount: '',
      twoStarRevieTotalCount: '',
      oneStarRevieTotalCount: '',

      // wishListCount:'',
    }
  },
  beforeMount() {
    this.getProductInfo();
  },

  watch: {
    $route(to, from) { this.getProductInfo(); }
  },

  methods: {
    capitilazitionUserName(name){
        if(name && name.length >0){
            return name.charAt(0).toUpperCase()+ name.slice(1);
        }else{
            return name;
        }
    },
    async getProductInfo() {
      let slug = this.$route.params.slug;
      await this.$http.get("product/details?slug=" + slug)
        .then(response => {
          console.log(response.data);
          this.productInfo = response.data.productInfo;
          this.productReview = response.data.productReview;
          this.totalrating = response.data.totalrating;
          this.ratingCount = response.data.ratingCount;
          this.fiveStarRevieTotalCount = response.data.fiveStarRevieTotalCount;
          this.fourStarRevieTotalCount = response.data.fourStarRevieTotalCount;
          this.threeStarRevieTotalCount = response.data.threeStarRevieTotalCount;
          this.twoStarRevieTotalCount = response.data.twoStarRevieTotalCount;
          this.oneStarRevieTotalCount = response.data.oneStarRevieTotalCount;

          // console.dir(response.data.productInfo);
        })
        .catch(error => { console.dir(error) })
        .finally();
    }


  }
}
</script>
  
<style lang="scss"  scoped>


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
    margin-left: 20px;
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

    .review-list-head-left {
        width: 40%;
        font-size: 1rem;
        padding-left: unset;
    }
    .review-list-head-right {
        width: 60%;
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
.sliding-header {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

#container {
  margin: 0 auto;
  max-width: 890px;
}


nav {
  margin: 0;
  padding: 0;
  background-color: #fff;
}

nav:after {
  content: "";
  display: table;
  clear: both;
}

nav a {
  display: block;
  color: #FFF;
  font-size: 14px;
  text-decoration: none;
}

.container-width {

  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

a:hover {
  color: white;
  text-decoration: none;
}


.menu-bottom {
  height: 0px;

}



a {
  color: #fff;
  text-decoration: none;
}

.menu-part {
  width: 100%;
  height: 60px;
  background: #232f3e;
  color: #fff
}



nav {
  margin: 0;
}

.mobile-header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
  // position: fixed;
  width: 100%;
  z-index: 3;
  // margin-top: 95px;
}



.full-page-scroll {
  width: 100%;
  height: 100vh;
  /* Set the height to cover the entire viewport */
  overflow: hidden;
  /* Hide overflowing content */
  position: relative;
  /* Position relative for child elements */
}

.menu-text {
  padding-left: 10px;
  margin-top: 15px;
  position: absolute;
}

.menu-icon {
  padding-left: 10px;
  margin-top: 15px;
  height: 30px;
  position: absolute;
}
</style>