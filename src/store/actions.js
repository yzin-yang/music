import {
	SET_AUDIO_INDEX,
	SET_AUDIO_LIST,
	SET_FULL_SCREEN,
	SET_PLAY_SATE
} from './mutation-types';

export default {
	selectPlay({ commit, state }, { list, index }) {
		console.log(list);
		commit(SET_AUDIO_LIST, list);
		commit(SET_AUDIO_INDEX, index);
		commit(SET_PLAY_SATE, true);
		commit(SET_FULL_SCREEN, true);
	}
};
