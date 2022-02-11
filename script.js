var title =document.querySelector('.boardTitle');


function reloadGame(num1, num2, num3){

    title.innerHTML= `${blocks[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor = '#000';
    document.getElementById('item'+num2).style.backgroundColor = '#000';
    document.getElementById('item'+num3).style.backgroundColor = '#000';
    setInterval(function(){title.innerHTML +='.' },2000);
    setTimeout(function(){location.reload()},4000)
}


var blocks = [];

function winner()
         {
for(var i = 1; i<10 ;i++)
   {

    blocks[i]= document.getElementById('item' + i).innerHTML;
 
   }

   //horizontal lines

if(blocks[1] == blocks[2] && blocks[2] == blocks[3] && blocks[1] != '')
{
// console.log("done");
reloadGame(1,2,3)
}
else if (blocks[4] == blocks[5] && blocks[5] == blocks[6] && blocks[4] != '')
{
// console.log("done");
reloadGame(4,5,6)
}
else if (blocks[7] == blocks[8] && blocks[8] == blocks[9] && blocks[7] != '')
{
// console.log("done");
reloadGame(7,8,9)
}

//vertical lines
else if (blocks[1] == blocks[4] && blocks[4] == blocks[7] && blocks[1] != '')
{
// console.log("done");
reloadGame(1,4,7)
}
else if (blocks[2] == blocks[5] && blocks[5] == blocks[8] && blocks[2] != '')
{
// console.log("done");
reloadGame(2,5,8)
}
else if (blocks[3] == blocks[6] && blocks[6] == blocks[9] && blocks[3] != '')
{
// console.log("done");
reloadGame(3,6,9)
}

//cross lines
else if (blocks[1] == blocks[5] && blocks[5] == blocks[9] && blocks[1] != '')
{
// console.log("done");
reloadGame(1,5,9)
}
else if (blocks[3] == blocks[5] && blocks[5] == blocks[7] && blocks[3] != '')
{
// console.log("done");
reloadGame(3,5,7)
}


        }




var turn ='x';
function game (id)

{
var element = document.getElementById(id);
if(turn=== 'x' && element.innerHTML=='')

    {
     element.innerHTML='x';
     turn ='o';
     title.innerHTML='O';
    }
    else if (turn=== 'o' && element.innerHTML=='')
     {
    element.innerHTML='o';
    turn ='x';
    title.innerHTML='X';
     }
     winner();
}






// restart.addEventListener('click', restart_game)