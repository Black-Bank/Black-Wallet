import React, {useEffect, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  ButtonTitle,
  Container,
  ContainerChartButton,
  GeneralButtonStyles,
} from '../styles/styles';
import {LineChart} from 'react-native-chart-kit';
import {RefactorData} from './functions/chartFunctions';
import {useGetBalance} from '../hooks/useGetBalance';
import {useMutation} from '@apollo/client';
import {REMOVE_BALANCE} from '../client/queries/queries';
import config from '../../../config';

export function Chart() {
  const date = new Date();
  const {data} = useGetBalance();
  const [RemoveData] = useMutation(REMOVE_BALANCE);
  let DataSemester = data?.getBalance.month;
  let DataWeek = data?.getBalance.week;
  let DataDay = data?.getBalance.day;
  const actualYear = date?.getFullYear();
  const Month = date.getMonth() + 1;
  const day = date.getDate();
  const DATA = RefactorData(actualYear, Month, DataSemester, DataWeek, day);

  useEffect(() => {
    const dataMonthLength = DataSemester?.length;
    const dataWeekLength = DataWeek?.length;
    const dataDayLength = DataDay?.length;
    const semesterLimit = 6;
    const weekLimit = 4;
    const dayLimit = 7;
    if (dataMonthLength > semesterLimit) {
      RemoveData({
        variables: {
          hashId: 'deg-hjags-123-212asdl',
          key: config.KEY_SECRET_MONGODB,
          removeOption: 'month',
        },
      });
    }
    if (dataWeekLength > weekLimit) {
      RemoveData({
        variables: {
          hashId: 'deg-hjags-123-212asdl',
          key: config.KEY_SECRET_MONGODB,
          removeOption: 'week',
        },
      });
    }
    if (dataDayLength > dayLimit) {
      RemoveData({
        variables: {
          hashId: 'deg-hjags-123-212asdl',
          key: config.KEY_SECRET_MONGODB,
          removeOption: 'day',
        },
      });
    }
  }, [RemoveData, DataSemester, DataWeek, DataDay]);

  const obj = {
    labelDay: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
    labelSem: ['sem1', 'sem2', 'sem3', 'sem4'],
    labMensal: DATA.semester,
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
    dataMen: DATA?.dataSemester,
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
      setPeriod(obj.labMensal);
      setPeriodData(obj.dataMen);
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
          <TouchableOpacity onPress={() => ManagePeriod('mensal')}>
            <GeneralButtonStyles>
              <ButtonTitle>mensal</ButtonTitle>
            </GeneralButtonStyles>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ManagePeriod('semanal')}>
            <GeneralButtonStyles>
              <ButtonTitle>semanal</ButtonTitle>
            </GeneralButtonStyles>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ManagePeriod('diario')}>
            <GeneralButtonStyles>
              <ButtonTitle>diario</ButtonTitle>
            </GeneralButtonStyles>
          </TouchableOpacity>
        </ContainerChartButton>
      </Container>
    </>
  );
}
