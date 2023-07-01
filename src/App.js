import React, { useState } from 'react';

const CardGame = () => {
  const cardImages = [
    'card2.png',
    'card3.png',
    'card4.png',
    'card5.png',
    'card6.png',
    'card7.png',
    'card8.png',
    'card9.png',
    'card10.png',
    'card11.png',
    'card12.png',
    'card13.png',
    
  ];

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [winner, setWinner] = useState('');
  const [card1FacingUp, setCard1FacingUp] = useState(false);
  const [card2FacingUp, setCard2FacingUp] = useState(false);
  const [randomNumber1,setrandomNumber1]=useState(1);
  const [randomNumber2,setrandomNumber2]=useState(1);

  const handlePlay = () => {
    const randomNumber1 = Math.floor(Math.random() * cardImages.length);
    const randomNumber2 = Math.floor(Math.random() * cardImages.length);

    setrandomNumber1(randomNumber1);
    setrandomNumber2(randomNumber2);

    setCard1FacingUp(true);
    setCard2FacingUp(true);


    if (randomNumber1 > randomNumber2) {
      setScore1(score1 + 1);
    } else if (randomNumber2 > randomNumber1) {
      setScore2(score2 + 1);
    }

    if (score1 + 1 === 10 || score2 + 1 === 10) {
      const winner = score1 > score2 ? 'Player 1' : 'Player 2';
      setWinner(winner);
      setScore1(0);
      setScore2(0);
      setCard1FacingUp(false);
      setCard2FacingUp(false);
    }
  };

return (
    <div className="container" style={{ backgroundColor: 'green', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="warlogo.png" alt="war logo" className="war logo" />

      <div className="player-names">
        <div className="player">
          <p>Player 1</p>
        </div>
        <div className="player">
          <p>Player 2</p>
        </div>
      </div>

      <div className="images">
      <div className="cards-container">
        <img
          src={card1FacingUp ? cardImages[randomNumber1] : 'back.png'}
          alt="Card 1"
          className="card"
          />
           <p>Score: {score1}</p>
  </div>
  <div className="cards-container">
        <img
          src={card2FacingUp ? cardImages[randomNumber2] : 'back.png'}
          alt="Card 2"
          className="card"
        />
        <p>Score: {score2}</p>
  </div>
      </div>

      <button onClick={handlePlay}>Play</button>

{winner && (
  <div className="alert">
    <p>The winner is {winner}!</p>
    <button onClick={() => setWinner('')}>Close</button>
  </div>
)}
</div>
);
};


export default CardGame;
