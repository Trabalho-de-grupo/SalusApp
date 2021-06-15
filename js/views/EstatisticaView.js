import EstatisticaController from '../controllers/EstatisticaController.js'

export default class EstatisticaView {
    constructor() {
        var options = {
            series: [44, 55, 67, 83, 90,30,40,60,80],
            colors:['#F6B8C3', '#B8B8B8', '#E0B0FF','#C8A2C8','#CEC7C8','#FF78A9','#DDA0DD','#D6A8B6','#CBC0DC'],
            chart: {
                height: 500,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return 249
                            }
                        }
                    }
                }
            },
            labels: ['Yoga', 'Receitas', 'Jardinagem', 'Artes Plásticas', 'Quiz','Fitness','Jogos','Meditação','DIY'],
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

    }
}