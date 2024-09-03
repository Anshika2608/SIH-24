import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
 import { ToastProvider } from "react-native-toast-notifications";
 import { ThemeProvider } from "react-native-paper";

export default function RootLayout() {
  
  return (
    <ToastProvider>
    <PaperProvider>
    <Stack>
    <Stack.Screen name="index" options={{ headerShown:false}}/>
    <Stack.Screen name = "(Auth)/login" options={{ headerShown:false}} />
    <Stack.Screen name = "(Auth)/loginsform" options={{ headerShown:false}} />
    </Stack>
    </PaperProvider>
    </ToastProvider>
  );
}
