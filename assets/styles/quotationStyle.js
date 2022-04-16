import { StyleSheet } from 'react-native';
export const quotationListStyles = StyleSheet.create({
    filters: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-evenly'
    },
    buttonQuery: {
        width: 50,
        height: 30,
        backgroundColor: '#f50d41',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonQuery: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    } 
});

export const quotationItemsStyles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000',
        marginLeft: '2.5%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10 
    },
    contextLeft: {
        width: '36%',
        alignItems: 'flex-start'
    },
    contextRight: {
        width: '60%',
        alignItems: 'flex-end'
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 40,
        height: 40,
        marginLeft: 2
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 2,
        color: 'white',
        fontWeight: 'bold'
    },
    price: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});