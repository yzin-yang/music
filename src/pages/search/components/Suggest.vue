<template>
	<div class="search-container">
		<hot-search @returnKey="setKey" />
	</div>
</template>

<script>
// import History from './components/History';
import HotSearch from './HotSearch';
export default {
	name: 'SearchSuggest',
	components: {
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

<style lang="less" scoped></style>
