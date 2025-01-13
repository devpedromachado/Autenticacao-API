import React, { useState } from 'react';

const Login = () => {
  // Estado local para armazenar o email digitado no formulário
  const [formData, setFormData] = useState({ email: '' });

  // Função para lidar com mudanças no campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtém o nome e o valor do campo alterado
    setFormData({ ...formData, [name]: value }); // Atualiza o estado com o novo valor
  };

  // Função para lidar com o envio do formulário
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que a página seja recarregada
    try {
      // Faz uma requisição GET para verificar se o email existe no banco
      const response = await fetch(`http://localhost:3000/users?name=${formData.email}`);
      const users = await response.json(); // Converte a resposta em JSON

      if (users.length > 0) {
        // Se algum usuário for encontrado, exibe uma mensagem de sucesso
        alert('Usuário encontrado!');
      } else {
        // Caso contrário, exibe uma mensagem informando que o usuário não foi encontrado
        alert('Usuário não encontrado.');
      }
    } catch (error) {
      // Lida com possíveis erros durante a requisição
      console.error('Erro ao buscar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className='signup-form'>
      <h1>Login</h1>
      {/* Campo para entrada do email */}
      <label>
        Email:
        <input
          type="email"
          name="email" // O atributo "name" deve corresponder à chave no estado
          value={formData.email} // Define o valor do campo com base no estado
          onChange={handleChange} // Atualiza o estado ao alterar o valor
          required
          className='signup-input'
        />
      </label>
      <br />
      {/* Botão para submeter o formulário */}
      <button type="submit" className='signup-btn'>Entrar</button>
    </form>
  );
};

export default Login;
