function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet <= 2000) {
    return 'That will be twenty bucks.'
  } else if (feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityMessage = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipMessage;

  switch (tip) {
    case 'generous': 
      tipMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      tipMessage = 'Thank you.';
      break;
    default:
      tipMessage = 'Bye.'
  }
  return tipMessage;
}