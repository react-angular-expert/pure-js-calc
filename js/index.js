document.addEventListener('DOMContentLoaded', function() {
  // code

   
   var clear;
   
   var buttons = document.getElementsByClassName("buttons");
   for (let i = 0 ; i < buttons.length; i++) {("click", function(){
      if(clear === true){
        clear = false;
        while(clear.firstChild) clear.removeChild(clear.firstChild);
        
      }
    })
  
   };
  
   document.getElementById("ac").addEventListener("click", function(){
    
    document.getElementById("output").value = "";
    });
   
    document.getElementById("ce").addEventListener("click", function(){
      let del = document.getElementById("output").value;
      document.getElementById("output").value = del.substring(0, del.length-1);
      
      });
      document.getElementById("percent").addEventListener("click", function(){
        clear = true;
        let val = document.getElementById("output").value;
         let first =  parseFloat(val);
          let reg = /[-+%*\/]/;
          let operator = reg.exec(val).toString();
          
          
          let regTwo = val.search(/[-+%*\/]/); 
          let second = val.slice(regTwo+1);
          
        let result = eval(first + operator + first/100*second);
         document.getElementById("output").value = result;
        });
        document.getElementById("divide").addEventListener("click", function(){
          
            let val = document.getElementById("output").value;
            if (val == "0" || val.includes("/")){
              return val;
            }
            else {
              document.getElementById("output").value += "/";
            }
         
          
          
          });
          document.getElementById("seven").addEventListener("click", function(){
            
            document.getElementById("output").value += "7";
            
            });
            document.getElementById("eight").addEventListener("click", function(){
            
              document.getElementById("output").value += "8";
              
 });
 document.getElementById("nine").addEventListener("click", function(){
            
  document.getElementById("output").value += "9";
  
});
 document.getElementById("multiply").addEventListener("click", function(){
          
  document.getElementById("output").value += "*";
  
  });
  document.getElementById("four").addEventListener("click", function(){
            
    document.getElementById("output").value += "4";
    
  });

  document.getElementById("five").addEventListener("click", function(){
            
    document.getElementById("output").value += "5";
    
  });
  document.getElementById("six").addEventListener("click", function(){
            
    document.getElementById("output").value += "6";
    
  });
  document.getElementById("minus").addEventListener("click", function(){
            
    document.getElementById("output").value += "-";
    
  });
  document.getElementById("one").addEventListener("click", function(){
            
    document.getElementById("output").value += "1";
    
  });
  document.getElementById("two").addEventListener("click", function(){
            
    document.getElementById("output").value += "2";
    
  });
  document.getElementById("three").addEventListener("click", function(){
            
    document.getElementById("output").value += "3";
    
  });
  document.getElementById("plus").addEventListener("click", function(){
            
    document.getElementById("output").value += "+";
    
  });
  document.getElementById("zero").addEventListener("click", function(){
            
    document.getElementById("output").value += "0";
    
  });
  document.getElementById("dot").addEventListener("click", function(){
            
    document.getElementById("output").value += ".";
    
  });
  document.getElementById("equals").addEventListener("click", function(){
    clear = true;
    let val = document.getElementById("output").value;
   let first =  parseFloat(val);
    let reg = /[-+%*\/]/;
    let operator = reg.exec(val).toString();
    
    
    let regTwo = val.search(/[-+%*\/]/); 
    let second = val.slice(regTwo+1);
    document.getElementById("output").value = function(){
      
while(val.firstChild) val.removeChild(val.firstChild);

    }
    let result = eval(first + operator + second);
    document.getElementById("output").value = result;


  });
  
  
})
