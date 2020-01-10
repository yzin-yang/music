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
		picUrl: '',
		songUrl: '',
		br: []
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
	// async [SET_PLAYING_SONG]({ commit }, { track, type = 'qq' }) {
	// 	if (type === 'qq') {
	// 		console.log(track);
	// 		// commit(SET_PLAYING_SONG, { track });
	// 	} else {
	// 		commit(SET_PLAYING_SONG, { track });
	// 	}
	// }
};

function getWyInfo(track) {
	const {
		name,
		id,
		ar,
		al: { picUrl },
		h: { br: hbr },
		m: { br: mbr },
		l: { br: lbr }
	} = track;
	const br = [lbr / 1000, mbr / 1000, hbr / 1000];
	return { name, id, ar, picUrl, br };
}
function getQqInfo(track) {
	const {
		songname: name,
		songmid: id,
		singer: ar,
		albummid,
		size128,
		size320,
		sizeape,
		sizeflac
	} = track;
	const br = [];
	if (size128) {
		br.push(128);
	}
	if (size320) {
		br.push(320);
	}
	if (sizeape) {
		br.push('ape');
	}
	if (sizeflac) {
		br.push('flac');
	}
	const picUrl = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg`;
	return { name, id, ar, picUrl, br };
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
	[SET_PLAYING_SONG](state, { track, type }) {
		console.log(track);
		if (type === 'qq') {
			state.playingSong = getQqInfo(track);
			state.playList.set(track.songmid, track);
		} else {
			state.playingSong = getWyInfo(track);
			state.playList.set(track.id, track);
		}
	},
	[SET_PLAYING_LIST](state, { tracks }) {
		state.playingSong = getWyInfo(tracks[0]);
		for (let track of tracks) {
			state.playList.set(track.id, getWyInfo(track));
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
