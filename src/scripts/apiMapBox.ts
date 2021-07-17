import config from '../../config.js';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchLocalMapBox = (local: string) => fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${config.ACCESS_TOKEN_MAP_BOX}`,
)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => ({
    type: 'error',
    error,
  }));
