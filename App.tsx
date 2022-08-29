import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { basic_theme } from "./theme";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Comment from "./pages/Comment";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import WordExtract from "./pages/WordExtract";
import WordInfo from "./pages/WordInfo";
import WordRequest from "./pages/WordRequest";
import Search from "./pages/Search";
import Toast, { BaseToast } from "react-native-toast-message";

const toastConfig = {
  //어떤 type이 들어올지 몰라 type을 any로 설정했음
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: basic_theme.fgColor }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
      }}
    />
  ),
  error: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#FF5E5E" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default function App() {
  const [fontLoad, setFontLoad] = useState(false); // 폰트 불러오기
  const Stack = createStackNavigator();

  const { height, width } = useWindowDimensions();

  // font 불러오기
  useEffect(() => {
    const Load = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "notosanskr-black": require("./assets/fonts/NotoSansKR-Black.otf"),
          "notosanskr-bold": require("./assets/fonts/NotoSansKR-Bold.otf"),
          "notosanskr-light": require("./assets/fonts/NotoSansKR-Light.otf"),
          "notosanskr-medium": require("./assets/fonts/NotoSansKR-Medium.otf"),
          "notosanskr-regular": require("./assets/fonts/NotoSansKR-Regular.otf"),
          "notosanskr-thin": require("./assets/fonts/NotoSansKR-Thin.otf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoad(true);
      }
    };
    Load();
  }, []);

  const onFontLoadView = useCallback(async () => {
    if (fontLoad) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoad]);

  if (!fontLoad) {
    return null;
  }

  // font Loading 여부에 따라 return
  return (
    <>
      <NavigationContainer onReady={onFontLoadView}>
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
          {/* BottomTAB 없는 Screen */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="WordInfo" component={WordInfo} />
          <Stack.Screen name="Comment" component={Comment} />
          <Stack.Screen name="WordRequest" component={WordRequest} />
          <Stack.Screen name="Search" component={Search} />
          {/* BottomTAB 있는 Screen */}
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Community" component={Community} />
          <Stack.Screen name="WordExtract" component={WordExtract} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: basic_theme.bgColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    fontFamily: "bold",
    fontWeight: "400",
    color: "black",
  },
  logo: {
    width: 100,
    height: 100,
  },
  appLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
