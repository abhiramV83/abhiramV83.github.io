const cal = (a,b,op)=>{
    if(op=='+'){
        return a+b;
    }
    else if(op=="-"){
        return a-b;
    }
    else if(op=='*'){
        return a*b;
    }
    else if(op=='/'){
        return a/b;
    }
    return "invalid"
}
let ans = cal(1,2,'+');
console.log(ans
);

