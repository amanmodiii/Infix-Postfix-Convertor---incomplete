var stack=[];
var top = -1;
let res="";

// console.log("hi");

function push(ch){
    top++;
    stack[top]=ch;
}
function pop(){
    if(top != -1){
        res+=stack[top];
        top--;
    }
}
function priority(ch){
    if(ch=='(')return 0;
    else if(ch=='+'||ch=='-')return 1;
    else if(ch=='*'||ch=='/')return 2;
    else if(ch=='^')return 3;
    return 0;
}
let infix="";
var len=0;
document.querySelector(".compute").addEventListener("click",function(){
    res="";
    infix = document.querySelector(".inputExp").value;
    console.log(infix);
    len = infix.length;
    var i;
    for(i = 0;i < len ; i++){
        let ch = infix[i];
        if((ch>=65 && ch<=90)||(ch>=97 && ch<=122)){
            res+=ch;
        }
        else if(ch === '('){
            push(ch);
        }
        else if(ch === ')'){
            while(stack[top]!='('){
                pop();
            }
            push(ch);
        }
        else{
            while(priority(stack[top])>=priority(ch)){
                pop();
            }
            push(ch);
        }
    }
    while(top!=-1){
        pop();
    }
    console.log(res);
    document.querySelector(".result").innerText = res;
});