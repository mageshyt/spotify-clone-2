import { useEffect, useState, createContext } from "react";
import spotifyApi from "../lib/spotify";

export const SpotifyContext = createContext({});

export const SpotifyProvider = ({ children }) => {
  const [token, setToken] = useState(
    "BQA9KRfzOu8MUD2Gy27dCU-1AN4oLjQI8yFfQCwAsJ3zPD7fhGXGRsqLwjUQTLnwZuq6MGMss0Oaadrext5O1WD4zUUxJ6b2h5ApjNGw19rzTPGafpryltajM8MiXwSkEVb18ZR38kulGIYv58c1MVC4us3xuYpHC_W9aKI-KJz3wJsje5Rzg99YrLbSPcozz2vi6WXHZWAUjI8UMexDsHBmU2S09skbtf3BM9zEwA"
  );
  const [playList, setPlaylist] = useState(null);
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState(null);
  const [FeaturedPlaylists, setFeaturedPlaylists] = useState(null);
  const [device, setDevice] = useState(null);
  const [SongLyrics, setSongLyrics] = useState(null);
  useEffect(() => {
    if (token) {
      if (spotifyApi.getAccessToken()) {
        // ! get user data
        spotifyApi?.getMe().then((data) => {
          setUser(data);
        });
        //! get user playList
        spotifyApi.getUserPlaylists().then((data) => {
          setPlaylist(data.items);
        });
        //! get category
        spotifyApi.getCategories().then((data) => {
          setCategory(data);
        });
        //! get category playlists
        spotifyApi.getFeaturedPlaylists().then((data) => {
          setFeaturedPlaylists(data);
        });
        //! get device
        spotifyApi.getMyDevices().then((data) => {
          setDevice(data);
        });
      }
    }
  }, [token]);

  value = {
    token,
    setToken,
    playList,
    category,
    user,
    FeaturedPlaylists,
    device,
    setSongLyrics,
    SongLyrics,
  };

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  );
};
