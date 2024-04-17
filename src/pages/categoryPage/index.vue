<template>
  <div class="category-page">
    <div class="loyel-container">
      <div class="loyel-category-product">
        <!-- <slot v-if="categoryInfo!=null">
                    <slot v-if="categoryInfo!=null">
                        <loyel-category-product :imageName="categoryInfo.category_image.base_url+categoryInfo.category_image.category_image" :title="categoryInfo.title"/>
                    </slot>
                </slot>    -->

        <img
          v-if="
            categoryInfo &&
            categoryInfo.parent_info &&
            categoryInfo.parent_info.category_image
          "
          v-lazy="baseUrl + categoryInfo.parent_info.category_image"
          :alt="categoryInfo.title"
          height="230"
          width="100%"
        />
        <div class="category-title" v-if="categoryInfo">
          {{ categoryInfo.title }}
        </div>

        <div class="all-category">
          <categorySlider
            title="Our Avaiable Category"
            :categoryList="categoryList"
          />
        </div>
      </div>
      <div class="loyel-category-desktop">
       
          <div class="dropdown-select-category-product-desktop mt-1 mb-1">
        <select
          v-model="sortBy"
          @change="getDataList()"
          class="loyel-select-design"
        >
          <option value="old">Old Item</option>
          <option value="new">New Item</option>
          <option value="max">Price - high to low</option>
          <option value="min">Price - low to high</option>
        </select>
      </div>
      
      


      </div>
      <div class="loyel-category-mobile">
        <div class="loyel-category-product-filter-left">
          <div class="dropdown-select-category-product mt-1 mb-1">
        <select
          v-model="sortBy"
          @change="getDataList()"
          class="loyel-select-design-mobile"
        >
          <option value="old">Old Item</option>
          <option value="new">New Item</option>
          <option value="max">Price - high to low</option>
          <option value="min">Price - low to high</option>
        </select>
      </div>
        </div>
        <div class="loyel-category-product-filter-right">
          <div class="dropdown-select-category mt-1 mb-1">
            <div class="mobile-menu-switch" v-b-toggle.sidebar-backdrop>
            <icon name="filter" size="15px"/>
          </div>
      </div>
     </div>

      </div>
   
    

      
    
      <div class="loyel-container category-and-products-wrapper">
        <div class="left-side-category-page">
          <div class="loyel-category-left-side-sorting">
            <div class="loyel-brands-sorting-category">
              <div class="heading-category-sorting">Brands</div>

              <ul>
                <li v-for="(brandInfo, index) in brandList" :key="index">
                  <input
                    type="checkbox"
                    :id="'brandInfo' + index"
                    v-model="brandSelect"
                    :value="brandInfo.brands.id"
                    @change="getDataList()"
                  />
                  <label :for="'brandInfo' + index">{{
                    brandInfo.brands.name
                  }}</label>
                </li>
              </ul>
            </div>

            <div class="loyel-colors-sorting-category">
              <div class="heading-category-sorting">Colors</div>

              <ul>
                <li v-for="(colorInfo, index) in colorList" :key="index">
                  <input
                    type="checkbox"
                    :id="'id' + index"
                    v-model="colorSelected"
                    :value="colorInfo.id"
                    @change="getDataList()"
                  />
                  <label :for="'id' + index">{{ colorInfo.color }}</label>
                </li>
              </ul>
            </div>
            <div class="loyel-price-sorting-category">
              <div class="heading-category-sorting">Price</div>

              <div class="loyel-filter-wrapper__content">
                <span
                  class="next-input next-medium seb-filter-price_no-shrink"
                  style="
                    width: 52px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 4px;
                  "
                >
                  <input
                    placeholder="Min."
                    height="100%"
                    autocomplete="off"
                    value=""
                    v-model="startPrice"
                  />
                </span>
                <span
                  class="seb-filter-price_no-shrink"
                  style="margin-left: 2px; margin-right: 2px"
                  >-</span
                >
                <span
                  class="next-input next-medium seb-filter-price_no-shrink"
                  style="
                    width: 52px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 4px;
                  "
                >
                  <input
                    placeholder="Max."
                    height="100%"
                    autocomplete="off"
                    value=""
                    v-model="endPrice"
                /></span>
                <a
                  ><button
                    class="seb-button"
                    type="button"
                    role="button"
                    style="border-radius: 20px"
                    @click="getDataList()">
                    OK
                  </button></a
                >
              </div>
            </div>
            <div class="loyel-colors-sorting-category">
              <div class="heading-category-sorting">Size</div>
              <select
                class="select_category_src"
                v-model="selectedSize "
                @change="getSizeAttribute()"
              >
              
              <option v-for="(sizeOption, index) in sizeList" 
            :value="sizeOption.id" 
            :key="sizeOption.id"
            :selected="index === 0">
        {{ sizeOption.size }}
    </option>
               
              </select>

              <ul>
                <slot v-if="selectedSize  !== ''">
                  <li v-for="(sizeAttribute, index) in sizeAttributeList" :key="index">
                  <input
                    type="checkbox"
                    :id="'id' + index"
                    v-model="sizeAttributeSelected"
                    :value="sizeAttribute.id"
                    @change="getDataList()"
                  />
                  <label :for="'id' + index">{{ sizeAttribute.attribute }}</label>
                </li>
                </slot>
             
              </ul>
            </div>
          </div>
        </div>

        <div class="right-products-display">
          <div class="product-slider">
            <div class="row" style="background-color: #fff">
              <div
                class="col mt-2 mb-3"
                v-for="(productInfo, productIndex) in dataList.data"
                :key="productIndex"
              >
                <div class="product">
                  <Card :productInfo="productInfo" />
                </div>
              </div>
            </div>
            <div class="row col-12 flex-row-reverse mt-2 mb-2">
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
            </div>
          </div>
        </div>
      </div>

      <b-sidebar id="sidebar-backdrop" title="Search Filter" right backdrop shadow>
        <div class="category-sorting">
           <div class="left-side-category-page-mobile">
          <div class="loyel-category-left-side-sorting-mobile">
            <div class="loyel-brands-sorting-category">
              <div class="heading-category-sorting">Brands</div>

              <ul>
                <li v-for="(brandInfo, index) in brandList" :key="index">
                  <input
                    type="checkbox"
                    :id="'brandInfo' + index"
                    v-model="brandSelect"
                    :value="brandInfo.brands.id"
                    @change="getDataList()"
                  />
                  <label :for="'brandInfo' + index">{{
                    brandInfo.brands.name
                  }}</label>
                </li>
              </ul>
            </div>

            <div class="loyel-colors-sorting-category">
              <div class="heading-category-sorting">Colors</div>

              <ul>
                <li v-for="(colorInfo, index) in colorList" :key="index">
                  <input
                    type="checkbox"
                    :id="'id' + index"
                    v-model="colorSelected"
                    :value="colorInfo.id"
                    @change="getDataList()"
                  />
                  <label :for="'id' + index">{{ colorInfo.color }}</label>
                </li>
              </ul>
            </div>
            <div class="loyel-price-sorting-category">
              <div class="heading-category-sorting">Price</div>

              <div class="loyel-filter-wrapper__content">
                <span
                  class="next-input next-medium seb-filter-price_no-shrink"
                  style="
                    width: 52px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 4px;
                  "
                >
                  <input
                    placeholder="Min."
                    height="100%"
                    autocomplete="off"
                    value=""
                    v-model="startPrice"
                  />
                </span>
                <span
                  class="seb-filter-price_no-shrink"
                  style="margin-left: 2px; margin-right: 2px"
                  >-</span
                >
                <span
                  class="next-input next-medium seb-filter-price_no-shrink"
                  style="
                    width: 52px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 4px;
                  "
                >
                  <input
                    placeholder="Max."
                    height="100%"
                    autocomplete="off"
                    value=""
                    v-model="endPrice"
                /></span>
                <a
                  ><button
                    class="seb-button"
                    type="button"
                    role="button"
                    style="border-radius: 20px"
                    @click="getDataList()">
                    OK
                  </button></a
                >
              </div>
            </div>
            <div class="loyel-colors-sorting-category">
              <div class="heading-category-sorting">Size</div>
              <select
                class="select_category_src"
                v-model="selectedSize "
                @change="getSizeAttribute()"
              >
              
              <option v-for="(sizeOption, index) in sizeList" 
            :value="sizeOption.id" 
            :key="sizeOption.id"
            :selected="index === 0">
        {{ sizeOption.size }}
    </option>
               
              </select>

              <ul>
                <slot v-if="selectedSize  !== ''">
                  <li v-for="(sizeAttribute, index) in sizeAttributeList" :key="index">
                  <input
                    type="checkbox"
                    :id="'id' + index"
                    v-model="sizeAttributeSelected"
                    :value="sizeAttribute.id"
                    @change="getDataList()"
                  />
                  <label :for="'id' + index">{{ sizeAttribute.attribute }}</label>
                </li>
                </slot>
             
              </ul>
            </div>
          </div>
        </div>
        </div>
           
        </b-sidebar>
    </div>
  </div>
