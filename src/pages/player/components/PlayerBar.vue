<template>
    <div class="player-bar">
        <span class="current-time">{{ currentTime }}</span>
        <div ref="bar" class="bar" @touchstart="clickBar">
            <div class="bar-layer" :style="{ width: length }" />
            <div class="point" :style="{ left: length }" @touchmove="move" @touchend="end" />
        </div>
        <span class="duration">{{ duration }}</span>
    </div>
</template>

<script>
export default {
    name: 'PlayerBar',
    props: {
        duration: {
            type: String
        },
        currentTime: {
            type: String
        },
        progress: {
            type: Number
        }
    },
    data() {
        return {
            length: 0,
            occupancy: 0
        };
    },
    computed: {
        barOffsetLeft() {
            return this.$refs.bar.offsetLeft;
        },
        barWidth() {
            return this.$refs.bar.offsetWidth;
        }
    },
    watch: {
        progress(val) {
            if (isNaN(val)) {
                val = 0;
            }
            this.length = val + '%';
        }
    },
    methods: {
        //TODO 移动端拖动进度条时间间隔不能太短
        move(e) {
            //相对起点位置
            const currentX = e.changedTouches[0].pageX - this.barOffsetLeft;
            //控制边界
            const currentWidth = Math.min(Math.max(0, currentX), this.barWidth);
            this.occupancy = currentWidth / this.barWidth;
            this.setProcess();
        },
        end() {
            this.$emit('changeTime', this.occupancy);
        },
        clickBar(e) {
            const currentX = e.changedTouches[0].pageX - this.barOffsetLeft;
            const currentWidth = Math.min(Math.max(0, currentX), this.barWidth);
            this.occupancy = currentWidth / this.barWidth;
            this.setProcess();
            this.$emit('changeTime', this.occupancy);
        },
        setProcess() {
            this.length = this.occupancy * 100 + '%';
        }
    }
};
</script>

<style lang="less" scoped>
.player-bar {
    margin: 3vh 0;
    display: flex;
    align-items: center;
    color: #bdc3c7;
    font-size: 2.5vw;
    .current-time {
        width: 10vw;
        margin-left: 3vw;
    }
    .bar {
        width: 80vw;
        margin: 0 3vw;
        background-color: #95a5a6;
        position: relative;
        .bar-layer {
            height: 2px;
            background-color: #ecf0f1;
        }

        .point {
            position: absolute;
            top: -3px;
            // top: calc(~'-5vw - 3px');
            border-radius: 50%;
            width: 8px;
            height: 8px;
            background-color: #ecf0f1;
            // margin: 5vw;
            // transform: translate(-5vw);
        }
    }
    .duration {
        width: 10vw;
        margin-right: 3vw;
    }
}
</style>
