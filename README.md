# salas-de-video
Video da Aplicação no Youtube:

[![Video da Aplicação](https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg)](https://www.youtube.com/watch?v=D-1xC9MS-Bw)

App Salas de Video React Node

Manual para baixar e rodar aplicações
Projeto deve ser baixado:
     1º) Na pasta backend deve ser rodado o comando yarn no terminal para baixar as dependências, e yarn dev para rodar o servidor.
     2º) Na pasta frontend deve ser rodado o comando yarn no terminal para baixar as dependências, e yarn dev para rodar a aplicação React.

Api em Node Ts
--Endpoints:
POST ->  /user
(Cadastro de Usuários) com parâmetros: name, email e password

POST -> /session
(Logar Usuário) com parâmetros: name, email e password

POST -> /sala
(Cadastro de Sala) com parâmetros: name e urlvideo

DELETE -> /sala/:id
(Deletar Sala) com parâmetros params id

GET -> /sala
(Listar Salas) sem parâmetros

PUT -> /sala/:id
(Editar Sala) com parâmetros: name e urlvideo

Aplicação Frontend:
Ao rodar aplicação
Para entrar na aplicação é exigido autenticação

1ª tela Login será pedido email e senha e clique em entrar (Caso não tenha cadastrado email e usuário clique em "Registrar-me" que será pedido Nome, Email e Senha)

2º tela Salas onde é listado as salas disponíveis para entrar em algum link

3ª tela Nova sala onde se pode criar outra sala com outro link

4ª tela (Na 2ª tela se pode editar as salas clicando no botão editar)

Também a 2ª tela pode-se ecluir sala clicando em excluir

Também no canto superior direito pode-se deslogar.




