import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ClassList } from '../screens/ClassList'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="classList" component={ClassList} />
    </Navigator>
  )
}
