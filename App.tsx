import { NavigationContainer } from '@react-navigation/native';
import { NavBar } from './src/components/navBar';
import { Principal } from './src/screens/principal';
import { Servicos } from './src/screens/servicos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Principal"
          component={Principal}
          options={{ title: 'Principal', headerShown: false  }}
        />

        <Stack.Screen 
          name="Servicos"
          component={Servicos}
          options={{ title: 'Servicos', headerShown: false  }} 
        />

      </Stack.Navigator>
      <NavBar/>
    </NavigationContainer>
  )
};

export default App;
