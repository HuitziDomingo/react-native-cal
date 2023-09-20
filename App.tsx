import { StatusBar, SafeAreaView } from "react-native"
import CalculadoraScreen from "./src/screens/CalculadoraScreen"
import { styles } from "./src/theme/appTheme"

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='#000'
        barStyle='light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}
