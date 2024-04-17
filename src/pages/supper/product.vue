<template>
    <div class="supper-product-page">
        <div class="loyel-container">
            <div class="banner">
                <hooper :settings="hooperSettings">
                    <slide v-for="(sliderInfo, sliderIndex) in sliderList" :key="sliderIndex">
                        <img class="hooper-img" v-lazy="baseUrl + sliderInfo.slider_url" :alt="sliderInfo.title">
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
                <div class="supper-product"> </div>


                <div class="all-supper-product">
                    <div class="multi-menu">
                        <div class="mega-menu horizontalcssmenu">

                            <ul class="list-group-horizontal" v-if="districtNames && districtNames.length > 0">

                                <!-- <li v-for="(district,megaIndex) in districtNames" :key="megaIndex" class="list-group-item" > -->
                                <li v-for="(district, megaIndex) in districtNames" :key="megaIndex"
                                    :class="{ 'active': district.id === activeItemId, 'inactive': district.id !== activeItemId }">

                                    <div class="item" @click="singleSupperProduct(district)" v-on:click="activetab = '2'"
                                        v-bind:class="[activetab === '2' ? 'active1' : '']">

                                        <div class="supper-product-title">{{ district.name }} </div>
                                        <!-- <input type="text" v-model="district.id" /> -->


                                    </div>



                                </li>
                            </ul>

                        </div>
                    </div>
                </div>



            </div>

            <br>
            <div class="slider-heading">
                <div class="caption pointer">
                    All Product
                </div>

            </div>
            <br>
            <div class="loyel-container category-and-products-wrapper">

                <div class="right-products-display">
                    <div class="product-slider">

                        <div class="row" v-if="activetab === '2'">
                            <div class="col mt-2" v-for="(productInfo, productIndex) in dataInfo.data" :key="productIndex">
                                <div class="product">
                                    <Card :productInfo="productInfo" />
                                </div>
                            </div>
                        </div>



                        <div class="row" v-if="activetab === '1'">
                            <div class="col mt-2" v-for="(productInfo, productIndex) in dataList.data" :key="productIndex">
                                <div class="product">
                                    <Card :productInfo="productInfo" />
                                </div>
                            </div>
                        </div>





                        <div class="row col-12  flex-row-reverse mt-2 mb-2">
                            <ul class="pagination pagination-sm">
                                <paginate :page-count="lastPage" :click-handler="dataByPaginate" :page-range="2"
                                    :prev-text="'<'" :next-text="'>'" :container-class="'pagination justify-content-end'"
                                    :page-class="'page-item'" :page-link-class="'page-link'" :prev-class="'page-item'"
                                    :prev-link-class="'page-link'" :next-class="'page-item'" :next-link-class="'page-link'"
                                    :first-last-button="true" :first-button-text="'<<'" :last-button-text="'>>'">
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
    Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard';

