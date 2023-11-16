import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Principal } from '../../screens/principal';
import { Servicos } from '../../screens/servicos';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto } from "@expo/vector-icons"
import { View } from 'react-native';
import { Atividades } from '../../screens/atividades';


const Tab = createBottomTabNavigator<MyTabsProps>();

export type MyTabsProps = {
    'Página inicial': undefined,
    'Serviços': undefined,
    "Atividades": undefined,
    "Conta": undefined,
}

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{

        headerShown: false,

        tabBarStyle: {
            height: 62,
            borderTopWidth: 2,
            borderTopColor: '#DCDCDC',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#a5a5a5',

        tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: -19,
            color: '#3f3f3f' 
        },

        tabBarIconStyle: {   
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -19
        }
      }}
    >

    <Tab.Screen 
        options={{
            tabBarIcon: (({color})=>(
                <MaterialIcons name="home-filled" size={20} color={color}/>
            ))
            
        }}
        name="Página inicial" 
        component={Principal}
    />

    <Tab.Screen 
        options={{
            tabBarIcon: (({color})=>(
                <View style={{width: 20, height: 20, alignSelf: "center", alignItems: "center", justifyContent: "center"}}>
                    <Fontisto name="nav-icon-grid" size={16} color={color}/>
                </View>
            ))
        }}
        name="Serviços" 
        component={Servicos} 
    />

    <Tab.Screen 
        options={{
            tabBarIcon: (({color})=>(
                <MaterialCommunityIcons name="bookmark" size={20} color={color} />
            ))
        }}
        name="Atividades" 
        component={Atividades} 
    />

    <Tab.Screen 
        options={{
            tabBarIcon: (({color})=>(
                <Ionicons name="person-sharp" size={20} color={color} />
            ))
        }}
        name="Conta" 
        component={Servicos} 
    />

    </Tab.Navigator>
  );
}