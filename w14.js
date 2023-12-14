//1
function random (length = 12){
    return Array.from(Array(length), ()=> Math.floor(Math.random()*100));
}
const grades = random();
console.log(grades);
//2
let sum = grades.reduce((a,b)=>a+b, 0);
let average = sum/grades.length ; 
console.log(average);
//3
const maxNum = Math.max(...grades);
console.log(maxNum);
//4
 const minNum = Math.min(...grades);
 console.log(minNum);
 //5
const score = grades.filter(function(num){
    return  num>=60;
})
console.log(score.length);// 5 - количество с полодительными оценками
//6
const badScore = grades.filter(function(num){
    return num<60;
})
console.log(badScore.length);
//7
const letterScore = grades.map(function(num){
    if(num<=100 && num>=80){
        return 'А';
    } else if(num<=79 && num>=60){
        return 'B';
    }else if(num<=59&& num<=40){
       return 'C';
    } else if(num<=39 && num>=20){
        return 'D';
    } else {
        return 'E';
    }
})

console.log(letterScore);
