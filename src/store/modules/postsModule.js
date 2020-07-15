export default {
    state: {
        posts: [{
            id: 1,
            title: 'Autenticação no React Native / ReactJS com Context API & Hooks',
            content: `Vamos construir juntos a funcionalidade completa de autenticação dentro do React Native, mostrando como que a gente faz a chamada API, como pega o token, usuário, como armazena os dados no Async Storage, como criar um contexto para deixar essas informações disponibilizadas em toda aplicação, como  criar um custom hook, como controlar o estado de loading das informações que ainda não foram recuperadas do Storage, aonde que a gente faz autenticação, onde que a gente faz logout,  o que a gente faz com Async Storage no momento que a gente fizer SignIn, SignOut ou quando a tela principal é carregada, como determinar qual stack de rotas que vamos utilizar de acordo com estado do usuário logado ou deslogado. Uauu, fluxo completo!
            Estou muito empolgado com o conteúdo, vamos falar sobre tecnologias bem legais como React, React Native, a fantástica Context API, Hooks (Effect/State), Typescript, e ainda vamos criar o nosso Custom Hook!
            Vai ser um passo a passo bem mastigadinho e completo!`,
            date: '2020-01-01',
            img: 'post1.jpeg',
            imgInfo: 'Notícia 1'
        },
        {
            id: 2,
            title: 'Jogo de quarta-feira termina empatada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt praesentium. Nisi asperiores quas cumque iusto ex saepe dolorum iste. Officia dolore quisquam perferendis exercitationem ipsum vero nemo fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia tenetur maxime perferendis minima natus, tempore possimus iste architecto modi, deserunt voluptatibus perspiciatis sit accusamus explicabo expedita reiciendis dicta eaque.',
            date: '2020-01-07',
            img: 'post2.png',
            imgInfo: 'Notícia 2'
        },
        {
            id: 3,
            title: 'A inauguração do novo estádio será na semana que vem',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt praesentium. Nisi asperiores quas cumque iusto ex saepe dolorum iste. Officia dolore quisquam perferendis exercitationem ipsum vero nemo fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia tenetur maxime perferendis minima natus, tempore possimus iste architecto modi, deserunt voluptatibus perspiciatis sit accusamus explicabo expedita reiciendis dicta eaque.',
            date: '2020-01-20',
            img: 'post3.png',
            imgInfo: 'Notícia 3'
        }
        ]
    },
    getters: {
        getPosts(state) {
            return state.posts
        }, getNewFromId: state => id => {
            
            let posts = state.posts.find(item => {
                return (item.id == id)
            });

            return posts;
        }
    }
}