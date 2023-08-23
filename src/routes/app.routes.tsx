import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ClassList } from '../screens/ClassList'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="classList" component={ClassList} />
    </Navigator>
  )
}
