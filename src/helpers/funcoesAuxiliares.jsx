import { v4 as uuid } from 'uuid';

export function serviceNewId() {
  return uuid();
}

export function calcularTotal(arr) {
  var soma = 0;
  for (var i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  if (soma === 0) {
    return '';
  } else return soma.toFixed(2);
}

export function extraiAno(dados) {
  let resultado = dados.substring(0, 4);
  return resultado;
}

export function extraiMes(dados) {
  let resultado = dados.substring(4, 7);
  return resultado;
}

export function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export function getToday() {
  return '2021-06-17';
}

export function generateCalendar(data, todasDespesas) {
  const weeks = [];
  const jsDate = new Date(data + 'T12:00:00');
  const currentMonth = jsDate.getMonth();
  //console.log('currentMonth1');
  //console.log(currentMonth);

  const currentDay = new Date(jsDate.valueOf());
  //console.log('currentDay1');
  //console.log(currentDay);
  currentDay.setDate(1);
  const dayOfWeek = currentDay.getDay();
  currentDay.setDate(1 - dayOfWeek);
  //console.log('currentDay2');
  //console.log(currentDay);
  do {
    const week = [];
    for (let i = 0; i < 7; i++) {
      var monthStr = (currentDay.getMonth() + 1).toString().padStart(2, '0');
      const dayStr = currentDay.getDate().toString().padStart(2, '0');
      const isoDate = `${currentDay.getFullYear()}-${monthStr}-${dayStr}`;
      const isoDate2 = isoDate.substring(0, 7);
      //console.log(isoDate2);
      week.push(
        isoDate,
        todasDespesas.filter(e => e.mes === isoDate2)
      );
      currentDay.setDate(currentDay.getDate() + 1);
    }
    //console.log(week);
    weeks.push(...week);
  } while (currentDay.getMonth() === currentMonth);
  //console.log('currentDay.getMonth()');
  //console.log(currentDay.getMonth());
  //console.log('currentMonth');
  //console.log(currentMonth);
  var monthStr2 = currentDay.getMonth().toString().padStart(2, '0');
  let weeks2 = weeks.filter(mes => {
    //console.log(mes);
    //console.log('monthStr2');
    //console.log(monthStr2);
    monthStr2 = monthStr2 === '00' ? '12' : monthStr2;
    return mes.includes(`-${monthStr2}-`);
  });
  //console.log('currentDay.getMonth()');
  //console.log(currentDay.getMonth());
  //console.log(weeks2);
  return weeks2;
  //return weeks;
}
