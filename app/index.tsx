import { useSafeAreaInsets } from "react-native-safe-area-context"
import {SafeAreaView, ScrollView, Text} from "react-native"
import { Redirect } from "expo-router"

const App = () => {
    const insets = useSafeAreaInsets()
    return (
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingTop: insets.top
          }}
        >
          <Redirect href={"/signup"} />
        </ScrollView>
      </SafeAreaView>
    );
}
export default App;