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

export const RefactorMonthData = (actualMonth: number) => {
  let semester: string[] = [];
  let dataSemester: number[] = [20, 30, 40, 50, 60, 70, 80, 90, 100];
  for (let i = actualMonth - 6; i < actualMonth; i++) {
    if (i < 0) {
      semester.push(year[12 + i]);
    } else {
      console.log(i);
      semester.push(year[i]);
    }
  }
  semester.splice(dataSemester.length, 6 - dataSemester.length);
  if (dataSemester.length > 6) {
    dataSemester.splice(0, dataSemester.length - 6);
    semester.splice(0, dataSemester.length - 6);
  }

  return {semester: semester, dataSemester: dataSemester};
};
