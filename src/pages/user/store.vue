<template>
    <div class="all-following-store-page">
        <div class="loyel-container">
            <div class="following-store-heading">

                Your Following Store

                <!-- <div class="seeall-btn pointer">
                <div class="search-bar">
                            <Search/>
                        </div>
              
            </div> -->
            </div>

            <br>
            <div class="loyel-container following-store-wrapper">

                <div class="right-following-stores-display">
                    <div class="following-store-slider">
                        <div class="row">
                            <div class="col mt-2" v-for="(dataInfo, index) in dataList" :key="index">
                                <div class="following-store">
                                    <div class="card">
                                        <div class="following-store-box">


                                            <div class="image">
                                                <p class="following-store-name"> {{ dataInfo.shop_info.shop_name }}</p>


                                            </div>
                                            <img :src="baseUrl + dataInfo.shop_info.shop_logo"
                                                :alt="dataInfo.shop_info.shop_name" class="store-image">
                                            <div class="premiun-packge-div">

                                            </div>




                                        </div>
                                        <div class="following-store-get">
                                            <router-link class="name"
                                                :to="{ name: 'shop', params: { slug: dataInfo.shop_info.slug } }"> <span style="color:#fff">
                                                    Visit
                                                    Store</span></router-link>


                                        </div>
                                        <!-- <div class="unfollowing-store-get mt-2"
                                            @click="unfollow(dataInfo.shop_id)">
                                            <span> Unfollow</span>


                                        </div> -->

                                    </div>
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
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'myBank',
    components: {


        Hooper,
        Slide,
        HooperNavigation,

    },
    data() {
        return {
            msg: 'myBank',
            dataList: [],
            baseUrl: this.$baseUrl,
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

        this.getStoreList();
    },

    methods: {
        async unfollow(storeId) {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            let formData = new FormData();

            formData.append("shopId", storeId);


            await this.$http
                .post("/customer/unFollowing/store", formData, config)
                .then((response) => {
                    this.errMsgFlag = response.data.errMsgFlag;
                    this.msgFlag = response.data.msgFlag;
                    this.msg = response.data.msg;
                    this.errMsg = response.data.errMsg;
                    if (this.errMsgFlag == true) this.$toaster.warning(this.errMsg);
                    if (this.msgFlag == true) this.$toaster.success(this.msg);
                    this.getStoreList();
                })
                .catch((error) => {
                    console.dir(error);
                })
                .finally();

        },

        getStoreList() {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            this.$http.get("/customer/get/following/store", config)
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
.my-bank-wrapper {
    width: 100%;
    min-height: 400px;
    background: white;
    padding: 20px;
}

hr {
    margin: 5px 0;
}

.header {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}

@media (min-width: 1540px) {
    .following-store-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;

        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 1500px;
    }

    .following-store-heading {
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
        margin-top: 20px;
    }

}

@media (min-width: 1400px) and (max-width: 1539px) {
    .following-store-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;

        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
    }

    .following-store-heading {
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
        margin-top: 20px;
    }


}

@media (min-width: 1200px) and (max-width: 1399px) {
    .following-store-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;

        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 1150px;
    }

    .following-store-heading {
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
        margin-top: 20px;
    }

}



@media (min-width: 1000px) and (max-width: 1199px) {
    .following-store-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;

        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }

    .following-store-heading {
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
        margin-top: 20px;
    }

}



@media (min-width: 1px) and (max-width: 999px) {
    .following-store-wrapper {
        display: block;
        margin-left: auto;
        margin-right: auto;

        /* display: flex;
        flex-flow: row wrap; */
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }

    .following-store-heading {
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
        margin-top: 20px;
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

.following-store-name {
    /* margin-left: -210px; */
    color: #242222;
    font-weight: 700;
    font-size: 15px;
}

.all-following-store-page {
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

.following-store-slider {

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

.following-store-box {
    display: flex;
    flex-flow: column wrap;
    width: 244px;

    height: 190px;
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

/* following-store image  */
.following-store-box .image {
    display: flex;
    justify-content: center;
    align-items: center;

    /* height: 112px; */
    background-repeat: no-repeat;
    background-size: 386px;
}

.following-store-box .image img {
    width: 384px;
    height: 128px;
    /* border-radius: 50%; */
    /* object-fit: contain; */
    margin-top: 17px;
}

/* following-store description  */
.following-store-box .description {
    width: 100%;
    height: 22%;
    padding: 10px 10px;
    font-size: 1rem;
    text-align: center;

}

.following-store-box .description .price {
    display: flex;
    grid-column-gap: 60px;
}

.following-store-box .description .price .main-price {
    color: #FF0000;
}

/* following-store btn  */
.following-store-box .following-store-btn {
    width: 100%;
    height: 16%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.following-store-box .following-store-btn .add-view-btn {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    background: #464545;
    padding-left: 5px;
}

.following-store {
    width: 244px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.following-store-wrapper .card {
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

.following-store-get {
    background: #040e7e;
    color: #fff;
    text-align: center;
    font-size: 15px;
    height: 33px;
    padding-top: 5px;

}

.following-store-price {
    padding-top: 80px;
    text-align: center;
    margin-left: 16px;
    margin-right: 15px;
    border-bottom: 1px solid #B0B0B0;
}

/* .premiun-packge-div {
    
} */

.following-store-font {
    font-weight: 700;
}

</style>