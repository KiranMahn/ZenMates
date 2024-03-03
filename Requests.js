
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

export {Requests, getArticlesData};