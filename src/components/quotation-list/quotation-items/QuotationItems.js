import { View, Text, Image } from 'react-native';
import { quotationItemsStyles } from '../../../../assets/styles/quotationStyle'; 
function QuotationItems({value, date}){
    return (
        <View style={quotationItemsStyles.mainContent}>
            <View style={quotationItemsStyles.contextLeft}>
                <View style={quotationItemsStyles.boxLogo}>
                    <Image style={quotationItemsStyles.logo} 
                    source={require('../../../../assets/icon.png')} />
                    <Text style={quotationItemsStyles.dayCotation}>{date}</Text>
                </View>
            </View>
            <View style={quotationItemsStyles.contextRight}>
                <Text style={quotationItemsStyles.price}>$ {value}</Text>
            </View>
        </View>
    );
}

export default QuotationItems;