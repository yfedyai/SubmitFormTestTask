<template>
    <div>
       <div class="form-item">
            <div class="item-content">
                <div class="number">{{item.priority}}</div>
                    <select
                        v-model="item.order"
                        required
                    >
                        <option value="" disabled selected hidden>select option</option>
                        <option
                            v-for="(label, index) in importData"
                            :key="index"
                            :value="label.name"
                            :disabled="removeOption()"
                        >
                            {{label.title}}
                        </option>
                    </select>
                        <button type="button" class="button button-sort"
                            @click="item.property=toggleProperty(item.property)"
                        >
                            <img
                                :src="item.property === 'ASC' ? require('../assets/img/sort-down-ASC.png') : require('../assets/img/sort-up-DESC.png') "
                                alt="sort-button"
                            >
                        </button>
                    </div>
                    <button type="button" class="button" >
                        <img
                            src="../assets/img/delete.svg" alt="remove-btn"
                            @click="removeItem(item.order)"
                        >
                    </button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['item', 'importData'],
  data () {
    return {
    }
  },
  methods: {
    toggleProperty (property) {
        
      return property === 'ASC' ? 'DESC' : 'ASC'
      
    },
    removeItem (index) {
      this.$emit('removeItem', index)
    },
    removeOption(item){
         
    }
  }
}
</script>

<style lang="scss">
.form {
    &-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    &-content {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
.item-content{
    display:flex;
    justify-content: space-between;
    width: 100%;
    padding:10px;
    background: #eef0ee
    }
}
</style>
