# BACK SIMPLES

Eis aqui uma versão simples e didática de como funciona um back moderno baseado em **NodeJS** e **TypeScript**, utilizando a metodologia de **Clean Architecture**, onde as responsabilidades do sistema são organizadas em camadas independentes:

## Camadas

### 1. **Domain**
A camada mais central, responsável por definir as **regras de negócio** e **entidades**.  
- Não depende de outras camadas.  
- Contém as abstrações, como interfaces e modelos, que definem o comportamento essencial do sistema.  
- Exemplo: Entidades, regras de validação e interfaces de repositório.  

### 2. **Application**
Foca nos **casos de uso** (ou casos de aplicação).  
- Representa a lógica de como as regras de negócio serão aplicadas.  
- Orquestra a interação entre a camada de `Domain` e as implementações concretas na `Infrastructure`.  
- Exemplo: Services, handlers e interações com a camada de domínio.  

### 3. **Infrastructure**
Responsável por implementar os **detalhes técnicos** e **interfaces externas**.  
- Inclui frameworks, bibliotecas, bancos de dados, APIs externas e configurações.  
- Depende das definições e contratos estabelecidos pelas camadas `Application` e `Domain`.  
- Exemplo: Repositórios concretos, conexão com banco de dados, APIs de terceiros.  

### Princípios
- **Independência de camadas**: O núcleo da aplicação (Domain e Application) não depende de detalhes externos (Infrastructure).  
- **Facilidade de teste**: Separar as responsabilidades permite testar as regras de negócio sem necessidade de acessar banco de dados ou APIs externas.  
- **Adaptabilidade**: Mudanças em tecnologias, como troca de banco de dados ou frameworks, afetam apenas a camada `Infrastructure`.

---

Este projeto é ideal para quem busca entender os princípios de arquitetura limpa e criar aplicações organizadas e escaláveis.

## Ecossistema do Projeto

Este projeto utiliza **Express** como framework para criar uma API robusta, **TypeScript** para garantir tipagem estática e maior segurança no desenvolvimento, e **Prisma** como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados **MySQL**. Abaixo estão os principais comandos para configurar e rodar o ambiente:  

- **`npm install`**: Instala todas as dependências do projeto listadas no `package.json`.  
- **`npx prisma migrate dev --name init`**: Aplica as migrações do banco de dados, criando as tabelas necessárias.  
- **`npm run seed`**: Popula o banco com um dado inicial (`levelId`) para começar a utilizar a aplicação.  
- **`npm run dev`**: Inicia o servidor no modo de desenvolvimento, com recarregamento automático em caso de alterações no código.  
- **`npm start`**: Roda o servidor no modo de produção, utilizando o código já compilado.  

Com essa estrutura, o ambiente é simples de configurar, mantendo boas práticas para desenvolvimento e produção