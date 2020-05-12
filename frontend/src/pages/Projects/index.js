import React, { useState } from 'react'
import api from '../../services/api';
import Menu from '../../components/Menu'
import Select from 'react-select'
import './styles.css'

export default function Projects() {

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [client, setClient] = useState('');

    const clientsList = [
        { value: 1, label: 'Cliente 1' },
        { value: 2, label: 'Cliente 2' },
        { value: 3, label: 'Cliente 3' },
        { value: 4, label: 'Cliente 4' },
    ]
    const statusList = [
        { value: 'Em Andamento', label: 'Em Andamento' },
        { value: 'Finalizado', label: 'Finalizado' },
    ]


    async function handleSaveProject(e) {
        e.preventDefault()
        const data = {
            name,
            status,
            client
        }

        await api.post('projects', data, {
            headers: {
                Authorization: localStorage.getItem('@proj-Token')
            }
        })
        alert('Projeto cadastrado.')


        setName('')
        setStatus('')
        setClient('')
    }

    return (
        <div>
            <Menu />
            <div className="container">
                <h1 className="mt-5">Cadastro de Projetos</h1>
                <form className="d-flex flex-column" onSubmit={handleSaveProject}>
                    <fieldset className="border p-4 mb-3">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Digite o nome do projeto"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <label>Cliente</label>
                        <Select
                            options={clientsList}
                            onChange={setClient}
                            className="mb-3"
                            placeholder="Selecione o Cliente"
                            isSearchable
                        />
                        <label>Status</label>
                        <Select
                            options={statusList}
                            onChange={setStatus}
                            className="mb-3"
                            placeholder="Selecione o status"
                            isSearchable
                        />

                    </fieldset>
                    <button id="btnSave" type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        </div>
    )
}