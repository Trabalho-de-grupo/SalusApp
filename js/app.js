import UserView from './views/UserView.js'
import UtilizadorView from './views/UtilizadorView.js'

import PerfilView from './views/PerfilView.js'

import CategoriaView from './views/CategoriaView.js'
import PageCategoriaView from './views/PageCategoriaView.js';

import EstatisticaView from './views/EstatisticaView.js';

import AtividadeView from './views/AtividadeView.js';
import PageAtividadeView from './views/PageAtividadeView.js';

import PagePrincipalView from './views/PagePrincipalView.js';

class App {
    constructor() {
        this.routes = {
            'registo': [UserView],
            'perfil': [PerfilView],
            'admin': [UtilizadorView, CategoriaView, AtividadeView],
            'categoria': [PageCategoriaView, PageAtividadeView],
            'listagem': [PageAtividadeView],
            'estatistica': [EstatisticaView],
            'atividade': [PagePrincipalView]
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
                email: 'email1@',
                password: 'pass1',
                idActivities: 'null',
                status: 'admin'
            },
            {
                id: 2,
                username: 'user2',
                email: 'email2@',
                password: 'pass2',
                idActivities: 'null',
                status: 'user'
            },
            {
                id: 3,
                username: 'tiza',
                email: 'tiza@',
                password: '1234',
                idActivities: 'null',
                status: 'admin'
            },
            {
                id: 4,
                username: 'alfonso',
                email: 'alfonso@',
                password: '1234',
                idActivities: 'null',
                status: 'admin'
            },
            {
                id: 5,
                username: 'daniel',
                email: 'daniel@',
                password: '1234',
                idActivities: 'null',
                status: 'admin'
            }
        ];

        const categorias = [{
                id: 1,
                name: 'YOGA',
                color: 'F6B8C3',
                icon: 'exercise.png',
                description: `?? a pr??tica que tem como objetivo controlar o stress, ansiedade, dores no corpo, melhorar o equil??brio e promover a sensa????o de bem estar.`,
            },
            {
                id: 2,
                name: 'RECEITAS',
                color: 'B8B8B8',
                icon: 'cooking.png',
                description: `Para se inspirar, aprender a cozinhar, experimentar ideias novas e descobrir pratos saborosos, r??pidos, f??ceis, econ??micos e saud??veis.`,
            },
            {
                id: 3,
                name: 'JARDINAGEM',
                color: 'E0B0FF',
                icon: 'jardinagem.png',
                description: `A jardinagem traz benef??cios para a sa??de f??sica e mental. Estudos indicam at?? que ?? positiva para a destreza f??sica, mental. Seja no jardim ou na varanda, experimente.`,
            },
            {
                id: 4,
                name: 'ARTES PL??STICAS',
                color: 'C8A2C8',
                icon: 'artist.png',
                description: `Associar pr??ticas art??sticas ?? vida ?? uma forma de beneficiar a sua sa??de, tanto f??sica quanto mental ??? trata-se da chamada arteterapia, que consiste no uso de recursos art??sticos/visuais ou expressivos como elemento terap??utico.`,
            },
            {
                id: 5,
                name: 'FITNESS',
                color: 'FF78A9',
                icon: 'dumbbell.png',
                description: `O objetivo da pr??tica regular de exerc??cio n??o ?? apenas conseguir um corpo excecional, mas antes obter uma forma f??sica que nos permita sentirmo-nos bem.`,
            },
            {
                id: 6,
                name: 'JOGOS',
                color: 'DDA0DD',
                icon: 'game-controller.png',
                description: `Os jogos podem ajudar as pessoas, proporcionando uma maneira de relaxar, se conectar com outras pessoas e se sentir competente.`,
            },
            {
                id: 7,
                name: 'MEDITA????O',
                color: 'D6A8B6',
                icon: 'lotus.png',
                description: `O objetivo da medita????o ?? tranquilizar a mente, alcan??ar a paz interior e um relaxamento profundo, que persista e nos acompanhe durante as nossas atividades quotidianas, com in??meras vantagens para a sa??de mental e f??sica.`,
            },
            {
                id: 8,
                name: 'DIY',
                color: 'CBC0DC',
                icon: 'craft.png',
                description: `A mentalidade por tr??s do DIY valoriza a criatividade e a fabrica????o ou customiza????o de espa??os, ou objetos utilizando itens que normalmente temos em casa.`,
            }
        ];

        const atividades = [{
                id: 1,
                idCategoria: 1,
                name: 'Yoga para Iniciantes',
                image: '1',
                video: '1',
                description: `As vantagens de realizar aulas de yoga para iniciantes v??o muito al??m do f??sico, j?? que ?? poss??vel trabalhar tanto o lado f??sico quanto o mental.`,
                likes: '1',
                views: '1',
                materials: '1',
                steps: '1',
                time: '1',
                date: '1',
            }
        ];

        //Cria??ao do Object Users no LocalStorage
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }

        //Cria??ao do Object Categorias no LocalStorage
        if (!localStorage.categorias) {
            localStorage.setItem('categorias', JSON.stringify(categorias));
        }

        //Cria??ao do Object Atividades no LocalStorage
        if (!localStorage.atividades) {
            localStorage.setItem('atividades', JSON.stringify(atividades));
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