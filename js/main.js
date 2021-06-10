function getRandomInt(min, max) {
  if (min >= 0 && max >=0){
    if (min >= max ){
      return 0;
    } else {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}

getRandomInt(2,7);

function checkMaxLength(value, max) {
  if (value.length > max) {
    return true;
  } else {
    return false;
  }
}

checkMaxLength('тестовая строка', 4);
