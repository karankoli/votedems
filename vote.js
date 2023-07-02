var Samarth=0,Ashwin=0,Chinmay=0,Aryan=0;
var Samrudhi=0,Vaishnavi=0,Sanika=0,Swaranjali=0;
var ba=0,bb=0,bc=0,bd=0;
var ga=0,gb=0,gc=0,gd=0;

function start(){        
    ba=localStorage.setItem("Samarth",Samarth);
    bb=localStorage.setItem("Ashwin",Ashwin);
    bc=localStorage.setItem("Chinmay",Chinmay);
    bd=localStorage.setItem("Aryan",Aryan);
    
    ga=localStorage.setItem("Samrudhi",Samrudhi);
    gb=localStorage.setItem("Vaishnavi",Vaishnavi);
    gc=localStorage.setItem("Sanika",Sanika);
    gd=localStorage.setItem("Swaranjali",Swaranjali);
}
function soundp(){
    const audio= new Audio();
    audio.src="./sound.mp3";
    audio.play();    
}
function Vote1(){
    soundp();

    ba=localStorage.getItem("Samarth",ba);
    ba++;
    //let c=Number.parseInt(ba);
    ba=localStorage.setItem("Samarth",ba);
    document.getElementById("b1").disabled=true; 
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=false; 
    document.getElementById("b6").disabled=false;
    document.getElementById("b7").disabled=false;
    document.getElementById("b8").disabled=false;
}

function Vote2(){
    soundp();

    bb=localStorage.getItem("Ashwin",bb);
    bb++;
    //let c=Number.parseInt(bb);
    bb=localStorage.setItem("Ashwin",bb);
    document.getElementById("b1").disabled=true; 
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=false; 
    document.getElementById("b6").disabled=false;
    document.getElementById("b7").disabled=false;
    document.getElementById("b8").disabled=false;
}

function Vote3(){
    soundp();

    bc=localStorage.getItem("Chinmay",bc);
    bc++;
    //let c=Number.parseInt(bc);
    bc=localStorage.setItem("Chinmay",bc);
    document.getElementById("b1").disabled=true; 
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=false; 
    document.getElementById("b6").disabled=false;
    document.getElementById("b7").disabled=false;
    document.getElementById("b8").disabled=false;
}

function Vote4(){
    soundp();

    bd=localStorage.getItem("Aryan",bd);
    bd++;
    //let c=Number.parseInt(bd);
    bd=localStorage.setItem("Aryan",bd);
    document.getElementById("b1").disabled=true; 
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=false; 
    document.getElementById("b6").disabled=false;
    document.getElementById("b7").disabled=false;
    document.getElementById("b8").disabled=false; 
}

function Vote5(){
    soundp();

    ga=localStorage.getItem("Samrudhi",ga);
    ga++;
    //let c=Number.parseInt(ga);
    ga=localStorage.setItem("Samrudhi",ga);
    document.getElementById("b5").disabled=true; 
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b1").disabled=false; 
    document.getElementById("b2").disabled=false;
    document.getElementById("b3").disabled=false;
    document.getElementById("b4").disabled=false;
      
}
function Vote6(){
    soundp();

    gb=localStorage.getItem("Vaishnavi",gb);
    gb++;
    //let c=Number.parseInt(gb);
    gb=localStorage.setItem("Vaishnavi",gb);  
    document.getElementById("b5").disabled=true; 
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b1").disabled=false; 
    document.getElementById("b2").disabled=false;
    document.getElementById("b3").disabled=false;
    document.getElementById("b4").disabled=false; 
}

function Vote7(){
    soundp();

    gc=localStorage.getItem("Sanika",gc);
    gc++;
    //let c=Number.parseInt(gc);
    gc=localStorage.setItem("Sanika",gc);
    document.getElementById("b5").disabled=true; 
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b1").disabled=false; 
    document.getElementById("b2").disabled=false;
    document.getElementById("b3").disabled=false;
    document.getElementById("b4").disabled=false; 
}

function Vote8(){
    soundp();

    gd=localStorage.getItem("Swaranjali",gd);
    gd++;
    //let c=Number.parseInt(gd);
    gd=localStorage.setItem("Swaranjali",gd);
    document.getElementById("b5").disabled=true; 
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b1").disabled=false; 
    document.getElementById("b2").disabled=false;
    document.getElementById("b3").disabled=false;
    document.getElementById("b4").disabled=false; 
}


function CheckR(){

    let popup=document.getElementById("popup");
    popup.classList.add("open-popup");

    ba=Number.parseInt(localStorage.getItem("Samarth",ba));
    bb=Number.parseInt(localStorage.getItem("Ashwin",bb));
    bc=Number.parseInt(localStorage.getItem("Chinmay",bc));
    bd=Number.parseInt(localStorage.getItem("Aryan",bd));
    ga=Number.parseInt(localStorage.getItem("Samrudhi",ga));
    gb=Number.parseInt(localStorage.getItem("Vaishnavi",gb));
    gc=Number.parseInt(localStorage.getItem("Sanika",gc));
    gd=Number.parseInt(localStorage.getItem("Swaranjali",gd));

    if(ba>bb && ba>bc && ba>bd){
        //statement ba
        document.getElementById("Resultb").innerHTML="Samarth Thombare is next HeadBoy with "+ba+" votes";
    }
    else if(bb>bc && bb>bd){
        //statement bb
        document.getElementById("Resultb").innerHTML="Ashwin Dhale is next HeadBoy with "+bb+" votes";
    }
    else if(bc>bd){
        //statement  bc
        document.getElementById("Resultb").innerHTML="Chinmay Shiralkar is next HeadBoy with "+bc+" votes";
    }    
    else{
        //statement  bd
        document.getElementById("Resultb").innerHTML="Aryan Kamble is next HeadBoy with "+bd+" votes";
    }
    if(ga>gb && ga>gc && ga>gd){
        //statement  ga
        document.getElementById("Resultg").innerHTML="Samrudhi Kale is next HeadGirl with "+ga+" votes";
    }
    else if(gb>gc && gb>gd){
        //statement  gb
        document.getElementById("Resultg").innerHTML="Vaishnavi Shinde is next HeadGirl with "+gb+" votes";
    }
    else if(gc>gd){
        //statement  gc
        document.getElementById("Resultg").innerHTML="Sanika Dhapte is next HeadGirl with "+gc+" votes";
    }    
    else{
        //statement  gd
        document.getElementById("Resultg").innerHTML="Swaranjali Dhaytonde is next HeadGirl with "+gd+" votes";
    }
}
function CheckRclose(){
    let popup=document.getElementById("popup");
    popup.classList.remove("open-popup");
}
