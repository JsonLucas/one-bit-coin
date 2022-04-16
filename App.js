import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import CurrentPrice from './src/components/current-price/CurrentPrice';
import HistoryGraphic from './src/components/history-price/HistoryGraphic';
import QuotationList from './src/components/quotation-list/QuotationList';
import QuotationItems from './src/components/quotation-list/quotation-items/QuotationItems';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f50d41' barStyle='light-content'/>
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
