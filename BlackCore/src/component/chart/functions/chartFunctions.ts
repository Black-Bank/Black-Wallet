const year = [
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
];
function daysOnMonth(mes: any, ano: any) {
  var data = new Date(ano, mes, 0);
  return data.getDate();
}

export const RefactorData = (
  actualYear: number,
  actualMonth: number,
  dataSemester: number[],
  dataWeek: number[],
  dataDay: number[],
  actualDay: number,
) => {
  let semester: string[] = [];
  let week: string[] = [];
  let day: string[] = [];
  let dayCount = 0;
  const currentYear: number = Number(String(actualYear).slice(1, 4));

  for (let i = actualMonth - 6; i < actualMonth; i++) {
    if (i < 0) {
      semester.push(year[12 + i]);
    } else {
      semester.push(year[i]);
    }
  }
  for (let k = 0; k < dataWeek?.length; k++) {
    week.unshift(String(actualDay - 7 * k));
  }
  for (let j = actualDay; j > actualDay - dataDay?.length; j--) {
    let dayStatus = actualDay - dayCount;
    if (dayStatus >= 0) {
      day.unshift(String(dayStatus));
    } else {
      day.unshift(
        String(daysOnMonth(actualMonth - 1, currentYear) - dayStatus),
      );
    }

    dayCount++;
  }
  semester.splice(0, 6 - dataSemester?.length);

  return {
    semester: semester,
    dataSemester: dataSemester,
    dataWeek: week,
    dataDay: day,
  };
};
