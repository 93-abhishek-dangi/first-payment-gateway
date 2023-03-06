"use strict"
let card_0 = document.querySelector(".card-number-box");
card_0.innerText = "XXXX-XXXX-XXXX-XXXX";
document.querySelector(".card-number-input").addEventListener("input", function(){
    const American=/^3[47][0-9]{13}$/; //American Express
    const Visa=/^[4][0-9]{15}$/; //Visa
    const Master=/^[5][0-9]{15}$/; //Master
    const Rupay=/^[6][0-9]{15}$/; //Rupay
    let card = document.querySelector('.card-number-input').value;
    let cc = card.match(/\d{1,4}/g);

    if(American.test(card) && (cc !==null)){
        card_0.innerText = cc.join('-');
        document.querySelector(".card-1").style = "display:block;";
        document.querySelector(".c-1").style = "display:block;";
        document.querySelector(".card-2").style = "display:none;";
        document.querySelector(".c-2").style = "display:none;";
        document.querySelector(".card-3").style = "display:none;";
        document.querySelector(".c-3").style = "display:none;";
        document.querySelector(".card-4").style = "display:none;";
        document.querySelector(".c-4").style = "display:none;";
        document.querySelector(".invalid-card").style.display = "none";
        document.querySelector(".error-1").innerText = "VALID CARD NUMBER";
        document.querySelector(".error-1").style = "color:green; font-size:14px";
        }
        else if(Visa.test(card) && (cc !==null)){
            card_0.innerText = cc.join('-');
            document.querySelector(".card-1").style = "display:none;";
            document.querySelector(".c-1").style = "display:none;";
            document.querySelector(".card-2").style = "display:none;";
            document.querySelector(".c-2").style = "display:none;";
            document.querySelector(".card-3").style = "display:none;";
            document.querySelector(".c-3").style = "display:none;";
            document.querySelector(".invalid-card").style.display = "none";
            document.querySelector(".error-1").innerText = "Valid card";
            document.querySelector(".error-1").style = "color:green; font-size:14px";
            document.querySelector(".card-4").style = "display:block;"
            document.querySelector(".c-4").style = "display:block;"
    
         } 
       else if(Master.test(card) && (cc !=null)){
        card_0.innerText = cc.join('-');
        document.querySelector(".card-1").style = "display:none;"
        document.querySelector(".c-1").style = "display:none;"
        document.querySelector(".invalid-card").style.display = "none";
        document.querySelector(".error-1").innerText = "Valid card";
        document.querySelector(".error-1").style = "color:green; font-size:14px";
        document.querySelector(".card-4").style = "display:none;";
        document.querySelector(".c-4").style = "display:none;";
        document.querySelector(".card-2").style = "display:block;";
        document.querySelector(".c-2").style = "display:block;";
        document.querySelector(".card-3").style = "display:none;";
            document.querySelector(".c-3").style = "display:none;";
       } 
       else if(Rupay.test(card) && (cc !=null)){
        card_0.innerText = cc.join('-');
        document.querySelector(".card-1").style = "display:none;"
        document.querySelector(".c-1").style = "display:none;"
        document.querySelector(".invalid-card").style.display = "none";
        document.querySelector(".error-1").innerText = "Valid card";
        document.querySelector(".error-1").style = "color:green; font-size:14px";
        document.querySelector(".card-4").style = "display:none;"
        document.querySelector(".c-4").style = "display:none;"
        document.querySelector(".card-2").style = "display:none;"
        document.querySelector(".c-2").style = "display:none;"
        document.querySelector(".card-3").style = "display:block;"
        document.querySelector(".c-3").style = "display:block;"
        document.querySelector(".error-1").innerText = "Valid card";
        document.querySelector(".error-1").style = "color:green; font-size:14px";

       } 
     else{
        if(card == ''){
            document.querySelector('.invalid-card').style = 'display:none';
            document.querySelector('.card-1').style = 'display:none';
            document.querySelector('.card-2').style = 'display:none';
            document.querySelector('.card-3').style = 'display:none';
            document.querySelector('.card-4').style = 'display:none';
            document.querySelector('.c-1').style = 'display:none';
            document.querySelector('.c-2').style = 'display:none';
            document.querySelector('.c-3').style = 'display:none';
            document.querySelector('.c-4').style = 'display:none';
         

            card_0.innerText = 'XXXX-XXXX-XXXX-XXXX';
        }
        else{
            document.querySelector('.invalid-card').style = 'display:block;';
            card_0.innerText = 'Invalid Card';
            document.querySelector('.card-1').style = 'display:none';
            document.querySelector('.card-2').style = 'display:none';
            document.querySelector('.card-3').style = 'display:none';
            document.querySelector('.card-4').style = 'display:none';
            document.querySelector('.c-1').style = 'display:none';
            document.querySelector('.c-2').style = 'display:none';
            document.querySelector('.c-3').style = 'display:none';
            document.querySelector('.c-4').style = 'display:none';
            document.querySelector(".error-1").innerText = "INVALID CARD NUMBER";
            document.querySelector(".error-1").style = "color:red; font-size:14px";
        }
        
     }
  
  });
  document.querySelector(".card-name-input").oninput = () =>{
    let card_name_input = document.querySelector(".card-name-input").value;
    let card_holder_name = document.querySelector(".card-holder-name");
    card_holder_name.innerText = card_name_input;
  };

  document.querySelector(".month-input").oninput = () =>{
    document.querySelector(".exp-month").innerText = document.querySelector(".month-input").value;
  };

  document.querySelector(".year-input").oninput = () =>{
    document.querySelector(".exp-year").innerText = document.querySelector(".year-input").value;
  }

  document.querySelector('.cvv-input').onfocus = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onblur = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = '';
    let CVV = document.querySelector('.cvv-input').value;
    let CVV1 = '';
    for(let i= 0; i<CVV.length;i++){
        CVV1 += "# ";
            document.querySelector('.cvv-box').innerText = CVV1;
    }
}
 




















