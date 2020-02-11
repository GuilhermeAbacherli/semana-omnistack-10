import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

// 1. Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação;
// 2. Propriedade: informações que um componente PAI passa para o componente FILHO;
// 3. Estado: informações mantidas pelo componente (lembrar: imutabilidade).

function App() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get("dev");
            setDevs(response.data);
        }
        loadDevs();
    }, []);

    // API de contexto do do React para auxiliar
    // na transição de dados entre componente PAI e FILHO
    // e não precisar utilizar sempre propriedades

    async function handleAddDev(data) {
        const response = await api.post("/dev", data);
        setDevs([...devs, response.data]);
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev} />
            </aside>

            <main>
                <ul>
                    {devs.map(dev => (
                        <DevItem key={dev._id} dev={dev} />
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
