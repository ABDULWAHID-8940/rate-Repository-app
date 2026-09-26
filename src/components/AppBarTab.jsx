// AppBarTab.jsx
import { Pressable, Text, StyleSheet } from 'react-native';
import { themes } from './theme';
import { Link } from 'react-router-native';
const styles = StyleSheet.create({
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: themes.colors.textSecondary,
      fontWeight: themes.fontWeights.bold,
      fontSize: themes.fontSizes.heading,
  },
});

const AppBarTab = ({ title, to }) => (
  <Link component={Pressable} style={styles.tab} to={to}>
    <Text style={styles.text}>{title}</Text>
  </Link>
);

export default AppBarTab;