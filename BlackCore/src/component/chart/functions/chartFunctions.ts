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

export const RefactorMonthData = (
  actualMonth: number,
  dataSemester: number[],
) => {
  let semester: string[] = [];
  for (let i = actualMonth - 6; i < actualMonth; i++) {
    if (i < 0) {
      semester.push(year[12 + i]);
    } else {
      semester.push(year[i]);
    }
  }
  semester.splice(0, 6 - dataSemester?.length);

  return {semester: semester, dataSemester: dataSemester};
};
