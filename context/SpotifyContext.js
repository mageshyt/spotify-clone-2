import { useEffect, useState, createContext } from "react";
import spotifyApi from "../lib/spotify";

export const SpotifyContext = createContext({});

export const SpotifyProvider = ({ children }) => {
  const [token, setToken] = useState(
    "BQD3Jdhovs-ckojX1Y4RcJbHP04hLWezDKBkxuC8oUDYMv-hqf75YBPH0CNUgLoC3Uj7VZr-JiEmZIjEtjMccfpWM_0gNf86LQFom5t1btEkgZ8V84FSbFuFSkt2Dhx-1g8FFICLIVFujdeoL3iYtOTmWCJ4XaRBesYQEtIcwZqJJdP5e0d6c4SJL6b5nrF1zMEXE-wSACHcDajo7zhVpHNQ04ag41PPaLNN7g2CUA"
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