</template>

<script>
import categorySlider from "@/pages/categoryPage/category";

import Card from "@/components/slider/productCard";
export default {
  name: "category-page",
  components: {
    categorySlider,

    Card,
  },
  data() {
    return {
      categoryList: [],
      sizeList: [],
      sizeAttributeList:[],
      sizeAttributeSelected: [],
      selectedSize :null,
      categoryInfo: null,
      startPrice:null,
      endPrice:null,
      numOfData: 20,
      brandSelect: [],
      sortBy: null,
      colorSelected: [],
      slug: this.$route.params.slug,
      pageTitle: "",
      ogImageUrl: "",
      metaDescription: "",
      totalData: 0,
      
      brandList: [],
      colorList: [],
      numberOfDataPage: 1,
      baseUrl: this.$baseUrl,
      siteUrl: this.$siteUrl,
      lastPage: 1,
      dataList: [],
      msg: "category-page",
      selected: {
        brand: [],
      },
    };
  },
  metaInfo() {
    return {
      title: this.pageTitle,
      titleTemplate: "%s - loyel.com.bd",
      link: [
        { rel: "canonical", href: this.siteUrl + "/category/" + this.slug },
      ],
      meta: [
        {
          name: "description",
          content: this.metaDescription,
        },
        { property: "og:title", content: this.pageTitle },
        { property: "og:description", content: this.metaDescription },
        { property: "og:image", content: this.ogImageUrl },
        { property: "og:url", content: window.location.href }, // Optional: Set the URL of the current page
        { property: "og:type", content: "website" },
      ],
    };
  },
  
  beforeMount() {
    this.getDataList();
  },
  watch: {
    $route(to, from) {
      this.getDataList();
    },
  },
  mounted() {
    // Auto select the first size option
    if (this.sizeList.length > 0) {
      this.selectedSize = this.sizeList[0].id;
      // Fetch attributes for the auto-selected size
      this.getSizeAttribute();
    }
  },
  methods: {
   async getSizeAttribute() {
      let url = "size/attribute?sizeId=" + this.selectedSize ;
    
    await this.$http.get(url)
    .then((response)=>{
  this.sizeAttributeList = response.data;
    }).catch((error)=>{
        console.dir(error);
    })
    .finally();
    },
    getDataList() {
      let slug = this.$route.params.slug;

      let url =
        "category/wise/product?slug=" +
        encodeURIComponent(slug) +
        "&numOfData=" +
        this.numOfData + "&sizeId=" + this.selectedSize;

      if (this.pageNo !== undefined) {
        url += "&page=" + this.pageNo;
      }

      if (this.brandSelect !== null && this.brandSelect.length > 0) {
        url += "&brandId=" + JSON.stringify(this.brandSelect);
      }

      if (this.colorSelected !== null && this.colorSelected.length > 0) {
        url += "&colorId=" + JSON.stringify(this.colorSelected);
      }
      // if (this.selectedSize !== null && this.selectedSize.length > 0) {
      //   url += "&sizeId=" + JSON.stringify(this.selectedSize);
      // }
      if (this.sizeAttributeSelected !== null && this.sizeAttributeSelected.length > 0) {
        url += "&attributeId=" + JSON.stringify(this.sizeAttributeSelected);
      }
      if (this.startPrice !=null && this.endPrice !=null) {
        let price = this.startPrice + '-' + this.endPrice;
        url += "&price=" + price;
    }

      if (this.sortBy !== null) {
        url += "&sortBy=" + this.sortBy;
      }

      this.$http
        .get(url)
        .then((response) => {
          if (response.data.msgFlag == true) {
            // console.log(response.data);
            this.dataList = response.data.dataList;
            this.categoryList = response.data.categoryList;
            this.colorList = response.data.colorList;
            this.sizeList = response.data.sizeList;
            this.brandList = response.data.sellerBrand;
            this.lastPage = this.dataList.last_page;
            this.totalData = this.dataList.total;
            this.categoryInfo = response.data.categoryInfo;
            this.pageTitle = response.data.pageTitle;
            this.slug = response.data.slug;
            this.metaDescription = response.data.metaDescription;
            this.ogImageUrl =
              this.$baseUrl + response.data.categoryInfo.category_logo;
          }
        })
        .catch((error) => {
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
      this.$router.push({
        name: "categoryPage",
        params: { slug: dataInfo.slug.split(" ").join("-") },
      });
    },

    updateSelected(newSelected) {
      this.selected = newSelected;
    },
  },
};
</script>

<style scoped  >
.select_category_src {
  height: 30px;
}
.loyel-select-design {
  height: 41px;
  border: none;
}
.loyel-select-design-mobile{
  align-items: center;
    background-color: #eff0f5;
    border: 1px solid #0000;
    border-radius: 5px;
    color: #000000e6;
    display: flex;
    height: 50px;
    padding: 6px;
}
@media (min-width: 1450px) {
  .category-and-products-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    /* align-items: center; */
    max-width: 1450px;
  }

  .all-category {
    position: relative;
    top: -100px;
    margin: 0 auto -100px;
    height: 185px;
    width: 1200px;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    border-radius: 8px;
    /* z-index: 2;
    overflow: hidden; */
  }

  .right-products-display {
    max-width: calc(100% - 220px);
    /* padding: 15px; */
  }
}

@media (min-width: 1400px) and (max-width: 1449px) {
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
    margin: 0 auto -100px;
    height: 185px;
    width: 1200px;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    border-radius: 8px;
    /* z-index: 2;
    overflow: hidden; */
  }

  .right-products-display {
    max-width: calc(100% - 220px);
    /* padding: 15px; */
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
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
    margin: 0 auto -100px;
    height: 185px;
    width: 1200px;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    border-radius: 8px;
    /* z-index: 2;
    overflow: hidden; */
  }

  .right-products-display {
    max-width: calc(100% - 220px);
    /* padding: 15px; */
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
    margin: 0 auto -100px;
    height: 185px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    border-radius: 8px;
    /* z-index: 2;
    overflow: hidden; */
  }

  .right-products-display {
    max-width: calc(100% - 220px);
    /* padding: 15px; */
  }
}

