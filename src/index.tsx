import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Dialogs

let dialogsData = [
    {id: '1', name: 'Ilya', isActive: false},
    {id: '2', name: 'Dima', isActive: true},
    {id: '3', name: 'Karina', isActive: false},
    {id: '4', name: 'Kristina', isActive: false}
]

let messagesData = [
    {id: '1', message: 'Hello!'},
    {id: '2', message: 'How are you?!'},
    {id: '3', message: 'Thanks!'},
    {id: '4', message: 'Yohohohoho!'}
]

//Profile

let postsData = [
    {id: '1', message: 'Hello! How are you?', likesCount: 15},
    {id: '2', message: 'This is my first post!', likesCount: 11},
    {id: '3', message: 'This is my second post!', likesCount: 15},
    {id: '4', message: 'This is my third post!', likesCount: 1},
    {id: '5', message: 'This is my fourth post!', likesCount: 8},
    {id: '6', message: 'This is my fifth post!', likesCount: 155},
]
let imageLink = "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} imageLink={imageLink}/>,
  document.getElementById('root')
);