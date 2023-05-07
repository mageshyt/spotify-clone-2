import { useContext } from "react";
import { SpotifyContext } from "../context/SpotifyContext";
// import { getLyrics, getSong } from "genius-lyrics-api";
// export const getLyrics = async (artist, song_name) => {
//   const { setSongLyrics } = useContext(SpotifyContext);

//   song_name = song_name.replace(/\s/g, "+");
//   artist = artist.replace(/\s/g, "+");

//   const url = `https://api.lyrics.ovh/v1/${artist}/${song_name}`;
//   console.log("url", url);
//   const response = await axios.get(url);
//   console.log("response", response.data);
//   setSongLyrics(response.data.lyrics);
// };

export const useSongLyrics = (artist, song_name) => {
  const { setSongLyrics } = useContext(SpotifyContext);
  const options = {
    apiKey: "ep-mYjpC7Xn1E-2tfJLc5vleGlITlpWxJaah4oOyXQGADjDoUBxQYosx17numfcv",
    title: song_name,
    artist: artist,
    optimizeQuery: true,
  };
  return getLyrics(options).then((lyrics) => console.log(lyrics));
};
