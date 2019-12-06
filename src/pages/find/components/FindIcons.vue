<template>
    <div class="container border-bottom">
        <div class="icon-wrapper" v-for="(item, index) in findIcons" :key="index">
            <div class="icon">
                <span class="today" v-if="item.text === '每日推荐'">
                    {{
                    today
                    }}
                </span>
                <i :class="item.icon" class="iconfont" />
            </div>
            <div class="icon-text">{{ item.text }}</div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'FindIcons',
    computed: {
        today() {
            return new Date().getDate();
        },
        ...mapState('find', ['findIcons'])
    }
};
</script>

<style lang="less" scoped>
@import url('http://at.alicdn.com/t/font_1295705_hdzk2gocoyo.css');

.container {
    .border-bottom(4vw);
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    .icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            width: 12vw;
            height: 12vw;
            border-radius: 50%;
            background: linear-gradient(to right, #ff5a4c, #ff1d11);
            text-align: center;
            line-height: 12vw;
            position: relative;
            color: #fff;
            display: flex;
            justify-content: center;
            .iconfont {
                font-size: 6.5vw;
            }
            .today {
                position: absolute;
                top: 1.2vw;
                font-size: 3vw;
            }
        }
    }
}
</style>
