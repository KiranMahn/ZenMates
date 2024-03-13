import React, { useEffect, useState } from "react";


async function getGuideData()  {

    //fetch from server site /getguidedata
    //const [data, setData] = useState([])
    let data = { articles: []};
    await fetch('http://localhost:8082/getguidedata/')
      .then(result => result.json())
      .then(jsonData => {
        data.articles = jsonData;
        console.log("data in requests: ")
        console.log(JSON.stringify(data));
        return data;
      })
      .catch(err => {
        console.log(err);
        return data;
      });
    return data;
}


const getArticleById = (id) => {

    if(id == 0) {
        return (
            {
                "title": 'Verbal Meditation',
                "image": './assets/chatIcon.png', // find better way to store images?
                "shortDesc": 'Out loud meditation',
                "textBody": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
                "id": '0'
            }
        );
    } else if(id == 1) {
        return (
            {
                "title": 'Breathing exercises for stress',
                "image": './assets/bookIcon.png', // find better way to store images?
                "shortDesc": 'Learn to be thoughtful towards yourself and others',
                "textBody": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
                "id": '1'
            }
        );
    } else {
        return (
            {
                "title": 'Article Title',
                "image": './assets/bookIcon.png', // find better way to store images?
                "shortDesc": 'Learn to be thoughtful towards yourself and others',
                "textBody": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
                "id": '1'
            }
        );
    }

}

export {getGuideData, getArticleById};
