<template>
	<div class="wrapper">
		<i class="iconfont zuojiantou" @click="returnPage" />
		<!-- input 框，设置使得 input 页面加载input自动聚焦 -->
		<!-- 聚焦后显示搜索建议 -->
		<input
			ref="inp"
			v-model.trim="keywords"
			class="search"
			type="text"
			:placeholder="placeholder"
			autofocus="autofocus"
			@focus="displayList"
		/>
		<!-- 通过观测输入框中是否有内容用来控制右侧的叉按钮是否显示 -->
		<!-- 为叉按钮定义点击事件，点击清空输入框 -->
		<i v-show="keywords" class="iconfont guanbi" @click="clear" />
		<i class="iconfont geshou" @click="goSingerPage" />
		<!-- 搜索建议列表信息 -->
		<div v-show="showList" class="floatInfo">
			<ul>
				<li class="blue" @click="searchKey(keywords)">
					搜索
					<span class="text">"{{ keywords }}"</span>
				</li>
				<li
					v-for="(item, index) in searchList"
					:key="index"
					class="suggest-list"
					@click="searchKey(item.keyword)"
				>
					<i class="iconfont sousuo" />
					{{ item.keyword }}
				</li>
			</ul>
		</div>
		<!-- 蒙层，当搜索建议显示，蒙层显示，控制列表不能滚动 -->
		<div v-show="showList" class="mask" @click="hideList" />
	</div>
</template>

