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
    <Stack.Screen name="GP/(drawer)" options={{ headerShown:false}} />
    <Stack.Screen name="Consumer/(tab)" options={{ headerShown:false}} />
    <Stack.Screen name="Consumer/raiseComplain" options={{ headerShown:false}} />


    <Stack.Screen name = "(Auth)/consumerReg" options={{ headerShown:false}} />
    <Stack.Screen name = "(Auth)/contractorReg" options={{ headerShown:false}} />
    <Stack.Screen name = "(Auth)/consumerLog" options ={{ headerShown:false}} />
    <Stack.Screen name = "(Auth)/contractorLog" options ={{ headerShown:false}} />
    <Stack.Screen name = "(Auth)/dailyLog" options={{ headerShown:false}} />
    </Stack>
    </PaperProvider>
    </ToastProvider>
  );
}
