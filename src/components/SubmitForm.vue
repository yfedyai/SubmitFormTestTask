<template>
    <div>
        <form class="form" @submit.prevent="onSubmit()">
            <div class="top-header">
                <p class="title">Properties</p>
                <p class="title">Order</p>
            </div>
            <div class="form-content">
                <SelectItem v-for="(item, index) in resultData"
                    :key="index"
                    :item="item"
                    @removeItem="removeItem"
                >
                </SelectItem >
                <button
                    type="button"
                    class="button button-create"
                    @click="createItem(); "
                >   Add
                    <img src="../assets/img/plus.svg" alt="add-button">
                </button>
                <button type="submit" class="button button-submit" :disabled="resultData.length===0">Sort</button>
            </div>
        </form>
    </div>
</template>

<script>

import SelectItem from '../components/SelectItem'

export default {
  components: {
    SelectItem
  },
  data () {
    return {
      resultData: []
    }
  },
  methods: {
    onSubmit () {
      console.log('POST THIS OBJ', JSON.stringify(this.resultData))
    },
    createItem () {
      this.resultData.push({
        order: '',
        property: 'ASC',
        priority: this.resultData.length === 0 ? 1 : this.resultData[this.resultData.length - 1].priority + 1
      })
    },
    removeItem (index) {
      this.resultData.splice(index, 1)
      this.resultData.slice(index).forEach(element => {
        element.priority--
      })
    }
  }

}
</script>

<style lang="scss">
.form {
    max-width: 500px;
    margin: 0 auto;
}
.top-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    .title {
        margin-right: 25px;
    }
}
img {
    width:15px;
    height: 15px;
}
.button {
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    font-weight: bold;
    &-create {
        display: flex;
        align-self: flex-start;
        border: 2px solid #06be1f;
        padding: 5px 10px;
        color: #06be1f;
        img{
            margin-left: 10px;;
        }

    }
    &-submit {
        margin-top: 15px;
        align-self: center;
        border: 3px solid #150ba3;
        color: #ffffff;
        background: #150ba3;
        text-transform: uppercase;
        padding: 10px 25px;

    }
}
select {
    width: 100%;
    margin: 0px 10px;
}
</style>
