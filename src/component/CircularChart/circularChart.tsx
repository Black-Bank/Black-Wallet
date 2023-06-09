import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {OverlayComponent, Container, ChartContainer} from './circular.style';

export const PieChartComponent = ({data}: any) => {
  return (
    <>
      <Container>
        <ChartContainer>
          <PieChart
            data={data}
            width={100}
            height={100}
            accessor="y"
            hasLegend={false}
            backgroundColor="transparent"
            paddingLeft="15"
            chartConfig={{
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
          />
          <OverlayComponent />
        </ChartContainer>
      </Container>
    </>
  );
};
