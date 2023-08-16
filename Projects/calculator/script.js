let string="";
let buttons=[...document.querySelectorAll(".buttons")];


buttons.forEach((boxbtn)=>{
    boxbtn.addEventListener("click",(e)=>{

        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector("#screen").value=string;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.querySelector("#screen").value=string;
        }
        else{
            string=string + e.target.innerHTML;
            document.querySelector("#screen").value=string;
        }
        
    })
})