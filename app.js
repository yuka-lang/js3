// 関数の練習

//戻り値あり関数
function cut(food) {
  const cutFood = food.slice() ;
  return cutFood;
}

const cutCarrot = cut(carrot);
const cutPotato = cut(potato);

// 戻り値なし
function throwAway(food){
  delete food;
}

// 文字数の関数（戻り値あり）
function isTweetable(text){
  return text.length <= 140;
}

console.log(isTweetable("foo"));

//文字数の関数（戻り値なし）
function alertTweetable(text){
  if(isTweetable(text)){
    alert("you can tweet!");
  }
}

alertTweetable("foo");