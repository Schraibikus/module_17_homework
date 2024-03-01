// const numMonth = +prompt("Введите номер месяца");

export function getMonth(numMonth) {
  let result;
  if (numMonth <= 0 || numMonth > 12) {
    result = "Нет месяца под таким номером";
  } else if (numMonth === 1) {
    result = "Январь";
  } else if (numMonth === 2) {
    result = "Февраль";
  } else if (numMonth === 3) {
    result = "Март";
  } else if (numMonth === 4) {
    result = "Апрель";
  } else if (numMonth === 5) {
    result = "Май";
  } else if (numMonth === 6) {
    result = "Июнь";
  } else if (numMonth === 7) {
    result = "Июль";
  } else if (numMonth === 8) {
    result = "Август";
  } else if (numMonth === 9) {
    result = "Сентябрь";
  } else if (numMonth === 10) {
    result = "Октябрь";
  } else if (numMonth === 11) {
    result = "Ноябрь";
  } else {
    result = "Декабрь";
  }
  return result;
}
