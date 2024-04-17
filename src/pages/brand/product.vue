<template>
    <div class="brand-product-page-loyel">
        <div class="loyel-container">
            <div class="banner">
                <img :src="baseUrl + brandInfo.banner" alt="" class="brand-image" style="height: 185px;">
                <div class="loyel-brand-slider">
                    <div class="multi-menu">
                        <div class="mega-menu">
                            <ul>
                                <li>
                                    <img v-lazy="baseUrl + brandInfo.logo" alt="brandInfo.name" class="brand-logo">

                                </li>
                                <li>

                                    <span class="text-color"> {{ brandInfo.name }}</span>


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

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
            <div class="loyel-container brands-products-wrapper">
                <div class="left-side-brand-page">
                    
                    <div class="loyel-brand-left-side-sorting">
                   
     
                         <div class="loyel-colors-sorting-brand">
                             <div class="heading-brand-sorting">Colors </div>
     
                             <ul>
                                 <li v-for="colorInfo, index in colorList" :key="index">
                                     <input type="checkbox" :id="'id' + index" v-model="colorSelected" :value="colorInfo.id" @change="getDataList()">
                                     <label :for="'id' + index">{{ colorInfo.color }}</label>
                                 </li>
                             </ul>
                         </div>
                         <div class="loyel-price-sorting-category">
                             <div class="heading-brand-sorting">Price</div>
     
                             <div class="loyel-filter-wrapper__content">
                                 <span class="next-input next-medium seb-filter-price_no-shrink" style="width: 52px; height: 26px; line-height: 26px; border-radius: 4px;">
                                     <input placeholder="Min." height="100%" autocomplete="off" value="" >
                                 </span>
                                 <span class="seb-filter-price_no-shrink" style="margin-left: 2px; margin-right: 2px;">-</span>
                                 <span class="next-input next-medium seb-filter-price_no-shrink" style="width: 52px; height: 26px; line-height: 26px; border-radius: 4px;">
                                     <input placeholder="Max." height="100%" autocomplete="off" value="" ></span>
                                     <a  ><button class="seb-button" type="button" role="button" style="border-radius: 20px;">OK</button></a>
                                 </div>
                         </div>
     
     
     
                    </div>
     
                    
     
                     </div>




                <div class="right-products-display">
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

import Slider from '@/components/slider/simpleProductSlider'
import categorySlider from '@/pages/brand/brandLogo'

