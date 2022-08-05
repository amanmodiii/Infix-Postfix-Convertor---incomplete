var stack;
var top = -1;

var res='';

var infix='';
var len=0;

var i;

document.querySelector(".compute").addEventListener("click",function(){
    res="";
    top=-1;
    stack=[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    infix = document.querySelector(".inputExp").value;
    len = infix.length;

    for(i = 0;i < len ; i++){
        let ch = infix[i];
        if(isLetter(ch)){
            res+=ch;
        }
        else if(ch === '('){
            push(ch);
        }
        else if(ch === ')'){
            while(stack[top]!='('){
                pop;
            }
            push(ch);
        }
        else{
            while(priority(stack[top])>=priority(ch)){
                pop;
            }
            push(ch);
        }
    }
    while(top!=-1){
        pop;
    }
    console.log(res);
    document.querySelector(".result").innerText = res;
});

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
    if(ch==='('){
        return 0;
    }
    else if(ch==='+'||ch==='-'){
        return 1;
    }
    else if(ch==='*'||ch==='/'){
        return 2;
    }
    else if(ch==='^'){
        return 3;
    }
    return 0;
}
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}