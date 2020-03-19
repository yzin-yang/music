<template>
	<div class="search-container">
		<search-input :hotKey="hotKey" @search="search" />
		<!-- <router-view /> -->
		<component
			:is="type"
			:keywords="keywords"
			:result="result"
			@selectHot="selectHot"
			@showMore="showMore"
		/>
	</div>
</template>

<script>
import SearchInput from './components/SearchInput';
import Result from './components/Result';
import HotSearch from './components/HotSearch';
import ShowMore from './components/ShowMore';

export default {
	name: 'SearchIndex',
	components: {
		SearchInput,
		Result,
		HotSearch,
		ShowMore
	},
	data() {
		return {
			hotKey: '',
			type: 'HotSearch',
			keywords: '',
			result: []
		};
	},
	methods: {
		search(type, keywords) {
			this.type = type;
			this.keywords = keywords;
		},
		selectHot(keywords) {
			this.type = 'Result';
			this.keywords = keywords;
			this.hotKey = keywords;
		},
		showMore(type, list) {
			this.type = 'ShowMore';
			this.result = list;
			// console.log(type);
			console.log(list);
		}
	}
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1371990_3libmbu82og.css');
.search-container {
	padding: 0 3.5vw;
	min-height: 100vh;
}
</style>
