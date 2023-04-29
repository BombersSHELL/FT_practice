<template>
    <div class="houseList">
        <div class="house">
            <div class="houseImg">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="content">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <div class="locationText">{{itemData.location}}</div>
                </div>
                <div class="title">{{itemData.houseName}}</div>
                <div class="size">{{itemData.summaryText}}</div>
                <div class="price">
                    <div class="finalPrice">￥{{itemData.finalPrice}}</div>
                    <div class="originalPrice">￥{{itemData.productPrice}}</div>
                    <div class="bandage">{{itemData?.priceTipBadge?.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    itemData: {
        type:Object,
        default:()=>{}
    }
})
// console.log(props.itemData)

// const score = computed(()=>{
//     return Number(props.itemData.commentScore)
// })
</script>

<style lang="less" scoped>
.houseList{
    width: 50%;
    .house{
        padding: 5px;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
        .houseImg{
            img{
                width: 100%;
            }
        }
        .content{
            .location{
                display: flex;
                img{
                    width: 12px;
                    height: 12px;
                }
                .locationText{
                    font-size: 12px;
                    color: #999999;
                    padding-left: 5px;
                }
            }
            .title{
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            //    如何取代-webkit-box-orient
            }
            .size{
                font-size: 13px;
                color: rgba(153, 153, 153, 0.98);
            }
            .price{
                margin: 8px 0;
                display: flex;
                align-items: flex-end;
                .finalPrice{
                    font-size: 14px;
                    color: #ff9854;
                }
                .originalPrice{
                    font-size: 12px;
                    color:#999;
                    text-decoration: line-through;
                    margin: 0 3px;
                }
                .bandage{
                    background-image: linear-gradient(270deg,#f66,#ff9f9f);
                    color: #fff;
                    padding: 0 6px;
                    border-radius: 8px;
                }
            }
        }

    }
}
</style>