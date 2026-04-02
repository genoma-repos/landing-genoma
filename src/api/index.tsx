import fileIcon from '../assets/icons/FileIcon.svg'
import usersGroupIcon from '../assets/icons/UsersGroupIcon.svg'
export interface LandingPageCustomDataType {
    servicos: ServicoType[]
    user_name: string
    valor_desconto: string
    valor_total: string
    quant_vendedores?: number
    certidoes?: typeof JOGO_CERTIDOES
}

type ResponseType = {
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

const FATOR_DESCONTO = 1.25;

function returnServicos(landingData: ResponseType | null): ServicoType[] {
    const servicoes: ServicoType[] = [];
    if (landingData?.servicos?.[0]) {
        const jogos = landingData.servicos.filter(e => e.nome_servico.toLowerCase().includes('jogo'));
        if (jogos) servicoes.push({
            title: 'Emissão das certidões',
            value: jogos.reduce((acc, item) => acc + (formattedNumber(item.custas) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            description: JOGO_CERTIDOES.join(', '),
            icon: fileIcon,
        })

        const averbacoes = landingData.servicos.filter(e => e.nome_servico.toLowerCase().includes('averbação'));
        if (averbacoes) servicoes.push({
            title: 'Averbação de documentos',
            value: averbacoes.reduce((acc, item) => acc + (formattedNumber(item.custas) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            description: 'Serviço de averbação da venda no registro do imóvel',
            icon: fileIcon,
        })

        const outrosServicos = landingData.servicos.filter(e => !e.nome_servico.toLowerCase().includes('jogo') && !e.nome_servico.toLowerCase().includes('averbação'));
        if (outrosServicos) outrosServicos.forEach((servico) => {
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

        const data = await response.json() as ResponseType;

        console.log('Status HTTP:', response.status);
        console.log('Resposta:', data);

        const total_sem_desconto = data.servicos?.reduce((acc: number, item: { total: string }) => acc + (formattedNumber(item.total) * FATOR_DESCONTO), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 'R$ 500,00';
        const desconto = (formattedNumber(total_sem_desconto) * 0.2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const total = (formattedNumber(total_sem_desconto) - formattedNumber(desconto)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        const formattedData: LandingPageCustomDataType = {
            user_name: data.user_name,
            valor_total: total,
            valor_desconto: desconto,
            servicos: returnServicos(data) || [],
            quant_vendedores: data.quant_vendedores || 1,
            certidoes: JOGO_CERTIDOES
        };
        return formattedData;

    } catch (error) {
        console.error('Erro na requisição:', error);
        return null
    }
}

export { getUserData }