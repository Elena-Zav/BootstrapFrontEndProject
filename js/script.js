// DOM
//Навигация по документа
// Навигация только по элементам

// Получить объект body
const bodyElement = document.body;
console.log(bodyElement);

// Навигации свойств, описанные выше, относятся ко всем узлам в документе.
// В частностиб в childNodes находятся и текстовые узлы и узлы элементы и узлы 
// комментарии, если они есть

// Получить колекцию всех дочерних узлов
const childNodes = bodyElement.childNodes
console.log(childNodes)


// Для большинства задач текстовые узлы и узлы комментарии нам не нужны.
// Мы хотим манипулировать узлами-элементами, которые представляют собой тег
// и формируют структуру страницы.

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children
console.log(bodyChildren)



// const htmlElement = document.documentElement;
// const headElement = document.head;

// console.log(htmlElement);
// console.log(headElement);
