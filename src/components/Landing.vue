<template>
    <div class="container">
        <div class="lhs">
            <div class="left-img">
                <img src="../assets/lhs.jpg" alt="">
            </div>
        </div>
        <div class="rhs">
            <div class="right-img">
                <img src="../assets/rhs.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    height: 90vh;
    .lhs {
        width: 50%;
        .left-img img{
            object-fit: cover;
            width: 100%;
            height: 90vh;
        }
    }
    .rhs {
        width: 50%;
        .right-img img{
            object-fit: cover;
            height: 90vh;
            width: 100%;
        }
    }
}
@media screen and (max-width: 760px) {
    .container{
        height: 100%;
        display: block;
        .lhs {
        width: 100%;
        height: 50vh;
        }
        .rhs {
        width: 100%;
        height: 50vh;
        .right-img img{
            height: 50vh;
        }
        }
    }
}
</style>
