document.addEventListener('DOMContentLoaded', () => {
    const games = [
        'Chess',
        'Football',
        'Scrabble',
        'Hackclub Arcade',
        'Risk',
        'Settlers of Catan',
        'Rock Paper Scissor',
        'Cricket',
        'Ticket to Ride',
        'Clue'
    ];

    const generateButton = document.getElementById('generate');
    const gameDisplay = document.getElementById('game');

    generateButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * games.length);
        const randomGame = games[randomIndex];
        gameDisplay.textContent = `You should play: ${randomGame}`;
    });
});
