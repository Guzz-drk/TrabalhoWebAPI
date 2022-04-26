import axios from "./axios-common";

class ServicoSrv{
    url = "/servicos";

    async listar(){
        return await axios.get(this.url).catch((err) => {
            throw err;
        });
    }

    async incluir(data) {
        return await axios.post(this.url, data).catch((err) => {
            throw err; 
        });
    }
}
export default new ServicoSrv();