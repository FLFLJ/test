<template>
    <div id="main">
        <Header title="喵喵电影"/>
            <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" class="city_name" active-class="city_name active" to="/movie/city">
                        <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
                    </router-link>
                    <div class="hot_swtich">
                        <router-link tag="div" class="hot_item" active-class="hot_item active" to="/movie/nowplaying">正在热映</router-link>
                        <router-link tag="div" class="hot_item" active-class="hot_item active" to="/movie/comingsoon">即将上映</router-link>
                      <!--  <div class="hot_item active">正在热映</div>
                        <div class="hot_item ">即将上映></div>-->
                    </div>
                    <router-link tag="div" class="search_entry" active-class="search_entry active" to="/movie/search">
                        <i class="iconfont icon-sousuo"></i><img src="@/assets/search.png">
                    </router-link>
                </div>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </div>
        <TabBar/>
        <router-view name="detail"/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import {messageBox} from '@/components/JS'

export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    },
    mounted(){
        setTimeout(()=>{
            this.axios.get('/data/getLocation.json').then((res)=>{
                var msg=res.data.msg;
                if(msg==='ok'){
                    var nm=res.data.data.nm;
                    var id=res.data.data.id;
                    if(this.$store.state.city.id==id){return;}
                    messageBox({
                        title:'定位',
                        content:nm,
                        cancel:'取消',
                        ok:'切换定位.',
                        handleOk(){
                            window.localStorage.setItem('nowNm',nm);
                            window.localStorage.setItem('nowId',id);
                            window.location.reload();
                        }
                    })
                }
            })
        },3000)
    }
}
</script>
<style>
#content .movie_menu{z-index: 1000;height: 100px;width: 100px;width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;position: relative;}
.movie_menu .city_name{margin-left: 20px;height: 100%;line-height: 45px;}
.movie_menu .city_name.active{color: #ef4238;border-bottom: 1px #ef4238 solid;}
.movie_menu .city_name.router-link-active{color: #ef4238;border-bottom: 1px #ef4238 solid;}

.movie_menu .hot_swtich{display: flex;height: 100%;line-height: 45px;}
.movie_menu .hot_item {font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px;font-weight: 700;}
.movie_menu .hot_item.active{color:#ef4238;border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{color:#ef4238;border-bottom: 2px #ef4238 solid;}

.movie_menu .search_entry{height: 100%;line-height: 45px;}
.movie_menu .search_entry.active{color: #ef4238;border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{color: #ef4238;border-bottom: 2px #ef4238 solid;}

.movie_menu .search_entry img{padding-top: 10px;}
.movie_menu .search_entry.active img{padding-top: 10px;}
.movie_menu .search_entry i{font-size: 24px;color:red;}
</style>
