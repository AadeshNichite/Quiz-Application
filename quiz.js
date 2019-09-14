$(function(){
    getJSON();
  })

  let mark=0;  
 function findResult(){
    //let mark= JSON.parse(localStorage.getItem("mark"));
    $("#result").text(mark);
    console.log(mark);
 }
  
  function getJSON(){
     

    $.getJSON("ques-db.json",function(json){
    
   const keys = Object.values(json);
    let randIndex = Math.floor(Math.round(Math.random()*(10)));

    let value = keys[randIndex];
       // console.log(q);
    //  let key=value["question"];
       // console.log(keys[randIndex].question);
     //console.log(key);
     //let answ=value["answer"];
     sessionStorage.setItem("que",keys[randIndex].question);
     sessionStorage.setItem("ans",keys[randIndex].answer);
    localStorage.setItem("question",JSON.stringify(value));
    $("#que").text(keys[randIndex].question);
    $("#value1").text(value["options"][0]);
    $("#value2").text(value["options"][1]);
    $("#value3").text(value["options"][2]);
    $("#value4").text(value["options"][3]);

   });

}
function process()
{
    var selectedValue=document.getElementById("value1").value;
    console.log(selectedValue);
    
    var que = sessionStorage.getItem("que");
    var ans = sessionStorage.getItem("ans");

    if(ans==selectedValue)
    {
        console.log("Right answer");
        
        mark++;
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
        mark++;
       
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
        mark++;
       
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
        
        // localStorage.setItem("mark",mark);
    
    }
    else
    {
        console.log("wrong answer");
        
    }
    getJSON();
    
}



    //     console.log(mark);
    // 

