import {IChartData} from './types';

export default class ChartController {
  private static instance: ChartController;
  public data: IChartData = {
    getBalance: {
      day: [],
      month: [],
      week: [],
      updateDate: '',
    },
  };

  private constructor() {}

  public static getInstance(): ChartController {
    if (!ChartController.instance) {
      ChartController.instance = new ChartController();
    }

    return ChartController.instance;
  }

  public setData(data: IChartData) {
    this.data = data;
  }

  public getData(): IChartData {
    return this.data;
  }
}
