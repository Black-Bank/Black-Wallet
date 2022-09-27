import React, {useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {ButtonTitle, Container, ContainerChartButton} from '../styles/styles';
import {LineChart} from 'react-native-chart-kit';
import {StyleSheet} from 'react-native';

export function Chart() {
  const obj = {
    labelDay: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
    labelSem: ['sem1', 'sem2', 'sem3', 'sem4'],
    labMensal: [
      'Jan',
      'Feb',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ],
    dataDay: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    dataSem: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    dataMen: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  };
  const [period, setPeriod] = useState<string[]>(obj.labelDay);
  const [periodData, setPeriodData] = useState<number[]>(obj.dataDay);

  const ManagePeriod = (periode: string) => {
    if (periode === 'diario') {
      setPeriod(obj.labelDay);
      setPeriodData(obj.dataDay);
    } else if (periode === 'semanal') {
      setPeriod(obj.labelSem);
      setPeriodData(obj.dataSem);
    } else if (periode === 'mensal') {
    }
  };

  const padding = 100;
  const defaultColor = '#121212';
  return (
    <>
      <Container>
        <LineChart
          data={{
            labels: period,
            datasets: [
              {
                data: periodData,
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
            color: (opacity = 1) => `rgba(153, 102, 204, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
              strokeWidth: '2',
              stroke: '#7226ff',
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
            <ButtonTitle>mensal</ButtonTitle>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ManagePeriod('semanal')}
            style={styles.Button}>
            <ButtonTitle>semanal</ButtonTitle>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ManagePeriod('diario')}
            style={styles.Button}>
            <ButtonTitle>diario</ButtonTitle>
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
});
