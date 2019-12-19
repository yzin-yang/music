const fillZero = (source, fill, size) => {
	return (Array(size).join(fill) + source).slice(-size);
};
export const formatTime = time => {
	let minutes = fillZero(Math.floor(time / 60), 0, 2);
	let seconds = fillZero(Math.floor(time % 60), 0, 2);
	return minutes + ':' + seconds;
};
