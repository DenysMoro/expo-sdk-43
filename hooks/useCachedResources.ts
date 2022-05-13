import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

const spaceMono = require('../assets/fonts/SpaceMono-Regular.ttf')
const montserratLight = require('../assets/fonts/Montserrat/Montserrat-Light.ttf')
const montserratRegular = require('../assets/fonts/Montserrat/Montserrat-Regular.ttf')
const montserratMedium = require('../assets/fonts/Montserrat/Montserrat-Medium.ttf')
const montserratSemiBold = require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf')
const montserratBold = require('../assets/fonts/Montserrat/Montserrat-Bold.ttf')

export const fontsMap = {
  ...FontAwesome.font,
  'space-mono': spaceMono,
  'montserrat-light': montserratLight,
  'montserrat-regular': montserratRegular,
  'montserrat-medium': montserratMedium,
  'montserrat-semiBold': montserratSemiBold,
  'montserrat-bold': montserratBold,
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync(fontsMap);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
