// // const person = {
// //    name: 'Asilbek',
// //    year: 2009,
// //    job: 'Full Stack developer',
// //   hobbies: {
// //        books : 'Manga/manhwa',
// //        sport : 'None',
// //        anime : 'Atack on Titan'
// //    },
// //    sayHello : function () {
// //       console.log(`Hello ${this.name}`);
// //    }
// //}

// // person.sayHello()


// // const {name, year, job, hobbies, sayHello} = person

// // sayHello()

// //    for(let key in person) {
// //        if(typeof person[key] === 'object'){
// //            for( let i in person[key]){
// //                console.log(`Property: ${i} , Value : ${person[key][i]}`);
// //            }
// //        }else{
// //            console.log(`Property: ${key} , Value: ${person[key]}`)
// //        }
// //
// //    }


// // Massivlar

// const colors = ['red', 'green', 'blue', 'black', 'yellow']

// // Pop va Push - pop убирает в конце а push добавляет в конец
// // Shift un shift - shift убирает в начале а unshift добавляет

// console.log("Oxirgi elemntni o'chirish:", colors.pop());
// console.log("Yangi elemnti oxiriga qp'shish", colors.push('brown'));
// console.log("Boshidagi elemnti o'chirish" , colors.shift());
// console.log("Boshiga elemnti o'chirish" , colors.unshift('gray'));



// console.log(colors);



// const cars = ['BMW', "Mers", "Audi", "Suzuki", "Subaru"]

// //Sort 

// cars.sort()
// console.log(cars);

// const n = [12, 45, 466, 789, 64, 68]
// n.sort(compareNum)


// function compareNum(a, b) {
//     return a - b
// }

// console.log(n);


//     // for( let i = 0; i < cars.length; i++) {
//     //     console.log(cars[i]);
        
//     // }

// // for( let car of cars){
// //     console.log(car);
    
// // }

// // colors.forEach((item, index, arr) => {
// //     console.log(`${index}, ${item}, in array ${arr}`);
    
// // })


// // Split

// const socialMedia = 'Youtube, Instagramm, Facebook'
// const arr = socialMedia.split(", ")
// const text = arr.join(" - ")
// console.log(arr);
// console.log(text);



// While and Do while



// OOP

const SUVCars = {
    weight: 1000,
    length: 3,
    speed: function() {
       return console.log("100 km/h");
    }
}

const nexia = Object.create(SUVCars)


// nexia.__proto__ = SUVCars

// Object.setPrototypeOf(nexia, SUVCars)

console.log(nexia);
