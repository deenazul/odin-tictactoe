# odin-tictactoe

Apply concept of closure
DOM Handling 

To do list: 
[] Have global code as possible
[] Function for gameboard, player, game
[] Function for rendering + DOM
[] Function to mark spot on DOM. Can't be clicked twice
[] Player name input, restart game button, display game results

Roadmap: 
Step 1: Define the Game Structure
Game Board: Create a 9x9 grid, which will require a 2D array to represent the board.
9x9 grid is essentially a 2D array with 9 rows and 9 columns.
Each cell of the grid can have a value of null, 'X', or 'O'.
Players: Allow two players to choose between 'X' and 'O'. You'll need to track the current player and switch turns after each move.

Game Status: Determine whether the game is ongoing or finished. This will require checking for a winner or a draw after every move.

Step 2: Define the Logic
1. Game Board Representation
[X] Create a 2D array to represent the 9x9 grid.
[X] Each cell will hold a value representing either 'X', 'O', or null (empty).
2. Player Choices
Create a variable to track the current player. Initially, this can be 'X' or 'O', and after each move, it will switch to the other player.
3. Player Move
When a player clicks on a cell in the grid, the corresponding array position is updated with the player's symbol.
After each move, check if there's a winner or if the game is a draw.
4. Winner Check Logic
For checking a winner, you need to check for a sequence of 5 cells in a row (horizontally, vertically, or diagonally).
This can be done by checking all rows, columns, and diagonals for a streak of the same player symbol.
5. Handle Draw
If all cells are filled and no one has won, it’s a draw.

Step 4: Game Flow
Players can select whether they want to be 'X' or 'O'.
The game will alternate turns between players and update the board after each move.
After every move, check if there's a winner or a draw.
If a player wins, display a message, and allow for a restart of the game.

Step 5: Optional Improvements
Add a restart button to reset the game board.
Highlight the winning line (horizontal, vertical, or diagonal) after a player wins.
Add a simple score counter to track how many games each player has won.