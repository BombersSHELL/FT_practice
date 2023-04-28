<template>
    <div class="houseList">
        <div class="text">发现更多</div>
        <div class="list">
            <template v-for="(item,index) in houseList" :key="index">
                <house_lists_v9 v-if="item.discoveryContentType === 9" :item-data="item.data"/>
                <house_lists_v3 v-else-if="item.discoveryContentType === 3" :item-data="item.data"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import House_lists_v9 from "@/components/homeComponets-v9/house_lists_v9.vue";
import House_lists_v3 from "@/components/homeComponets-v3/house_lists_v3.vue";
import useHomeStore from "@/stores/modules/home_store";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.houseList{
    padding: 0 10px;
    margin-top: 10px;
    .text{
        font-size: 18px;
        font-weight: 600;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>