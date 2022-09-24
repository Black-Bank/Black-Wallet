import React from 'react';
import {Button, Dimensions, TouchableOpacity} from 'react-native';
import {Container, ContainerChartButton, Title} from '../styles/styles';
import {LineChart} from 'react-native-chart-kit';
import {StyleSheet} from 'react-native';

export function Chart() {
  const padding = 100;
  const defaultColor = '#121212';
  return (
    <>
      <Container>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={Dimensions.get('window').width - padding}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: defaultColor,
            backgroundGradientFrom: defaultColor,
            backgroundGradientTo: defaultColor,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(127, 255, 212, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '1',
              strokeWidth: '2',
              stroke: '#26ff80',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <ContainerChartButton>
          <TouchableOpacity
            onPress={() => console.log('mensal')}
            style={styles.Button}>
            <Title style={styles.appButtonText}>mensal</Title>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Title style={styles.appButtonText}>semanal</Title>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Title style={styles.appButtonText}>diario</Title>
          </TouchableOpacity>
        </ContainerChartButton>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    height: 35,
    width: 80,
    justifyContent: 'center',
    backgroundColor: '#3c0f69',
    borderRadius: 10,
    color: 'polevioletred',
    margin: 1,
  },
  appButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
