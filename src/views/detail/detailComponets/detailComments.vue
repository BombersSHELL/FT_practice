<script setup>

import DetailSection from "@/components/detailComponents/detailSection.vue";

const props = defineProps({
    commentsData:{
        type:Object,
        default:()=>{}
    }
})
console.log(props.commentsData.comment.checkInDate)
</script>

<template>
  <div class="comments">
      <detail-section title="热门评论" :more-text="`查看全部${commentsData.totalCount}条评论`">
          <div class="top">
              <div class="scoreOverall">{{commentsData.overall}}</div>
              <div class="extraOverall">
                  <span class="scoreTitle">{{commentsData.scoreTitle}}</span>
                  <span class="totalCount">{{commentsData.totalCount}}条评论</span>
                  <van-rate v-model="commentsData.overall" readonly allow-half color="#ff9645"/>
              </div>
              <div class="subTags">
                  <template v-for="(item, index) in commentsData.subScores" :key="item">
                    <span class="item">{{ item }}</span>
                  </template>
              </div>
          </div>
          <div class="middle">
              <template v-for="(item,index) in commentsData.commentTagVo" :key=index>
                      <span class="tag"
                            :style="{color:item.color, background:item.backgroundColor}"
                      >
                          {{item.text}}
                      </span>
              </template>
          </div>
          <div class="aComment">
              <div class="user">
                  <div class="avatar">
                      <img :src="commentsData.comment.userAvatars" alt="">
                  </div>
                  <div class="nameAndTime">
                      <span class="userName">{{commentsData.comment.userName}}</span>
                      <span class="time">{{commentsData.comment.checkInDate}}</span>
                  </div>
              </div>
              <div class="comment">
                  {{commentsData.comment.commentDetail}}
              </div>
          </div>
      </detail-section>
  </div>
</template>

<style scoped lang="less">
.comments{
  display: flex;
  flex-direction: column;
  .top{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    .scoreOverall {
      font-size: 50px;
      border-bottom: 5px solid #fa8c1d;
      text-align: center;
      line-height: 50px;
      border-radius: 5px;
    }
    .extraOverall{
      display: flex;
      flex-direction: column;
      padding-left: 15px;
    }
    .subTags{
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;
      .item{
        margin-left: 5px;
        color: #666;
        font-size: 12px;
      }
    }
  }
  .middle{
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    align-items: center;
    .tag{
      margin: 4px 8px;
    }
  }
  .aComment{
    display: flex;
    flex-direction: column;
    background-color: #f7f9fb;
    padding: 7px 5px;
    .user{
      display: flex;
      flex-direction: row;
      .avatar{
        img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      .nameAndTime{
        display: flex;
        flex-direction: column;
        margin-left: 4px;
        justify-content: center;
        .time{
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .comment{
        font-size: 12px;
        line-height: 16px;
        color: #333;
        margin-top: 16px;
      }
  }
}
</style>