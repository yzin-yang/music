<template>
    <div>
        <search ref="search" />
        <history />
        <hot-search @returnKey="setKey" />
    </div>
</template>

<script>
import Search from './components/Search';
import History from './components/History';
import HotSearch from './components/HotSearch';
export default {
    name: 'SearchIndex',
    data() {
        return {
            hotSearchKey: ''
        };
    },
    components: {
        Search,
        History,
        HotSearch
    },
    created() {
        this.setKey();
    },
    methods: {
        setKey(key) {
            if (key) {
                // 父组件调用子组件方法
                this.$refs.search.searchKey(key);
            }
        }
    }
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1371990_nz4220l62x.css');
</style>
