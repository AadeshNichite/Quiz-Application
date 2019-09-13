$(function(){

    getJSON();
  
  })
  function getJSON(){
   // console.log("Starting..");
   $.getJSON("ques-db.json",function(json){
    questions = json;
     //console.log(questions);
    // console.log(Object)
    //    const keys = Object.keys(questions)
    //    console.log(keys.length);
    //    // [0 -> 1] * 1
    //    let randIndex = Math.floor(Math.random()*(keys.length));
    //    console.log(randIndex);
    localStorage.setItem("jsonn",JSON.stringify(questions));
    // // console.log('hello');
     let set= JSON.parse(localStorage.getItem("jsonn"));
     //console.log(set);
    const keys1 = Object.keys(set);
    let q = set[keys1[1]];
     console.log(q["question"]);
     var key=q["question"];
    //  var ans=q["options"][0];
    //  console.log(ans);
    //  //console.log(k);
    // console.log(q[options[0]]);

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