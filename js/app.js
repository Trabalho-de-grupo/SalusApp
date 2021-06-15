import UserView from './views/UserView.js'
import PerfilView from './views/PerfilView.js'
import CategoriaView from './views/CategoriaView.js'
import UtilizadorView from './views/UtilizadorView.js'
import PageCategoriaView from './views/PageCategoriaView.js';
import EstatisticaView from './views/EstatisticaView.js';

class App {
    constructor() {
        this.routes = {
            'registo': [UserView],
            'perfil': [PerfilView],
            'admin': [UtilizadorView, CategoriaView],
            'categoria': [PageCategoriaView],
            'estatistica': [EstatisticaView]
        };

        // import dummy data for testing purposes
        this.#importDataFixtures();

        // instantiate the views mapped in the routes object
        this.#instantiateViews();
    }

    #importDataFixtures() {
        const users = [{
                id: 1,
                username: 'user1',
                email: 'email1',
                password: 'pass1',
                idActivities: 'null',
                status: 'admin'
            },
            {
                id: 2,
                username: 'user2',
                email: 'email2',
                password: 'pass2',
                idActivities: 'null',
                status: 'user'
            }
        ];

        const categorias = [{
                id: 1,
                name: 'Yoga',
                color: 'F6B8C3',
                icon: 'exercise.png',
                description: `É a prática que tem como objetivo controlar o stress, ansiedade, dores no corpo, melhorar o equilíbrio e promover a sensação de bem estar.`,
            },
            {
                id: 2,
                name: 'Receitas',
                color: 'B8B8B8',
                icon: 'cooking.png',
                description: `Para se inspirar, aprender a cozinhar, experimentar ideias novas e descobrir pratos saborosos, rápidos, fáceis, económicos e saudáveis.`,
            },
            {
                id: 3,
                name: 'Jardinagem',
                color: 'E0B0FF',
                icon: 'exercise.png',
                description: `A jardinagem traz benefícios para a saúde física e mental. Estudos indicam até que é positiva para a destreza física, mental e autoestima dos mais velhos. Além disso, agrada a pequenos e graúdos e não tem contraindicações. Seja no jardim ou na varanda, experimente.`,
            },
            {
                id: 4,
                name: 'Artes Plásticas',
                color: 'C8A2C8',
                icon: 'artist.png',
                description: `Associar práticas artísticas à vida é uma forma de beneficiar a sua saúde, tanto física quanto mental — trata-se da chamada arteterapia, que consiste no uso de recursos artísticos/visuais ou expressivos como elemento terapêutico.`,
            }
        ];

        //Criaçao do Object Categorias no LocalStorage
        if (!localStorage.categorias) {
            localStorage.setItem('categorias', JSON.stringify(categorias));
        }

        //Criaçao do Object Users no LocalStorage
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    #instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];
        const views = this.#getViews(route);
        for (const view of views) {
            new view();
        }
    }

    #getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }
}

new App();