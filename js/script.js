function playGame(playerInput){
    clearMessages ();
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
}
  
let playRock = document.getElementById('playRock');
playRock.addEventListener('click', function() {playGame(1)});
let playPaper = document.getElementById('playPaper');
playPaper.addEventListener('click', function() {playGame(2)});
let playScissors = document.getElementById('playScissors');
playScissors.addEventListener('click',function() {playGame(3)});
let clearScreenBtn = document.getElementById('clearScreen');
clearScreenBtn.addEventListener('click', function() {clearMessages()}); 
