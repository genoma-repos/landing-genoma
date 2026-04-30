import fileIcon from '../assets/icons/FileIcon.svg'
import usersGroupIcon from '../assets/icons/UsersGroupIcon.svg'
export interface LandingPageCustomDataType {
    servicos: ServicoType[]
    user_name: string
    valor_sem_desconto: string
    valor_desconto: string
    valor_total: string
    quant_vendedores?: number
    certidoes?: typeof JOGO_CERTIDOES
}

type ResponseType = {
    id: 6188
    processo_id: 706
    servicos: ServicoResponseType[]
    user_name: string
    valor_total: string
    quant_vendedores?: number
}

export interface ServicoType {
    title: string
    value: string
    description: string
    icon: string
}

export interface ServicoResponseType {
    custas: string
    nome_servico: string
    servicos: string
    total: string
}

const JOGO_CERTIDOES = [
    "1° Certidão Negativa de Interdições e Tutelas",
    "2° Certidão Negativa de Interdições e Tutelas",
    "2° Distribuidor Cível",
    "2° Distribuidor Fiscal",
    "Certidão Justiça Federal",
    "Certidão Receita Federal",
    "Certidão Trabalhistas",
    "2° Distribuidor Fiscal Imóvel",
    "Efiteutica",
    "FUNESBOM",
    "Ônus Reais"
] as const;

export const formattedNumber = (value: string) => {
    // Remove "R$", dots and spaces, then replace comma with dot for decimal
    const numericValue = value.replace('R$', '').replace(/\./g, '').replace(/\s/g, '').replace(',', '.');
    return parseFloat(numericValue);
};

const URL = import.meta.env.VITE_SERVER_URL;
const URL_PARAMS = new URLSearchParams(window.location.search);
const FATOR_DESCONTO = 1.25;
const URL_ZAP = 'https://wa.me/5521992780407';

function returnServicos(landingData: ResponseType | null): ServicoType[] {
    const servicoes: ServicoType[] = [];
    if (landingData?.servicos?.[0]) {
        const jogos = landingData.servicos.filter(e => e.nome_servico.toLowerCase().includes('jogo'));
        if (jogos[0]) servicoes.push({
            title: 'Emissão das certidões',
            value: jogos.reduce((acc, item) => acc + (formattedNumber(item.custas) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            description: JOGO_CERTIDOES.join(', '),
            icon: fileIcon,
        })

        const averbacoes = landingData.servicos.filter(e => e.nome_servico.toLowerCase().includes('averbação'));
        if (averbacoes[0]) servicoes.push({
            title: 'Averbação de documentos',
            value: averbacoes.reduce((acc, item) => acc + (formattedNumber(item.custas) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            description: 'Serviço de averbação da venda no registro do imóvel',
            icon: fileIcon,
        })

        const outrosServicos = landingData.servicos.filter(e => !e.nome_servico.toLowerCase().includes('jogo') && !e.nome_servico.toLowerCase().includes('averbação'));
        if (outrosServicos[0]) outrosServicos.forEach((servico) => {
            servicoes.push({
                title: servico.nome_servico,
                value: (formattedNumber(servico.custas) * FATOR_DESCONTO).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                description: servico.servicos,
                icon: servico.nome_servico.includes('certidões') ? fileIcon : usersGroupIcon,
            })
        })

        const acompanhamentosDNA = {
            title: 'Acompanhamento especializado',
            value: landingData.servicos.reduce((acc, item) => acc + (formattedNumber(item.servicos) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            description: 'Gestão completa da etapa, validação de documentos e tratativa de exigências',
            icon: usersGroupIcon,
        }
        servicoes.push(acompanhamentosDNA);
    }
    return servicoes;
};

export const getUserData = async (): Promise<LandingPageCustomDataType | null> => {
    localStorage.removeItem('id_process');
    
    const PAYLOAD = {
        user_id: URL_PARAMS.get('id'),
        codigo: URL_PARAMS.get('cod'),
    };

    try {
        const response = await fetch(URL + '/api/dados_landing_page', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${ token }`
            },
            body: JSON.stringify(PAYLOAD)
        });

        const data = await response.json() as ResponseType;

        console.log('Status HTTP:', response.status);
        console.log('Resposta:', data);
        localStorage.setItem('id_process', data.processo_id.toString())

        const total_sem_desconto = data.servicos?.reduce((acc: number, item: { total: string }) => acc + (formattedNumber(item.total) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 'R$ 500,00';
        const desconto = (formattedNumber(total_sem_desconto) * 0.2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const total = (formattedNumber(total_sem_desconto) - formattedNumber(desconto)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        const formattedData: LandingPageCustomDataType = {
            user_name: data.user_name,
            valor_total: total,
            valor_sem_desconto: total_sem_desconto,
            valor_desconto: desconto,
            servicos: returnServicos(data) || [],
            quant_vendedores: data.quant_vendedores || 1,
            certidoes: JOGO_CERTIDOES
        };
        return formattedData;

    } catch (error) {
        console.error('Erro na requisição "dados_landing_page" :', error);
        return null
    }
}

export const onConfirm = async () => {
    const processo_id = localStorage.getItem('id_process');
    console.log("ID: ", processo_id);
    
    if(!processo_id) return window.location.href = URL_ZAP;

    try {
        const response = await fetch(URL + '/api/salvar_aceite_servico', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${ token }`
            },
            body: JSON.stringify({processo_id})
        });

        const data = await response.json();
        console.log('Status HTTP:', response.status);
        console.log('Resposta:', data);
        return window.location.href = URL_ZAP;
        
    } catch (error) {
        console.error('Erro na requisição "salvar_aceite_servico" :', error);
        return null
    }

}