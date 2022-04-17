import { View, Text } from 'react-native';
import currentPriceStyles from '../../../assets/styles/currentPriceStyle';
function CurrentPrice({currentCotation}){
    return (
        <View style={currentPriceStyles.headerPrice}>
            <Text style={currentPriceStyles.currentPrice}>$ {currentCotation}</Text>
            <Text style={currentPriceStyles.textPrice}>Última cotação</Text>
        </View>
    );
}

export default CurrentPrice;