<script setup>
const props = defineProps({
    titleData:{
        type:Object,
        default:()=>{}
    }
})
console.log(props.titleData)
</script>

<template>
  <div class="titleTotal">
      <div class="title">{{titleData.houseName}}</div>
      <div class="houseTags">
          <template v-for="(item,index) in titleData.houseTags" :key="item.tagCode">
              <span
                class="item"
                v-if="item.tagText"
              >
                {{item.tagText.text}}
              </span>
          </template>
      </div>
      <div class="commentBrief">
          <div class="left">
              <span class="score">{{titleData.commentBrief.overall}}</span>
              <span class="scoreTitle">{{titleData.commentBrief.scoreTitle}}</span>
              <span class="brief">{{titleData.commentBrief.commentBrief}}</span>
          </div>
          <div class="right">
              <span class="count">
                  {{titleData.commentBrief.totalCount}}条评论
                  <van-icon name="arrow" />
              </span>
          </div>
      </div>
      <div class="position">
          <span class="place">{{titleData.nearByPosition.address}}</span>
          <span class="surrounding">
              地图.周边
              <van-icon name="arrow" />
          </span>

      </div>
  </div>
</template>

<style scoped lang="less">
.titleTotal{
    display: flex;
    flex-direction: column;
    padding: 10px;
    .title{
        font-size: 22px;
        font-weight: 1000;
        //padding: 10px;
    }
    .houseTags{
        display: flex;
        flex-direction: row;
        margin: 10px 0;
        .item{
            font-size: 13px;
            color: #ff9854;
            background-color: #ffecde;
            border-radius: 6px;
            margin: 0 5px;
        }
        .item:first-child{
            background-color: #3a3b34;
        }
        .item:last-child{
            background-color: #e2f7f5;
            color: #54b7b5;
        }
    }
    .commentBrief{
        display: flex;
        background-color: #f4f9fc;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .left{
            display: flex;
            flex-direction: row;
            padding: 10px;
            align-items: center;
            .score{
                font-weight: 600;
                font-size: 22px;
            }
            .scoreTitle{
                font-weight: 550;
                padding: 0 5px;

            }
            .brief{
            }
        }
        .right{
            display: flex;
            color: #ff9854;
        }
    }
    .position{
        display: flex;
        background-color: #f4f9fc;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 5px;
        .place{
            font-weight: 300;
        }
        .surrounding{
            font-weight: 520;
            //text-decoration: underline;
            color: #ff9854;
        }
    }
}
</style>