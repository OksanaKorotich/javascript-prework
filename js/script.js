function playGame(playerInput){
    clearMessages ();
    const PlayerMove = getMoveName(playerInput);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const ComputerMove = getMoveName(randomNumber);
    const Result = displayResult(ComputerMove, PlayerMove);

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
    printMessage('Twój ruch to: ' + PlayerMove); 
    console.log('Wylosowana liczba to: ' + randomNumber);
       
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
    printMessage('Mój ruch to: ' + ComputerMove);

    console.log('moves:', ComputerMove, PlayerMove);

    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
    
    function displayResult(ComputerMove, PlayerMove){
        if( ComputerMove == 'kamień' && PlayerMove == 'papier'){
            return'Ty wygrywasz!';
        } 
        if( ComputerMove == 'kamień' && PlayerMove == 'nożyce'){
            return'Wygram!';
        }
        if( ComputerMove == 'kamień' && PlayerMove == 'kamień'){
            return'Remis!';
        }
        if( ComputerMove == 'nożyce' && PlayerMove == 'kamień'){
            return'Ty wygrywasz!';
        }
        if( ComputerMove == 'nożyce' && PlayerMove == 'papier'){
            return'Wygram!';
        }
        if( ComputerMove == 'nożyce' && PlayerMove == 'nożyce'){
            return'Remis!';
        }
        if( ComputerMove == 'papier' && PlayerMove == 'nożyce'){
            return'Ty wygrywasz!';
        }
        if( ComputerMove == 'papier' && PlayerMove == 'kamień'){
            return'Wygram!';
        }
        if( ComputerMove == 'papier' && PlayerMove == 'papier'){
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
