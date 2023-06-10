/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  ButtonChartTitle,
  Container,
  ContainerChartButton,
  GeneralButtonStyles,
} from '../styles/styles';
import {LineChart} from 'react-native-chart-kit';
import {RefactorData} from './functions/chartFunctions';

export function Chart({data}: any) {
  const date = new Date();
  let DataSemester = data?.getBalance.month;
  let DataWeek = data?.getBalance.week;
  let DataDay = data?.getBalance.day;
  const actualYear = date?.getFullYear();
  const Month = date.getMonth() + 1;
  const day = date.getDate();
  const DATA = RefactorData(
    actualYear,
    Month,
    DataSemester,
    DataWeek,
    DataDay,
    day,
  );

  const obj = {
    labelDay: DATA.dataDay,
    labelSem: DATA.dataWeek,
    labMensal: DATA.semester,
    dataSem: DataWeek,
    dataMen: DATA?.dataSemester,
  };

  const [period, setPeriod] = useState<string[]>(obj.labelDay);
  const [periodData, setPeriodData] = useState<any>(DataDay);

  const ManagePeriod = (periode: string) => {
    if (periode === 'diario') {
      setPeriod(obj.labelDay);
      setPeriodData(DataDay);
    } else if (periode === 'semanal') {
      setPeriod(obj.labelSem);
      setPeriodData(DataWeek);
    } else if (periode === 'mensal') {
      setPeriod(obj.labMensal);
      setPeriodData(DATA?.dataSemester);
    }
  };

  useEffect(() => {
    ManagePeriod('diario');
  }, []);

  const padding = 100;
  const defaultColor = '#f3ecec';
  return (
    <>
      <Container>
        <LineChart
          data={{
            labels: period,
            datasets: [
              {
                data: periodData ? periodData : [0],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={Dimensions.get('window').width - padding}
          yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: defaultColor,
            backgroundGradientFrom: defaultColor,
            backgroundGradientTo: defaultColor,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
          <TouchableOpacity onPress={() => ManagePeriod('mensal')}>
            <GeneralButtonStyles>
              <ButtonChartTitle>mensal</ButtonChartTitle>
            </GeneralButtonStyles>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ManagePeriod('semanal')}>
            <GeneralButtonStyles>
              <ButtonChartTitle>semanal</ButtonChartTitle>
            </GeneralButtonStyles>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ManagePeriod('diario')}>
            <GeneralButtonStyles>
              <ButtonChartTitle>diario</ButtonChartTitle>
            </GeneralButtonStyles>
          </TouchableOpacity>
        </ContainerChartButton>
      </Container>
    </>
  );
}
