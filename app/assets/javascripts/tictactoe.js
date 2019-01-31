var turn = 0
var currentGame = 0

<<<<<<< HEAD
function player(){
  if (turn%2 == 0) {
    return 'X'
  } else {
    return 'O'
=======
function player() {
  if ( turn % 2 == 0) {
    return "X"
>>>>>>> cf7dcbd4115a98c4b94f6944a8699e7e3b71968e
  }
}

function updateState(position){
  $(position).text(player())
}

function setMessage(message){
  $("#message").text(message)
}

<<<<<<< HEAD
function checkWinner(){
  var board = $("td")
  if (board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML && board[2].innerHTML !== ""){
    setMessage(`Player ${board[0].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[3].innerHTML === board[4].innerHTML && board[4].innerHTML === board[5].innerHTML && board[5].innerHTML !== "") {
    setMessage(`Player ${board[4].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[6].innerHTML === board[7].innerHTML && board[7].innerHTML === board[8].innerHTML && board[8].innerHTML !== "") {
    setMessage(`Player ${board[6].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[0].innerHTML === board[3].innerHTML && board[3].innerHTML === board[6].innerHTML && board[6].innerHTML !== "") {
    setMessage(`Player ${board[0].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[1].innerHTML === board[4].innerHTML && board[4].innerHTML === board[7].innerHTML && board[7].innerHTML !== "") {
    setMessage(`Player ${board[1].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[2].innerHTML === board[5].innerHTML && board[5].innerHTML === board[8].innerHTML && board[8].innerHTML !== "") {
    setMessage(`Player ${board[2].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[0].innerHTML === board[4].innerHTML && board[4].innerHTML === board[8].innerHTML && board[8].innerHTML !== "") {
    setMessage(`Player ${board[0].innerHTML} Won!`)
    $.post("/games")
    return true
  } else if (board[2].innerHTML === board[4].innerHTML && board[4].innerHTML === board[6].innerHTML && board[6].innerHTML !== "") {
    setMessage(`Player ${board[2].innerHTML} Won!`)
    $.post("/games")
    return true
  } else {
    return false
  }
}

function tieGame() {
  var board = $("td")
  if (board[0].innerHTML !== "" && board[1].innerHTML !== "" && board[2].innerHTML !== "" && board[3].innerHTML !== "" && board[4].innerHTML !== "" && board[5].innerHTML !== "" && board[6].innerHTML !== "" && board[8].innerHTML !== "" ){
    setMessage("Tie game.")
    $.post("/games")
    return true
  }
}

function doTurn(position) {
  updateState(position)
  turn += 1
  if (checkWinner()) {
    turn = 0
    currentGame = 0
    $("td").empty()
  } else if (tieGame() === true) {
    turn = 0
    currentGame = 0
    $("td").empty()
=======
function checkWinner() {
  let winner = "";
  if (turn > 5){
    if ($("#0").text === $("#1").text === $("#2").text) {
      winner = ($("#0").text;
    }
    else if ($("#3").text === $("#4").text === $("#5").text){
      winner = $("#3").text;
    }
    else if ($("#6").text === $("#7").text === $("#8").text){
      winner = $("#6").text;
    }
    else if ($("#0").text === $("#3").text === $("#6").text){
      winner = ($("#0").text;
    }
    else if ($("#1").text === $("#4").text === $("#7").text){
      winner = $("#1").text;
    }
    else if ($("#2").text === $("#5").text === $("#8").text){
      winner = $("#2").text;
    }
    else if ($("#0").text === $("#4").text === $("#8").text){
      winner = $("#0").text;
    }
    else if ($("#2").text === $("#4").text === $("#6").text){
      winner = $("#2").text;
>>>>>>> cf7dcbd4115a98c4b94f6944a8699e7e3b71968e
    }
  }


var previous = function() {
  $("#previous").on("click", function(){
    $.get("/games", function(data) {
      var games = data
      gameList = document.querySelector("#games")
      gameButton = ""
      games["data"].forEach(function(game){
        gameButton += '<button id=' + game["id"] + ' onclick="getGame(' + game["id"] + ')">' + game + '</button>'
        $("#games").html(gameButton)
      })
    })
  })
}

function getGame(id){
  $.get(`/games/${id}`, function(data){
    currentGame = id
    var newBoard = data["data"]["attributes"]["state"]
    var board = $("td")
    $("td").each(function(index, square){
      square.innerHTML = newBoard[index]
      if (newBoard[index] !== ""){
        turn += 1
      }
    })
  })
}


function attachListeners(){
  $("td").click(function(){
    if (this.innerHTML === "" && !checkWinner()) {
      doTurn(this)
    }
  })
  previous()
  $("#save").on("click", function(){save()})
  clear()
}

var save = function(){
  var state = [];
  var gameData;
  $("td").each(function(index, square){
    state.push(square.innerHTML)
  })
  gameData = {state: state}

    if (currentGame === 0) {
      $.post("/games",gameData, function(data){
        currentGame = data["data"]["id"]
      })
    } else {
      $.ajax({
      type: 'PATCH',
      url: `/games/${currentGame}`,
      data: gameData
    });
    }
  }


var clear = function(){
  $("#clear").on("click", function(){
    turn = 0
    currentGame = 0
    $("td").empty()
    })
}



$(document).ready(function(){
  attachListeners()

})
