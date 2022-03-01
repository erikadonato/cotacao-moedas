export const getAllCurrency = async (url) => {
    try {
        return fetch(`https://economia.awesomeapi.com.br/${url}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
            return res;
        })
    } catch(error) {
        alert(error.message);
    }
}