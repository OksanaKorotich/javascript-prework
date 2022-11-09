let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    }
    if(randomNumber == 2){
        return 'papier';
    } 
    if(randomNumber == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
  }
  printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

function getMoveName(playerInput){
    if(playerInput == 1){
      return 'kamień';
    }
    if(playerInput == 2){
        return 'papier';
    } 
    if(playerInput == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + playerInput + '.');
    return 'nieznany ruch';
  }
printMessage('Twój ruch to: ' + argPlayerMove);

console.log('moves:', argComputerMove, argPlayerMove);

printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

let Result = displayResult(argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return'Ty wygrywasz!';
    } 
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return'Wygram!';
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return'Remis!';
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return'Ty wygrywasz!';
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return'Wygram!';
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return'Remis!';
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return'Ty wygrywasz!';
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return'Wygram!';
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return'Remis!';
    }
}
printMessage('Tym razem: ' + Result);

console.log('Is it work?:' + Result);