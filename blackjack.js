function getCardImageUrl(card) {
  var cardValue = card.point;
  if (cardValue === 1) {
    cardValue = "ace";
  } else if (cardValue === 11) {
    cardValue = "jack";
  } else if (cardValue === 12) {
    cardValue = "queen";
  } else if (cardValue === 13) {
    cardValue = "king";
  }
  return "images/" + cardValue + "_of_" + card.suit + ".png";
}

function calculatePoints(card) {
  var aceHasBeenDealt = false;
  var totalPointValue = 0;
  for (var i = 0; i < card.length; i++) {
    var currentCardPointValue = card[i].point;
    if (currentCardPointValue > 10) {
      currentCardPointValue = 10;
    }
    else if (currentCardPointValue === 1) {
      currentCardPointValue = 11;
      aceHasBeenDealt = true;
    }
    totalPointValue += currentCardPointValue;
    if (totalPointValue > 21 && aceHasBeenDealt === true) {
      totalPointValue -= 10;
    }
  }
  return totalPointValue;
}

function newDeck () {
  var deck = ;
  return ;
}
