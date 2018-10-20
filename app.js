var nextButton = document.getElementById("next");       // Stores the (next) button
var prevButton = document.getElementById("previous");   // Stores the previous button
var left = document.getElementById("left");             // Stores the left holder
var right = document.getElementById("right");           // Stores the right holder
var center = document.getElementById("center");         // Stores the active/central holder
var float = document.getElementById("float");           // Stores the hidden floating holder
var script = document.getElementById("script");
var closeButton = document.getElementById("close");
var container=document.getElementsByClassName("container")[0];
var textDetails=document.getElementById("textDetails");
var logo=document.getElementsByTagName("img")[0];
var contact=document.getElementsByClassName("contactButton")[0];
var header=document.getElementsByClassName("header")[0];
const numEvents = 9;
var currentEvent = 0;
var width= window.screen.height;
var height= window.screen.width;
var profShows=
{
    name_Of_Event:["Tatti Artist","PROF SHOW 2","PROF SHOW 3","PROF SHOW 4","PROF SHOW 5","PROF SHOW 6","PROF SHOW 7","PROF SHOW 8","PROF SHOW 9"],
    details: {
      date:["DAY ONE1","DAY ONE2","DAY ONE3","DAY ONE4","DAY ONE5","DAY ONE6","DAY ONE7","DAY ONE8","DAY ONE9"],
      time:["4:45 PM","4:45 PM","4:45 PM","4:45 PM","4:45 PM","4:45 PM","4:45 PM","4:45 PM","4:45 PM"],
      venue:["SR Lawns","SR Lawns","SR Lawns","SR Lawns","SR Lawns","SR Lawns","SR Lawns","SR Lawns","SR Lawns"]
    },
    description:[
    "Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"
    ,"Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning",
    "Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning",
    "Oasis brings you a four hour long extravaganza of Electronic Music Festival, a night boasting of one of the best EDM line-ups in India, one night after every crescendo, you will dive backdown giddy and breathless, until all there will be left with silence that was at the beginning"]
}
var centerTop = 15;
var othersTop = 30;
var centerLeft = 30;
var leftLeft = -10;
var rightLeft = 77;
var float1Left = -45;
var float2Left = 115;
var centerSize = 30;
var othersSize = 25;
var insideHeight1 = "120vw";
var insideWidth1 = "120vw";
var insideTop1 = -25;
var insideLeft1 = -15;
var insideHeight2 = "25vw";
var insideWidth2 = "25vw";
var insideTop2 = "13vh";
var insideLeft2 = 10;
var insideDetailsLeft = 40;
var insideDetailsTop = -100;
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      triggerNext();
    } else {
      // swiped right
      triggerPrev();
    }  
  } 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
};



//use of @media queries to chnage style with window width and make website responsive
var w=window.matchMedia("(max-width: 500px)")
responsiveChange(w);
w.addListener(responsiveChange);
function responsiveChange(w)
{
    if(w.matches & window.innerWidth<=500)
    {   
        centerTop = 20;
        othersTop = 33;
        centerLeft = 24;
        leftLeft = -25;
        rightLeft = 85;
        float1Left = -60;
        float2Left = 120;
        centerSize = 53;
        othersSize = 40;
        center.style.top=centerTop+"vh";
        center.style.left=centerLeft+"vw"
        center.style.width=centerSize+"vw";
        center.style.height=centerSize+"vw";
        right.style.top=othersTop+"vh";
        right.style.left=rightLeft+"vw"
        right.style.width=othersSize+"vw";
        right.style.height=othersSize+"vw";
        left.style.top=othersTop+"vh";
        left.style.left=leftLeft+"vw";
        left.style.width=othersSize+"vw";
        left.style.height=othersSize+"vw";
        float.style.top=othersTop+"vh";
        float.style.left=float2Left+"vw"
        float.style.width=othersSize+"vw";
        float.style.height=othersSize+"vw";
        center.style.cursor="";
        center.removeEventListener("click", open);
        document.getElementById("next").src="direction.svg";
        document.getElementById("previous").src="direction.svg";
        addDetails(currentEvent);
    }
    else
    {
       
        center.style.top="15vh";
        center.style.left="30vw";
        center.style.width="30vw";
        center.style.height="30vw";
        right.style.top="30vh";
        right.style.left="77vw"
        right.style.width="25vw";
        right.style.height="25vw";
        left.style.top="30vh";
        left.style.left="-10vw"
        left.style.width="25vw";
        left.style.height="25vw";
        float.style.top="30vh";
        float.style.left="115vw"
        float.style.width="25vw";
        float.style.height="25vw";
        centerTop = 15;
        othersTop = 30;
        centerLeft = 30;
        leftLeft = -10;
        rightLeft = 77;
        float1Left = -45;
        float2Left = 115;
        centerSize = 30;
        othersSize = 25;
        document.getElementById("next").src="next.png";
        document.getElementById("previous").src="previous.png";
        document.getElementById("detailsBackground").style.display="none";
        document.getElementById("close").style.display="none";
        breifDescription();
        center.addEventListener("click",open);
    }
}
script.addEventListener("load", function(){
    enable();
   
    window.addEventListener("keydown", enterCheck);
    setPointers();
    if(window.innerWidth>=500)
    {breifDescription();}
});

