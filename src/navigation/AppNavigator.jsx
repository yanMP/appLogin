import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen.jsx";
import HomeScreen from "../screens/HomeScreen.jsx";
import registerScreen from "../screens/registerScreen.jsx";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="HomeScreen"
                 component={HomeScreen}
                 options={{title: " pagina Inicial",}} />


                <Stack.Screen name="LoginScreen" 
                component={LoginScreen}
                options={{ title: "Login",}}/>

                <Stack.Screen name="registerScreen" 
                component={registerScreen}
                options={{ title: "Registro",}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
