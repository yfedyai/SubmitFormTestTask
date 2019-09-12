<template>
    <div>
        <form class="form">
            <div class="top-header">
                <p class="title">Properties</p>
                <p class="title">Order</p>
            </div>
            <div class="form-content">
                <div class="form-item">
                    <div class="item-content">
                        <div class="number">1</div>
                        <select name="" id="" required>
                            <option value="" disabled selected hidden>select option</option>
                        </select>
                        <button type="button" class="button button-sort">
                            <img src="../assets/img/sort-down-ASC.svg" alt="sort-button">
                        </button>                        
                    </div>
                    <button type="button" class="button" >
                        <img src="../assets/img/delete.svg" alt="remove-btn">
                    </button>
                </div>
                <button type="button" class="button button-create">Add
                    <img src="../assets/img/plus.svg" alt="add-button">
                </button>
                <button type="submit" class="button button-submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form {
    max-width: 450px;
    margin: 0 auto;
    &-content {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    &-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        
        
    }
    .item-content{
        display:flex;
        justify-content: space-between;
        width: 100%;
        padding:10px;
        background: #eef0ee
    }
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