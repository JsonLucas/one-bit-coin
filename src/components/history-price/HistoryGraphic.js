import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
function HistoryGraphic({infoDataGraphic}){
    return (
        <View>
            <LineChart data={{datasets: [{data: infoDataGraphic}]}} width={Dimensions.get('window').width}
            height={220} yAxisLabel='$ ' yAxisSuffix='' withVerticalLines={false} yLabelsOffset={1}
            withVerticalLabels={false} chartConfig={{
                backgroundColor: '#000',
                backgroundGradientFrom: '#232323',
                backgroundGradientTo: '#3f3f3f',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                    r: '2',
                    strokeWidth: '2',
                    stroke: '#f50d41'
                }
            }} bezier />
        </View>
    );
}

export default HistoryGraphic;