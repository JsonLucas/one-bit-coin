import { StyleSheet } from 'react-native';
const currentPriceStyles = StyleSheet.create({
    headerPrice: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        marginBottom: 20
    },
    currentPrice: {
        color: '#f50d41',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 20
    },
    textPrice: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default currentPriceStyles;