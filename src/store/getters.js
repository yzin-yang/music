const getters = {
	AUDIO_ING_SONG: state => {
		// 返回当前播放歌曲对象的信息
		return state.audioList[state.audioIngIndex] || {};
	}
};

export default getters;