function keyMove(){
    if (window.event.key == "s" || window.event.key == "a" || window.event.key == "ArrowDown" || window.event.key == "ArrowLeft"){
       triggerPrev();
    } else if(window.event.key == " " || window.event.key == "w" || window.event.key == "d" || window.event.key == "ArrowUp" || window.event.key == "ArrowRight"){
        triggerNext();
    }
}
function resize(){
    if(window.innerWidth <= 500)
{
    center.innerHTML="<center><h3 class=\"noSelect\"><br></h3></center>";
    if(typeof document.getElementsByTagName("h3") !== "undefined" && document.getElementsByTagName("h3") != null)
     setTimeout(function() {document.getElementsByTagName("h3")[0].style.opacity=1;}, 5);  

     center.innerHTML+="<center><h4><br><br></center>";
     if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h4") != null)
     setTimeout(function() {document.getElementsByTagName("h4")[0].style.opacity=1;}, 5); 
    
}
else
{
    nextButton.addEventListener("click", triggerNext);
    prevButton.addEventListener("click", triggerPrev);
}
}
window.onresize = resize;


function setPointers(){
    center.style.cursor = "pointer";
    float.style.cursor = "";
    right.style.cursor = "";
    left.style.cursor = "";
}

function escapeCheck(){
    if (window.event.key == "Escape"){
        close();
    }
}

function enterCheck(){
    if (window.event.key == "Enter"){
        open();
    }
}

function mod(a, b){
    if (a < 0){
        a %= b;
        return (b + a);
    } else {
        return (a % b);
    }
}

function imageChange(change){

    var floatEvent = 0;

    if (change == 1){
        floatEvent = currentEvent + 2;
        floatEvent = mod(floatEvent, numEvents);
    } else {
        floatEvent = currentEvent - 2;
        floatEvent = mod(floatEvent, numEvents);
    }

    currentEvent += change;
    currentEvent = mod(currentEvent, numEvents);

    float.style.backgroundImage = "url(\"" + floatEvent.toString() + ".jpg\")";
}

function enable(){
    nextButton.addEventListener("click", triggerNext);
    prevButton.addEventListener("click", triggerPrev);
    document.addEventListener("wheel", scroll);
    window.addEventListener("keydown", keyMove);
    window.addEventListener("keydown", enterCheck);
    document.getElementsByClassName("container")[0].addEventListener("touchstart", startTouch, false);
	document.getElementsByClassName("container")[0].addEventListener("touchmove", moveTouch, false);
}

function disable(){
    nextButton.removeEventListener("click", triggerNext);
    prevButton.removeEventListener("click", triggerPrev);
    document.removeEventListener("wheel", scroll);
    window.removeEventListener("keydown", keyMove);
    window.removeEventListener("keydown", enterCheck);
    document.getElementsByClassName("container")[0].removeEventListener("touchstart", startTouch, false);
	document.getElementsByClassName("container")[0].removeEventListener("touchmove", moveTouch, false);
}

function scroll(){
    if(window.innerWidth>=500)
    {
        if(window.event.deltaY > 0){
            triggerNext();
        } else {
            triggerPrev();
        }
    }
    
}

// For reassignment of the variables
function assign(){
    left = document.getElementById("left");
    right = document.getElementById("right");
    center = document.getElementById("center");
    float = document.getElementById("float");
}

function triggerNext(){
    disable();
    next_reposition();
    removeBreifDescription();
    setTimeout(next, 40);
}

function triggerPrev(){
    disable();
    previous_reposition();
    removeBreifDescription();
    setTimeout(previous, 40);
}

