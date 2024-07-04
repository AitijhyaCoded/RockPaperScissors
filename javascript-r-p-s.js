let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    };

    updateScoreElement();

/*
if(!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/ 

function playGame(playerMove){
    const compMove=pickCompMove();
    console.log(compMove);
    let result = '';
    
    if(playerMove==='scissors'){
        if(compMove==='rock'){
            result='You lose';
        }
        else if(compMove==='paper'){
            result='You win';
        }
        else if(compMove==='scissors'){
            result='Tie';
        }
    }
    
    else if(playerMove==='paper'){
        if(compMove==='rock'){
        result='You win';
        }
        else if(compMove==='paper'){
            result='Tie';
        }
        else if(compMove==='scissors'){
            result='You lose';
        }
    }

    else if(playerMove==='rock'){
        if(compMove==='rock'){
        result='Tie';
        }
        else if(compMove==='paper'){
            result='You lose';
        }
        else if(compMove==='scissors'){
            result='You win';
        }
    }

    if(result==='You win'){
        score.wins+=1;
    }
    else if(result==='You lose'){
        score.losses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    
    document.querySelector('.js-moves').innerHTML = `You 
<img src="rock-paper-scissors-emojis/${playerMove}-emoji.png" class="move-icon"><img src="rock-paper-scissors-emojis/${compMove}-emoji.png" class="move-icon">
Computer`;

    document.querySelector('.js-result').innerHTML = result;
    
}

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    


function pickCompMove(){
    const randomN = Math.random();
    let compMove = '';
    
    if(randomN>=0 && randomN<1/3){
        compMove='rock';
    }
    else if(randomN>=1/3 && randomN<2/3){
        compMove='paper';
    }
    else if(randomN>=2/3 && randomN<1){
        compMove='scissors';
    }

    return compMove;

}