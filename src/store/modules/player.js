import {
	INIT_AUDIO,
	PAUSE,
	PLAY,
	PLAY_NEXT_SONG,
	PLAY_PREV_SONG,
	SET_AUDIO,
	SET_PLAYING_LIST,
	SET_PLAYING_SONG,
	SET_PLAY_STATE
} from '../mutation-types';

const state = {
	playState: false, // 是否正在播放
	playingSong: {
		name: 'loading...',
		id: -1,
		ar: [],
		picUrl: ''
	},
	audio: {},
	playList: new Map(), // 用来展示播放列表项
	songIndex: -1 // 正在播放的这一首歌曲索引
};

const getters = {
	artists(state) {
		let result = [];
		for (let ar = state.playingSong.ar, i = ar.length; i--; ) {
			result.push(ar[i].name);
		}
		return result.join(' / ');
	}
};

const actions = {
	[INIT_AUDIO]({ commit }, { audio }) {
		commit(SET_AUDIO, { audio });
		audio.addEventListener('canplay', () => {
			commit(PLAY);
		});
	}
};

function getTrackInfo(track) {
	const {
		name,
		id,
		ar,
		al: { picUrl }
	} = track;
	return { name, id, ar, picUrl };
}
const mutations = {
	[PLAY](state) {
		state.audio.play();
		state.playState = true;
	},
	[PAUSE](state) {
		state.audio.pause();
		state.playState = false;
	},
	[SET_AUDIO](state, { audio }) {
		state.audio = audio;
	},
	/**
	 * 设置播放状态
	 * @param {*} flag 播放状态
	 */
	[SET_PLAY_STATE](state, { flag }) {
		state.playState = flag;
	},
	[SET_PLAYING_SONG](state, { track }) {
		state.playingSong = getTrackInfo(track);
		state.playList.set(track.id, track);
	},
	[SET_PLAYING_LIST](state, { tracks }) {
		state.playingSong = getTrackInfo(tracks[0]);
		for (let track of tracks) {
			state.playList.set(track.id, getTrackInfo(track));
		}
	},
	[PLAY_PREV_SONG](state) {
		state.songIndex =
			(state.songIndex - 1 + state.playList.size) % state.playList.size;
		state.playingSong = [...state.playList][state.songIndex][1];
	},
	[PLAY_NEXT_SONG](state) {
		state.songIndex = (state.songIndex + 1) % state.playList.size;
		state.playingSong = [...state.playList][state.songIndex][1];
	}
	// [SET_AUDIO_INDEX](state, index) {
	// 	state.audioIngIndex = index;
	// },
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
