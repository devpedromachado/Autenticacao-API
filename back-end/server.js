import express from 'express'; 
import { PrismaClient } from '@prisma/client';
import cors from 'cors'; 

// Instancia o cliente do Prisma, responsável por interagir com o banco de dados
const prisma = new PrismaClient();

const app = express(); 

// Middleware para que a aplicação possa interpretar requisições com JSON no body
app.use(express.json()); 

// Middleware para permitir requisições de diferentes origens (necessário para evitar erros de CORS em aplicações front-end)
app.use(cors()); 

const port = 3000; // Define a porta em que o servidor será executado

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    // Usa o Prisma para criar um registro na tabela "user"
    await prisma.user.create({
        data: {
            name: req.body.nome,  // Obtém o nome do corpo da requisição
            email: req.body.email, // Obtém o email do corpo da requisição
            age: req.body.idade   // Obtém a idade do corpo da requisição
        }
    });

    // Retorna o corpo da requisição com status 201 (criado com sucesso)
    res.status(201).json(req.body);
});

// Rota para atualizar um usuário existente
app.put('/users/:id', async (req, res) => {
    // Usa o Prisma para atualizar um registro com base no ID fornecido na URL
    await prisma.user.update({
        where: {
            id: req.params.id // Identifica o registro pelo ID passado como parâmetro na URL
        }, 
        data: {
            name: req.body.nome,  // Atualiza o nome
            email: req.body.email, // Atualiza o email
            age: req.body.idade   // Atualiza a idade
        }
    });

    // Retorna o corpo da requisição com status 201 (atualizado com sucesso)
    res.status(201).json(req.body);
});

// Rota para listar usuários
app.get('/users', async (req, res) => {
    let users = []; // Inicializa o array de usuários

    if (req.query) { 
        // Busca usuários que correspondam aos critérios de filtro passados como query params
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,  // Filtra pelo nome (se fornecido)
                email: req.query.name, // Filtra pelo email (possível erro aqui, deveria ser req.query.email)
                age: req.query.age     // Filtra pela idade (se fornecida)
            }
        });
    } else { 
        // Caso não haja filtros, retorna todos os usuários
        users = await prisma.user.findMany();
    }

    // Retorna os usuários encontrados com status 200 (sucesso)
    res.status(200).json(users);
});

// Rota para deletar um usuário pelo ID
app.delete('/users/:id', async (req, res) => {
    // Usa o Prisma para deletar um registro com base no ID passado na URL
    await prisma.user.delete({
        where: {
            id: req.params.id // Identifica o registro pelo ID
        }
    });

    // Retorna uma mensagem de sucesso com status 200 (OK)
    res.status(200).json({ message: "Usuário deletado com sucesso!" }); 
});

// Inicia o servidor e escuta na porta definida
app.listen(port, console.log(`Servidor rodando em http://localhost:${port}/users`));
