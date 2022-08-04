var articoli = ["ll'", "l", "i", "lla", "lle", "llo", "gli"];
var prefixes = ["de", "a", "ne", "da", "su"];

prep_articolate = [];
for (i in articoli) {
  for (j in prefixes) {
    prep_articolate.push(articoli[i] + prefixes[j]);
  }
}
prep_semplice = ["a", "in", "da", "di", "per", "con", "su", "tra", "fra"];

articles = document.getElementsByTagName("article");
for (i in articles) {
  var article = articles[i];
  for (k in prep_articolate) {
    article.innerHTML.replace(' '+prep+' ',' <input type="text" data-response="'+prep+'" class="question" onchange="checkResponse(this)" /> ');
  }
}

window.checkResponse =function (el) {
    if(el.value.length > 0)
        el.style.backgroundColor=(el.data.response == el.value)?'green':'red';        
}