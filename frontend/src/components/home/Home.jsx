import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Cadastro com React." >
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplicar a construçã
            de um cadastro desenvolvido em React!</p>
    </Main>
