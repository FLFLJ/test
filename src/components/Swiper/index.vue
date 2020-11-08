<template>
    <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">1</swiper-slide>
        <swiper-slide class="swiper-item">2</swiper-slide>
        <swiper-slide class="swiper-item">3</swiper-slide>
        <swiper-slide class="swiper-item">4</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        swiperOption:{
            type:Object
        }
    }
}
</script>