function next()
{
    assign();
    center.removeEventListener("click", open);
    window.removeEventListener("keydown", enterCheck);

    imageChange(1);
    float.style.visibility = "visible";
    //moving left to left side out of window
    left.style.left=float1Left+"vw";
    left.style.top=othersTop+"vh";
    left.style.transition="1s";
    left.style.zIndex = 0;

    //moving right to center of window and increasing its size(center position)
    right.style.position="absolute";
    right.style.transition="1s";
    right.style.left=centerLeft+"vw";
    right.style.top=centerTop+"vh";
    right.style.height=centerSize+"vw";
    right.style.width=centerSize+"vw";
    right.style.zIndex = 10;
    //moving center to left edge of window and decreasing its size(left position)
    center.style.position="absolute";
    center.style.transition="1s";
    center.style.left=leftLeft+"vw";
    center.style.top=othersTop+"vh";
    center.style.height=othersSize+"vw";
    center.style.width=othersSize+"vw";
    center.style.zIndex = 0;
    //moving float from outside to inside right edge of window from right(right position)
    float.style.transitionDuration="1s";float.style.transitionProperty="top, left, width, height";        //to set the transition time back to 1s after changing above
    float.style.position="absolute";
    float.style.left=rightLeft+"vw";
    float.style.top=othersTop+"vh";
    float.style.zIndex = 0;

    //changing ids of div with respect to their position
    left.id="float";
    right.id="center";
    center.id="left";
    float.id="right";

    assign();
    if(window.innerWidth>=500)
    {
    breifDescription();
    center.addEventListener("click", open);
   }
   else{
    addDetails(currentEvent);
   }
    
    setPointers();
    window.addEventListener("keydown", enterCheck);
    

    setTimeout(enable, 400);
}

function next_reposition()
{
    //moving back left to float position at right outside window(float position)
    assign();
    document.getElementById("float").style.visibility = "hidden";
    document.getElementById("float").style.transition="0s";
    document.getElementById("float").style.position="absolute";
    document.getElementById("float").style.left=float2Left+"vw";
    document.getElementById("float").style.top=othersTop+"vh";
}
function previous()
{   assign();
    center.removeEventListener("click", open);
    window.removeEventListener("keydown", enterCheck);
    
    imageChange(-1);
    //moving right to right side out of window
    right.style.position="absolute";
    right.style.transition="1s";
    right.style.left=float2Left+"vw";
    right.style.top=othersTop+"vh";
    right.style.zIndex = 0;
    //moving left to center of window and increasing its size(center position)
    left.style.position="absolute";
    left.style.transition="1s";
    left.style.left=centerLeft+"vw";
    left.style.top=centerTop+"vh";
    left.style.height=centerSize+"vw";
    left.style.width=centerSize+"vw";
    left.style.zIndex = 10;
    //moving center to right edge of window and decreasing its size(right position)
    center.style.position="absolute";
    center.style.transition="1s";
    center.style.left=rightLeft+"vw";
    center.style.top=othersTop+"vh";
    center.style.height=othersSize+"vw";
    center.style.width=othersSize+"vw";
    center.style.zIndex = 0;
    //moving float from outside to inside left edge of window from left(left position)
    float.style.transitionDuration="1s";
    float.style.transitionProperty="top, left, width, height";        //to set the transition time back to 1s after changing above
    float.style.position="absolute";
    float.style.left=leftLeft+"vw";
    float.style.top=othersTop+"vh";
    float.style.zIndex = 0;

    //changing ids of div with respect to their position

    left.id="center";
    right.id="float";
    center.id="right";
    float.id="left";

    assign();
    if(window.innerWidth>=500)
    {
    breifDescription();
    center.addEventListener("click", open);
    }
    else{
    addDetails(currentEvent);
    }
    setPointers();
    window.addEventListener("keydown", enterCheck);
    

    setTimeout(enable, 400);
}
function previous_reposition()
{
    //moving back right to float position at left outside window(float position)
    assign();
    float.style.transition="0s";
    float.style.position="absolute";
    float.style.left=float1Left+"vw";
    float.style.top=othersTop+"vh";
}
function addDetails(x)
{
    document.getElementById("detailsBackground").style.display="block";
    textDetails.innerHTML="<div id='description'><div>"+profShows.name_Of_Event[x]+"</div><div>"+profShows.details.time[x] +", "+ 
    profShows.details.venue[x]+"<br>"+ profShows.details.date[x]+"</div><div>"+profShows.description[x]+"</div></div>";
    setTimeout(function(){document.getElementById("description").style.opacity=1;},5);   
}

