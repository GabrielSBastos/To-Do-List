<template>
    <div>
        <div v-for="(item,index) in items" :key="index">
            <list-item
                :item="item"
                class="item"
                v-on:itemchanged="$emit('reloadList')"
            />
        </div>
    </div>
</template>

<script>
import listItem from "./listItem"
import ListItem from './listView.vue'


export default {
    props: ['items'],
    components: {
        listItem
    },
   mounted() {
        console.log(this.items)
    }
};
</script>
<style scoped>
.item{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