import Card from '@/components/slider/productCard'
export default {
    name: 'brand-product-page-loyel',
    components: {

        Slider,

        categorySlider,

        // HooperPagination,
        Card
    },
    data() {
        return {
            baseUrl: this.$baseUrl,
            categoryList: [],
            colorSelected:[],
            brandInfo: null,
            numOfData: 44,
            brandList: [],
            colorList: [],
            slug: this.$route.params.slug,

            dataUrl: 'brand/wise/product',
            totalData: 0,
            numberOfDataPage: 1,
            lastPage: 1,
            dataList: [],
            msg: 'brand-product-page-loyel',


        }
    },
    beforeMount() {
        this.getMainCategory();
        this.getDataList(this.dataUrl, this.urlParam);
        this.getFilterList();
    },
    watch: {
        $route(to, from) { this.getDataList(); }
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
        getFilterList() {
            this.$http.get('get/filter')
                .then(response => {
                    this.brandList = response.data.brandList;
                    this.colorList = response.data.colorList;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        getDataList() {
            let slug = this.$route.params.slug;
            let url = 'brand/wise/product?slug=' + encodeURIComponent(slug) + '&numOfData=' + this.numOfData;


            if (this.sortBy !== null) {
                url += '&sortBy=' + this.sortBy;
            }
            this.$http.get(url)
                .then(response => {
                    if (response.data.msgFlag == true) {
                        this.dataList = response.data.dataList;
                        this.lastPage = this.dataList.last_page;
                        this.totalData = this.dataList.total;
                        this.brandInfo = response.data.brandInfo;
                    }

                })
                .catch(error => {
                    console.dir(error);
                });

        },
        dataByPaginate(pageIndex) {
            this.pageNo = pageIndex;
            this.getDataList();
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
@media (max-width:440px) {
    .text-color {
        display: none;
    }



}

.text-color {
    color: #000;
}

.mega-menu ul {
    position: relative;
    list-style: none;
    padding: 8px 10px 8px 5px;
    padding: 0;
    list-style: none;
    display: flex;
    grid-column-gap: 30px;
    align-items: flex-end;
    margin-left: 20px;

    justify-content: left;
}

.mega-menu ul li {

    padding-bottom: 10px;
    transition: .1s;
    width: 75px;

}

.mega-menu {
    widows: 285px;
    font-family: "OpenSans", "Open sans", "Helvetica Neue", "Helvetica", "Arial", "Microsoft YaHei", "PingFang SC", "Tahoma";
}

.loyel-select-design {
    height: 41px;
    border: none;
}

@media (min-width: 1450px) {
    .brands-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 1450px;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 193px;
        background-repeat: no-repeat;


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
        /* margin-top: 20px; */
    }

    .right-products-display {
        max-width: calc(100% - 220px);
        padding: 15px;
    }

}

@media (min-width: 1400px) and (max-width: 1449px) {
    .brands-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 100%;
    }


    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 176px;
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

    .right-products-display {
        max-width: calc(100% - 220px);
        padding: 15px;
    }

}

@media (min-width: 1200px) and (max-width: 1399px) {
    .brands-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 100%;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 150px;
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

    .right-products-display {
        max-width: calc(100% - 220px);
        padding: 15px;
    }

}



@media (min-width: 1000px) and (max-width: 1199px) {
    .brands-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 100%;
    }

    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 126px;
        background-repeat: no-repeat;
        background-size: 1150px;

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

    .right-products-display {
        max-width: calc(100% - 220px);
        padding: 15px;
    }


}

@media(min-width: 1px) and (max-width: 767px) {
   

    .banner {
        display: none;
    }

 

}

@media(min-width: 768px) and (max-width: 999px) {

   
    .right-products-display {
        max-width: calc(100% - 220px);
        padding: 15px;
    }


}

@media (min-width: 1px) and (max-width: 999px) {


    .brands-products-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 100%;
    }

    .brand-image {
        width: 100%;
        height: 115px;
    }


    .banner {


        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 90px;
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


.dropdown-select {
    max-width: 160px;
    margin-left: auto;
    /* margin-right: 210px; */
    position: relative;
    /* z-index: -1; */

}

.brand-logo {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    /* text-align: center; */
    /* margin-left: 50px; */
    margin-top: 5px;
}

@media (min-width:1000px) {
    .brand-image {
        width: 100%;
    }

}



.heading-brand-sorting {
    width: 95%;
    padding: 8px;
    /* background: #E1E1E1; */
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

.right-products-display {
    background: #fff;
    margin-bottom: 20px;
    padding: 15px;
}
@media (min-width:0px) and (max-width:1000px) {

.loyel-brand-slider {
position: absolute;
/* top: -100px; */
margin: 0 auto -210px;
height: 70px;
width: 100%;
background-color: #fff;
box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
border-radius: 8px;
opacity: 0.8;
/* z-index: 2;
overflow: hidden; */
}

}

@media (min-width:1001px) {
.loyel-brand-slider {
position: absolute;
/* top: -100px; */
margin: 0 auto -210px;
height: 70px;
width: 880px;
background-color: #fff;
box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
border-radius: 8px;
opacity: 0.8;
/* z-index: 2;
overflow: hidden; */
}

}


.left-side-brand-page{
    float: left;
    margin-right: 20px;
    min-height: 1px;
    width: 200px;
    margin-bottom: 10px;
}

.loyel-brand-left-side-sorting{
    background-color: #fff;
    border-radius: 4px;
    padding: 0 12px 12px;
}

 .loyel-filter-wrapper__content {
    grid-row-gap: 4px;
    grid-column-gap: 4px;
    align-items: center;
    display: flex;
    flex-flow: wrap;
}

.loyel-filter-wrapper__content {
    max-height: 500px;
}

.next-input.next-medium input {
    height: 26px;
    line-height: 26px \0;
    padding: 0 8px;
    font-size: 12px;
}

.next-input.next-medium input {
    font-size: 12px;
    height: 26px;
    line-height: 26px \0;
    padding: 0 8px;
}

.next-input {
    vertical-align: middle;
    display: inline-table;
    border-collapse: separate;
    font-size: 0;
    line-height: 1;
    width: 200px;
    border-spacing: 0;
    -webkit-transition: all .1s linear;
    -o-transition: all .1s linear;
    transition: all .1s linear;
    border: 1px solid #c4c6cf;
    background-color: #fff;
}
.next-input input, .next-input textarea {
    width: 100%;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 400;
    vertical-align: middle;
    background-color: transparent;
    color: #333;
}

.next-input.next-focus, .next-input:hover {
    border-color: #a0a2ad;
    background-color: #fff;
}

.seb-button {
    background-color: #fff;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    color: #333;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    height: 24px;
    line-height: 22px;
    padding: 0 15px;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease-out;
    vertical-align: middle;
    white-space: nowrap;
}

.seb-button:hover {
    background-color: #f2f3f7;
    border-color: #a0a2ad;
}

a {
    color: #1686CC;
    text-decoration: none;
}
</style>