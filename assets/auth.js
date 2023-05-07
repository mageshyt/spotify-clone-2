import { authorize, refresh } from "react-native-app-auth";
import { CakeIcon } from "react-native-heroicons/solid";

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: process.env.APP_CLINT_ID,
      clientSecret: process.env.APP_CLINT_SECRET,
      redirectUri: "exp://127.0.0.1:19000/",
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      serviceConfiguration: {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      },
    };
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      alert(JSON.stringify(result));
      return result;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }
}

const authHandler = new AuthenticationHandler();

export default authHandler;
