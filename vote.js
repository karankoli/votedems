var Samarth=0,Ashwin=0,Chinmay=0,Aryan=0;
var Samrudhi=0,Vaishnavi=0,Sanika=0,Swaranjali=0;
var ba=0,bb=0,bc=0,bd=0;
var ga=0,gb=0,gc=0,gd=0;
var x=0,y=0;

function login(){
    let uid=document.getElementById("uid").value;
    let pass=document.getElementById("pass").value;

    if(uid=="DEMS"){
        if(pass=="dems")
            window.open("DEMS School Election.html")
        else
            alert("Invaild password!!");
    }
    else{
        alert("Invaid Username!!");
    }
}
function soundp(){
    const audio= new Audio();
    audio.src="./sound.mp3";
    audio.play();    
}
function startsound(){
    const audio= new Audio();
    audio.src="./start.mp3";
    audio.play();    
}
function resultsound(){
    const audio= new Audio();
    audio.src="./result.mp3";
    audio.play();    
}
function start(){     
    startsound();   
    ba=localStorage.setItem("Samarth",Samarth);
    bb=localStorage.setItem("Ashwin",Ashwin);
    bc=localStorage.setItem("Chinmay",Chinmay);
    bd=localStorage.setItem("Aryan",Aryan);
    
    ga=localStorage.setItem("Samrudhi",Samrudhi);
    gb=localStorage.setItem("Vaishnavi",Vaishnavi);
    gc=localStorage.setItem("Sanika",Sanika);
    gd=localStorage.setItem("Swaranjali",Swaranjali);
    
}

