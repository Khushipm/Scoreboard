let score1 = 0;
let score2 = 0;

function l1()
{
  score1 +=1 ;
  document.getElementById("hscore").textContent = score1;  
}

function l2()
{
  score1 +=2 ;
  document.getElementById("hscore").textContent = score1;  
}

function l3()
{
  score1 +=3 ;
  document.getElementById("hscore").textContent = score1;  
}

function r1()
{
  score2 +=1 ;
  document.getElementById("gscore").textContent = score2;  
}

function r2()
{
  score2 +=2 ;
  document.getElementById("gscore").textContent = score2;  
}

function r3()
{
  score2 +=3 ;
  document.getElementById("gscore").textContent = score2;  
}