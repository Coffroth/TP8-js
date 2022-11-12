/* JavaScript code for memory card game - TP8-JS */
window.onload = function() {
  
  cardList = document.querySelectorAll(".card"); //collection of cards
  
  cardCount = cardList.length; // how many cards are on table
  
  for (c = 0; c < cardCount; c++) {
    CardList[c].onclick = function(){
      this.classList.toggle("clicked");
    }
  }
  
}