$(function(){
    getJSON();
  })

  let mark=0;  
  $("#result").text(mark);
let count=0;

  function getJSON(){
    
     if(count<10)
     {
    
        $.getJSON("ques-db.json",function(json){
    
   const keys = Object.values(json);
    let randIndex = Math.floor(Math.round(Math.random()*7));

    let value = keys[randIndex];
       // console.log(q);
    //  let key=value["question"];
       // console.log(keys[randIndex].question);
     //console.log(key);
     //let answ=value["answer"];
     sessionStorage.setItem("que",keys[randIndex].question);
     sessionStorage.setItem("ans",keys[randIndex].answer);
     sessionStorage.setItem("que",count);
    localStorage.setItem("question",JSON.stringify(value));
    
    $("#queNo").text(count);
    $("#que").text(keys[randIndex].question);
    $("#value1").text(value["options"][0]);
    $("#value2").text(value["options"][1]);
    $("#value3").text(value["options"][2]);
    $("#value4").text(value["options"][3]);
    $("#result").text(mark);
   });
}

count++;
}
function process()
{
    let selectedValue=document.getElementById("value1").value;
    console.log(selectedValue);
    
    let que = sessionStorage.getItem("que");
    let ans = sessionStorage.getItem("ans");

    if(ans==selectedValue)
    {
        console.log("Right answer");
        
        mark=mark+1;
        // localStorage.setItem("mark",mark);
        // console.log1(mark);
        console.log(mark);
        
    }
    else
    {
        console.log("wrong answer");
        
    }
    getJSON();
    

}
function process1()
{
    var selectedValue=document.getElementById("value2").value;
    console.log(selectedValue);
    var que = sessionStorage.getItem("que");
    var ans = sessionStorage.getItem("ans");
    if(ans==selectedValue)
    {
        console.log("Right answer")
        mark=mark+1;
       
        // localStorage.setItem("mark",mark);
    
    }
    else
    {
        console.log("wrong answer");
        
    }
    getJSON();
    
}
function process2()
{
    var selectedValue=document.getElementById("value3").value;
    console.log(selectedValue);
    var que = sessionStorage.getItem("que");
    var ans = sessionStorage.getItem("ans");

    if(ans==selectedValue)
    {
        console.log("Right answer");
        mark=mark+1;
       
    //    localStorage.setItem("mark",mark);
    
    }
    else
    {
        console.log("wrong answer");
       
    }
    getJSON();
    
}
function process3()
{
    var selectedValue=document.getElementById("value4").value;
    console.log(selectedValue);
    var que = sessionStorage.getItem("que");
    var ans = sessionStorage.getItem("ans");
   
    if(ans==selectedValue)
    {
        console.log("Right answer");
        mark=mark+1;
        var ans = sessionStorage.getItem("mark");
        
        // localStorage.setItem("mark",mark);
    
    }
    else
    {
        console.log("wrong answer");
        
    }
    getJSON();
    
}

let ans = sessionStorage.getItem("ans");
         $("#result").text(ans);

    //     console.log(mark);
     
     function findResult(){
         //let mark= JSON.parse(localStorage.getItem("mark"));
         
        console.log(ans);
       }
