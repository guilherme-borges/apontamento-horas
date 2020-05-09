import React from 'react'
import Menu from '../../components/Menu'
import './styles.css'

export default function Projects() {
    return (
        <div>
            <Menu />
            <div className="container">
                <h1 className="mt-5">Cadastro de Projetos</h1>
                <form className="d-flex flex-column">
                    <fieldset className="border p-4 mb-3">
                        <div className="form-group">
                            <label for="txtName">Nome</label>
                            <input type="text" className="form-control" id="txtName" placeholder="Digite o nome do projeto" />
                        </div>
                        <div className="form-group">
                            <label for="cbxClient">Cliente</label>
                            <select className="form-control" id="cbxCliente">
                                <option>Cliente 1</option>
                                <option>Cliente 2</option>
                                <option>Cliente 3</option>
                                <option>Cliente 4</option>
                                <option>Cliente 5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="cbxStatus">Status</label>
                            <select className="form-control" id="cbxStatus">
                                <option>Em Andamento</option>
                                <option>Finalizado</option>
                            </select>
                        </div>
                    </fieldset>
                    <button id="btnSave'" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        </div>
    )
}