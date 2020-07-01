export default {
    state: {
        posts: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt praesentium. Nisi asperiores quas cumque iusto ex saepe dolorum iste. Officia dolore quisquam perferendis exercitationem ipsum vero nemo fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia tenetur maxime perferendis minima natus, tempore possimus iste architecto modi, deserunt voluptatibus perspiciatis sit accusamus explicabo expedita reiciendis dicta eaque.',
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