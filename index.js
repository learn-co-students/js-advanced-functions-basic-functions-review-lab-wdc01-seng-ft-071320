// Your code here

function saturdayFun(phrase = "roller-skate"){
    return `This Saturday, I want to ${phrase}!`
}

function mondayWork(phrase = "go to the office"){
    return `This Monday, I will ${phrase}.`
}

let wrapAdjective = function(str = "*"){
    return function inner(adj = "special"){
        return `You are ${str}${adj}${str}!`
    }
}

const Calculator = {
    add: function(){
        return 1 + 3 
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1 *3
    },
    divide: function(){
        return 10/5
    }
}

function actionApplyer(int, arr){
    if (arr.length === 0){
        return int
    }
    else {
        let start = int
        for (let i = 0; i < arr.length; i++){
            start = arr[i](start)
        }
        return start
    }

}