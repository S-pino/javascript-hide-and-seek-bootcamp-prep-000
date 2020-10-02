function getFirstSelector(selector) {
return querySelector(selector);
}

function nestedTarget() {
  return document.getElementByID(nestedTarget);
}

function increaseRankBy(n) {
 const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
 }
}