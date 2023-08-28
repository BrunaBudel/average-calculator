import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Calculator } from '../screens/Calculator'
import { ClassList } from '../screens/ClassList'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCalculator,
  faFileSignature,
  faList,
} from '@fortawesome/free-solid-svg-icons'
import { Absences } from '../screens/Absences'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CDE41E',
      }}
    >
      <Screen
        name="classList"
        component={ClassList}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faList} size={25} color={color} />
          ),
        }}
      />
      <Screen
        name="calculator"
        component={Calculator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCalculator} size={25} color={color} />
          ),
        }}
      />
      <Screen
        name="absences"
        component={Absences}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faFileSignature} size={25} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
