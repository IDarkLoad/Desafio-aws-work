import { Container, List, ComponentVehicle, FormVehicleContainer } from './styles';
import {useState} from "react"

const ListVehicles = ({ vehicles = [], handleCallToVehicles }) => {
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [ano, setAno] = useState("")
    const [combustivel, setCombustivel] = useState("")
    const [portas, setPortas] = useState("")
    const [fipe, setFipe] = useState("")
    const [cor, setCor] = useState("")

    const resetInputs = () => {
        setMarca("")
        setModelo("")
        setAno("")
        setCombustivel("")
        setPortas("")
        setFipe("")
        setCor("")
    }
    
    const handleSendVehicle = () => {
        const id = Math.floor(Math.random()*(10000 - 10 + 1) + 10);
        const formatVehicle = {id, marca_nome: marca.toUpperCase(), nome_modelo: modelo, ano, combustivel, num_portas: portas, cor, valor_fipe: fipe }
        handleCallToVehicles(formatVehicle)
        resetInputs()
    }

	return (
		<Container>
            <FormVehicleContainer>
                <input type="text" onChange={(e) => setMarca(e.target.value)} value={marca} placeholder="Marca"/>
                <input type="text" onChange={(e) => setModelo(e.target.value)} value={modelo} placeholder="Modelo"/>
                <input type="text" onChange={(e) => setAno(e.target.value)} value={ano} placeholder="Ano"/>
                <input type="text" onChange={(e) => setCombustivel(e.target.value)} value={combustivel} placeholder="Combustivel"/>
                <input type="text" onChange={(e) => setPortas(e.target.value)} value={portas} placeholder="Portas"/>
                <input type="text" onChange={(e) => setFipe(e.target.value)} value={fipe} placeholder="Fipe"/>
                <input type="text" onChange={(e) => setCor(e.target.value)} value={cor} placeholder="Cor"/>
                <button onClick={handleSendVehicle}>Adicionar</button>
            </FormVehicleContainer>
			<List>
				{vehicles.map((val) => (
					<ComponentVehicle key={val?.id}>
						 Marca: <span>{val?.marca_nome}</span>
                        Modelo: <span>{val?.nome_modelo}</span> 
                        ano: <span>{val?.ano}</span>
                        combustivel: <span>{val?.combustivel}</span>
                        Portas:<span>{val?.num_portas}</span>
                        FIPE:<span>{val?.valor_fipe}</span>
                        Cor:<span>{val?.cor}</span>
					</ComponentVehicle>
				))}
			</List>
		</Container>
	);
};

export default ListVehicles;
