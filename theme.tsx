import * as Font from "expo-font";

export const basic_theme = {
  bgColor: "#ffffff",
};

export const getFonts = () => {
  return Font.loadAsync({
    black: require("./assets/fonts/NotoSansKR-Black.otf"),
    bold: require("./assets/fonts/NotoSansKR-Bold.otf"),
    light: require("./assets/fonts/NotoSansKR-Light.otf"),
    medium: require("./assets/fonts/NotoSansKR-Medium.otf"),
    regular: require("./assets/fonts/NotoSansKR-Regular.otf"),
    thin: require("./assets/fonts/NotoSansKR-Thin.otf"),
  });
};
