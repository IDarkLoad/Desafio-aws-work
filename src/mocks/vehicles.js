export const vehicles = () => {
    return new Promise(resolve => {
        setTimeout(resolve(
            [
                {
                    "id": 1,
                    "marca_id": 1,
                    "marca_nome": "TOYOTA",
                    "nome_modelo": "COROLLA XEI",
                    "ano": 2016,
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": 70,
                    "cor": "Azul",
                    "timestamp_cadastro": 1636636150
                },
                {
                    "id": 2,
                    "marca_id": 2,
                    "marca_nome": "FORD",
                    "nome_modelo": "Maverick",
                    "ano": 1974,
                    "combustivel": "alcool",
                    "num_portas": 2,
                    "valor_fipe": 170,
                    "cor": "Azul",
                    "timestamp_cadastro": 1636636150
                },
                {
                    "id": 3,
                    "marca_id": 2,
                    "marca_nome": "FORD",
                    "nome_modelo": "Ka",
                    "ano": 2015,
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": 50,
                    "cor": "Verde",
                    "timestamp_cadastro": 1636636150
                },
                {
                    "id": 4,
                    "marca_id": 3,
                    "marca_nome": "VW",
                    "nome_modelo": "GOL",
                    "ano": 2015,
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": 51,
                    "cor": "Branca",
                    "timestamp_cadastro": 1639141850
                },
                {
                    "id": 5,
                    "marca_id": 3,
                    "marca_nome": "VW",
                    "nome_modelo": "VOYAGE",
                    "ano": 2012,
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": 34.4,
                    "cor": "Preta",
                    "timestamp_cadastro": 1636636150
                },
                {
                    "id": 7,
                    "marca_id": 4,
                    "marca_nome": "FIAT",
                    "nome_modelo": "Uno Mille",
                    "ano": 2000,
                    "combustivel": "gasolina",
                    "num_portas": 2,
                    "valor_fipe": 10.1,
                    "cor": "Branca",
                    "timestamp_cadastro": 1605100230
                },
                {
                    "marca_id": 5,
                    "marca_nome": "TOYOTA",
                    "nome_modelo": "COROLLA XEI",
                    "ano": 2016,
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": 70,
                    "cor": "Azul",
                    "timestamp_cadastro": 1636636150,
                    "id": 8
                },
                {
                    "marca_id": 0,
                    "marca_nome": "TOYOTA",
                    "nome_modelo": "COROLLA",
                    "ano": "2004",
                    "combustivel": "gasolina",
                    "num_portas": 2,
                    "valor_fipe": "50000",
                    "cor": "azul",
                    "timestamp_cadastro": "1641477686",
                    "id": 10
                },
                {
                    "marca_id": 0,
                    "marca_nome": "VW",
                    "nome_modelo": "FUSCA",
                    "ano": "2017",
                    "combustivel": "Alcool",
                    "num_portas": 4,
                    "valor_fipe": "1200",
                    "cor": "Azul",
                    "timestamp_cadastro": "1641562360",
                    "id": 11
                },
                {
                    "marca_id": 3,
                    "marca_nome": "VW",
                    "nome_modelo": "GOL",
                    "ano": "2012",
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": "35000",
                    "cor": "rosa",
                    "timestamp_cadastro": "1642211506",
                    "id": 16
                },
                {
                    "marca_id": 0,
                    "marca_nome": "FORD",
                    "nome_modelo": "KA",
                    "ano": "2013",
                    "combustivel": "flex",
                    "num_portas": 4,
                    "valor_fipe": "50000",
                    "cor": "verde",
                    "timestamp_cadastro": "1642211755",
                    "id": 17
                }
            ]
        ), 3000)
    })
}