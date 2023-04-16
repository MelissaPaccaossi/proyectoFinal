import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BuscarGrupo from './src/screens/BuscarGrupo';
import Login from './src/screens/Login';

// <style type="text/css">{`
//   @font-face {
//     font-family: 'MaterialIcons';
//     src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
//   }

//   @font-face {
//     font-family: 'FontAwesome';
//     src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
//   }
// `}</style>


const navigator = createStackNavigator({
  BuscarG: BuscarGrupo,
  Login: Login
  
},{
  initialRouteName: 'BuscarG',
  defaultNavigationOptions: {
    title: 'Agente de Viaje Inteligente',
    headerStyle: { 
      backgroundColor: 'black'
    },
    headerTitleStyle: { 
      color: 'white' , 
      textAlign:'center',

    },
  }  
});

export default createAppContainer(navigator);
 