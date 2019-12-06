<template>
    <div>
        <!-- 顶部导航条 -->
        <nav class="nav-wrapper">
            <div class="nav-left">
                <i class="iconfont iconnav" @click="SHOW_LEFT_NAV" />
            </div>
            <ul class="nav-center">
                <router-link tag="li" to="/home">我的</router-link>
                <router-link tag="li" to="/find">发现</router-link>
                <router-link tag="li" to="/friend">朋友</router-link>
                <router-link tag="li" to="/video">视频</router-link>
            </ul>
            <div class="nav-right">
                <router-link to="/search" tag="i" class="iconfont iconsousuo" />
            </div>

            <!-- TODO v-show延迟加载，待优化 -->
            <transition name="left-nav-show" mode="out-in">
                <left-nav v-show="showLeftNav" @touchmove.prevent />
            </transition>
            <transition name="mask-show">
                <div class="mask" v-show="showLeftNav" @click="HIDE_LEFT_NAV" @touchmove.prevent />
            </transition>
        </nav>
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>
<script>
import { SHOW_LEFT_NAV, HIDE_LEFT_NAV } from '@mutationtypes';
import LeftNav from '@pages/leftnav';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'BaseNav',
    components: {
        LeftNav
    },
    data() {
        return {
            // showLeftNav: false,
        };
    },
    computed: {
        ...mapState(['showLeftNav'])
    },
    methods: {
        ...mapMutations([SHOW_LEFT_NAV, HIDE_LEFT_NAV])
    }
};
</script>

<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1298894_btl1q00lfth.css');
.mask-show-enter,
.mask-show-leave-to {
    opacity: 0;
}
.mask-show-enter-active,
.mask-show-leave-active {
    transition: opacity linear 0.2s;
}
.left-nav-show-enter,
.left-nav-show-leave-to {
    transform: translateX(-5vw);
}
.left-nav-show-enter-active,
.left-nav-show-leave-active {
    transition: transform ease-out 0.2s;
}
.nav-wrapper {
    padding: 4vw 3vw;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #fff;
    display: flex;
    .nav-left {
        flex: 2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .iconfont {
            font-size: 5vw;
        }
    }
    .nav-center {
        flex: 6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #999;
        font-size: 3.5vw;
        list-style: none;
    }
    .nav-right {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .iconfont {
            font-size: 5vw;
        }
    }
}
.mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
}
</style>
