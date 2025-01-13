
![UMAIA|Logo](/Docs/umaia.png)

# **Desenvolvimento Web 1**
## Apresentação do projeto

O Grupo 35 para o M3, escolheu utilizar uma Base de Dados que foi criada no 1º ano para a cadeira de Base de Dados. É uma Base de Dados para utilização numa cadeia de Hotéis, com 9 tabelas. Para o trabalho, foi desevolvida uma API com 5 recursos e utilizados métodos HTTP, para obter, editar, adicionar e eliminar dados (GET, PUT, POST e DELETE). Este trabalho permite-nos desenvolver habilidades práticas em desenvolvimento web, nomeadamente em Loppback4 e React-Admin.

### Alguns métodos HTTP utilizados na API

A API criada para este projeto utiliza os seguintes métodos HTTP para interagir com os recursos:

- **GET**: Utilizado para obter dados de recursos específicos ou listar recursos. Por exemplo, ao usar o método GET, você pode listar todos os hotéis ou obter detalhes de um hotel específico.
  
  Exemplos de utilização:
  - **GET /hotels**: Lista todos os hotéis.
  - **GET /hotels/{id}**: Obtém detalhes de um hotel específico.
  - **GET /guests**: Lista todos os hóspedes.
  
- **POST**: Usado para criar novos recursos na Base de Dados. Quando você envia uma requisição POST, está criando um novo registro, como adicionar um novo hotel ou hóspede.
  
  Exemplos de utilização:
  - **POST /hotels**: Cria um novo hotel.
  - **POST /guests**: Cria um novo hóspede.
  
- **PUT**: Utilizado para atualizar um recurso existente na Base de Dados. Ao fazer uma requisição PUT, você está substituindo completamente o recurso existente com novos dados. Este método é usado, por exemplo, para atualizar as informações de um hotel ou hóspede.
  
  Exemplos de utilização:
  - **PUT /hotels/{id}**: Atualiza os dados de um hotel específico.
  - **PUT /guests/{id}**: Atualiza os dados de um hóspede específico.
  
- **DELETE**: Usado para excluir um recurso existente na Base de Dados. Quando você envia uma requisição DELETE, o recurso indicado será removido permanentemente.
  
  Exemplos de utilização:
  - **DELETE /hotels/{id}**: Exclui um hotel específico.
  - **DELETE /guests/{id}**: Exclui um hóspede específico.

Esses métodos foram usados para a interação com os seguintes recursos da API:
- **Hotéis**: Adicionar, editar, listar e remover hotéis.
- **Hóspedes**: Adicionar, editar, listar e remover hóspedes.
- **Reservas**: Gerenciar reservas de hotéis.
- **Quartos**: Gerenciar os quartos dos hotéis, incluindo disponibilidade e preços.
- **Restaurantees**: Gerenciar os restaurantes dos hotéis.
- **Tipos de Quartos**: Gerenciar os tipos de quartos dos hotéis.
- **Regimes**: Gerenciar os regimes ddisponiveis para reserva.
- **Serviços**: Gerenciar os serviços disponiveis nos hotéis.

---


## Produto

- Documentação da API em OpenAPI 3.0
- **Collection** do Postman para testes da API

---

## Organização do repositório
O repositório está organizado da seguinte forma:
- **pasta Docs** - Contém relatório entregue no inicio do trabalho, onde consta o tema do trabalho
- **pasta Hotel_management** - Contém ficheiros LoopBack, Base Dados, React-Admin, respectivos dockerfile, docker-compose
- **pasta PostmanCollection**: Arquivo com a Collection do Postman para testar os endpoints da API.

---

## Link's dos repositórios do Docker Hub

- **mysql** - docker pull inf24dw1g32/mysql:2.0
- **nodejs** - docker pull inf24dw1g32/node:2.0
- **react** - docker pull inf24dw1g32/react:1.0

## Elementos do Grupo
- António Manuel Ferreira Lopes dos Santos Filipe - nº 044351 @AmFilipe
- João Pedro Freitas Gomes – nº 045235 @joaoismai
