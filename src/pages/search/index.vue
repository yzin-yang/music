<template>
	<div class="search-container">
		<search-input @search="search" />
		<!-- <router-view /> -->
		<component :is="type" :keywords="keywords"></component>
	</div>
</template>

<script>
import SearchInput from './components/SearchInput';
import Result from './components/Result';
import HotSearch from './components/HotSearch';

export default {
	name: 'SearchIndex',
	components: {
		SearchInput,
		Result,
		HotSearch
	},
	data() {
		return {
			hotSearchKey: '',
			type: 'HotSearch',
			keywords: ''
		};
	},
	methods: {
		search(type, keywords) {
			this.type = type;
			console.log(type, keywords);
			this.keywords = keywords;
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
