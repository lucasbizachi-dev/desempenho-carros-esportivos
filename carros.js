class CarroEsportivo {
    constructor(marca, modelo, ano, cavalos) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cavalos = cavalos;
    }

    desempenho() {
        let atividade;
        switch (this.marca) {
            case "Ferrari":
                atividade = "acelerou a toda velocidade na pista.";
                break;
            case "Lamborghini":
                atividade = "fez uma arrancada impressionante.";
                break;
            case "Porsche":
                atividade = "desempenhou curvas com precisão.";
                break;
            case "McLaren":
                atividade = "alcançou uma velocidade incrível.";
                break;
            default:
                atividade = "não tem um desempenho definido.";
        }

        console.log(`A marca ${this.marca}, modelo ${this.modelo} ${this.ano}, com ${this.cavalos} cavalos de potência, ${atividade}`);
    }
}

const carro1 = new CarroEsportivo("Ferrari", "488 GTB", 2020, 661);
carro1.desempenho();

const carro2 = new CarroEsportivo("Lamborghini", "Huracán", 2021, 631);
carro2.desempenho();

const carro3 = new CarroEsportivo("Porsche", "911 Turbo S", 2019, 640);
carro3.desempenho();

const carro4 = new CarroEsportivo("McLaren", "720S", 2018, 710);
carro4.desempenho();
