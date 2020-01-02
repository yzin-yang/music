<template>
	<div class="search-container">
		<search-input />
		<!-- <search ref="search" /> -->
		<!-- <history /> -->
		<hot-search @returnKey="setKey" />
	</div>
</template>

<script>
import SearchInput from './components/SearchInput';
// import History from './components/History';
import HotSearch from './components/HotSearch';
export default {
	name: 'SearchIndex',
	components: {
		SearchInput,
		// Search,
		// History,
		HotSearch
	},
	data() {
		return {
			hotSearchKey: ''
		};
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
@import url('//at.alicdn.com/t/font_1371990_3libmbu82og.css');
.search-container {
	padding: 0 3.5vw;
}
</style>
