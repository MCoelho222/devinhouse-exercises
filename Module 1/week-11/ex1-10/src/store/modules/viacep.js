import axios from 'axios'
export default {
    namespaced: true,
    state() {
        return {
            cepInfo: false,
            status: false
        }
    },
    actions: {
        async checkCep(context, value) {
            await axios.get(`https://viacep.com.br/ws/${value}/json/`).then(response => {
                context.state.cepInfo = response.data
                console.log('1')
                context.state.status = response.data.erro == 'true' ? false : true
            }).catch(error => {
                console.log(error)
            })       
        }
    }
}