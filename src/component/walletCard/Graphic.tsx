import React from 'react';
import {Dimensions} from 'react-native';
import {GraphicContainer, LineChartStyled} from './walletCardItem.style';

interface IGraphic {
  dataSet: number[];
}

export function Graphic({dataSet}: IGraphic) {
  const chartWidth = Dimensions.get('window').width;

  const dataTeste = {
    // labels: ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
    datasets: [
      {
        data: dataSet,
      },
    ],
  };

  return (
    <GraphicContainer>
      <LineChartStyled
        data={dataTeste}
        width={chartWidth + 10}
        height={100}
        withDots={false} // Remover os pontos da linha do gráfico
        withInnerLines={false} // Remover as linhas internas do gráfico
        withOuterLines={false} // Remover as linhas externas do gráfico
        withShadow={false} // Remover a sombra das linha do gráfico
        withVerticalLabels={false}
        withHorizontalLabels={false}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: () => 'rgba(255, 0, 0, 0.5)', // cor do gráfico
          labelColor: () => '#000000', //cor dos números do gráfico
          strokeWidth: 2, // Espessura da linha
        }}
        bezier
      />
    </GraphicContainer>
  );
}
