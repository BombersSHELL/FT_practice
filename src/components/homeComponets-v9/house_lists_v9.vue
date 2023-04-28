<template>
    <div class="houseList">
        <div class="house">
            <div class="houseImg">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="content">
                <div class="size">{{itemData.summaryText}}</div>
                <div class="title">{{itemData.houseName}}</div>
                <div class="ratePrice">
                    <van-rate :model-value="score"
                              :size="15"
                              color="#ff9854"
                              allow-half
                    ></van-rate>
                    <div class="price">￥ {{itemData.finalPrice}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    itemData: {
        type:Object,
        default:()=>{}
    }
})
console.log(props.itemData)

const score = computed(()=>{
    return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.houseList{
    width: 50%;
    .house{
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
        .houseImg{
            img{
                width: 100%;
            }
        }
        .content{
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 8px 10px;
            color: #fff;
            .size{
                font-size: 12px;
            }
            .title{
                //font-size: 13px;
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .ratePrice{
                display: flex;
                flex-direction: row;
                margin: 5px 0;
            }
        }
    }
}
</style>