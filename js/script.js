function playGame(playerInput){
    clearMessages ();
    const playerMove = getPlayerMove(playerInput);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getcomputerMove(randomNumber);
    const result = displayResult(computerMove, playerMove);

    function getPlayerMove(playerInput){

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
    printMessage('Twój ruch to: ' + playerMove);
    console.log('Wylosowana liczba to: ' + randomNumber);

    function getcomputerMove(randomNumber){

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
    printMessage('Mój ruch to: ' + computerMove);

    console.log('moves:', computerMove, playerMove);

    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

    function displayResult(computerMove, playerMove){
        if( computerMove == 'kamień' && playerMove == 'papier'){
            return'Ty wygrywasz!';
        }
        if( computerMove == 'kamień' && playerMove == 'nożyce'){
            return'Wygram!';
        }
        if( computerMove == 'kamień' && playerMove == 'kamień'){
            return'Remis!';
        }
        if( computerMove == 'nożyce' && playerMove == 'kamień'){
            return'Ty wygrywasz!';
        }
        if( computerMove == 'nożyce' && playerMove == 'papier'){
            return'Wygram!';
        }
        if( computerMove == 'nożyce' && playerMove == 'nożyce'){
            return'Remis!';
        }
        if( computerMove == 'papier' && playerMove == 'nożyce'){
            return'Ty wygrywasz!';
        }
        if( computerMove == 'papier' && playerMove == 'kamień'){
            return'Wygram!';
        }
        if( computerMove == 'papier' && playerMove == 'papier'){
            return'Remis!';
        }
    }
    printMessage('Tym razem: ' + result);

    console.log('Is it work?:' + result);
}

let playRock = document.getElementById('playRock');
playRock.addEventListener('click', function() {playGame(1)});
let playPaper = document.getElementById('playPaper');
playPaper.addEventListener('click', function() {playGame(2)});
let playScissors = document.getElementById('playScissors');
playScissors.addEventListener('click',function() {playGame(3)});
let clearScreenBtn = document.getElementById('clearScreen');
clearScreenBtn.addEventListener('click', function() {clearMessages()});
