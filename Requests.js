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
                "title": 'Thoughtfullness',
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

const getArticlesData = () => {
    let data = { 
        articles: [ 
                {
                    "title": 'Verbal Meditation',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'Out loud meditation', 
                    "textBody": "textBody",
                    "id": '0'
                },
                {
                    "title": 'Thoughtfullness',
                    "image": './assets/bookIcon.png', // find better way to store images?
                    "shortDesc": 'Learn to be thoughtful towards yourself and others', 
                    "textBody": "textBody",
                    "id": '1'
                },
                {
                    "title": 'Breathing Excercises',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'Work on your breathwork to reduce stress', 
                    "textBody": "textBody",
                    "id": '2'
                },
                {
                    "title": 'Thoughts and Feelings',
                    "image": './assets/bookIcon.png', // find better way to store images?
                    "shortDesc": 'Detach thoughts from emotions', 
                    "textBody": "textBody",
                    "id": '3'
                },
                {
                    "title": 'Movement',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'Strengthen the mind-body connection', 
                    "textBody": "textBody",
                    "id": '4'
                },
                {
                    "title": 'Verbal',
                    "image": './assets/bookIcon.png', // find better way to store images?
                    "shortDesc": 'Detach thoughts from emotions', 
                    "textBody": "textBody",
                    "id": '5'
                },
                {
                    "title": 'Thoughts',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'Detach thoughts from emotions', 
                    "textBody": "textBody",
                    "id": '6'
                },
            ]
        
        }
        return data;
}

const Requests = () => {


}

export {Requests, getArticlesData, getArticleById};