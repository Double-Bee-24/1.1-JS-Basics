// function Validator() {
//   this.validateEmail = function (email) {
//     const regexp =
//       /^[a-zA-Z]([a-zA-Z\d-.+]){1,19}@[a-zA-Z\d.!$%&’*+/=?^_-]{1,15}\.[a-zA-z]{1,5}$/;
//     return regexp.test(email);
//   };
//   this.validatePhone = function (phone) {
//     const regexp = /^(\+38)?(( |-|\(|\))*?\d( |-|\(|\))*?){10}$/;
//     return regexp.test(phone);
//   };
//   this.validatePassword = function (password) {
//     const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])([a-zA-Z\d_]){8,30}$/;
//     return regexp.test(password);
//   };
// }

// const myValidator = new Validator();
// console.log(myValidator.validateEmail("fisha@gmail.comf"));

// console.log(myValidator.validateEmail("fi@secondpart.end")); // "fi@secondpart.end"
// console.log(myValidator.validateEmail("first-part@.se=cond%p.art.end")); // "first-part@.se=cond%p.art.end"
// console.log(myValidator.validateEmail("first.part@se=cond%part.r")); // "first.part@se=cond%part.r"

// console.log(myValidator.validateEmail("f@secondart.end,")); // "f@secondart.end,"
// console.log(myValidator.validateEmail("first-part@.se=cond@part.end")); // "first-part@.se=cond@part.end"
// console.log(myValidator.validateEmail("-firstpart@.se=cond%.enddeded")); // "-firstpart@.se=cond%.enddeded"
// console.log(myValidator.validateEmail("firs_tpart@.se.en")); // "firs_tpart@.se.en"

// console.log(myValidator.validateEmail("firstpart@.se.enddeded"));

// console.log(myValidator.validatePhone("+38 (099) 567 8901"));
// console.log(myValidator.validatePhone("+38 099 5 6 7 8 9  01"));
// console.log(myValidator.validatePhone("(09-9) 567-890-1"));
// console.log(myValidator.validatePhone("--  (099) 567 890-1"));
// console.log(myValidator.validatePhone("+38 (099) 567 8901 0"));
// console.log(myValidator.validatePhone("+38 099 a0000000"));
// console.log(myValidator.validatePhone("+38 (0989) 567 8901"));
// console.log(myValidator.validatePhone("+48 (0989) 567 8901"));

// console.log(myValidator.validatePassword("C00l_Pass"));
// console.log(myValidator.validatePassword("SupperPas1"));
// console.log(myValidator.validatePassword("Cool_pass"));
// console.log(myValidator.validatePassword("C00l"));
