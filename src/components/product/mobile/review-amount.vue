<template>
    <div class="review-part">
        <div class="review-amount">
            <div class="active-reviews" :style="'width: calc('+ reviewer +'* 30px)'"></div>
        </div>
        <div class="reviewer-amount">
            {{reviewer}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'review-amount',
    props: {
        reviewer: {
            type: [Number, String],
            default: 4,
            required: true ,
        }
    },
    data() {
        return {
            test: 3,
            
        }
    }
}
</script>

<style scoped>
.review-part {
    display: flex;
    grid-column-gap: 10px;
    align-items: center;
}

@media (min-width: 1px) and (max-width: 359px) {

    .review-amount {
    width: 140px;
    height: 10px;
    background: #DFDFDF;
    position: relative;
}
}
@media (min-width: 360px){
.review-amount {
    width: 200px;
    height: 10px;
    background: #DFDFDF;
    position: relative;
}
}
.active-reviews {
    position: absolute;
    background: #FFC700;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
</style>