//opening a particular profshow on click
var c=0; //counter to prevent the function from running again and again if after opening a profshow user is clicking on i
function open(){   
    disable();
    center.style.cursor = "";
    center.removeEventListener("click", open);
    window.removeEventListener("keydown", enterCheck);
    c++;
    if(c==1)
    {   
        if(typeof document.getElementsByTagName("h3") !== "undefined" && document.getElementsByTagName("h3") != null)
        document.getElementsByTagName("h3")[0].style.display="none";
        if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h3") != null)
        document.getElementsByTagName("h4")[0].style.display="none";
        center.style.transition="0.5s";
        center.style.width=insideWidth1;
        center.style.height=insideHeight1;
        center.style.position="absolute";
        center.style.top=insideTop1+"vw";
        center.style.left=insideLeft1+"vw";
        center.style.zIndex = 10;
        var t=setTimeout(function()
        {     
            addDetails(currentEvent);
            // if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h4") != null)
            // setTimeout(function() {document.getElementsByTagName("h4")[0].style.opacity=1;}, 5);

            center.style.transition="0.5s";
            center.style.borderRadius="50%";
            center.style.width=insideWidth2;
            center.style.height=insideHeight2;
            center.style.position="absolute";
            center.style.top=insideTop2;
            center.style.left=insideLeft2+"vw";
            document.getElementById("close").style.display="inline";
            closeButton.addEventListener("click", close);
            window.addEventListener("keydown", escapeCheck);
        },500);
        x=0;
    }
}

//to close the open profshow div
function close()
{   
    c--;
    center.style.transition="0.5s";
    center.style.width=insideWidth1;
    center.style.height=insideHeight1;
    center.style.position="absolute";
    center.style.top=insideTop1+"vw";
    center.style.left=insideLeft1+"vw";

    var t=setTimeout(function()
    {
        document.getElementById("detailsBackground").style.display="none";
        // details.style.display="none";
        // details.style.transition="0.5s";
        // description.style.display="none";
        // description.style.transition="0.5s";
        center.style.transition="0.5s";
        center.style.borderRadius="50%";
        center.style.width=centerSize+"vw";
        center.style.height=centerSize+"vw";
        center.style.position="absolute";
        center.style.top=centerTop+"vh";
        center.style.left=centerLeft+"vw";
        document.getElementsByTagName("h3")[0].style.display="inline";
        document.getElementsByTagName("h4")[0].style.display="inline";
        document.getElementById("close").style.display="none";
        enable();
        breifDescription();
        closeButton.removeEventListener("click", close);
        center.addEventListener("click", open);
        window.addEventListener("keydown", enterCheck);
        window.removeEventListener("keydown", escapeCheck);
        setPointers();
    },500);
}


//to open contact details
function openContactDetails()
{
    disable();
    var details=document.getElementById("contactDetails");
    var close=document.getElementById("closeContactDetails");
    details.style.display="block";
    close.style.display="block";
    var x=setTimeout(function() {
        var details=document.getElementById("contactDetails");
        details.style.opacity=1;
        var close=document.getElementById("closeContactDetails");
        close.style.opacity=1;
    }, 5);
}
//to close contact details
function closeContactDetails()
{
    enable();
    var details=document.getElementById("contactDetails");
    var close=document.getElementById("closeContactDetails");
    details.style.opacity=0;
    close.style.opacity=0;
    var x=setTimeout(function() {
        var details=document.getElementById("contactDetails");
        var close=document.getElementById("closeContactDetails");
        details.style.display="none";
        close.style.display="none";
    }, 500);
}

//to show the name of profshow and its breif description
function breifDescription()
{  
     center.innerHTML="<center><h3 class=\"noSelect\"><br>"+profShows.name_Of_Event[currentEvent]+"</h3></center>";
    if(typeof document.getElementsByTagName("h3") !== "undefined" && document.getElementsByTagName("h3") != null)
     setTimeout(function() {document.getElementsByTagName("h3")[0].style.opacity=1;}, 5);  

     center.innerHTML+="<center><h4>Date:-"+ profShows.details.date[currentEvent]+"<br>Time:-"+ profShows.details.time[currentEvent]+"<br>Venue:-"+ profShows.details.venue[currentEvent]+"</h4></center>";
     if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h4") != null)
     setTimeout(function() {document.getElementsByTagName("h4")[0].style.opacity=1;}, 5); 
}


function removeBreifDescription()
{
    left.innerHTML="";
    right.innerHTML="";
    float.innerHTML="";
    center.innerHTML="";
}


