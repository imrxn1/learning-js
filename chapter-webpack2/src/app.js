// createOrder(cart, (orderId) => {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// //{data: undefined}

// promise
// .then((orderId) =>
//     proceedToPayment(orderId));

// const GITHUB_API = "https://api.github.com/users/imrxn1";
// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(data => console.log(data));

//real world example
// const cart = ["shoes", "pants", "shirt"];

// const promise = createOrder(cart); //orderID

// promise.then(() => {
//   proceedToPayment(orderId);
// });

// createOrder(cart)
//   .then((orderID) => orderID)
//   .then((orderID) => proceedToPayment(orderID))
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err.message));

// function createOrder(cart) {
//   const promise = new Promise((resolve, reject) => {
//     //create an order
//     //validateCart
//     //orderId
//     if (!validate(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     // logic for create order
//     const orderID = "12345";
//     if (orderID) {
//       setTimeout(() => {
//         resolve(orderID);
//       }, 5000);
//     }
//   });

//   return promise;
// }

// function proceedToPayment(orderID) {
//   return new Promise((resolve, reject) => {
//     resolve("payment susessful");
//   });
// }

// function validate(cart) {
//   return true;
//   // return false;
// }

// hw

// const cart = ["jeans", "shirt", "sneaker", "jacket", "tshirt"];

// createOrder(cart)
//   .then((orderID,cart) => proceedToPayment(orderID, cart))
//   .then((order) => {
//     console.log(order.message);
//     showOrderSummery(order.cart);
//   });

// // createOrder
// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     if (!validCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     resolve(orderId,cart);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
// }

// // proceedToPayment
// function proceedToPayment(orderID, cart) {
//   return new Promise((resolve, reject) => {
//     resolve({
//       orderID: orderID,
//       message: "payment was sucessful",
//       cart: cart,
//     });
//   });
// }

// // showOrderSummery
// function showOrderSummery(cart) {
//   for (let index = 0; index < cart.length; index++) {
//     console.log(cart[index]);
//   }
// }

// //validCart
// function validCart() {
//   return true;
// }

// promise api

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 sucess");
//     // reject("p1 failure");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2 sucess");
//     // reject("p2 failure");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 sucess");
//     // reject("p3 failure");
//   }, 2000);
// });

// Promise.all([p1, p2, p3])
// .then((res) => console.log(res))
// .catch((err)=> console.error(err)
// );

// Promise.allSettled([p1, p2, p3])
// .then((res) => console.log(res));

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//     console.log(err.errors);
//   });

// Async-Await

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value");
//   }, 5000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value");
//   }, 3000);
// });

//handeling promise

// function getData() {
//   //js engine will not wait for promise to resolved
//   promise.then((value) => console.log(value));
//   console.log("hi imran");
// }

// getData();

// async function handelPromise() {
//   console.log("hello");

//   const value = await promise;
//   console.log("hi imran 1");
//   console.log(value);

//   const value2 = await promise2;
//   console.log("hi imran 2");
//   console.log(value);
// }

// handelPromise();

// real world example

// const API_URL = "https://api.github.com/users/imrxn1";

// async function handelPromise() {
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handelPromise();
