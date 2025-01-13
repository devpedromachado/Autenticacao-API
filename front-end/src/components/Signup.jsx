import React, { useState } from 'react';

const Signup = () => {
    // Estado local para armazenar os dados do formulário
    const [formData, setFormData] = useState({ nome: '', email: '', idade: '' });

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target; // Obtém o nome e o valor do campo que foi alterado
        setFormData({ ...formData, [name]: value }); // Atualiza o estado local com o novo valor
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário
        try {
            // Faz uma requisição POST para a API no back-end
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST', // Método HTTP utilizado
                headers: { 'Content-Type': 'application/json' }, // Define o tipo de conteúdo como JSON
                body: JSON.stringify(formData), // Converte os dados do formulário para o formato JSON
            });

            if (response.ok) { // Verifica se a resposta do servidor foi bem-sucedida (status 200-299)
                alert('Cadastro realizado com sucesso!');
                setFormData({ nome: '', email: '', idade: '' }); // Reseta os campos do formulário
            } else {
                alert('Erro ao realizar cadastro.'); // Exibe uma mensagem de erro se o status não for bem-sucedido
            }
        } catch (error) {
            // Trata erros que podem ocorrer durante a requisição
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    // Renderização do formulário
    return (
        <form onSubmit={handleSubmit} className='signup-form'>
            <h1>Cadastro</h1>
            {/* Campo para o nome */}
            <label>
                Nome:
                <input
                    type="text"
                    name="nome" // O atributo "name" deve corresponder à chave no estado
                    value={formData.nome} // Define o valor do campo com base no estado
                    onChange={handleChange} // Chama a função handleChange ao alterar o valor
                    required
                    className='signup-input'
                />
            </label>
            <br />
            {/* Campo para o email */}
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='signup-input'
                />
            </label>
            <br />
            {/* Campo para a idade */}
            <label>
                Idade:
                <input
                    type="number"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    required
                    className='signup-input'
                />
            </label>
            <br />
            {/* Botão de envio */}
            <button type="submit" className='signup-btn'>Cadastrar</button>
        </form>
    );
};

export default Signup;
