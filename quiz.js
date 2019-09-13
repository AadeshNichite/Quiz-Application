$(function(){

    getJSON();
  
  })


  function getJSON(){
    console.log("Starting..");
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
     var k=q["question"]
     console.log(q["options"]);

     

    // console.log(localStorage.getItem("jsonn"));
   });
    // let randIndex = Math.floor(Math.random()*(keys1.length));
 //    console.log('dfddf');
 }