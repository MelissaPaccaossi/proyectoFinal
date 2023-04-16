import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BuscarGrupo from './src/screens/BuscarGrupo';

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
  BuscarG: BuscarGrupo
  
},{
  initialRouteName: 'BuscarG',
  defaultNavigationOptions: {
    title: 'AVI'
  }  
});

export default createAppContainer(navigator);
 