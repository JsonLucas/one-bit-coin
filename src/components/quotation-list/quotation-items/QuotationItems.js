import { View, Text, Image } from 'react-native';
import { quotationItemsStyles } from '../../../../assets/styles/quotationStyle'; 
function QuotationItems(){
    return (
        <View style={quotationItemsStyles.mainContent}>
            <View style={quotationItemsStyles.contextLeft}>
                <View style={quotationItemsStyles.boxLogo}>
                    <Image style={quotationItemsStyles.logo} 
                    source={require('../../../../assets/scorpion.jpg')} />
                    <Text style={quotationItemsStyles.dayCotation}>02/09/2022</Text>
                </View>
            </View>
            <View style={quotationItemsStyles.contextRight}>
                <Text style={quotationItemsStyles.price}>R$ outro valor</Text>
            </View>
        </View>
    );
}

export default QuotationItems;