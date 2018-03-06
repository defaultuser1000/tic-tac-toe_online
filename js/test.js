window.onload = function(){
  for (var i=0; i<9; i++){
    document.getElementById('field').innerHTML+='<div class="cell"></div>';
  }

  var step = 0;

  document.getElementById('field').onclick = function(event){
    //console.log(event);

    if (event.target.className == 'cell'){
      if (step%2 == 0){
        event.target.innerHTML = 'x';
      }else{
        event.target.innerHTML = '0';
      }
      step++;
    }
    winCheck();
  }

  function winCheck(){
    var allblock = document.getElementsByClassName('cell');
    //console.log(allblock);
    cellCheck(allblock,'x','крестики');
    cellCheck(allblock,'0','нолики');
  }

  function cellCheck(allblock, x, y){
    //horizontal
    if (allblock[0].innerHTML == x && allblock[1].innerHTML == x && allblock[2].innerHTML == x){alert('Победили '+y);}
    if (allblock[3].innerHTML == x && allblock[4].innerHTML == x && allblock[5].innerHTML == x){alert('Победили '+y);}
    if (allblock[6].innerHTML == x && allblock[7].innerHTML == x && allblock[8].innerHTML == x){alert('Победили '+y);}
    //vertical
    if (allblock[0].innerHTML == x && allblock[3].innerHTML == x && allblock[6].innerHTML == x){alert('Победили '+y);}
    if (allblock[1].innerHTML == x && allblock[4].innerHTML == x && allblock[7].innerHTML == x){alert('Победили '+y);}
    if (allblock[2].innerHTML == x && allblock[5].innerHTML == x && allblock[8].innerHTML == x){alert('Победили '+y);}
    //diagonal
    if (allblock[0].innerHTML == x && allblock[4].innerHTML == x && allblock[8].innerHTML == x){alert('Победили '+y);}
    if (allblock[2].innerHTML == x && allblock[4].innerHTML == x && allblock[6].innerHTML == x){alert('Победили '+y);}
  }

  function reset(){
    document.getElementsByClassName('cell').innerHTML = ''
  }

  /*document.getElementById("reset").onclick = function() {reset()};

  function reset() {
    document.getElementsByClassName('cell').innerHTML = '';
  }*/



/*
  function reset(){
    document.getElementsByClassName('cell').innerHTML = '';
  }*/
}
