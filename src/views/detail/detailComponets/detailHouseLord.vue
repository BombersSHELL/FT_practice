<script setup>
import DetailSection from "@/components/detailComponents/detailSection.vue";

const props = defineProps({
    lordInfo:{
        type:Object,
        default:()=>{}
    }
})

console.log(props.lordInfo);
</script>

<template>
  <div class="introduce">
      <detail-section title="房东介绍" more-text="查看房东主页">
          <div class="top">
              <img :src="lordInfo.topScroll" alt="">
          </div>
          <div class="head">
              <div class="left">
                  <div class="avatar">
                    <img :src="lordInfo.hotelLogo" alt="">
                  </div>
                  <div class="info">
                      <div class="name">{{lordInfo.hotelName}}</div>
                      <div class="tags">
                          <template v-for="(item,index) in lordInfo.hotelTags" :key="index">
                              <span>{{item.tagText.text}}</span>
                              <span v-if="index !== lordInfo.hotelTags.length - 1" class="divider">|</span>
                          </template>
                      </div>
                  </div>
              </div>
              <div class="right">
                  <div class="contact">联系房东</div>
              </div>
          </div>
          <div class="summary">
              <template v-for="(item, index) in lordInfo.hotelSummary" :key="index">
                  <div class="test">
                      <span class="top">{{item.title}}</span>
                      <span class="middle">{{item.introduction}}</span>
                      <span class="bottom">{{item.tip}}</span>
                  </div>
              </template>
          </div>
      </detail-section>
  </div>
</template>

<style scoped lang="less">
.introduce{
  .top{}
  .head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left{
      display: flex;
      flex-direction: row;
      align-items: center;
      .avatar{
        img{
          width: 54px;
          height: 54px;
        }
      }
      .info{
        margin-left:3px;
        .name{
          margin-bottom: 2px;
          font-size: 19px;
          font-weight: bold;
        }
        .tags{
          color: #a9a9a9;
        }
      }
    }
    .right{
      .contact{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
        height: 30px;
        width: 80px;
        font-size: 12px;
        line-height: 30px;
        padding: 0 7px;
        margin-top: 10px;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
  .summary{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 5px 0 ;
    .test{
      display: flex;
      flex-direction: column;
      .top{
        color: #a9a9a9;
      }
      .middle{
        font-size: 20px;
        font-weight: bold;
      }
      .bottom{
      }
    }
  }
}
</style>