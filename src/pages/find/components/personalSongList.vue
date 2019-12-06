<template>
    <div class="wrapper">
        <div class="title">
            <div class="recommended">推荐歌单</div>
            <div class="square">歌单广场</div>
        </div>

        <ul class="song-group">
            <li class="song-list" v-for="(item, index) in songLists" :key="index">
                <div class="list-img">
                    <img :src="item.picUrl" alt />
                    <span class="play-count">
                        <i class="iconfont iconbofang" />
                        {{ playCount[index] }}
                    </span>
                    <router-link class="cover" :to="'/playlist?id=' + item.id" />
                </div>
                <div class="list-con">{{ item.name }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'PersonalSongList',
    data() {
        return {
            songLists: []
        };
    },
    computed: {
        playCount() {
            return this.songLists.reduce((countChange, list) => {
                countChange.push(
                    list.playCount > 10000
                        ? Math.floor(list.playCount / 10000) + '万'
                        : list.playCount
                );
                return countChange;
            }, []);
        }
    },
    mounted() {
        this.getSongLists();
    },
    methods: {
        async getSongLists() {
            try {
                const res = await axios.get('/api/personalized');
                this.setSongLists(res);
            } catch (error) {
                console.error(error);
            }
        },
        setSongLists(res) {
            if (res.status === 200 && res.statusText === 'OK') {
                this.songLists = res.data.result.slice(0, 6);
                // this.songLists = this.getRandomArrayElements(res, 6);
            }
        }
        // getRandomArrayElements(arr, count) {
        // 	// eslint-disable-next-line one-var
        // 	let shuffled = arr.slice(0),
        // 		// 克隆一个数组，为了不影响外边的数据
        // 		i = arr.length,
        // 		min = i - count,
        // 		temp,
        // 		index;
        // 	// 存下来数组信息  数组的长度
        // 	// 通过改变数组项的位置 输出后边的几位
        // 	while (--i > min) {
        // 		// 随机生成出一个索引
        // 		index = Math.floor((i + 1) * Math.random());
        // 		// 将随机索引项暂存
        // 		// 将数组后边的项与随机项调换
        // 		temp = shuffled[index];
        // 		shuffled[index] = shuffled[i];
        // 		shuffled[i] = temp;
        // 	}
        // 	return shuffled.slice(min);
        // }
    }
};
</script>
<style lang="less" scoped>
@import url('http://at.alicdn.com/t/font_1298894_btl1q00lfth.css');
@import '~@styles/find.less';
</style>
