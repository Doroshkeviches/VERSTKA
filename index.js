const burger = document.getElementById('headerBurger')
const burgerMenu = document.getElementById('burgerMenu')
const burgerClose = document.getElementById('burgerClose')
const footerBtn = document.getElementById('footerBtn')
const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const message = document.getElementById('message')
const validationMessage = document.getElementById('validationMessage')
function handleBurger() {
    if (burgerMenu.style.display == 'block') {
        burgerMenu.style.display = 'none'
    } else {
        burgerMenu.style.display = 'block'
    }
}
burger.addEventListener('click', handleBurger)
burgerClose.addEventListener('click', handleBurger)
footerBtn.addEventListener('click', validation)

function validation() {
    const str1 = inputName.value
    const str2 = inputEmail.value
    const str3 = message.value
    console.log(str1, str2, str3)
    if (str1.length < 3 || str2.length < 3) {
        validationMessage.innerHTML = 'Имя должно быть больше 3х символов'
    }
    if (str2.indexOf('@') == -1) {
        validationMessage.innerHTML = 'Введите почту'
    }
}

//Запросы и все что с этим связано 

// Так могу запустить сервер на примере подключения к Mongodb
// const express = require('express');
// const PORT = process.env.PORT || 5000;
// const mongoose = require('mongoose');
// const authRouter = require('./authRouter');
// const app = express();
// app.use(express.json());
// const start = async () => {
//     try {
//         await mongoose.connect(
//             `mongodb+srv://ССЫЛКА@cluster0.reh70fb.mongodb.net/`
//         );
//         app.listen(PORT, () => console.log(`server start on port ${PORT}`));
//     } catch (e) {
//         console.error(e);
//     }
// };
// start();

// Напишу схему по которой данные буду сохраняться в бд
// const Message = new Schema({
//     name: { type: String },
//     lastName: { type: String },
//     message: { type: String },
// });
// module.exports = model('Message', Message);

// Создам Контроллер в котором буду прописывать все запросы
// class authController {
//     async setMessage(req, res) {
//         try {
//             const { name, lastName, message } = req.body

//             const mes = new Message({
//                 name, lastName, message
//             });
//             await Message.save()
//             return res.json({ message: `The Message saved` })
//         } catch (e) {
//             console.error;
//         }
//     }

// }
// module.exports = new authController();

// И сделаю роутер 
// const Router = require('express');
// const router = new Router();
// const controller = require('./authController');

// router.post('/setMessage', controller.setMessage);
// module.exports = router;

// Сам запрос 
// function setMessage(name, lastName, message) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, lastName, message })
//     };
//     fetch(url + '/setMessage', requestOptions)
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// Думаю что для этого задания хватит))