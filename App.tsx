import { useFonts } from "expo-font";

import { fontAssets } from "./constants/fonts";
import { AppNavigator } from "./navigation/AppNavigator";

const App = () => {

  const [fontsLoaded] = useFonts(fontAssets);

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator />;
};

export { App };