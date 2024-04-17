<template>
    <div class="all-premium-packge-page">
        <div class="loyel-container">
            <div class="premium-packge-heading">

                Premium Packge For Customer

                <!-- <div class="seeall-btn pointer">
                <div class="search-bar">
                            <Search/>
                        </div>
              
            </div> -->
            </div>

            <br>
            <div class="loyel-container premium-packge-wrapper">

                <div class="right-premium-packges-display">
                    <div class="premium-packge-slider">
                        <div class="row">
                            <div class="col mt-2" v-for="(dataInfo, index) in dataList" :key="index" style=" display: flex;
  align-items: center;
  justify-content: center;">
                                <div class="premium-packge">
                                    <div class="card">
                                        <div class="premium-packge-box">


                                            <div class="image">
                                                <p class="premium-packge-name"> {{ (dataInfo.name.length > 15) ?
                                                    dataInfo.name.substr(0, 15) + '...' : dataInfo.name }}</p>


                                            </div>
                                            <img :src="baseUrl + dataInfo.logo" alt="Avatar" class="store-image">
                                            <div class="premiun-packge-div">
                                                <p class="premium-packge-price"><span
                                                        class="premium-packge-font">Price:</span> &#2547;{{ dataInfo.price
                                                        }}</p>
                                            </div>




                                        </div>
                                        <div class="premium-packge-get">
                                            <span> Get This Packge</span>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="row col-12  flex-row-reverse mt-2 mb-2">
                              <ul class="pagination pagination-sm">
                                <paginate
                                  :page-count="lastPage"
                                  :click-handler="dataByPaginate"
                                  :page-range="2"
                                  :prev-text="'<'"
                                  :next-text="'>'"
                                  :container-class="'pagination justify-content-end'"
                                  :page-class="'page-item'"
                                  :page-link-class="'page-link'"
                                  :prev-class="'page-item'"
                                  :prev-link-class="'page-link'"
                                  :next-class="'page-item'"
                                  :next-link-class="'page-link'"
                                  :first-last-button="true"
                                  :first-button-text="'<<'"
                                  :last-button-text="'>>'"                                    
                                  >
                                 <span slot="prevContent">Changed previous button</span>
                                  <span slot="nextContent">Changed next button</span>
                                  <span slot="breakViewContent">
                                    <svg width="16" height="4" viewBox="0 0 16 4">
                                      <circle fill="#999999" cx="2" cy="2" r="2" />
                                      <circle fill="#999999" cx="8" cy="2" r="2" />
                                      <circle fill="#999999" cx="14" cy="2" r="2" />
                                    </svg>
                                  </span>
                            </paginate>
                                </ul>
                        </div>                  -->
                    </div>
                </div>
            </div>
        </div>
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

export default {
    name: 'all-premium-packge-page',
    components: {


        Hooper,
        Slide,
        HooperNavigation,

    },
    data() {
        return {

            dataList: [],
            baseUrl: this.$baseUrl,


            msg: 'all-premium-packge-page',
            hooperSettings: {
                itemsToShow: 4,
                itemsToSlide: 1,
                infiniteScroll: true,
                centerMode: true,
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
                        itemsToShow: 1,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 2
                    },
                    1200: {
                        itemsToShow: 3
                    }
                    ,
                    1540: {
                        itemsToShow: 6
                    }
                }
            },

        }
    },
    beforeMount() {

        this.getPremiumPackgeList();
    },

    methods: {

        getPremiumPackgeList() {
            this.$http.get("get/premium/packge/list")
                .then(response => {
                    this.dataList = response.data;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },

    }
}
</script>

<style scoped>
@media (min-width: 1450px) {
    .premium-packge-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;

        justify-content: space-between;
        align-items: center;
        max-width: 1450px;
    }

    .premium-packge-heading {
        height: 40px;

        max-width: 1500px;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        border: 1px solid rgb(167, 165, 165);
        margin-bottom: 10px;
        padding: 0 10px;
        background: white;
        margin-top: 30px;
    }

}

@media (min-width: 1400px) and (max-width: 1539px) {
    .premium-packge-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
      
    }

    .premium-packge-heading {
        height: 40px;

        max-width: 1300px;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        border: 1px solid rgb(167, 165, 165);
        margin-bottom: 10px;
        padding: 0 10px;
        background: white;
        margin-top: 30px;
    }


}

@media (min-width: 1200px) and (max-width: 1399px) {
    .premium-packge-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;

    }

    .premium-packge-heading {
        height: 40px;

        max-width: 1150px;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        border: 1px solid rgb(167, 165, 165);
        margin-bottom: 10px;
        padding: 0 10px;
        background: white;
        margin-top: 30px;
    }

}



