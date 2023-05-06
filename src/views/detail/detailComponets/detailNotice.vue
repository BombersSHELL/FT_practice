<script setup>

import DetailSection from "@/components/detailComponents/detailSection.vue";

const props = defineProps({
    noticeData:{
        type:Array,
        default:()=>{[]}
    }
})
</script>

<template>
  <div class="notice">
    <detail-section title="预定须知">
        <div class="noticeNode">
            <template v-for="(item,index) in noticeData" :key="index">
                <div class="noticeTag">
                    <span class="title">{{item.title}}</span>
                    <span class="introduction">{{item.introduction}}</span>
<!--                    <span class="tip" v-if="item.tips">查看说明</span>-->
                </div>
            </template>
        </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.notice{
  .noticeNode{
    .noticeTag{
      display: flex;
      margin: 10px 0 20px;
      font-size: 12px;
      .title{
        width: 64px;
        color: #696969;
      }
      .introduction{
          flex: 1;
        color: #333;
      }
    }
  }

}
</style>