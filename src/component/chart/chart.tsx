/* eslint-disable react-hooks/exhaustive-deps */
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
import {INSERT_BALANCE} from '../client/queries/queries';
import config from '../../../config';

export function Chart({TotalBalance}: {TotalBalance: number}) {
  const date = new Date();
  const {data, refetch} = useGetBalance();
  let DataSemester = data?.getBalance.month;
  let DataWeek = data?.getBalance.week;
  let DataDay = data?.getBalance.day;
  const actualYear = date?.getFullYear();
  const Month = date.getMonth() + 1;
  const day = date.getDate();
  const todayDate = `${day}/${Month}/${actualYear}`;
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
  const [profit, setProfit] = useState<boolean>(true);
  const [insertBalance] = useMutation(INSERT_BALANCE);
  const refetchTime = 3000;
  const CheckProfit = (periode: string) => {
    if (periode === 'diario') {
      const balance = DataDay[DataDay.length - 1] - DataDay[DataDay.length - 2];
      setProfit(Boolean(balance > 0));
    } else if (periode === 'semanal') {
      const balance =
        DataWeek[DataWeek.length - 1] - DataWeek[DataWeek.length - 2];
      setProfit(Boolean(balance > 0));
    } else if (periode === 'mensal') {
      const balance =
        DataSemester[DataSemester.length - 1] -
        DataSemester[DataSemester.length - 2];
      setProfit(Boolean(balance > 0));
    }
  };

  const ManagePeriod = (periode: string) => {
    CheckProfit(periode);
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
  const isChartUpdate = Boolean(
    data && data?.getBalance.updateDate !== todayDate && TotalBalance >= 0,
  );

  useEffect(() => {
    if (isChartUpdate) {
      insertBalance({
        variables: {
          hashId: 'deg-hjags-123-212asdl',
          newBalance: TotalBalance,
          key: config.KEY_SECRET_MONGODB,
        },
      });
      setTimeout(refetch, refetchTime);
    }
  }, [data, TotalBalance]);

  useEffect(() => {
    if (data) {
      ManagePeriod('diario');
    }
  }, [data]);

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
            color: (opacity = 1) =>
              profit
                ? `rgba(127, 255, 0, ${opacity})`
                : `rgba(255, 20, 60, ${opacity})`,
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
