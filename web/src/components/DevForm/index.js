import React, { useState, useEffect } from "react";
import "./styles.css";

const DevForm = props => {
    const { onSubmit } = props;
    const [github_username, setGithubUsername] = useState("");
    const [techs, setTechs] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []); // Dependências do "useEffect", quando irá acionar a function?
    // [] array vazia -> Sempre que houver qualquer alteração no estado!

    async function handleSubmit(event) {
        event.preventDefault();
        await onSubmit({ github_username, techs, latitude, longitude });
        setGithubUsername("");
        setTechs("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do GitHub</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={event => setGithubUsername(event.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        name="latitude"
                        id="latitude"
                        type="number"
                        required
                        readOnly
                        value={latitude}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        name="longitude"
                        id="longitude"
                        type="number"
                        required
                        readOnly
                        value={longitude}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    );
};

export default DevForm;
