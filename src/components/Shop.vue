<template>
    <div class="shop">
        <div class="container">
            <button class="shop-btn">SHOP</button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .container {
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .shop-btn{
            background-color: transparent;
            border: 2px solid;
            font-size: 14px;
            font-weight: 600;
            color: black;
            width: 100px;
            height: 35px;
            &:hover{
                background-color: black;
                color: white;
            }
        }
    }
</style>
