

window.onload = function() {
  
  cardList= document.querySelectorAll(".card");
  
  cardCount = cardList.length;
  
  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      this.classList.toggle("clicked");
    }
  }
}