
export interface LandingPageCustomDataType {
    user_name: string
    valor_total: string
}

const getUserData = async (): Promise<LandingPageCustomDataType | null> => {

    const url = import.meta.env.VITE_SERVER_URL;
    const urlParams = new URLSearchParams(window.location.search);
    console.log("Params: ", {
        id: urlParams.get('id'),
        cod: urlParams.get('cod')
    });

    const payload = {
        user_id: urlParams.get('id'),
        codigo: urlParams.get('cod'),
    };

    try {
        const response = await fetch(url + '/api/dados_landing_page', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${ token }`
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        console.log('Status HTTP:', response.status);
        console.log('Resposta:', data);
        return data;

    } catch (error) {
        console.error('Erro na requisição:', error);
        return null
    }
}

export { getUserData }