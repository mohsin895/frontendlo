<template>
    <div class="vandorsearch">
        <form @submit.prevent action="">
            <input type="text" placeholder="vandor name?" class="form-control" required>
            <button class="vandorsearch-button">
                <b-icon icon="search"></b-icon>
                Search
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name:'vandorsearch',
    data() {
        return {
            msg:'vandorsearch',
        }
    }
}
</script>

<style scoped>
.vandorsearch-button{
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
    margin-right: 137px;
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