import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Fragment } from 'react';
import { quotationListStyles } from '../../../assets/styles/quotationStyle';
function QuotationList(){
    const period = ['7D', '15D', '1M', '3M', '6M'];
    return (
        <Fragment>
            <View style={quotationListStyles.filters}>
                {period.map((item) => 
                    <TouchableOpacity key={item} style={quotationListStyles.buttonQuery} onPress={()=>{}}>
                        <Text style={quotationListStyles.textButtonQuery}>{item}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <ScrollView></ScrollView>
        </Fragment>
    );
}

export default QuotationList;