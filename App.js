import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentPrice from './src/components/current-price/CurrentPrice';
import HistoryGraphic from './src/components/history-price/HistoryGraphic';
import QuotationList from './src/components/quotation-list/QuotationList';

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [currentPrice, setCurrentPrice] = useState();

  function updateDay(num) {
    setDays(num);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((response) => {
      setCoinsList(response);
    }).catch((error) => {
      console.log(error.message);
    });
    getPriceCoinsGraphic(url(days)).then((response) => {
      setCoinsGraphicList(response);
    }).catch((error) => {
      console.log(error.message);
    });
    setCurrentPrice(coinsGraphicList[coinsGraphicList.length - 1]);
    if (updateData) {
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f50d41' barStyle='light-content' />
      <CurrentPrice currentCotation={currentPrice} />
      <HistoryGraphic infoDataGraphic={coinsGraphicList} />
      <QuotationList filterDay={updateDay} listTransactions={coinsList} />
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

function formatDate(num) {
  if (num <= 9) {
    return `0${num}`;
  }
  return num;
}

function url(days) {
  const date = new Date();
  const end_date = `${date.getFullYear()}-${formatDate((date.getMonth()) + 1)}-${formatDate(date.getDate())}`;
  date.setDate(date.getDate() - days);
  const start_date = `${date.getFullYear()}-${formatDate((date.getMonth()) + 1)}-${formatDate(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url) {
  try {
    const request = await axios.get(url);
    const dateValue = request.data.bpi;
    const queryCoinList = Object.keys(dateValue).map((item) => {
      return {
        date: item.split('-').reverse().join('/'),
        value: dateValue[item]
      };
    });
    const formatedListCoin = queryCoinList.reverse();
    return formatedListCoin;
  } catch (e) {
    console.log(e.message);
  }
  return false;
}

async function getPriceCoinsGraphic(url) {
  try {
    const request = await axios.get(url);
    const dateValue = request.data.bpi;
    const queryGraphicCoinList = Object.keys(dateValue).map((item) => {
      return dateValue[item]
    });
    return queryGraphicCoinList;
  } catch (e) {
    console.log(e.message);
  }
  return false;
}
