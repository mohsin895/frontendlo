<template>
    <div class="info-card">
        <div class="card-body" style="background-color:#fff;">
            <div class="item-count" >
                <div class="total">
                    {{itemName}}
                </div>
                <div class="num">{{item}}12</div>
                <div class="ugrow" style="">   <b-icon icon="arrow90deg-up" variant="success"></b-icon>  +16.57%</div>
                <div class="TotalIcon" style=""> <img src="@/assets/images/seller-dashboard/1008106 1.png" />  </div>
                
            </div>
            <div class="more-info">
                <div class="more-info-btn pointer">
                    More info
                    <icon name="arrow-circle-right" size=".8rem"/>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
export default {
    name:'info-card',
    props: {
        itemName:String,
        item:Number,
        color:String,
        image:String
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss" >
.card-body{
  width: 100%;
  height: auto;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding: 15px 15px 5px 15px;
  transition: .5s;
  border-radius: 3px;

  &:hover {
    box-shadow: 1px 1px 8px 1px #888888;
    margin-top: 8px;
  }

}
.item-count{
    height: 70%;
    color:rgb(0, 0, 0);
    background-size: 34px 30px;
    background-repeat: no-repeat;
    background-position: right;
}
.num{
    font-weight:bold;
    font-size: 1.1rem;
}

.more-info{
    height: 30%;
  display: flex;
  align-items: center;
  font-weight: 100;
  float: left;
  color: #073df1;
  margin-bottom: 7px;
}
.more-info-btn{
    width: 80px;
  height: 20px;
  border-radius: 15px;
  font-size: .7rem;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-gap: 4px;
}

.total {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  color: #74797e
}

.num {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 25px;
  color: #495057
}

.ugrow {
  margin-top: -60px;
  float: right;
  color: green;
  font-size: 17px;
  font-weight: 600;
}

.TotalIcon {
  float: right;
  padding: 5px;
  background-color: aquamarine;
  opacity: 0.8;
  border-radius: 4px;
}

.dgrow {
  margin-top: -40px;
  float: right;
  color: green;
  font-size: 17px;
  font-weight: 600;
}
@media screen and (max-width:1366px){


.ugrow{
    margin-top: -35px;
    float:right; 
    color:green;
    font-size:17px;
    font-weight: 600;
}
.dgrow{
    margin-top: -35px;
    float:right; 
    color:green;
    font-size:17px;
    font-weight: 600;
}

}
@media screen and (max-width:1750px){


.ugrow{
    margin-top: -35px;
    float:right; 
    color:green;
    font-size:17px;
    font-weight: 600;
}
.dgrow{
    margin-top: -35px;
    float:right; 
    color:green;
    font-size:17px;
    font-weight: 600;
}

}

</style>