<script>
import API from '@api';
export default {
	name: 'SearchInput',
	props: ['hotKey'],
	data() {
		return {
			searchList: [{ keyword: '...' }],
			keywords: '',
			showList: false,
			// 将 history 存入 vuex
			history: [],
			// 防抖定时器
			time: null,
			placeholder: ''
		};
	},
	watch: {
		/**
		 * 是否显示搜索建议
		 */
		keywords(val) {
			// 这是对于输入框内容定义的事件，当是跳转过来的
			// 说明内容相等，不显示搜索建议列表
			// if (this.keywords === this.keyword) {
			// 	this.hideList();
			// 	return;
			// }
			// 在内容变化时，并且当内容长度大于0 说明有内容时
			if (val.length > 0) {
				// 显示建议列表
				this.displayList();
			} else {
				// 隐藏建议列表
				this.hideList();
			}
		},
		hotKey(val, oldVal) {
			if (val !== oldVal) {
				this.keywords = val || '';
				setTimeout(() => {
					this.hideList();
				}, 0);
			}
		}
	},
	mounted() {
		// 获取焦点
		this.getFocus();
		// 先将默认搜索建议显示
		this.getPlaceholder();
		// 历史记录项点击搜索
		// this.historySearch();
		// 页面首次加载，由于 keyword 没有被watch监听，所以使用函数方法进行赋值
		// this.setKeyword();
		// 获取历史搜索记录
		// this.getHistory();
	},

	methods: {
		/**
		 * 第一次访问需要调用方法更改数据
		 * 随后是监听 keyword 改变后赋值
		 */
		// setKeyword() {
		// if (this.keyword) {
		// 	this.keywords = this.keyword;
		// }
		// },
		/**
		 * 点击歌手分类图标，跳转到歌手分类页面
		 */
		goSingerPage() {
			// this.$router.push('/singer');
		},
		/**
		 * 历史记录项目点击搜索
		 */
		historySearch() {
			// Bus.$on('search', keywords => {
			// 	this.searchKey(keywords);
			// });
		},
		/**
		 * 点击清除按钮清除搜索框的内容
		 */
		clear() {
			this.keywords = '';
		},
		/**
		 * 自动获取焦点
		 * 当是搜索展示页时不自动获取焦点
		 */
		getFocus() {
			if (!this.keyword) {
				this.$nextTick(() => {
					this.$refs.inp.focus();
				});
			}
		},
		/**
		 * 返回上一页
		 */
		returnPage() {
			this.clear();
			this.$emit('search', 'HotSearch');
			this.$router.back();
		},
		/**
		 * 设置输入框的默认显示
		 */
		getPlaceholder() {
			API.getDefaultSearch().then(res => {
				res = res.data;
				if (res.code === 200) {
					this.placeholder = res.data.showKeyword;
				}
			});
		},
		/**
		 * 隐藏搜索建议列表
		 */
		hideList() {
			this.showList = false;
		},
		/**
		 * 显示搜索列表建议
		 */
		displayList() {
			if (!this.keywords) {
				return;
			}
			this.showList = true;
			// 搜索建议列表内容获取
			this.setSearchList(this.keywords);
		},
		/**
		 * 请求搜索建议数据
		 */
		getSuggestList(keyword) {
			API.getSuggestSearch(keyword).then(res => {
				const data = res.data;
				if (data.code === 200) {
					this.searchList = data.result.allMatch;
				}
			});
		},
		/**
		 * 根据搜索内容展示搜索建议列表
		 * 使用防抖
		 */
		setSearchList(keywords) {
			if (this.time) {
				clearTimeout(this.time);
				this.time = null;
			}
			this.time = setTimeout(() => {
				this.getSuggestList(keywords);
			}, 50);
		},
		/**
		 * 获取历史搜索记录
		 */
		getHistory(key) {
			// let keys = localStorage.getItem('keys')
			// 	? localStorage.getItem('keys').split(',')
			// 	: [];
			// if (key) {
			// 	// 将关键字插入到数组最前面
			// 	keys.unshift(key);
			// 	// 存入本地之前进行去重
			// 	keys = this.unique(keys);
			// 	// 存入本地
			// 	localStorage.setItem('keys', keys);
			// }
			// this.history = keys;
			// 通过Bus 进行兄弟组件之间传值
			// 通过 Bus.$emit('方法名',要传的值)
			// Bus.$emit('history', this.history);
		},
		/**
		 * 搜索
		 * 搜索功能跳转到搜索展示页面
		 */
		searchKey(keywords) {
			// this.getHistory(key);
			this.keywords = keywords;
			setTimeout(() => {
				this.hideList();
			}, 0);

			// 这里解决了Bus传值第一次无法获取到的问题
			// 后需解决！！！！
			// setTimeout(() => {
			// 	this.pushKey(key);
			// }, 0);
			this.$emit('search', 'Result', keywords);
		}
		/**
		 * 数组去重
		 */
		// unique(arr) {
		// 	if (!Array.isArray(arr)) {
		// 		console.log('type error!');
		// 		return;
		// 	}
		// 	return Array.prototype.filter.call(arr, function(item, index) {
		// 		return arr.indexOf(item) === index;
		// 	});
		// },
		// beforeDestroy() {
		// 	// 销毁监听事件
		// 	this.$Bus.$off('push', 'history');
		// }
	}
};
</script>

<style lang="less" scoped>
// @import url('~styles/global.less');
@import url('//at.alicdn.com/t/font_1379594_vh7eh105cbo.css');
.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5.2vh;
	// line-height: 0.7rem;
	.guanbi {
		position: absolute;
		right: 13vw;
	}
	.geshou {
		// margin-left: 0.3rem;
	}
	.iconfont {
		font-size: 7vw;
	}
	.search {
		width: 70vw;
		height: 3.2vh;
		border: none;
		border-bottom: 1px solid #aaa;
		outline: none;
		padding-bottom: 4px;
	}
	.floatInfo {
		width: 80vw;
		position: absolute;
		top: 5vh;
		left: 5vw;
		box-shadow: 0 4px 16px #aaa;
		background-color: #fff;
		z-index: 2;
		li {
			height: 3.8vh;
			line-height: 3.8vh;
			color: #888;
			margin-left: 3vw;
			.text {
				margin-left: 8px;
			}
			.iconfont {
				font-size: 5.5vw;
				vertical-align: -0.2vw;
			}
		}
		.blue {
			color: #38f;
		}
		.suggest-list {
			.ellipsis();
		}
	}
	.mask {
		position: fixed;
		top: 5vh;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
		opacity: 0;
	}
}
</style>
