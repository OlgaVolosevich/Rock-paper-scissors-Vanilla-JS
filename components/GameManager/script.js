"use strict"
import computer from "./../ComputerPlayer/script.js";
import domManager from "./../DomManager/script.js";
class GameManager {
  _winCases = {
    scissors: `paper`,
    paper: `rock`,
    rock: `scissors`,
  };
  getPlayersDesidion(userChoise) {
    return {
      USER_CHOICE: userChoise,
      COMPUTER_CHOICE: computer.play(),
    };
  }

  checkIfDraw(user, computer) {
    return user === computer;
  }
  checkWin(user, computer) {
    return this._winCases[user] === computer;
  }
  processResults(userChoise) {
    const { USER_CHOICE, COMPUTER_CHOICE } = this.getPlayersDesidion(
      userChoise
    );
    const isDraw = this.checkIfDraw(USER_CHOICE, COMPUTER_CHOICE);
    if (isDraw) {
      return domManager.showDrawAlert();
    }
    const isWin = this.checkWin(USER_CHOICE, COMPUTER_CHOICE);
    if (isWin) {
      return domManager.showWinAlert();
    } else {
      return domManager.showLoseAlert();
    }
  }
}

const gameManager = new GameManager();

export default gameManager;