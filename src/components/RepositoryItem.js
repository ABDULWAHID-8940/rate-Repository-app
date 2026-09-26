import { View, Text, StyleSheet, Image } from 'react-native';
import { themes } from './theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  contentContainer: {
    // flex: 1,
    marginLeft: 15,
    // marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#586069',
    marginBottom: 8,
    fontSize: 14,
  },
  language: {
    color: themes.colors.textSecondary,
    backgroundColor: themes.colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'flex-start', // Shrinks badge width to fit text length
    fontSize: 14,
    fontWeight: 'bold',
  },
  flexRow1: {
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  metricItem: {
    alignItems: 'center', // Centers the number and label vertically together
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  label: {
    color: '#586069',
    fontSize: 13,
  },
});

function RepositoryItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow1}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={styles.avatar}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        <View style={styles.metricItem}>
          <Text style={styles.numbers}>
            {item.stargazersCount >= 1000
              ? `${(item.stargazersCount / 1000).toFixed(1)}k`
              : item.stargazersCount}
          </Text>
          <Text style={styles.label}>Stars</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.numbers}>
            {item.forksCount >= 1000
              ? `${(item.forksCount / 1000).toFixed(1)}k`
              : item.forksCount}
          </Text>
          <Text style={styles.label}>Forks</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.numbers}>
            {item.reviewCount >= 1000
              ? `${(item.reviewCount / 1000).toFixed(1)}k`
              : item.reviewCount}
          </Text>
          <Text style={styles.label}>Reviews</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.numbers}>{item.ratingAverage}</Text>
          <Text style={styles.label}>Rating</Text>
        </View>
      </View>
    </View>
  );
}

export default RepositoryItem;