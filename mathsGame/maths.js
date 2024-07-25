var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var submit = document.getElementById("submit");
var div2 = document.getElementById("div2");
var tex = document.getElementById("tex");
var tex2 = document.getElementById("tex2");
var dot = document.getElementById("dot");
var clear = document.getElementById("clear");
var imag = document.getElementById("imag");
var reply = document.getElementById("reply");
let max1 = 100;
let max2 = 10;
let arrMax=4;
let ran1;
let ran2;
let checkNum = false;
let dotClicked = false;
let cho;
var emo = 5;
let guess;
let answer;
let countZero = 0;
let count=0;
let correct=0;
let sel=false;
let beg=1;
let ranEmo;
let arrRan;
let goodReaction = ['Ya yeh, I know you are my man!,','Good job, I like the way you did it!','Keep it on my man','What a smart mathimatician!','Ohh, you can solve large number by your mind!'];
let sadReaction = ['Ohh my man dont give up. ','Ohh no, what happened to you my brother!','You are disappointing me bro!','keep doing, keep focused!','What happened that was easy!'];
let sig = ['+','-','x','/','%','^2'];
div2.textContent="Click submit button to begin";
submit.onclick = function(){
    dotClicked=false;
    ranEmo = Math.floor(Math.random()*(4));
    ran1 = Math.floor(Math.random()*max1)+1;
    ran2 = Math.floor(Math.random()*max2)+1;
    while(ran1<ran2){
        ran1=2*ran1;
    }
    arrRan = Math.floor(Math.random()*arrMax);
    div2.textContent=ran1+' '+sig[arrRan]+' '+ran2+' = ?';
    guess=Number(tex.textContent);
    if(guess==answer){
        correct++;
        reply.textContent=goodReaction[ranEmo];
        if(emo<=5){
            emo++;
        }
        imag.src=`/emoji/emoo${emo}.png`;
    }
    if(guess!=answer){
        if(emo>1){
        emo--;
        }
        imag.src=`/emoji/emoo${emo}.png`;
        reply.textContent=sadReaction[ranEmo];
    }
    tex2.textContent = correct+'/'+count;
    count++;
    tex.textContent='';
    checkNum = false;
    countZero = 0;
    switch(arrRan){
        case 0:
            answer=ran1+ran2;
            break;
        case 1:
            answer=ran1-ran2;
            break;
        case 2:
            answer=ran1*ran2;
            break;
        case 3:
            answer=ran1/ran2;
            break;
    }
}
one.onclick = function(){
    tex.textContent+="1";
    guess=Number(tex.textContent);
    checkNum = true;
}
two.onclick = function(){
    tex.textContent+="2";
    guess=Number(tex.textContent);
    checkNum = true;
}
three.onclick = function(){
    tex.textContent+="3";  
    guess=Number(tex.textContent);
    checkNum = true;
}
four.onclick = function(){
    tex.textContent+="4";
    guess=Number(tex.textContent);
    checkNum = true;
}
five.onclick = function(){
    tex.textContent+="5";
    guess=Number(tex.textContent);
    checkNum = true;
}
six.onclick = function(){
    tex.textContent+="6";
    guess=Number(tex.textContent);
    checkNum = true;
}
seven.onclick = function(){
    tex.textContent+="7";
    guess=Number(tex.textContent);
    checkNum = true;
}
eight.onclick = function(){
    tex.textContent+="8";  
    guess=Number(tex.textContent);
    checkNum = true;
}
nine.onclick = function(){
    tex.textContent+="9";
    guess=Number(tex.textContent);
    checkNum = true;
}
zero.onclick = function(){
    if(checkNum==true||countZero==0){
    tex.textContent+="0";
    guess=Number(tex.textContent);
    countZero=1;
    }
}
dot.onclick = function(){
    if(dotClicked==false){
    tex.textContent+=".";
    guess=Number(tex.textContent);
    dotClicked=true;
    checkNum = true;
}
}
clear.onclick = function(){
    tex.textContent="";
    guess=Number(tex.textContent);
}