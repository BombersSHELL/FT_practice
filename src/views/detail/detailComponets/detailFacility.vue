<script setup>
import DetailSection from "@/components/detailComponents/detailSection.vue";
const props = defineProps({
    facilities:{
        type:Object,
        default:()=>({})
    }
})
console.log("facilities",props.facilities)
</script>

<template>
  <div class="facility">
      <detail-section title="房屋设施" more-text="查看全部设施">
          <template v-for="(item,index) in facilities.houseFacilitys" :key="index">
              <div class="items" v-if="facilities.facilitySort?.includes(index)">
                  <div class="left">
                      <img :src="item.icon" alt="">
                      <span>{{item.groupName}}</span>
                  </div>
                  <div class="right">
                      <template v-for="(thing, code) in item.facilitys.slice(0,4)" :key="code">
                          <div class="equip">
                              <i class="icon_check icon"/>
                              <span>{{thing.name}}</span>
                          </div>
                      </template>
                  </div>
              </div>
            </template>
      </detail-section>
  </div>
</template>

<style scoped lang="less">
.facility{
  //padding:5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;
  .items{
    display: flex;
    margin: 25px 0;
    .left{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90px;
      img{
        width: 20px;
        height: 20px;
      }
      .text{
        margin-top: 5px;
        color: #000;
      }
    }
    .right{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .equip{
        width: 50%;
        margin:4px 0;
          display: flex;
        align-items: center;
        padding-left: 30px;
        .icon{

        }
        span{}
      }
    }
  }
}
</style>