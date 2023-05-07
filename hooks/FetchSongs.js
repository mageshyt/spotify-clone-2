import { useEffect, useState } from "react";
import spotifyApi from "../lib/spotify";

export const useSongs = (id) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = spotifyApi
        .getPlaylistTracks(id, {
          limit: 50,
          offset: 0,
        })
        .then((response) => {
          setSongs(response.items);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetch();
  }, [id]);
  return songs;
};
