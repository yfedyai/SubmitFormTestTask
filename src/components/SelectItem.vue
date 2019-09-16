<template>
    <div>
       <div class="form-item">
            <div class="item-content">
                <div class="number">
                    {{item.priority}}
                </div>
                <select
                    v-model="item.order"
                    required
                    @change="setItemProperty"
                >
                    <option value="" disabled selected hidden>select option</option>
                    <option
                        v-for="(label, index) in importData"
                        :key="index"
                        :value="label.name"
                        :disabled="removeOption(label.name)"
                    >
                        {{label.title}}
                    </option>
                </select>
                <button type="button" class="button button-sort"
                    @click="item.property=toggleProperty(item.property)"
                >
                    <img
                        :src="item.property === 'ASC' ? require('../assets/img/sort-up-DESC.png') : require('../assets/img/sort-down-ASC.png')"
                        alt="sort-button"
                    >
                </button>
            </div>
            <button type="button" class="button" >
                <img
                    src="../assets/img/delete.svg" alt="remove-btn"
                    @click="removeItem(item.priority - 1)"
                >
            </button>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: ['item'],
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('getData')
  },
  computed: {
    ...mapState({
      importData: state => state.form.importData
    })
  },
  methods: {
    toggleProperty (property) {
      return property === 'ASC' ? 'DESC' : 'ASC'
    },
    removeItem (index) {
      this.$emit('removeItem', index)
    },
    removeOption (name) {
      return this.$parent.resultData.filter(el =>
        el.order === name
      ).length > 0
    },
    setItemProperty (event) {
      for (let index = 0; index < this.importData.length; index++) {
        if (this.importData[index].name === event.target.value) {
          this.$props.item.property = this.importData[index].orderTypeDefault
        }
      }
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
