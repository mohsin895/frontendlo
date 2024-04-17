<template>
    <div class="category">

        <b-row>
            <b-col cols="3" class="left-category ">

                <div class="main-category" v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex">
                    <span @click="toggleExpand1(megaIndex)">
                        <img v-lazy="baseUrl + megaCategory.category_logo" :alt="megaCategory.name"
                        style="height: 45px; width: 45px; border-radius: 50%;display: block; margin-left: auto;margin-right: auto;"><br>
                        <p style="text-align: center; margin-left: auto;margin-right: auto;display: block;"> {{ megaCategory.title }}</p>
                    </span>

                </div>

            </b-col>

            <b-col cols="9">

                <b-row>
                    <b-col v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex" cols="12">
                        <div class="category-design-right" v-if="expandedIndex1 === megaIndex">
                            <span class="font-size" > {{ megaCategory.title }}</span>

                        </div>

                        <div class="sub-category">
                            <div class=" menu-font-size" v-if="expandedIndex1 === megaIndex">
                                <slot v-if="megaCategory.sub_category != null">
                                    <b-row>
                                        <b-col cols="4 subcategory" class="justify-content-md-center "
                                            v-for="(subCategory, subCategoryIndex) in megaCategory.sub_category"
                                            :key="subCategoryIndex">

                                            

                                            <div class="sub-category-background" @click="toggleExpand2(subCategoryIndex)">
                                                <img v-lazy="baseUrl + subCategory.category_logo" :alt="subCategory.title"
                                                    style="height: 45px; width: 45px; border-radius: 50%;display: block; margin-left: auto;margin-right: auto;" ><br>
                                                <span class="font-size" style="text-align: center;margin-left: auto;margin-right: auto; display: block;"> {{ subCategory.title }}</span>

                                            </div>

                                        </b-col>

                                    </b-row>

                                </slot>
                            </div>
                        </div>
                    </b-col>

                </b-row>


                <hr style="border: 1px solid red;">

                <b-row>
                    <b-col v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex" cols="12">
                        <!-- <div class="category-design-right">
                           
                        </div> -->

                        <div class="sub-sub-category">
                            <div class=" menu-font-size" v-if="expandedIndex1 === megaIndex">
                                <slot v-if="megaCategory.sub_category != null">
                                    <b-row>
                                        <b-col cols="12 sub-subcategory" class="justify-content-md-center "
                                            v-for="(subCategory, subCategoryIndex) in megaCategory.sub_category"
                                            :key="subCategoryIndex">
                                      

                                            <div class="menu-1-body" v-if="expandedIndex2 === subCategoryIndex ">
                                                <slot v-if="subCategory.sub_category != null">
                                                    <div class="menu-1-item"
                                                        v-for="(normalCategory, normalCategoryIndex) in subCategory.sub_category"
                                                        :key="normalCategoryIndex" @click="gotoSubCategoryPage(normalCategory)">

                                                   
                                                        <span > {{ normalCategory.title }}</span>
                                                        
                                                    </div>
                                                </slot>
                                            </div>


                                        </b-col>

                                    </b-row>

                                </slot>
                            </div>
                        </div>
                    </b-col>

                </b-row>

            </b-col>

        </b-row>

    </div>
</template>
  
<script>


export default {
    name: 'headerComponent',

    data() {
        return {
            categoryList: [],
            msg: 'header',

            baseUrl: this.$baseUrl,
            expandedIndex1: null,
            expandedIndex2: null,
            

            // wishListCount:'',
        }
    },
    beforeMount() {


        this.getCategory();
        // this.getWishListCount();
    },



    methods: {

        toggleExpand1(megaIndex) {
            this.expandedIndex1 = this.expandedIndex1 === megaIndex ? null : megaIndex;
        },
        toggleExpand2(subCategoryIndex) {
            this.expandedIndex2 = this.expandedIndex2 === subCategoryIndex ? null : subCategoryIndex;

        },
        gotoSubCategoryPage(dataInfo) {
    //         const url = `/subcategory/${dataInfo.slug.split(' ').join('-')}`;
    // const newTab = window.open(url, '_blank');
    // newTab.focus();
    this.$router.push({ name: 'subCategoryPage', params: { slug: dataInfo.slug.split(' ').join('-') } });
            
        },
        gotoCategoryPage(dataInfo) {
            this.$router.push({ name: 'categoryPage', params: { slug: dataInfo.slug.split(' ').join('-') } });
        },
        getCategory() {
            this.$http.get("get/category/list")
                .then(response => {
                    this.categoryList = response.data;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },


    }
}
</script>
  
<style lang="scss"  scoped>
.left-category {
    background: #FFEFEF;

}

.sub-category-background {

    min-width: 70px;


}

.main-category {
    margin-top: 10px;
    margin-left: 4px;
}



.review-list-body {
    height: 600px;
    overflow-y: auto;
}

.sub-category {
    margin-top: 3px;
}

.subcategory {
    margin-bottom: 10px;
}

.category-design-right {

    height: 40px;

    padding-top: 10px;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 500;
}

// .row>* {
//     -ms-flex-negative: 0;
//     flex-shrink: 0;
//     width: 100%;
//     max-width: 100%;
//     padding-right: 2px;
//    padding-left: 2px; 
//    margin-top: 1px;
// }

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
     margin-right: 0px;
    margin-left: calc(-0.5 * var(--bs-gutter-x));
}
</style>