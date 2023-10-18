<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">To Do List</h2>
            <add-item-form />
                v-on:reloadList="getList()"
                />
        </div>
        <list-view
            :items="items"
             v-on:reloadList="getList()"/>

    </div>
</template>

<script>
import addItemForm from './addItemForm.vue';
import listView from './listView.vue';

export default{
    components: {
        addItemForm,
        listView
    },

    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList () {
            axios.get('api/items')
            .then(response => {
                    this.item = response.data
            })
            .catch(error =>{
                console.log(error);
            })
        }
    },

    created(){
        this.getList();

    }
}
</script>
</html>

<style scoped>
.todoListContainer{
    width: 350px;
    margin: auto;
}

.heading{
    background: #e6e6e6;
    padding: 10px;
} #title{
    text-align: center;
    margin: auto;
}

</style>
