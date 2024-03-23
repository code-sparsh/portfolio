

const imagePath = "/projects"
const projects = [

    {
        id: 0,
        title: 'Tibble',
        description: 'An offline privacy focussed AI assistant tool built on top of open source LLM models. Built using llama.cpp, LangChain, Flask and Python',
        image2: `${imagePath}/Tibble-Phone.png`,
        image1: `${imagePath}/tibble.png`,
        github1: 'https://github.com/code-sparsh/Tibble-server',
        github2: 'https://github.com/code-sparsh/Tibble',
        link: ''
    },

    {
        id: 1, 
        title: 'CrossThatZero',
        description: 'An online multiplayer game of Tic-Tac-Toe, built using Spring Boot, Socket.io and React',
        image1: `${imagePath}/CrossThatZero-Phone.png`,
        image2: `${imagePath}/CrossThatZero-Desktop.png`,
        github1: 'https://github.com/code-sparsh/cross-that-zero_backend',
        github2: 'https://github.com/code-sparsh/CrossThatZero-frontend',
        link: 'https://crossthatzero.netlify.app'
    },

    {
        id: 2,
        title: 'BlogPoint',
        description: 'A blog application aimed at providing basic CRUD operations. Built using Spring Boot and React ',
        image1: `${imagePath}/BlogPoint-Phone.png`,
        image2: `${imagePath}/BlogPoint-Desktop.png`,
        github1: 'https://github.com/code-sparsh/blog-java-backend',
        github2: 'https://github.com/code-sparsh/blog-frontend',
        link: 'https://blogpoint.netlify.app'
    },

    {
        id: 3,
        title: 'ApnaBazaar',
        description: 'A marketplace platform to connect individual buyers and sellers for second hand products. Built using Node.js and React',
        image1: `${imagePath}/ApnaBazaar-Phone.png`,
        image2: `${imagePath}/ApnaBazaar-Desktop.png`,
        github1: 'https://github.com/code-sparsh/ApnaBazaar-project',
        github2: '',
        link: 'https://apnabazaar-in.netlify.app'
    },
    
    
    
]

export default projects;