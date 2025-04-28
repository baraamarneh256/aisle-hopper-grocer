
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.7384f31b50f94abd9850337fdff09fea',
  appName: 'aisle-hopper-grocer',
  webDir: 'dist',
  server: {
    url: 'https://7384f31b-50f9-4abd-9850-337fdff09fea.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always'
  },
  android: {
    backgroundColor: "#FFFFFF"
  }
};

export default config;
