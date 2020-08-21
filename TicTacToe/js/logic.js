window.addEventListener('load',init_fnc);
var n=9;

function init_fnc(){
    document.querySelector("#r1c1").addEventListener('click',putmark);
    document.querySelector("#r1c2").addEventListener('click',putmark);
    document.querySelector("#r1c3").addEventListener('click',putmark);
    document.querySelector("#r2c1").addEventListener('click',putmark);
    document.querySelector("#r2c2").addEventListener('click',putmark);
    document.querySelector("#r2c3").addEventListener('click',putmark);
    document.querySelector("#r3c1").addEventListener('click',putmark);
    document.querySelector("#r3c2").addEventListener('click',putmark);
    document.querySelector("#r3c3").addEventListener('click',putmark);
}

function putmark(){
    let whowin =-1;
    console.log("putmark fnc called > Initial value of n :",n,"and whowin:",whowin);

    let t = this;
    console.log("Intitail Value of t :",t);
    let t_id = t.id;
    
    let check_n = n%2;
    console.log("Value of check_n :",check_n);
    if( check_n ==1 ){
        t.style.backgroundColor = "#9AFEFF";
        t.value = 1;
        document.getElementById(t_id).innerHTML="O";
        whowin = who_win_fnc(1);
        console.log("Value of whowin in ONE :",whowin);
        if(whowin == 1){
            alert("O win the game");
            location.reload();
        }
        document.getElementById(t_id).disabled = true;
        
    }
    else{
        t.style.backgroundColor = "#F778A1";
        t.value = 2;
        document.getElementById(t_id).innerHTML="X";
        whowin = who_win_fnc(2);
        console.log("Value of whowin in TWO :",whowin);
        if(whowin == 2){
            alert("X win the game");
            location.reload();
        }
        document.getElementById(t_id).disabled = true;

    } 
    n-=1;
    if( n == 0 ){
        alert("Match Draw");
        location.reload();
    }

}

function who_win_fnc(val){
    if( (document.getElementById('r1c1').value == val) && (document.getElementById('r1c2').value == val) && (document.getElementById('r1c3').value == val) ){
        return val;
    }
    else if( (document.getElementById('r2c1').value == val) && (document.getElementById('r2c2').value == val) && (document.getElementById('r2c3').value == val) ){
    return val;
    }
    else if( (document.getElementById('r3c1').value == val) && (document.getElementById('r3c2').value == val) && (document.getElementById('r3c3').value == val) ){
    return val;
    }
    else if( (document.getElementById('r1c1').value == val) && (document.getElementById('r2c1').value == val) && (document.getElementById('r3c1').value == val) ){
    return val;
    }
    else if( (document.getElementById('r1c2').value == val) && (document.getElementById('r2c2').value == val) && (document.getElementById('r3c2').value == val) ){
    return val;
    }
    else if( (document.getElementById('r1c3').value == val) && (document.getElementById('r2c3').value == val) && (document.getElementById('r3c3').value == val) ){
    return val;
    }
    else if( (document.getElementById('r1c1').value == val) && (document.getElementById('r2c2').value == val) && (document.getElementById('r3c3').value == val) ){
    return val;
    }
    else if( (document.getElementById('r1c3').value == val) && (document.getElementById('r2c2').value == val) && (document.getElementById('r3c1').value == val) ){
    return val;
    }
    else{
        return -1;
    }

}