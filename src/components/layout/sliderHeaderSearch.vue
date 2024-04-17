<template>
    <div class="search">
        <form ref="form">
            <input type="text" placeholder="What Are You Looking For?" v-model="query" @input="search" class="form-control responsive-search" required>
            <button class="search-button">
                <b-icon icon="search"></b-icon>
                Search
            </button>
             <button class="search-button-reponsive">
                <b-icon icon="search"></b-icon>
             
            </button>

            <label for="search" class="responsive-mobile-search">
            <input type="text"  class=" search-inpufield"  placeholder="What Search For?" v-model="query" @input="search" required/>
         

            <b-icon icon="search" aria-hidden="true"></b-icon>
            </label>

           
           
        </form>
            <div id="productlist" style="position: absolute;top: 34px;width: 100%;" v-if="query !=0" @click="resetForm">
                <ul class="dropdown-menu" style="display:block;position: absolute;/* left: 24px; */padding-left: 14px;width: 100%;">
                <li v-for="productInfo in results" :key="productInfo.id" style="width: 100%;margin-left: 10px;" ><router-link class="name" :to="{name:'productPage',params:{slug:productInfo.slug}}" >{{ productInfo.name }} </router-link></li>
                 </ul>
                        </div>
           
            
        
    </div>
</template>

<script>

export default {
    name:'search',
    props:{
       
        productInfo:Object,
    },
    data() {
        return {
            msg:'search',
            query: '',
        results: [],
        state: "close",
        }
    },
    methods: {
    search() {
        this.$http.get('/user/search', { params: { q: this.query } })
        .then(response => {
          this.results = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    resetForm() {
          this.$refs.form.reset();
          this.query='';
        }
  },
  
}
</script>

<style lang="scss"  scoped>

@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");



@media(min-width: 601px) and (max-width: 767px){
    .search-button{
        display: none;
    }
.search-button-reponsive{
    display: none;
}

.responsive-search{
    display: none;
}

label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 5px;
//   transition: all 1s ease;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
  
    transition: all 1s ease 0.5s;
  }
  input{
    // transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 300px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  svg{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 1s ease;
    &::after{
      width: 0%;
    //   transition: all 0.3s ease;
    }
    svg{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
    //   transition: opacity 0.5s ease, width 1s ease;
    //   -webkit-appearance:none
    } 
  }
}
    
}

@media(min-width: 450px) and (max-width: 600px){
    .search-button{
        display: none;
    }
.search-button-reponsive{
    display: none;
}

.responsive-search{
    display: none;
}

label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 5px;
//   transition: all 1s ease;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
  
    transition: all 1s ease 0.5s;
  }
  input{
    // transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 250px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  svg{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 1s ease;
    &::after{
      width: 0%;
    //   transition: all 0.3s ease;
    }
    svg{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
    //   transition: opacity 0.5s ease, width 1s ease;
    //   -webkit-appearance:none
    } 
  }
}
    
}

@media(min-width: 320px) and (max-width: 449px){
    .search-button{
        display: none;
    }
.search-button-reponsive{
    display: none;
}

.responsive-search{
    display: none;
}

label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 5px;
//   transition: all 1s ease;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
  
    transition: all 1s ease 0.5s;
  }
  input{
    // transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 160px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  svg{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 1s ease;
    &::after{
      width: 0%;
    //   transition: all 0.3s ease;
    }
    svg{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
    //   transition: opacity 0.5s ease, width 1s ease;
    //   -webkit-appearance:none
    } 
  }
}
    
}
@media(min-width: 1px) and (max-width: 319px){
    .search-button{
        display: none;
    }
.search-button-reponsive{
    display: none;
}

.responsive-search{
    display: none;
}

label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 5px;
//   transition: all 1s ease;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
  
    transition: all 1s ease 0.5s;
  }
  input{
    // transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 100%;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  svg{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 1s ease;
    &::after{
      width: 0%;
    //   transition: all 0.3s ease;
    }
    svg{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
    //   transition: opacity 0.5s ease, width 1s ease;
    //   -webkit-appearance:none
    } 
  }
}
    
}
@media(min-width: 768px){
    .search-button-reponsive{
        display: none;
    }
    .responsive-mobile-search{
        display: none;
    }
}

@media (min-width: 1125px) {
  .form-control {
   /* display: block; */
   width: 500px;
    /* height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem; */
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  }

}

@media(min-width: 800px) and (max-width: 1124px){
  .form-control {
   /* display: block; */
   width: 560px;
    /* height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem; */
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  }
    
}

@media(min-width: 768px) and (max-width: 799px){
  .form-control {
   /* display: block; */
   width: 400px;
    /* height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem; */
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  }
    
}
.name{
    color: #0b0c0c;
}
.dropdown-menu{
    /* position: absolute; */
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 0.25rem;
}
.form-control {
    /* display: block; */
    // width: 100%;
    /* height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem; */
    // font-weight: 400;
    // line-height: 1.5;
    // color: #495057;
    // background-color: #fff;
    // background-clip: padding-box;
    // border: 1px solid #ced4da;
    // border-radius: 0.25rem;
    // transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.search-button{
    height:38.2px;
    width:100px;
    border:0;
    position: absolute;
    right:0px;
    top:0px;
    background: #373737;
    color:white;
    border-radius:0 5px 5px 0;
}

.search-button-reponsive{
    height:38.2px;
    width:30px;
    border:0;
    position: absolute;
    right:0px;
    top:0px;
    background: #373737;
    color:white;
    border-radius:0 5px 5px 0;
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