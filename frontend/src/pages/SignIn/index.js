import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { login } from "../../services/auth";

import './styles.css';

export default function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        if (!username || !password) {
            alert('Preencha os campos corretamente!');
        } else {
            try {
                const response = await api.post('sessions', { username, password });

                login(response.data.token);

                history.push('/home');

            } catch (error) {
                alert('Erro ao fazer login, tente novamente.');
            }
        }
    }

    return (
        <div className="signin-container">
            <h1>Apontamento de Horas</h1>
            <form className="form-siginin" onSubmit={handleLogin}>
                <div className="form-group">
                    <input className="form-control"
                        placeholder="Digite o nome de usuário"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input className="form-control" 
                        type="password"
                        placeholder="Digite a senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary btn-block">Entrar</button>
            </form>
        </div>
    );
}