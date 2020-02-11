import React from "react";
import "./styles.css";

const DevItem = props => {
    const { dev } = props;

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(", ")}</span>
                </div>
            </header>
            <p>
                CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
                desenvolvimento web e mobile.
            </p>
            <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no GitHub
            </a>
        </li>
    );
};
export default DevItem;
