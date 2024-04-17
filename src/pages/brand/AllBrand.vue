<template>
    <div class="all-brand-page">
        <div class="loyel-container">
            <div class="loyel-container slider-heading">
                <div class="caption pointer">
                    Our Available Brands
                </div>
               
            </div>

           
            <div class="loyel-container brand-and-products-wrapper">

                <div class="right-products-display">
                    <div class="product-slider">
                        <div class="row">
                            <div class="col mt-2" v-for="(brandInfo, brandIndex) in brandList" :key="brandIndex">
                                <div class="product" @click="gotoBrandProductPage(brandInfo)">
                                    <div class="card">
                                        <div class="product-box">


                                            <div class="image">
                                                <slot v-if="brandInfo.logo != null">
                                                    <img v-lazy="baseUrl + brandInfo.logo" alt="brandInfo.name">
                                                </slot>
                                            </div>
                                            <div class="description">


                                                {{ (brandInfo.name.length > 15) ? brandInfo.name.substr(0, 15) + '...' :
                                                    brandInfo.name }}


                                            </div>



                                        </div>
                                        <!-- <slot v-if="productInfo.has_discount==1 && isDiscountTimeExpire(productInfo.discount_start,productInfo.discount_end)">
                                        <div class="discount-sticker" >
                                            {{productInfo.discount}}%
                                        </div>
                                    </slot> -->
                                    </div>
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

import Search from '@/pages/brand/Search'

import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import BrandCard from '@/components/brand/Card'
export default {
    name: 'all-brand-page',
    components: {
        // Banner,
        // Category,
        // Slider,
        Search,
        // Multiselect ,
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        BrandCard
    },
    data() {
        return {

            brandList: [],
            baseUrl: this.$baseUrl,
            lastPage: 1,

            msg: 'all-brand-page',
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
    beforeMount() {

        this.getBrandList();
    },

    methods: {
        gotoBrandProductPage(brandInfo) {
            this.$router.push({ name: 'brandProduct', params: { slug: brandInfo.slug.split(' ').join('-') } });
        },
        getBrandList() {
            this.$http.get("get/brand/list")
                .then(response => {
                    this.brandList = response.data;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },

        dataByPaginate(pageIndex) {
            this.pageNo = pageIndex;
            this.getBrandList();
        },

    }
}
</script>

<style scoped>
@media (min-width: 1540px) {
    .brand-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1500px;
    }

    .slider-heading {
        height: 40px;

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

@media (min-width: 1400px) and (max-width: 1539px) {
    .brand-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
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
    .brand-and-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1150px;
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
    .brand-and-products-wrapper {
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



@media (min-width: 1px) and (max-width: 999px) {
    .brand-and-products-wrapper {
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


.all-brand-page {
    margin-bottom: 20px;
    margin-top: 30px;
}

.card {
    cursor: pointer;
}

.search-bar {
    margin-right: 85px;
}

.banner {
    margin: 20px 0;
}

.dropdown-select {
    max-width: 190px;
    margin-left: auto;
    margin-right: 15px;
}

/* .brand-and-products-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 210px;
    max-width:1500px;
} */
.left-category {
    min-width: 175px;
}

/* .right-products-display {
    max-width: calc(100% - 175px);
} */
.product-slider {

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

.product-box {
    display: flex;
    flex-flow: column wrap;
    width: 240px;
    height: 260px;
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

/* product image  */
.product-box .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 62%;
}

.product-box .image img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    /* object-fit: contain; */
    margin-top: 40px;
}

/* product description  */
.product-box .description {
    width: 100%;
    height: 22%;
    padding: 10px 10px;
    font-size: 1rem;
    text-align: center;

}

.product-box .description .price {
    display: flex;
    grid-column-gap: 60px;
}

.product-box .description .price .main-price {
    color: #FF0000;
}

/* product btn  */
.product-box .product-btn {
    width: 100%;
    height: 16%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-box .product-btn .add-view-btn {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    background: #464545;
    padding-left: 5px;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 0px;
    margin-right: 0px; 
    margin-left: 0px;

}

</style>