@media (min-width: 1px) and (max-width: 767px) {
  .all-category {
    display: none;
  }

  .loyel-category-product {
    display: none;
  }

  .left-side-category-page {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 999px) {
  .all-category {
    position: relative;
    top: -100px;
    margin: 0 auto -100px;
    height: 185px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    border-radius: 8px;
    /* z-index: 2;
    overflow: hidden; */
  }

  .right-products-display {
    max-width: calc(100% - 220px);
    /* padding: 15px; */
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

/* .loyel-category-product {
    margin: 20px 0;
} */
.loyel-container .category-title {
  margin: 0;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.category-title {
  color: #fff;

  font-size: 40px;
}



@media (min-width: 1px) and (max-width: 767px) {

  .dropdown-select-category-product {
  max-width: 160px;
  /* margin-left: auto; */
  /* margin-right: 210px; */
  position: relative;
  /* z-index: -1; */
  /* padding-top: 30px; */
}
.dropdown-select-category {
  max-width: 160px;
  margin-left: auto; 
  /* margin-right: 210px; */
  position: relative;
  /* z-index: -1; */
  /* padding-right: 15px; */
  text-align: right;

}
  .all-category {
    display: none;
  }

  .loyel-category-product {
    display: none;
  }

  .left-side-category-page {
    display: none;
  }
  .loyel-category-desktop{
    display: none;
  }
  .loyel-category-mobile{
  display: flex;
  background: #fff;
    margin-top: 31px;
    margin-bottom: 8px;
}

}

@media(min-width:768px){
  .loyel-category-mobile{
    display: none;
  }
  .dropdown-select-category-product {
  max-width: 160px;
  margin-left: auto;
  /* margin-right: 210px; */
  position: relative;
  /* z-index: -1; */
  padding-top: 30px;
}

.left-side-category-page-mobile {
    display: none;
  }
}
.left-side-category-page {
  min-width: 175px;
}

.heading-category-sorting {
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
  /* background: #fff; */
  margin-bottom: 20px;
  /* padding: 15px; */
}

.left-side-category-page {
  float: left;
  margin-right: 20px;
  min-height: 1px;
  width: 200px;
  margin-bottom: 10px;
}

.loyel-category-left-side-sorting {
  background-color: #fff;
  border-radius: 4px;
  padding: 0 12px 12px;
}

.loyel-category-left-side-sorting-mobile{
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
  -webkit-transition: all 0.1s linear;
  -o-transition: all 0.1s linear;
  transition: all 0.1s linear;
  border: 1px solid #c4c6cf;
  background-color: #fff;
}
.next-input input,
.next-input textarea {
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

.next-input.next-focus,
.next-input:hover {
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
  transition: all 0.3s ease-out;
  vertical-align: middle;
  white-space: nowrap;
}

.seb-button:hover {
  background-color: #f2f3f7;
  border-color: #a0a2ad;
}

a {
  color: #1686cc;
  text-decoration: none;
}

.loyel-category-product-filter-left{
  width: 50%;
}

.loyel-category-product-filter-right{
  width: 50%;
}

.dropdown-select-category-product-desktop{
  max-width: 160px;
  margin-left: auto;
  /* margin-right: 210px; */
  position: relative;
  /* z-index: -1; */
  /* padding-top: 30px; */
}


#sidebar-backdrop {
  ul {
    padding: 0;
    margin-top: 20px;

    li {
      display: block;
      padding: 5px 10px;
      color: white;
      background: #ebebeb;
      transition: all 0.3s ease;
      margin-bottom: 10px;
      cursor: pointer;

      /* &:hover {
        background-color: #bbbbbb;
      } */
    }
  }
}

.mobile-menu-switch {
        display: block;
        /* display: flex; */
        padding: 0 35px;
        align-items: center;
        cursor: pointer;
      }
     
</style>