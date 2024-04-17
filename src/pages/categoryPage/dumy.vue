<template>
    <div class="category-page">
        <div class="loyel-container">
            <div class="banner">
                <!-- <slot v-if="categoryInfo!=null">
                    <slot v-if="categoryInfo!=null">
                        <Banner :imageName="categoryInfo.category_image.base_url+categoryInfo.category_image.category_image" :title="categoryInfo.title"/>
                    </slot>
                </slot>    -->

                <img src="@/assets/images/category-banner.png" alt="" style="width:100%">
                <div class="category-title"> </div>


                <div class="all-category">
                    <categorySlider title="Our Avaiable Category" />
                </div>

            </div>
            <br>
            <div class="dropdown-select ">
                <v-select :options="options" :searchable="false" :clearable="false" v-model="selected"></v-select>
            </div>
            <br>
            <div class="loyel-container category-and-products-wrapper">
                <div class="left-category">
                    <!-- <div class="cateogry">
                        <div class="heading">Categories </div>

                        <ul>
                            <li v-for="categoryInfo,index in categoryList" :key="index">
                                <input type="checkbox" :id="'id'+index" @click="gotoCategoryPage(categoryInfo)" name="cateogry[1][]" >
                                <label :for="'id'+index">{{categoryInfo.title}}</label>
                            </li>
                        </ul>
                    </div>
                </div> -->

                <div class="cateogry">
                        <div class="heading">Brands </div>

                        <ul>
                            <li v-for="brandInfo, index in brandList" :key="index">
                                <input type="checkbox" :id="'id' + index" @click="gotoCategoryPage(categoryInfo)"
                                    name="cateogry[1][]">
                                <label :for="'id' + index">{{ brandInfo.name }}</label>
                            </li>
                        </ul>
                    </div>

              <div class="heading">Colors </div>

                    <ul>
                        <li v-for="colorInfo, index in colorList" :key="index">
                            <input type="checkbox" :id="'id' + index" @click="gotoCategoryPage(categoryInfo)"
                                name="cateogry[1][]">
                            <label :for="'id' + index">{{ colorInfo.color }}</label>
                        </li>
                    </ul>
                </div>


        </div>
        <div class="right-products-display">
            <div class="product-slider">
                <div class="row">
                    <div class="col mt-2 mb-3" v-for="(productInfo, productIndex) in dataList.data" :key="productIndex">
                        <div class="product">
                            <Card :productInfo="productInfo" />
                        </div>
                    </div>
                </div>
                <div class="row col-12  flex-row-reverse mt-2 mb-2">
                    <ul class="pagination pagination-sm">
                        <paginate :page-count="lastPage" :click-handler="dataByPaginate" :page-range="2" :prev-text="'<'"
                            :next-text="'>'" :container-class="'pagination justify-content-end'" :page-class="'page-item'"
                            :page-link-class="'page-link'" :prev-class="'page-item'" :prev-link-class="'page-link'"
                            :next-class="'page-item'" :next-link-class="'page-link'" :first-last-button="true"
                            :first-button-text="'<<'" :last-button-text="'>>'">
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

</template>

