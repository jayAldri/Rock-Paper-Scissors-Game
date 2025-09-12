
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

   updatedScoreElem();

    

    function pickComputerMove () {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

       if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose!';
        } else if (computerMove === 'paper') {
          result = 'You win!';
        } else if (computerMove === 'scissors') {
          result = 'Tie!';
        }
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie!';
        } else if (computerMove === 'paper') {
          result = 'You lose!';
        } else if (computerMove === 'scissors') {
          result = 'You win!';
        }
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win!';
        } else if (computerMove === 'paper') {
          result = 'Tie!';
        } else if (computerMove === 'scissors') {
          result = 'You lose!';
        }
      }

      if (result === 'You win!') {
        score.wins+= 1;
      } else if (result === 'You lose!') {
        score.losses+= 1;
      } else if (result === 'Tie!') {
        score.ties+= 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updatedScoreElem();

      document.querySelector('.js-result').innerHTML = result;
      // document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-ico">
      // - Computer Pick <img src="images/${computerMove.toLocaleLowerCase()}-emoji.png" class="move-ico">`;
    //   document.querySelector('.js-moves').innerHTML = `
    //   You <img src="images/${playerMove.charAt(0).toUpperCase() + playerMove.slice(1)}-emoji.png" class="move-ico">
    //   - Computer Pick <img src="images/${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)}-emoji.png" class="move-ico">
    // `;
      document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-ico">
      - Computer Pick <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-ico">`;
    }


    function updatedScoreElem () {
      document.querySelector('.js-score').innerHTML = `Score: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }



