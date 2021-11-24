// let a = [7, 4, 4, 7, 4, 10, 2, 1, 2, 1];
//let b =  [1, 101, 1, 16, 16, 16, 4, 4, 49, 49]
// function comp(a, b){ 
//  a=a.map(function(element) {
//     return element*element;
// });

// a.sort();
// b.sort();
// console.log(a);
// console.log(b);

// a1=a.join("");
// b1=b.join("");
// console.log(a1);
// console.log(b1);

// if (a1===b1){
//     console.log("true")
//     return true
// }else{
//     console.log("false")
//     return false
// }

// }

// comp(a,b)






// let a = [7, 4, 4, 7, 4, 10, 2, 1, 2, 1];
// let b = [1, 100, 1, 16, 16, 16, 4, 4, 49, 49];
// if((a !== null)&&(b !== null)){
// comp(a,b)   
// }
// function comp(a, b){ 
//  if (Array.isArray(a) && Array.isArray(b)){
//  a=a.map(function(element) {
//     return element*element;
// });

// a.sort();
// a1=a.join("");
// b.sort();
// b1=b.join("");   
// console.log(a1)
// console.log(b1)

// if (a1===b1){ 
//     console.log("true")

//     return true;
// }else{
//     console.log("false")
//     return false;
// }
//  }  
//   return false;
// }



// var arr = [[10,0],[3,5],[5,8]]

// function arraySum(arr){
//   var sum = 0;
//   var sum1 = 0;
//   var sum2 = 0;
//   for(var i = 0; i < arr.length; i++){
//     let inArr= arr[i]
// console.log(inArr)
//       for(var j = 0; j < inArr.length; j++){
// if(j % 2 == 0){
// sum1 += inArr[j]
// }else{
// sum2 += inArr[j]
// }
//       }



//    }
//  let  sum3=sum1-sum2;

//  console.log(sum3);      

//    return sum3
// }
// arraySum(arr);


// let peopleInLine = [25,100];
// let peopleInLine =  [25,25,25,25,25,25,25,50,50,50,100,100,100,100]
// let ticket = 25;
// let kassa = 0;

// function tickets(peopleInLine){
//     for(var i = 0; i <peopleInLine.length; i++){
//         kassa=i*25;
//         if (peopleInLine[i]===50){
//             kassa=kassa-25;
//         }
//         else if (peopleInLine[i]===100){
//             kassa=kassa-75;
//         }else{
//             kassa===kassa;
//         }


//         console.log(kassa)
//         console.log(peopleInLine[i])

//     if(kassa<peopleInLine[i]-25){
//         console.log("NO")
//         return "NO"
//     }

//   }
//   console.log("YES")
//         return "YES"
// }
// tickets(peopleInLine)


// function tickets(peopleInLine){
//   let bill25 = 0
//   let bill50 = 0;
//   for(var i = 0;i<peopleInLine.length;i++){
//     if(peopleInLine[i] == 25){
//       bill25 += 1;
//     }
//     if(peopleInLine[i] == 50){
//       bill25 -= 1;
//       bill50 += 1;
//     }
//     if(peopleInLine[i] == 100){
//       if(bill50 == 0 && bill25 >= 3){
//         bill25 -= 3;
//       }else{
//         bill25 -= 1; bill50 -= 1;
//       }
//     }
//     if(bill25 < 0 || bill50 < 0){
//         console.log("no");
//        return 'NO';
//     }
//   }
//   console.log("yes");
//   return 'YES';
// }



// function reverseString(str) {
//     var joinArray2='';

//     var splitString = str.split(" "); 

//     console.log(splitString)
//     for(var i = 0; i <splitString.length; i++){


//     var reverseArray = splitString[i].split("");
//     var reverseArray2 = reverseArray.reverse();
//     var joinArray = reverseArray2.join("")

//     console.log(reverseArray2)
//     console.log(joinArray)


//     joinArray2 += ` ${joinArray}`
//     let joinArray3 = joinArray2.slice(0)
//     console.log(joinArray3)

//     }


//     return joinArray3; 

// }

// reverseString("This is an example!");


// function nameShuffler(str){

//   let arr=str.split(" ").reverse().join(" ")
//   console.log(arr)

// }

// nameShuffler('john McClane'); 
// // => "McClane john"


// function split (input, len) {
//     return input.match(new RegExp('.{1,'+len+'}(?=(.{'+len+'})+(?!.))|.{1,'+len+'}$', 'g'))
// }

// let myString= 'supercalifragilisticexpialidocious'; 
// let myResult = split(myString,3).join(" ")
// console.log( myResult ) // ['abc','def','ghi']


// let s = 'supercalifragilisticexpialidocious';
// let partLength = 3;
// let splitInParts = function(s, partLength){
//   let x=`{1,${partLength}}`
//   let pattern = new RegExp("."+x,"g");
//   let rez =  s.match(pattern).join(" ");
// console.log(rez);
// return rez;

// }

// splitInParts(s,partLength)




// function solution(number){
//     let arr3=[]; 
//     let arr5=[]; 
//     for(let i = 0; i < number; i++){       

//         if(i % 3===0) {
//             total3 = arr3.push(i);        
//         }
//         else if(i % 5===0) {
//             total5 = arr5.push(i);         
//         }
//     }
//     console.log(arr3);
//     console.log(arr5);

//     arr3 = arr3.concat(arr5); // merge two arrays
// console.log(arr3);
// let arr4=[...new Set(arr3)];
// console.log(arr4);
// let sum = arr4.reduce(function(a, b) { return a + b; }, 0);

// console.log(sum);
// return sum;
// //массив до number if на 3 или на 5
// // в отдельный массив и сложить
// //если и на три и на 5 один раз число, то есть сложить два массива и убрать повторения  
// }
// solution(70)


// function orderWeight(strng) {
//     //массив из строки, убираем пробелы
//   let str1= strng.split(/\b(\s)/).filter( function(e) { return e.trim().length > 0; } )
//   console.log(str1)
//     for(let i = 0; i < str1.length; i++){    
//    //числа из строк и суммируем
//     str1[i] = Array.from(str1[i]).map(i => Number(i)).reduce(function(a, b) { return a + b; }, 0);   
// }

// console.log(str1);
// // сортируем числа по возрастанию (по умолчанию sort() сортирует как строки)
// str1.sort(function(a, b) {
//     if (a < b ) {
//     return -1;
//   }
//   if (a > b ) {
//     return 1;
//   }
//   return 0;
// })

// console.log(str1);
// // строку из массива
// let str2 = str1.join(" ");

// console.log(str2);
// }

// orderWeight("56 65 74 100 99 68 86 180 90" )
// стороку в массив
// массив строк в числа
// сложить каждый элемент
// отсортировать и одинаковые как строки а не номера 



// //через объекты ключ - число, сумма чисел - значение
// function orderWeight(strng) {
//     //массив из строки, убираем пробелы
//   let str1 = strng.split(/\b(\s)/).filter( function(e) { return e.trim().length > 0; } )
//   console.log(str1);
//   let str5=str1.map(Number)
//   let obj5 ={}
//   console.log(str1)
//   console.log(str5)

//   //   for(let i = 0; i < str1.length; i++){    
//   //  //числа из строк и суммируем
//   //   str1[i] = Array.from(str1[i])   
//   //   .map(i => Number(i))
//   //   // .reduce(function(a, b) { return a + b; }, 0);   
// // }
// // console.log(str1);



// // сортируем числа по возрастанию (по умолчанию sort() сортирует как строки)
// str5.sort(function(a, b) {
//     if (a < b ) {
//     return -1;
//   }
//   if (a > b ) {
//     return 1;
//   }
//   return 0;
// })

// obj5 = {...str5};

// let obj6 = obj5;
// //   for(let i = 0; i < str5.length; i++){    
// //    //числа из строк и суммируем
// //     str5[i] = Array.from(str5[i])   
// //     .map(i => Number(i))
// //     str5[i].reduce(function(a, b) { return a + b; }, 0);   
// // }
// console.log("str1",str1);

// console.log("str5",str5);

// console.log("obj5",obj5);

// console.log("obj6",obj6);



// for (let key in obj6) {
//   // console.log("obj." + key + " = " + obj6[key]);
//  let obj7 
//  obj7 = obj6[key]+"" //строка из числа
//  obj7= Array.from(obj7)
//   .map(i => Number(i))
// .reduce(function(a, b) { return a + b; }, 0);   

// console.log("obj." + key + " = " + obj6[key]);
// console.log("obj." + key + " = " + obj7);
// }



// // // строку из массива
// // let str2 = str1.join(" ");

// // console.log(str2);
// }

// orderWeight("56 65 74 100 99 68 86 180 90" )




// function sumTwoSmallestNumbers(numbers) {

//     numbers.sort(function (a, b) {
//         if (a < b) {
//             return -1;
//         }
//         if (a > b) {
//             return 1;
//         }
//         return 0;
//     })
//     console.log(numbers);

//     let answer = numbers[0] + numbers[1];

//     console.log(answer);

//     return answer
// }

// sumTwoSmallestNumbers([15, 28, 4, 2, 43])




// function lastChair(N) {

//     let chairs = [];

//     for (let i = N; i > 0; i--) {
//         chairs.unshift(i)
//         console.log(chairs)
//     }
//         for (let i = 1; i <= N; i++) {         
// // chairs.splice(Math.round(N-i),0,i+1)
// // chairs.splice(i,1)


// console.log(chairs)
//         }
     
//         // chairs.sort(function (a) {
//         //     chairs.push(Math.round(chairs.length / 2 - 1))
//         //     console.log(chairs)
//         // })
//     // }
//     // let patients =[];
//     // for (let i = 1; i <= N; i++) {      
//     //     patients.splice( i/2,0, i);
//     //     // patients.push(Math.round(i / 2 - 1))
//     //         console.log(patients)
//     // }

// console.log(N-1)
//     return N-1



// }

// lastChair(10)



// // function createPhoneNumber(numbers){
// //     let string = ('' + numbers).replace(/\D/g, '')
// //     console.log("TCL: createPhoneNumber -> cleaned", cleaned)
// //     let match = string.match(/^(\d{3})(\d{3})(\d{4})$/)
// //     if (match) {
// //       return '(' + match[1] + ') ' + match[2] + '-' + match[3]
// //     }
// //     return null
// //   }
//   function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])// => returns "(123) 456-7890"

// function insertAtIndexes(phrase,word,indexes){
//     for (var i = 0; i < indexes.length; i++)
//     phrase = phrase.slice(0, indexes[i] + i * word.length) + word + phrase.slice(indexes[i] + i * word.length);
//     console.log("TCL: insertAtIndexes -> phrase", phrase)
//   return phrase;
//   }

//   insertAtIndexes("hello world","YYY",[0,3,5])


// const onePunch=(i)=>typeof i=== 'string' && i.length>0? i.split(` `).sort((a,b)=>a.localeCompare(b)).join` `.replace(/[ea]/gi,''):'Broken!' //Don't leave this line!!
//   onePunch('Beard Knife Grenade Motorbike Hat')


  function orderWeight(strng) {
    return (
      strng
        // делаем массив из строки, разделяем пробелом 
        .split(' ')
      // Делаем возвращаемое значение литералом объекта, а значение val - строкой, 
      // Значение ключа превращает строку в число и добавляет значение.
        .map(value => {
          return {
            val: value,
            key: value.split('').reduce((accumulator, currentValue) => {
              return parseInt(accumulator) + parseInt(currentValue)
            }, 0),
          }
        })
     // console.log("применить карту", strng)
      // условие равенства суммы цифр,
       // localeCompare для применения лексикографической сортировки при равенстве, 
       // В противном случае сортировка по возрастанию.
        .sort((a, b) => {
          return a.key === b.key ? a.val.localeCompare(b.val) : a.key - b.key
        })
     // console.log("Применить сортировку", strng) 
     // Завершаем сортировку и возвращаемся к исходной форме.
        .map(el => {
          return el.val
        })
        .join(' ')
    )
    // console.log("Возврат", strng)
  }