<script>
import Banner from '@/components/category/categoryBanner'
import Category from '@/components/category/category'
import Slider from '@/components/slider/simpleProductSlider'
import Menu from '@/components/home/multiMenu';
import Brandslider from '@/components/slider/brandSlider'
import categorySlider from '@/pages/categoryPage/category'
// import Multiselect from 'vue-multiselect'
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard'
export default {
    name: 'category-page',
    components: {
        Banner,
        Category,
        Slider,
        Brandslider,
        categorySlider,
        Menu,
        // Multiselect ,
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            categoryList: [],
            categoryInfo: null,
            numOfData: 44,
            urlParam: {
                numOfData: 44,
                slug: this.$route.params.slug,
            },
            dataUrl: 'category/wise/product',
            brandList: [],
            colorList: [],
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
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    },
                    1200: {
                        itemsToShow: 3
                    }
                }
            },
            categories: [
                'All',
                'Electronics',
                'Men',
                'Women',
                'Beauty',
                'Furniture',
                'Corona/Flue Care',
                'Home & Kitchen',
                'Collectibles & Fine Art',
                'Baby',
                'Gift Cards'
            ],
            options: [
                'New items',
                'Price - high to low',
                'Price - low to high',
                'Old items'
            ],
            selected: 'Price - high to low'
        }
    },
    beforeMount() {
        this.getMainCategory();
        this.getBrandList();
        this.getDataList(this.dataUrl, this.urlParam);
    },
    watch: {
        $route(to, from) { this.numOfData = 44; this.pageIndexReset(); this.showDatas(); }
    },
    methods: {
        getMainCategory() {
            this.$http.get('get/main/category')
                .then(response => {
                    this.categoryList = response.data;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        getBrandList() {
            this.$http.get('get/filter')
                .then(response => {
                    this.brandList = response.data.brandList;
                    this.colorList = response.data.colorList;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        getDataList(url, param) {
            if (this.numOfDataPage > 0) {
                url = url + "?page=" + this.numOfDataPage;
            }
            this.$http.get(url, { params: param })
                .then(response => {
                    if (response.data.msgFlag == true) {
                        this.dataList = response.data.dataList;
                        this.lastPage = this.dataList.last_page;
                        this.totalData = this.dataList.total;
                      
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
            this.getDataList(this.dataUrl, this.urlParam);
            // this.getSideProductsAndPopularTags();
        },
        pageIndexReset() {
            this.numOfDataPage = 1;
        },
        gotoCategoryPage(dataInfo) {
            this.$router.push({ name: 'categoryPage', params: { slug: dataInfo.slug.split(' ').join('-') } });
        },
        updateSelected(newSelected) {
            this.selected = newSelected
        },
    }
}
</script>

<style scoped>
@media (min-width: 1540px) {
    .category-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 1500px;
    }

    .all-category {
        position: relative;
        top: -100px;
        margin: 0 auto -77px;
        height: 185px;
        width: 1200px;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
        /* z-index: 2;
    overflow: hidden; */
    }

    .right-products-display {
        max-width: calc(100% - 275px);
    }

}

@media (min-width: 1400px) and (max-width: 1539px) {
    .category-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 1300px;
    }


    .all-category {
        position: relative;
        top: -100px;
        margin: 0 auto -77px;
        height: 185px;
        width: 1200px;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
        /* z-index: 2;
    overflow: hidden; */
    }

    .right-products-display {
        max-width: calc(100% - 275px);
    }

}

@media (min-width: 1200px) and (max-width: 1399px) {
    .category-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 1150px;
    }


    .all-category {
        position: relative;
        top: -100px;
        margin: 0 auto -77px;
        height: 185px;
        width: 1200px;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
        /* z-index: 2;
    overflow: hidden; */
    }

    .right-products-display {
        max-width: calc(100% - 275px);
    }

}



@media (min-width: 1000px) and (max-width: 1199px) {
    .category-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 100%;
    }

    .all-category {
        position: relative;
        top: -100px;
        margin: 0 auto -77px;
        height: 185px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
        /* z-index: 2;
    overflow: hidden; */
    }

    .right-products-display {
        max-width: calc(100% - 275px);
    }


}

@media(min-width: 1px) and (max-width: 767px) {
    .all-category {
        display: none;
    }

    .banner {
        display: none;
    }

    .left-category {
        display: none;
    }

}

@media(min-width: 768px) and (max-width: 999px) {

    .all-category {
        position: relative;
        top: -100px;
        margin: 0 auto -77px;
        height: 185px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
        /* z-index: 2;
    overflow: hidden; */
    }

    .right-products-display {
        max-width: calc(100% - 275px);
    }


}

@media (min-width: 1px) and (max-width: 999px) {


    .category-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 100%;
    }


}

/* .banner {
    margin: 20px 0;
} */
.category-title {
    position: absolute;
    margin-top: -180px;
    color: #fff;
    margin-left: 850px;
    font-size: 50px;
}

.dropdown-select {
    max-width: 190px;
    margin-left: auto;
    margin-right: 210px;
    position: relative;
    /* z-index: -1; */

}

.category-and-products-wrapper {
    /* display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 210px;
    max-width:1500px;
    position: relative;
    pointer-events: all; */
    /* z-index: -1; */
}

.left-category {
    min-width: 175px;
}

/* .right-products-display {
    max-width: calc(100% - 275px);
} */
/* .product-slider{
    margin-left: 210px;
    max-width:1500px;
    margin:auto;
} */
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
</style>