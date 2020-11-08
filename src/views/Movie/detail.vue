<template>
    <div id="detailContrainer" class="slide-enter-active">
        <Header title="影片详情">
            <i class="iconfont icon-right" @click="handleToBack">《</i>
        </Header>
        <div id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg" :style="{'background-image':'url('+detailMovie.img+')'}"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="this.detailMovie.img" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.sc}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}}/{{detailMovie.dur}}分钟</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>{{detailMovie.dra}}</p>
            </div>
            <div class="detail_player" ref="detail_player">
                <ul class="swiper-wrapper">
                    <li v-for="(item,index) in detailMovie.photos" :key="index"  class="swiper-slide">
                        <div>
                            <img :src="item" alt="">
                        </div>
                        <p>陈建斌</p>
                        <p>马先勇</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Swiper from "swiper"

export default {
    name:'Detail',
    data(){
        return{
            detailMovie:{},
            swiperOption:{
                autoplay:3000,
                pagination:'.swiper-pagination',
                direction:'horizontal'
            }
        }
    },
    components:{
        Header
            },
    props:['movieId'],
    methods:{
        handleToBack(){
            this.$router.back();
        }
    },
    mounted(){
            this.axios.get('/data/detailmovieId-'+this.movieId+'.json').then((res)=>{
                var msg=res.data.msg;
                if(msg==='ok'){
                    this.detailMovie=res.data.data.detailMovie;
                    this.$nextTick(()=>{
                       new Swiper(this.$refs.detail_player,{
                            slidesPerView:'auto',
                            freeMode:true,
                            freeModeSticky:true
                        }

                        )
                    })
                }
            })
    }
}
</script>

<style scoped>
#detailContrainer{position: absolute;left: 0;top: 0;z-index: 1000;width: 100%;min-height: 100%;background:white;}
#detailContrainer.slide-enter-active{animation: 0.5s slideMove;}
@keyframes slideMove{
    0%{transform:translateX(100%)}
    100%{transform: translateX(0%);}
}
#content.contentDetail{display: block;margin-bottom: 0;}
#content .detail_list{height: 200px;width: 100%;position: relative;overflow: hidden;}
.detail_list .detail_list_bg{width: 100%;height: 100%;filter: blur(3px);}
.detail_list .detail_list_filter{width: 100%;height: 100%;position: absolute;background-color:#40454d;opacity: .55;}
.detail_list .detail_list_content{display: flex;width: 100%;height: 100%;position: absolute;left:0;top:0;z-index:2;}
.detail_list .detail_list_img{width: 100px;height: 150px;border: solid 1px #f0f2f3;margin: 20px;}
.detail_list .detail_list_img img{width: 100%;height: 100%;}
.detail_list .detail_list_info{margin-top: 20px;}
.detail_list .detail_list_info h2{font-size-adjust: 20px;color:black;;font-weight: normal;line-height: 40px;}
.detail_list .detail_list_info p{color:black;line-height: 20px;font-size: 14px;color: black;}
.h1{background-color: red;}
#content .detail_intro{padding: 10px;}
#content .detail_player{margin: 20px;}

.detail_player .swiper-slide{width: 70px;margin-right: 20px;text-align: center;font-size: 14px; float: left; width: 50px;}
.detail_player .swiper-slide img{width: 100%;margin-bottom: 5px;}
.detail_player .swiper-slide p:nth-of-type(2){color:#999;}
.swiper-wrapper{width: 1000px;}

</style>