import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { AppRoutes } from './app.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="appRoutes" component={AppRoutes} />
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
