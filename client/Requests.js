const getArticleById = (id) => {
    if(id == 0) {
        return (
            {
                "title": 'Verbal Meditation',
                "image": 'assets/chatIcon.png', // find better way to store images?
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

const getArticlesData = () => {
    let data = { 
        articles: [ 
                {
                    "title": 'Breathing exercises',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'This calming breathing technique for stress, anxiety and panic takes just a few minutes and can be done anywhere.', 
                    "textBody": "textBody",
                    "id": '0'
                },
                {
                    "title": 'Connect with others',
                    "image": './assets/bookIcon.png', // find better way to store images?
                    "shortDesc": 'Good relationships are important for your mental wellbeing', 
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
                    "title": 'Be physically active',
                    "image": './assets/bookIcon.png', // find better way to store images?
                    "shortDesc": 'Being active is not only great for your physical health and fitness.', 
                    "textBody": "textBody",
                    "id": '3'
                },
                {
                    "title": 'Learn new skills',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'Research shows that learning new skills can also improve your mental wellbeing', 
                    "textBody": "textBody",
                    "id": '4'
                },
                {
                    "title": 'Give to others',
                    "image": './assets/bookIcon.png', // find better way to store images?
                    "shortDesc": 'Research suggests that acts of giving and kindness can help improve your mental wellbeing', 
                    "textBody": "textBody",
                    "id": '5'
                },
                {
                    "title": 'Pay attention to the present moment',
                    "image": './assets/chatIcon.png', // find better way to store images?
                    "shortDesc": 'Paying more attention to the present moment can improve your mental wellbeing.', 
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