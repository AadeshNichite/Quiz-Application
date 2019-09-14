$(function(){

    getJSON();
  
  })
  function getJSON(){
   // console.log("Starting..");
   $.getJSON("ques-db.json",function(json){
    questions = json;
     //console.log(questions);
     //console.log(Object);
    const keys = Object.keys(questions);
       // console.log(keys.length);
    //    // [0 -> 1] * 1
    let randIndex = Math.round(Math.random()*(keys.length));
    console.log(randIndex);
    localStorage.setItem("jsonn",JSON.stringify(questions));
    // // console.log('hello');
     let set= JSON.parse(localStorage.getItem("jsonn"));
     //console.log(set);
    const keys1 = Object.keys(set);
    let q = set[keys1[randIndex]];
     console.log(q["question"]);

     

     
     var key=q["question"];
     var answer=q["answer"];
     sessionStorage.setItem("que","key");
     sessionStorage.setItem("ans","answer");
    // console.log(answer);
    //  var ans=q["options"][0];
    //  console.log(ans);
    //console.log(key);
    // console.log(q[options[0]]);
    localStorage.setItem("question",JSON.stringify(q));
      document.getElementById("que").innerHTML=key;
      document.getElementById("value1").innerHTML=q["options"][0];
      document.getElementById("value2").innerHTML=q["options"][1];
      document.getElementById("value3").innerHTML=q["options"][2];
      document.getElementById("value4").innerHTML=q["options"][3];

    // console.log(localStorage.getItem("jsonn"));
   });
    // let randIndex = Math.floor(Math.random()*(keys1.length));
 //    console.log('dfddf');
 }
function process()
{
    var selectedValue=document.getElementById("value1").value;
    console.log(selectedValue);
    // let set= JSON.parse(localStorage.getItem("jsonn"));
    // console.log(set);
    var que = sessionStorage.getItem("que");
    var ans = sessionStorage.getItem("ans");
    console.log(question);
    console.log(answer);
    // if(selectedValue==answer)
    // {
    //     alert("yess");
    // }

}
function process1()
{
    var selectedValue=document.getElementById("value2").value;
    console.log(selectedValue);
    // if(selectedValue==answer)
    // {
    //     alert("yess");
    // }
}
function process2()
{
    var selectedValue=document.getElementById("value3").value;
    console.log(selectedValue);
    // if(selectedValue==answer)
    // {
    //     alert("yess");
    // }
}
function process3()
{
    var selectedValue=document.getElementById("value4").value;
    console.log(selectedValue);
    // if(selectedValue==answer)
    // {
    //     alert("yess");
    // }
}


function findResult()
{
}