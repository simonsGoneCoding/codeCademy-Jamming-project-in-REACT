let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    //check for access token match
    const accessTokenMatch = window.location.href(/access_token=([^&]*)/);
    const expiresInMatch = window.location.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
    }
  },
};

export default Spotify;
