import * as yup from 'yup'

const schema = yup.object({
  firstName: yup.string().required().max(20),
  lastName: yup.string().required().max(20),
  age: yup.number().notRequired().integer().min(21).max(200),
  email: yup.string().email().required().max(200),
  img: yup.string().url().notRequired().max(200),
  password: yup.string().required().min(10).max(30)
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})/,
  "Must contain Uppercase, Lowercase, Number, Special Character"),
  confirm: yup.string().required().min(10).max(30)
  .oneOf([yup.ref('password'), 'Passwords must match'])
})

// schema.isValid({
//   firstName: 'Test',
//   lastName: 'Person',
//   age: 22,
//   email: 'test@person.com',
//   img: 'https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg',
//   password: 'qwertyu!1Q',
//   confirm: 'qwertyu!1Q'
// }).then(function(valid){
//   return valid
// })

export default schema