@media (min-width: 1000px) and (max-width: 1199px) {
    .premium-packge-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }

    .premium-packge-heading {
        height: 40px;

        max-width: 100%;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        border: 1px solid rgb(167, 165, 165);
        margin-bottom: 10px;
        padding: 0 10px;
        background: white;
        margin-top: 30px;
    }

}



@media (min-width: 1px) and (max-width: 999px) {
    .premium-packge-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }

    .premium-packge-heading {
        height: 40px;

        max-width: 100%;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        border: 1px solid rgb(167, 165, 165);
        margin-bottom: 10px;
        padding: 0 10px;
        background: white;
        margin-top: 30px;
    }

}

.store-image {
    width: 112px;
    height: 112px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    border-radius: 50%;
    /* border: 3px solid #242222; */


    background: #f7f3f3;
}

.premium-packge-name {
    /* margin-left: -210px; */
    color: #242222;
    font-weight: 700;
    font-size: 15px;
}

.all-premium-packge-page {
    margin-bottom: 20px;
}

.search-bar {
    margin-right: 85px;
}

.banner {
    margin: 20px 0;
}

.card {
    cursor: pointer;
}

.premium-packge-slider {

    margin: auto;
}

.heading {
    width: 95%;
    padding: 8px;
    background: #E1E1E1;
    font-weight: 600;
    font-size: 1.2rem;
}

ul {
    padding: 0;
    list-style: none;
}

ul li {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
}

ul li label {
    cursor: pointer;
}

.description .name {
    text-decoration: none;
    color: inherit;
}

.description {
    margin-top: 40px;
}

.premium-packge-box {
    display: flex;
    flex-flow: column wrap;
    width: 244px;

    height: 300px;
    background: white;
    padding: 2px;
    /* border:1px solid #CECECE; */
    position: relative;
}

.discount-sticker {
    position: absolute;
    right: -.1px;
    top: 10px;
    width: 50px;
    height: 25px;
    font-size: .8rem;
    color: white;
    background: #FF4141;
    display: flex;
    justify-content: center;
    align-items: center;

}

/* premium-packge image  */
.premium-packge-box .image {
    display: flex;
    justify-content: center;
    align-items: center;

    /* height: 112px; */
    background-repeat: no-repeat;
    background-size: 386px;
}

.premium-packge-box .image img {
    width: 384px;
    height: 128px;
    /* border-radius: 50%; */
    /* object-fit: contain; */
    margin-top: 17px;
}

/* premium-packge description  */
.premium-packge-box .description {
    width: 100%;
    height: 22%;
    padding: 10px 10px;
    font-size: 1rem;
    text-align: center;

}

.premium-packge-box .description .price {
    display: flex;
    grid-column-gap: 60px;
}

.premium-packge-box .description .price .main-price {
    color: #FF0000;
}

/* premium-packge btn  */
.premium-packge-box .premium-packge-btn {
    width: 100%;
    height: 16%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.premium-packge-box .premium-packge-btn .add-view-btn {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    background: #464545;
    padding-left: 5px;
}

.premium-packge {
    width: 244px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.premium-packge-wrapper .card {
    --bs-card-spacer-y: 1rem;
    --bs-card-spacer-x: 1rem;
    --bs-card-title-spacer-y: 0.5rem;
    --bs-card-border-width: 1px;
    --bs-card-border-color: var(--bs-border-color-translucent);
    --bs-card-border-radius: 0.375rem;
    --bs-card-box-shadow: ;
    --bs-card-inner-border-radius: calc(0.375rem - 1px);
    --bs-card-cap-padding-y: 0.5rem;
    --bs-card-cap-padding-x: 1rem;
    --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
    --bs-card-cap-color: ;
    --bs-card-height: ;
    --bs-card-color: ;
    --bs-card-bg: #fff;
    --bs-card-img-overlay-padding: 1rem;
    --bs-card-group-margin: 0.75rem;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    height: var(--bs-card-height);
    word-wrap: break-word;
    background-color: var(--bs-card-bg);
    background-clip: border-box;
    border: 0px;
    border-radius: 0px;
}

.image {
    border-bottom: 1px solid #B0B0B0;
    margin-bottom: 5px;
}

.premium-packge-get {
    background: #000;
    color: #fff;
    text-align: center;
    font-size: 15px;
    height: 33px;
    padding-top: 5px;

}

.premium-packge-price {
    padding-top: 80px;
    text-align: center;
    margin-left: 16px;
    margin-right: 15px;
    border-bottom: 1px solid #B0B0B0;
}

/* .premiun-packge-div {
    
} */

.premium-packge-font {
    font-weight: 700;
}</style>