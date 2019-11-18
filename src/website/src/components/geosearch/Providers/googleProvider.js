import { GoogleProvider as LeafletGoogleProvider } from 'leaflet-geosearch';

const GoogleProvider = (key) => (
    new LeafletGoogleProvider({
      params: {
        key
      },
    })
  );
export default GoogleProvider;

