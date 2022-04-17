import { ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { quotationListStyles } from '../../../assets/styles/quotationStyle';
import { Fragment } from 'react';
import QuotationItems from './quotation-items/QuotationItems';
function QuotationList({filterDay, listTransactions}){
    const period = ['7D', '15D', '1M', '3M', '6M'];
    const interval = [7, 15, 30, 90, 180];
    return (
        <Fragment>
            <View style={quotationListStyles.filters}>
                {period.map((item, index) => 
                    <TouchableOpacity key={item} style={quotationListStyles.buttonQuery} 
                    onPress={()=>{filterDay(interval[index])}}>
                        <Text style={quotationListStyles.textButtonQuery}>{item}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <FlatList keyExtractor={listTransactions.date} scrollEnabled={true} 
            data={listTransactions} renderItem={({item}) => {
                return <QuotationItems value={item.value} date={item.date} />
            }} />
        </Fragment>
    );
}

export default QuotationList;