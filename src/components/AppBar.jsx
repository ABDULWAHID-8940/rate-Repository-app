import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { themes } from './theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: themes.colors.backgroundSecondary,
    flexDirection: 'row',
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign In" to="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;