# Проект: React-redux-todo
----
<div align="center">
  <img src="https://i.ibb.co/x2nX9yq/localhost-3000.png" width="45%">
  <img src="https://i.ibb.co/sy8xrkS/localhost-3000-1.png" width="45%">
</div>

## 📖 Описание проекта:

Список задач. Верстка адаптивная. Здачи сохраняются localstorage.<br>
При открытии сайта, Redux store синхронизируется c localstorage.<br>

С помощью Redux создано 3 store:
* todos - массив задач;
* filters - состояние кнопки фильтра;
* themes - состояние темы.

Релизована анимация плановной смены темы.

Под блоком создания задачи, можно настроить фильтр:
* all - все задачи;
* active - невыполненные задачи;
* completed - выполненные задачи.

Так же есть кнопка Clear completed, которая через action очищает все выполненые задачи.

## ⚙ Функциональность:

* адаптивная верстка;
* смена темы;
* синхранизация Redux store с localstorage;
* добавление задач;
* установка фильтра;
* влзможность отметить выполненую задачу;
* удаление задач;
* удаление выполненых задач.


## 🛠 Стек:
<p>
  <img src="https://img.shields.io/badge/React-gray?style=for-the-badge&logo=React&logoColor=/">
  <img src="https://img.shields.io/badge/Redux-gray?style=for-the-badge&logo=Redux&logoColor=/">
  <img src="https://img.shields.io/badge/JavaScript-gray?style=for-the-badge&logo=JavaScript&logoColor=/">
  <img src="https://img.shields.io/badge/Scss-gray?style=for-the-badge&logo=Sass&logoColor=/">
  <img src="https://img.shields.io/badge/Html-gray?style=for-the-badge&logo=HTML5&logoColor=red/">
</p>

## ✈ Технологии и инструменты:

* БЭМ;

## 👉 Начало работы:

### Сайт можно запустить по [ссылке](https://skoroxodtwo.github.io/react-redux-todo/).

----
### Запуск локально:

- скачать проект;
- открыть консоль в корне проекта.

#### Для запуска потребуется скачать и установить [NodeJS](https://nodejs.org/en/)

#### `npm install`- устанавливает необходимые пакеты;<br/>
#### `npm run start` - запускает проект в режиме разработки;<br/>
#### `npm run build` - собирает проект в production.<br/>
