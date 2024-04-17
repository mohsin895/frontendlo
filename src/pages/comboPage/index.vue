<template>
    <div class="loyel-combo-page">
        <div class="loyel-container">
            <div class="banner">
                <img src="@/assets/images/category-banner.png" alt="" style="width:100%;height: 145px;">


            </div>
            <br>
            <div class="dropdown-select">
                <select v-model="sortBy" @change="getDataList()" class="loyel-select-design">
                    <option value="old">Old Item</option>
                    <option value="new">New Item</option>
                    <option value="max">Price - high to low</option>
                    <option value="min">Price - low to high</option>
                </select>
            </div>
            <br>
            <!-- <div class="slider-heading">
            <div class="caption pointer">
               Combo Offer
            </div>
           
        </div> -->

            <div class="loyel-container loyel-combo-page-and-products-wrapper">
                <!-- <div class="left-category">
                    <div class="cateogry">
                        <div class="heading">Categories</div>

                        <ul>
                            <li v-for="categoryInfo,index in categoryList" :key="index">
                                <input type="checkbox" :id="'id'+index" @click="gotoCategoryPage(categoryInfo)" name="cateogry[1][]">
                                <label :for="'id'+index">{{categoryInfo.title}}</label>
                            </li>
                        </ul>
                    </div>
                </div> -->
                <div class=" right-products-display">
                    <div class="product-slider">
                        <div class="row">
                            <div class="col mt-2 mb-3" v-for="(productInfo, productIndex) in dataList.data"
                                :key="productIndex">
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
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard'
export default {
    name: 'loyel-combo-page',
    components: {

        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },

    data() {
        return {

            sortBy: 'old',

            numOfData: 44,
            urlParam: {
                numOfData: 44,
                slug: this.$route.params.slug,
            },
            dataUrl: 'combo/wise/product',
            totalData: 0,
            numberOfDataPage: 1,
            lastPage: 1,
            dataList: [],
            msg: 'category-page',
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide: 1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 5
                    },
                    1200: {
                        itemsToShow: 6
                    }
                }
            },

        }
    },

    mounted() {
        this.getDataList();
    },
    methods: {

        getDataList() {

            this.$http.get("combo/wise/product", {
                params: {
                    sort_by: this.sortBy,
                },
            })
                .then(response => {
                    if (response.data.msgFlag == true) {
                        this.dataList = response.data.dataList;
                        this.lastPage = this.dataList.last_page;
                        this.totalData = this.dataList.total;
                        this.categoryInfo = response.data.categoryInfo;
                    }

                })
                .catch(error => {
                    console.dir(error);
                });

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
            this.getDataList();
            // this.getSideProductsAndPopularTags();
        },
        pageIndexReset() {
            this.numOfDataPage = 1;
        },

        updateSelected(newSelected) {
            this.selected = newSelected
        },
    }
}
</script>

<style scoped>
.loyel-select-design {
    height: 41px;
    border: none;
}

@media (min-width: 1450px) {
    .loyel-combo-page-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1450px;
        background: #fff;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 1450px;

        display: flex;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 145px;
        background-repeat: no-repeat;
        background-size: 1450px;

    }

    .slider-heading {
        height: 40px;

        max-width: 1450px;
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

@media (min-width: 1400px) and (max-width: 1449px) {
    .loyel-combo-page-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 1300px;

        display: flex;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 145px;
        background-repeat: no-repeat;
        background-size: 1300px;

    }

    .slider-heading {
        height: 40px;

        max-width: 1300px;
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

@media (min-width: 1200px) and (max-width: 1399px) {
    .loyel-combo-page-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1150px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 1150px;

        display: flex;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 145px;
        background-repeat: no-repeat;
        background-size: 1150px;

    }

    .slider-heading {
        height: 40px;

        max-width: 1150px;
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



@media (min-width: 1000px) and (max-width: 1199px) {
    .loyel-combo-page-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 100%;

        display: flex;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 145px;
        background-repeat: no-repeat;
        background-size: 100%;

    }

    .slider-heading {
        height: 40px;

        max-width: 100%;
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



@media (min-width: 1px) and (max-width: 999px) {
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 100%;

        display: flex;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 145px;
        background-repeat: no-repeat;
        background-size: 100%;

    }

    .loyel-combo-page-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
    }

    .slider-heading {
        height: 40px;

        max-width: 100%;
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

.caption {
    font-size: 20px;
    font-weight: 700;
}

.banner {
    margin: 0px 0px;
}

.col {
    /* -webkit-box-flex: 1; */
    -ms-flex: 1 0 0%;
    flex: 0;
    margin-left: 10px;
}

.dropdown-select {
    max-width: 160px;
    margin-left: auto;
    /* margin-right:210px; */
    width: 100%;

}

.product-slider {
    margin-left: 210px;
    max-width: 1500px;
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
.loyel-combo-page{
    margin-top: 30px;
}

</style>