import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BuscarGrupo from './src/screens/BuscarGrupo';


const navigator = createStackNavigator({
  BuscarG: BuscarGrupo
  
},{
  initialRouteName: 'BuscarG',
  defaultNavigationOptions: {
    title: 'AVI'
  }  
});

export default createAppContainer(navigator);
 