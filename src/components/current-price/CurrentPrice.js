import { View, Text } from 'react-native';
import currentPriceStyles from '../../../assets/styles/currentPriceStyle';
function CurrentPrice(){
    return (
        <View style={currentPriceStyles.headerPrice}>
            <Text style={currentPriceStyles.currentPrice}>R$ preço aki</Text>
            <Text style={currentPriceStyles.textPrice}>ultima cotação</Text>
        </View>
    );
}

export default CurrentPrice;