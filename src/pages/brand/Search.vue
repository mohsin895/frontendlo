<template>
    <div class="brandsearch">
        <form @submit.prevent action="">
            <input type="text" placeholder="brand name?" class="form-control" required>
            <button class="brandsearch-button">
                <b-icon icon="search"></b-icon>
                Search
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name:'brandsearch',
    data() {
        return {
            msg:'brandsearch',
        }
    }
}
</script>

<style scoped>
.brandsearch-button{
    height:38.2px;
    width:95px;
    border:0;
    position: absolute;
    right:70px;
    top:0px;
    background: #373737;
    color:white;
    border-radius:0 5px 5px 0;
    margin-top: 160px;
    /* margin-right: 122px; */
}
input{
    font-size: 13px;
    padding:8px;
    border-radius: 5px;
}
input:focus{
    outline: 0;
    box-shadow: none;
}
</style>