<template>
    <div class="overview-review">
        <div class="heading">
           Product description
        </div>
        <div class="tab-body">
            <div class="tab-container">
             
               <p v-html="$store.state.productInfos.description"></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'overview-tab',
    data() {
        return {

        }
    }
}
</script>


<style scoped>


</style>