function Vote1(){
    soundp();
    ba=localStorage.getItem("Samarth",ba);
    ba++;
    ba=localStorage.setItem("Samarth",ba);

    if(y==1){
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;

        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
}
function Vote2(){
    soundp();

    bb=localStorage.getItem("Ashwin",bb);
    bb++;
    
    bb=localStorage.setItem("Ashwin",bb);
    if(y==1){
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;

        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
}

function Vote3(){
    soundp();

    bc=localStorage.getItem("Chinmay",bc);
    bc++;
    
    bc=localStorage.setItem("Chinmay",bc);
    if(y==1){
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;

        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
}
function Vote4(){
    soundp();

    bd=localStorage.getItem("Aryan",bd);
    bd++;

    bd=localStorage.setItem("Aryan",bd);
    if(y==1){
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;

        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
}
function Vote5(){
    soundp();

    ga=localStorage.getItem("Samrudhi",ga);
    ga++;
    
    ga=localStorage.setItem("Samrudhi",ga);
    if(x==1){
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;

        document.getElementById("b5").disabled=true; 
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;  
    }    
}
function Vote6(){
    soundp();

    gb=localStorage.getItem("Vaishnavi",gb);
    gb++;

    gb=localStorage.setItem("Vaishnavi",gb);  
    if(x==1){
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;

        document.getElementById("b5").disabled=true; 
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;  
    } 
}
function Vote7(){
    soundp();

    gc=localStorage.getItem("Sanika",gc);
    gc++;
    
    gc=localStorage.setItem("Sanika",gc);
    if(x==1){
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;

        document.getElementById("b5").disabled=true; 
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;  
    }
}

function Vote8(){
    soundp();

    gd=localStorage.getItem("Swaranjali",gd);
    gd++;
    
    gd=localStorage.setItem("Swaranjali",gd);
    if(x==1){
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
    else{
        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false;

        document.getElementById("b5").disabled=true; 
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;  
    }
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

    //headboys
    if(ba==bb && ba==bc && ba==bd){ //1234
        document.getElementById("Resultb").innerHTML="Voting tied between all Boys";
    }
    else if(ba==bb && ba==bc && ba>bd){ //123   
        document.getElementById("Resultb").innerHTML="Voting tied between Samarth, Ashwin & Chinmay";
        
        let popup=document.getElementById("voter4");  //hide voter 4
        popup.classList.add("hide-voter4");
   
    }
    else if(ba==bb && ba>bc && ba==bd){ //124
        document.getElementById("Resultb").innerHTML="Voting tied between Samarth, Ashwin & Aryan";

        let popup=document.getElementById("voter3");   //hide voter 3
        popup.classList.add("hide-voter3");
   
    }
    else if(ba>bb && ba==bc && ba==bd){ //134
        document.getElementById("Resultb").innerHTML="Voting tied between Samarth, Chinmay & Aryan";

        let popup=document.getElementById("voter2");    //hide voter 2
        popup.classList.add("hide-voter2");  
    }
    else if(bb>ba && bb==bc && bb==bd){ //234
        document.getElementById("Resultb").innerHTML="Voting tied between Ashwin, Chinmay & Aryan";

        let popup=document.getElementById("voter1");    //hide voter 1
        popup.classList.add("hide-voter1");
    }
    else if(ba==bb && ba>bc && ba>bd){ //12
        document.getElementById("Resultb").innerHTML="Voting tied between Samarth & Ashwin";

        let popup1=document.getElementById("voter3");   //hide voter 3
        let popup2=document.getElementById("voter4");   //hide voter 4
        popup1.classList.add("hide-voter3");
        popup2.classList.add("hide-voter4");
    }
    else if(ba>bb && ba==bc && ba>bd){ //13    
        document.getElementById("Resultb").innerHTML="Voting tied between Samarth & Chinmay";

        let popup1=document.getElementById("voter2");   //hide voter 2
        let popup2=document.getElementById("voter4");   //hide voter 4
        popup1.classList.add("hide-voter2");
        popup2.classList.add("hide-voter4");  
    }
    else if(ba>bb && ba>bc && ba==bd){ //14
        document.getElementById("Resultb").innerHTML="Voting tied between Samarth & Aryan";

        let popup1=document.getElementById("voter2");   //hide voter 2
        let popup2=document.getElementById("voter3");   //hide voter 3
        popup1.classList.add("hide-voter2");
        popup2.classList.add("hide-voter3"); 
    }
    else if(bb==bc && bb>ba && bb>bd){  //23
        document.getElementById("Resultb").innerHTML="Voting tied between Ashwin & Chinmay";

        let popup1=document.getElementById("voter1");   //hide voter 1
        let popup2=document.getElementById("voter4");   //hide voter 4
        popup1.classList.add("hide-voter1");
        popup2.classList.add("hide-voter4");  
    }
    else if(bb==bd && bb>bc && bb>ba){  //24
        document.getElementById("Resultb").innerHTML="Voting tied between Ashwin & Aryan";

        let popup1=document.getElementById("voter1");   //hide voter 1
        let popup2=document.getElementById("voter3");   //hide voter 3
        popup1.classList.add("hide-voter1");
        popup2.classList.add("hide-voter3");
    }
    else if(bc>ba && bc>bb && bc==bd){  //34
        document.getElementById("Resultb").innerHTML="Voting tied between Chinmay & Aryan";

        let popup1=document.getElementById("voter1");   //hide voter 1
        let popup2=document.getElementById("voter2");   //hide voter 2
        popup1.classList.add("hide-voter1");
        popup2.classList.add("hide-voter2"); 
    }
    else if(ba>bb && ba>bc && ba>bd){
        //statement ba
        resultsound();
        x=1;
        document.getElementById("Resultb").innerHTML="Samarth Thombare is next HeadBoy with "+ba+" votes";
        
        let popup1=document.getElementById("voter1");   //hide voter 1
        popup1.classList.add("hide-voter1");
        let popup2=document.getElementById("voter2");   //hide voter 2
        popup2.classList.add("hide-voter2");
        let popup3=document.getElementById("voter3");   //hide voter 3
        popup3.classList.add("hide-voter3");
        let popup4=document.getElementById("voter4");   //hide voter 4
        popup4.classList.add("hide-voter4");
   
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;   
    }
    else if(bb>bc && bb>bd){
        //statement bb
        resultsound();
        x=1;
        document.getElementById("Resultb").innerHTML="Ashwin Dhale is next HeadBoy with "+bb+" votes";
       
        let popup1=document.getElementById("voter1");   //hide voter 1
        popup1.classList.add("hide-voter1");
        let popup2=document.getElementById("voter2");   //hide voter 2
        popup2.classList.add("hide-voter2");
        let popup3=document.getElementById("voter3");   //hide voter 3
        popup3.classList.add("hide-voter3");
        let popup4=document.getElementById("voter4");   //hide voter 4
        popup4.classList.add("hide-voter4");
         
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
    else if(bc>bd){
        //statement  bc
        resultsound();
        x=1;
        document.getElementById("Resultb").innerHTML="Chinmay Shiralkar is next HeadBoy with "+bc+" votes";
        
        let popup1=document.getElementById("voter1");   //hide voter 1
        popup1.classList.add("hide-voter1");
        let popup2=document.getElementById("voter2");   //hide voter 2
        popup2.classList.add("hide-voter2");
        let popup3=document.getElementById("voter3");   //hide voter 3
        popup3.classList.add("hide-voter3");
        let popup4=document.getElementById("voter4");   //hide voter 4
        popup4.classList.add("hide-voter4");
   
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }    
    else{
        //statement  bd
        resultsound();
        x=1;
        document.getElementById("Resultb").innerHTML="Aryan Kamble is next HeadBoy with "+bd+" votes";

        let popup1=document.getElementById("voter1");   //hide voter 1
        popup1.classList.add("hide-voter1");
        let popup2=document.getElementById("voter2");   //hide voter 2
        popup2.classList.add("hide-voter2");
        let popup3=document.getElementById("voter3");   //hide voter 3
        popup3.classList.add("hide-voter3");
        let popup4=document.getElementById("voter4");   //hide voter 4
        popup4.classList.add("hide-voter4");
    
        document.getElementById("b5").disabled=false; 
        document.getElementById("b6").disabled=false;
        document.getElementById("b7").disabled=false;
        document.getElementById("b8").disabled=false;
    }
    
    //headgirls
    if(ga==gb && ga==gc && ga==gd){ //5678
        document.getElementById("Resultg").innerHTML="Voting tied between all Girls";
    }
    else if(ga==gb && ga==gc && ga>gd){ //567      
        document.getElementById("Resultg").innerHTML="Voting tied between Samrudhi, Vaishnavi & Sanika";

        let popup=document.getElementById("voter8");    //hide voter 8
        popup.classList.add("hide-voter8");
    }
    else if(ga==gb && ga>gc && ga==gd){ //568
        document.getElementById("Resultg").innerHTML="Voting tied between Samrudhi, Vaishnavi & Swaranjali";

        let popup=document.getElementById("voter7");    //hide voter 7
        popup.classList.add("hide-voter7");
    }
    else if(ga>gb && ga==gc && ga==gd){ //578
        document.getElementById("Resultg").innerHTML="Voting tied between Samrudhi, Sanika & Swaranjali";

        let popup=document.getElementById("voter6");    //hide voter 6
        popup.classList.add("hide-voter6");
    }
    else if(gb>ga && gb==gc && gb==gd){ //678
        document.getElementById("Resultg").innerHTML="Voting tied between Vaishnavi, Sanika & Swaranjali";

        let popup=document.getElementById("voter5");    //hide voter 5
        popup.classList.add("hide-voter5"); 
    }
    else if(ga==gb && ga>gc && ga>gd){ //56      
        document.getElementById("Resultg").innerHTML="Voting tied between  Samrudhi & Vaishnavi";

        let popup1=document.getElementById("voter7");   //hide voter 7
        let popup2=document.getElementById("voter8");   //hide voter 8
        popup1.classList.add("hide-voter7");
        popup2.classList.add("hide-voter8"); 
    }
    else if(ga>gb && ga==gc && ga>gd){ //57
        document.getElementById("Resultg").innerHTML="Voting tied between Samrudhi & Sanika";

        let popup1=document.getElementById("voter6");   //hide voter 6
        let popup2=document.getElementById("voter8");   //hide voter 8
        popup1.classList.add("hide-voter6");
        popup2.classList.add("hide-voter8");  
    }
    else if(ga>gb && ga>gc && ga==gd){ //58
        document.getElementById("Resultg").innerHTML="Voting tied between Samrudhi & Swaranjali";

        let popup1=document.getElementById("voter6");   //hide voter 6
        let popup2=document.getElementById("voter7");   //hide voter 7
        popup1.classList.add("hide-voter6");
        popup2.classList.add("hide-voter7"); 
    }
    else if(gb==gc && gb>ga && gb>gd){  //67
        document.getElementById("Resultg").innerHTML="Voting tied between Vaishnavi & Sanika";

        let popup1=document.getElementById("voter5");   //hide voter 5
        let popup2=document.getElementById("voter8");   //hide voter 8
        popup1.classList.add("hide-voter5");
        popup2.classList.add("hide-voter8");   
    }
    else if(gb==gd && gb>gc && gb>ga){  //68
        document.getElementById("Resultg").innerHTML="Voting tied between Vaishnavi & Swaranjali";

        let popup1=document.getElementById("voter5");   //hide voter 5
        let popup2=document.getElementById("voter7");   //hide voter 7
        popup1.classList.add("hide-voter5");
        popup2.classList.add("hide-voter7");
    }
    else if(gc>ga && gc>gb && gc==gd){  //78
        document.getElementById("Resultg").innerHTML="Voting tied between Sanika & Swaranjali";

        let popup1=document.getElementById("voter5");   //hide voter 5
        let popup2=document.getElementById("voter6");   //hide voter 6
        popup1.classList.add("hide-voter5");
        popup2.classList.add("hide-voter6");
    }
    else if(ga>gb && ga>gc && ga>gd){
        //statement  ga
        resultsound();
        y=1;
        document.getElementById("Resultg").innerHTML="Samrudhi Kale is next HeadGirl with "+ga+" votes";
        
        let popup1=document.getElementById("voter5");   //hide voter 5
        popup1.classList.add("hide-voter5");
        let popup2=document.getElementById("voter6");   //hide voter 6
        popup2.classList.add("hide-voter6");
        let popup3=document.getElementById("voter7");   //hide voter 7
        popup3.classList.add("hide-voter7");
        let popup4=document.getElementById("voter8");   //hide voter 8
        popup4.classList.add("hide-voter8");

        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false; 
    }
    else if(gb>gc && gb>gd){
        //statement  gb
        resultsound();
        y=1;
        document.getElementById("Resultg").innerHTML="Vaishnavi Shinde is next HeadGirl with "+gb+" votes";
        
        let popup1=document.getElementById("voter5");   //hide voter 5
        popup1.classList.add("hide-voter5");
        let popup2=document.getElementById("voter6");   //hide voter 6
        popup2.classList.add("hide-voter6");
        let popup3=document.getElementById("voter7");   //hide voter 7
        popup3.classList.add("hide-voter7");
        let popup4=document.getElementById("voter8");   //hide voter 8
        popup4.classList.add("hide-voter8");

        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false; 
    }
    else if(gc>gd){
        //statement  gc
        resultsound();
        y=1;
        document.getElementById("Resultg").innerHTML="Sanika Dhapte is next HeadGirl with "+gc+" votes";

        let popup1=document.getElementById("voter5");   //hide voter 5
        popup1.classList.add("hide-voter5");
        let popup2=document.getElementById("voter6");   //hide voter 6
        popup2.classList.add("hide-voter6");
        let popup3=document.getElementById("voter7");   //hide voter 7
        popup3.classList.add("hide-voter7");
        let popup4=document.getElementById("voter8");   //hide voter 8
        popup4.classList.add("hide-voter8");

        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false; 
    }    
    else{
        //statement  gd
        resultsound();
        y=1;
        document.getElementById("Resultg").innerHTML="Swaranjali Dhaytonde is next HeadGirl with "+gd+" votes";

        let popup1=document.getElementById("voter5");   //hide voter 5
        popup1.classList.add("hide-voter5");
        let popup2=document.getElementById("voter6");   //hide voter 6
        popup2.classList.add("hide-voter6");
        let popup3=document.getElementById("voter7");   //hide voter 7
        popup3.classList.add("hide-voter7");
        let popup4=document.getElementById("voter8");   //hide voter 8
        popup4.classList.add("hide-voter8");

        document.getElementById("b1").disabled=false; 
        document.getElementById("b2").disabled=false;
        document.getElementById("b3").disabled=false;
        document.getElementById("b4").disabled=false; 
    }
}

function revote(){
    let popup=document.getElementById("popup");
    popup.classList.remove("open-popup");
}
function closedialoge(){
    let popup=document.getElementById("popup");
    popup.classList.remove("open-popup");
}
function CheckRclose(){
    window.open("index.html");
    window.close("DEMS School Election.html");  
}