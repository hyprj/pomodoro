const audios = {
  tick: "#tick",
};

export const playAudio = (file: "tick") => {
  const audio = document.querySelector(audios[file]) as HTMLAudioElement;
  audio.play();
};