export default {
    name: 'supper-product-page',
    components: {

        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,

        Card
    },
    data() {
        return {
            baseUrl: this.$baseUrl,
            sliderList: [],
            dataInfo: [],
            districtNames: [],
            activeItemId: null,
            itemId: '',
            activetab: '1',
            supper: null,
            showMessage: true,
            district: {
                id: '',
            },

            numOfData: 44,
            urlParam: {
                numOfData: 44,
                slug: this.$route.params.slug,
            },
            dataUrl: 'supper/wise/product',
            totalData: 0,
            numberOfDataPage: 1,
            lastPage: 1,
            dataList: [],
            msg: 'supper-product-page',
            hooperSettings: {
                itemsToShow: 1,
                centerMode: false,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
            },

        }
    },

    beforeMount() {


        this.getDataList(this.dataUrl, this.urlParam);
        this.singleSupperProduct();

    },

    mounted() {

    },
    watch: {
        $route(to, from) { this.numOfData = 44; this.pageIndexReset(); this.showDatas(); }
    },
    methods: {

        getDataList(url, param) {

            if (this.numOfDataPage > 0) {
                url = url + "?page=" + this.numOfDataPage;
            }

            this.$http.get(url, { params: param })
                .then(response => {
                    // console.log(response.data);
                    if (response.data.msgFlag == true) {
                        this.dataList = response.data.dataList;
                        this.districtNames = response.data.districtNames;
                        this.lastPage = this.dataList.last_page;
                        this.totalData = this.dataList.total;
                        this.sliderList = response.data.supperSlider;
                    }

                })
                .catch(error => {
                    console.dir(error);
                });

        },

        async singleSupperProduct(district) {


            this.ItemId = district.id;
            this.activeItemId = district.id;
            let formData = new FormData();
            formData.append("dataId[]", this.ItemId);

            await this.$http.post("/supper/product/districtWise", formData)
                .then(response => {
                    console.log(response.data);
                    if (response.data.msgFlag == true) {
                        this.dataInfo = response.data.dataInfo;



                    }



                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        dataByPaginate(pageIndex) {
            this.numOfDataPage = pageIndex;
            this.showDatas();
        },
        showDatas() {
            this.urlParam = {
                numOfData: this.numOfData,
                slug: this.$route.params.slug,
            };
            this.getDataList(this.dataUrl, this.urlParam);
            // this.getSideProductsAndPopularTags();
        },
        pageIndexReset() {
            this.numOfDataPage = 1;
        },

        updateSelected(newSelected) {
            this.selected = newSelected
        },
    },
    singleSupperProduct() {
        this.showMessage = !this.showMessage;
        if (!this.showMessage) {
            this.getDataList();
        }
    },
}
</script>

<style scoped>
.horizontalcssmenu ul .active {
    margin: 0;
    position: relative;
    display: inline;
    float: left;
    background: #000;

}

.horizontalcssmenu ul .inactive {
    margin: 0;
    position: relative;
    display: inline;
    float: left;
    background: #fff;
}



/* .horizontalcssmenu ul li .supper-product-title{
display: block;
padding: 2px 8px;


text-decoration: none;

color: black;
font: bold 13px Tahoma;
} */


.horizontalcssmenu ul .active .supper-product-title {
    display: block;
    padding: 2px 8px;


    text-decoration: none;

    color: #fff;
    font: bold 13px Tahoma;
}

.horizontalcssmenu ul .inactive .supper-product-title {
    display: block;
    padding: 2px 8px;


    text-decoration: none;

    color: black;
    font: bold 13px Tahoma;
}

.hooper-track {
    padding-left: 20px;


}

.hooper-list {
    height: 400px;
}

.category-logo {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, .04);
}


ul {
    position: relative;
    list-style: none;
    padding: 8px 10px 8px 5px;
    padding: 0;
    list-style: none;
    display: flex;

    align-items: flex-end;

    justify-content: center;
}

ul li {
    height: 50px;
    /* padding:0 0 0 10px; */
    /* padding-bottom: 10px; */
    transition: .1s;
    /* width: 100px; */
    /* border-bottom: 1px solid #ddd; */

}


ul li:hover {
    background: #fff;
    /* box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,.1); */

}

ul li .item {
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;

}

ul li .details {
    position: absolute;
    width: 100%;
    background: #fff;
    left: 0px;
    top: 184px;

    z-index: 1000;
    visibility: hidden;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    height: 0;

}


ul li:hover .details {
    visibility: visible;
    min-height: 410px;
}

.menu-wrapper {
    display: flex;
    flex-flow: row wrap;
    grid-column-gap: 14px;
    padding: 10px;
}

.menu-1 {
    height: auto;
    width: 250px;
    padding: 10px 0px;
    /* background:white;
    border:1px solid black; */
}

.menu-1 {
    text-align: left;
}

.icon-div {
    width: 32px;
    margin-right: 20px;
}

.icon-text {
    margin-left: 4px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 30px);

}

.menu-1 h6 {
    cursor: pointer;
    font-weight: bold;
}

.menu-1-item {
    cursor: pointer;
}

.mega-menu {
    widows: 285px;
    font-family: "OpenSans", "Open sans", "Helvetica Neue", "Helvetica", "Arial", "Microsoft YaHei", "PingFang SC", "Tahoma";
}

.category-title {
    min-height: 48px;
    font-size: 14px;
    color: #222;
}

.all-supper-product {
    position: absolute;
    /* top: -100px; */
    margin: 0 auto -220px;
    height: 50px;
    width: 1200px;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    border-radius: 8px;
    opacity: 0.8;
    /* z-index: 2;
    overflow: hidden; */
}

.supper-product {
    position: absolute;
    margin-top: -180px;
    color: #fff;
    margin-left: 850px;
    font-size: 50px;
}

.hooper {
    height: 240px;
    width: 100%;
}

@media (min-width: 1540px) {

    .category-and-products-wrapper {
        display: flex;
        width: 100%;
        flex-direction: row;
        /* margin-left: 210px; */
        max-width: 1500px;

    }

    .dropdown-select {
        max-width: 190px;
        margin-left: auto;
        margin-right: 205px;
    }

    .slider-heading {
        height: 40px;
        margin-left: 180px;
        max-width: 1500px;
        display: flex;
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

@media (min-width: 1200px) and (max-width: 1549px) {

    .product-slider {
        margin-left: 210px;
        max-width: 1055px;

    }

    .dropdown-select {
        max-width: 190px;
        margin-left: auto;
        margin-right: 205px;
    }

    .slider-heading {
        height: 40px;
        margin-left: 180px;
        max-width: 1055px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        border: 1px solid rgb(167, 165, 165);
        margin-bottom: 10px;
        padding: 0 10px;
        background: white;
        margin-top: 20px;
    }

    .category-and-products-wrapper {
        display: flex;
        width: 100%;
        flex-direction: row;
        /* margin-left: 180px; */
        max-width: 1055px;
    }

}

.banner.shop-info {
    margin-left: -124px;
    margin-top: 53px;
    font-size: 20px;
    font-weight: 700;
}

.seller-info {
    margin-left: 1200px;
    /* border-radius: 50%; */
    margin-top: 165px;
}

.seller-image {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    border: 2px solid #282525;
    ;
}

.shop-image {
    border-radius: 50%;
    height: 90px;
    width: 90px;
    border: 2px solid #282525;
    ;
}

.caption {
    font-size: 20px;
    font-weight: 700;
}

.banner {
    margin: 20px 0;
}

.col {
    /* -webkit-box-flex: 1; */
    -ms-flex: 1 0 0%;
    flex: 0;
    margin-left: 10px;
}

/* .dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:15px;
} */
/* .category-and-products-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
} */
/* .left-category{
    min-width: 175px;
} */
/* .right-products-display {
    max-width: calc(100% - 175px);
} */
.product-slider {
    max-width: 1640px;
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

/* .slider-heading{
    height:40px;
    max-width:1640px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
} */
.banner {
    display: flex;
    justify-content: center;
    align-items: center;


    background-repeat: no-repeat;
    background-size: 1640px;
}

.supper-image {
    width: 100%;
    height: 400px;
}

.hooper-img {
    width: 100%;
    height: 240px;
}

.supper-product-page {
    margin-top: -20px;
}</style>