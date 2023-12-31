import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import square from './square.png';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    fontSize: 12,
    paddingBottom: 30,
  },
  section: {
    flexDirection: 'row',
    marginLeft: 10,
    flexGrow: 1,
    lineHeight: 1.3,
    marginBottom: 30,
    padding: '15 20 10 30',
  },
  column: {
    width: '50%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#ff6f61',
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 30,
  },
  checkbox: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

function MyShoppingList({
  shoppingList,
  currentWeek,
}: {
  shoppingList: [string | undefined, string | undefined][];
  currentWeek: number;
}) {
  const midPoint = Math.ceil(shoppingList.length / 2);
  const column1Items = shoppingList.slice(0, midPoint);
  const column2Items = shoppingList.slice(midPoint);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          My Shopping List by FoodFlex - Week {currentWeek}
        </Text>
        <View style={styles.section}>
          <View style={styles.column}>
            {column1Items.map((ingredient) => (
              <View
                style={styles.listItem}
                key={`${ingredient[0]} ${ingredient[1]}`}
              >
                <Image style={styles.checkbox} src={square} />
                <Text>
                  {ingredient[0]}: {ingredient[1]}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            {column2Items.map((ingredient) => (
              <View
                style={styles.listItem}
                key={`${ingredient[0]} ${ingredient[1]}`}
              >
                <Image style={styles.checkbox} src={square} />
                <Text>
                  {ingredient[0]}: {ingredient[1]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default MyShoppingList;
