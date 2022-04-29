# READ.ME

## Sobre:

A TRead é uma plataforma de rede social que se propõe a integrar leitores e obras literárias.
Nessa rede os usuários compartilham entre si os livros que leram ou estão lendo, os seus favoritos,  resenhas e comentários e ainda dispõem de espaço para suas anotações pessoais não compartilhadas.
A TRead guarda em seu banco de dados os livros, autores, editoras, usuários e disponibiliza acesso aberto para os dados não sensíveis.
Todas as informações podem ser alimentadas pelos próprios usuários e ficam sob supervisão dos perfis administradores.
As produções dos usuários alimentam a rede social, fortalecendo o hábito da leitura.

Os conteúdos criados e publicados serão relacionados e entregues conforme pesquisa.
A pesquisa por um livro entrega além das suas informações técnicas e dados estatísticos de leitores (quanto leram, querem ler e etc), também todo conteúdo gerado por um usuário que envolva(cite/ marque) determinado livro.

## Funcionalidades:

Os usuários administradores podem realizar todas as funções disponíveis para os usuários comuns.

### Em Users:

- Usuários
    - Se cadastrar na rede
    - Realizar login
    - Buscar por todos os usuários da rede
    - Buscar por usuários por nome ou que contenham determinada palavra em seu nome
    - Visualizar as quantidades dos livros relacionados com determinado usuário
    - Visualizar as quantidades das postagens não privadas de um determinado usuário
    - Atualizar suas próprias informações
- Usuários Administradores
    - Atualizar informações de um usuário
    - Tornar um usuário em usuário administrador
    - Deletar um usuário

### Em Books

- Usuários
    - Cadastrar livros
    - Salvar livros que estiver lendo
    - Salvar livros que tiver lido
    - Salvar livros que quer ler
    - Salvar livros favoritos
    - Avaliar com nota de 0 a 5
    - Buscar todos os livros do banco de dados
    - Buscar livros por título ou que contenham determinada palavra em seu título
    - Buscar livro específico (com id)
    - Reivindicar alterações de informações(nome, autor e etc...)
- Usuários Administradores
    - Resgatar reivindicações dos usuários
    - Alterar/atualizar informações
    - Deletar um livro do banco de dados

### Em Authors:

- Usuários
    - Cadastrar um autor sob a criação de um livro
    - Buscar por todos os autores do banco de dados
    - Buscar autores por nome ou que contenham determinada palavra em seu nome
- Usuários Administradores
    - Cadastrar um autor
    - Atualizar informações de um autor
    - Deletar um autor

### Em Posts:

- Usuários
    - Criar uma postagem pública de resenha de um livro
    - Criar uma postagem pública de comentário associado à um livro ou à um autor
    - Criar uma postagem privada de marcação sobre determinado livro
    - Atualizar suas postagens
    - Buscar por todas as postagens da rede
    - Buscar por todas as postagens de um determinado livro
    - Buscar por todas as postagens de um determinado autor
    - Buscar por todas as postagens de um determinado usuário
    - Deletar suas postagens
- Usuários Administradores
    - Atualizar postagens
    - Deletar postagens

## Base URL

```jsx
https://capstone-q4-nodejs.herokuapp.com/api
```

Os endpoints que tiverem sinalizados com “**AUTH” deverão ser feitas as requisições com token de usuário logado.

Os endpoints que tiverem sinalizados com “**Admin” só serão acessadas por usuários administradores. 

Os endpoints que tiverem sinalizados com “**Paginate” terão permitidos o uso das queries “page” e “limit”

“page” - define como início para resposta do banco de dados. Por padrão é usado o 0 (zero).

“limit” - define a quantidade de dados a serem entregues por página. Por padrão é usado o 15 (quinze).

Todas as requisições deverão ser feitas em JSON.
Todas as repostas serão entregues em JSON.

## Endpoints em Users

### POST -                                   /users

Rota insere um usuário não cadastrado no banco de dados.

```json
{
"name": "Alfredo Chaves",
"email": "[a.chaves@mail.com](mailto:a.chaves@mail.com)",
"password": "1234",
"biography": "Amante de livros de terror",
"birthday": "1995/04/13",
"city": "são paulo"
}
```

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string | X |
| email | string, email | X |
| password | string | X |
| biography | string, max(400) |  |
| city | string, max(128) |  |
| birthday | string (yyyy,mm/dd) |  |
| admin | boolean |  |

Exemplo de requisição:

```json
{
	"author":"J K Rowling",
	"publisher":"Editora Rocco",
	"isbn": "9876543211556",
	"title":"Harry Potter e a ordem da fenix",
	"volume":1,
	"cover_image":"https://exemplo.com/15269",
	"released_date":"1997/12/15",
	"number_pages":264
}
```

exemplo de resposta

```json
201 - CREATED

{
	"admin": false,
	"birthday": "1995-04-13T03:00:00.000Z",
	"city": "São Paulo",
	"biography": "Amante de livros de terror",
	"email": "a.chaves@mail.com",
	"name": "Alfredo Chaves",
	"id": "90c8ebe1-33b3-4709-9b74-d306ea5f03c0"
}
```

### GET -  **Paginate                  /users

Aceita como query “name”. /books?name=potter

Não tem corpo na requisição.

Exemplo de resposta:

```json
200 - OK
{
"response" :[
	{
		"id": "90c8ebe1-33b3-4709-9b74-d306ea5f03c0",
		"name": "Alfredo Chaves",
		"email": "a.chaves@mail.com",
		"biography": "Amante de livros de terror",
		"birthday": "1995-04-13T03:00:00.000Z",
		"city": "São Paulo",
		"admin": false
	},
	{
		"id": "992dc69d-5b11-41ee-8464-17b5e5d21600",
		"name": "Foo Silva",
		"email": "foos@mail.com",
		"biography": "Amante de livros de terror",
		"birthday": "1995-04-13T03:00:00.000Z",
		"city": "São Paulo",
		"admin": false
	},
	{
		"id": "f56fe8f8-9d17-440b-a48e-7442805e1695",
		"name": "iqueique",
		"email": "iq@mail.com",
		"biography": "admin",
		"birthday": "1991-09-13T03:00:00.000Z",
		"city": "riodejaneiro",
		"admin": true
	}
],
	"navigate_links": {
		"next_page": "https://capstone-q4-nodejs.herokuapp.com/api/users?page=1&limit=15"
	}
}
```

### GET -                                      /users/:name

Não tem corpo na requisição

Exemplo de reposta em [http://localhost:3000/api/users/](http://localhost:3000/api/books/2)foo

```json
200 - OK
{
	"user": {
		"id": "992dc69d-5b11-41ee-8464-17b5e5d21600",
		"name": "Foo Silva",
		"email": "foos@mail.com",
		"biography": "Amante de livros de terror",
		"birthday": "1995-04-13T03:00:00.000Z",
		"city": "São Paulo",
		"admin": false
	},
	"relationalBooks": {
		"favorites_books": 0,
		"read_books": 0,
		"reading": 0,
		"want_to_read": 0,
		"favorites_books_list": [],
		"read_books_list": [],
		"want_to_read_list": []
	},
	"relationalPosts": {
		"review_posts": 2,
		"comment_posts": 2,
		"notes_posts": 2
	}
}
```

### PATCH - **AUTH                    /users/:id

É necessário o id do usuário para atualizar as informações.

O usuário autenticado poderá trocar suas próprias informações.

O administrador poderá trocar as informações de qualquer usuário.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string |  |
| email | string, email |  |
| password | string |  |
| biography | string, max(400) |  |
| city | string, max(128) |  |
| birthday | string (yyyy,mm/dd) |  |
| admin | boolean |  |

Exemplo de requisição

[http://localhost:3000/api/books/2](http://localhost:3000/api/books/2)

```json
{
	"biography": "Apaixonado por livros"
}
```

Exemplo de resposta

```json
200 - OK

{
	"id": "992dc69d-5b11-41ee-8464-17b5e5d21600",
	"name": "Foo Silva",
	"email": "foos@mail.com",
	"password": "$2a$10$Y9PxLvWp3eEnuOUV9zeqEeJVFktRS9nS6jgIz/8uz.VuTLSRCqIe2",
	"biography": "Apaixonado por livros",
	"birthday": "1995-04-13T03:00:00.000Z",
	"city": "São Paulo",
	"admin": false
}
```

### DELETE - **AUTH **Admin   /users/:id

É necessário o id do usuário para deletar os dados(a conta).

O usuário autenticado poderá trocar suas próprias informações.

O administrador poderá trocar as informações de qualquer usuário.

Não há corpo nessa requisição.

Exemplo de resposta:

```json
204 - NO CONTENT
```

## Endpoints em Login

### POST -                                   /login
Rota destinada para login com entrega de token.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| email | string, email | X |
| password | string | X |

Exemplo de requisição
```json
{
	"email": "iq@mail.com",
	"password": "senhadois"
}
```

Exemplo de resposta
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY1NmZlOGY4LTlkMTctNDQwYi1hNDhlLTc0NDI4MDVlMTY5NSIsImlhdCI6MTY1MTIzNjk1MywiZXhwIjoxNjUxMjQwNTUzfQ.9w6igtdzopvG-lCezutUJ1tMF_-sAnyt0UT98NMkmZk"
}
```

## Endpoints em Books

### POST - **AUTH -                    /books

Rota insere um livro não cadastrado no banco de dados.

Caso o título ou isbn já esteja sendo usado será retornado uma mensagem de de erro com status 409 de conflito.

```json
{ error: "Title and/or isbn already registered" }
```

Caso não exista o autor ou a editora no banco de dados, esses serão criados permitindo o cadastro do livro.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| title | string, max(128), único | X |
| isbn | string, max(13), único |  |
| author | string | X |
| publisher | string | X |
| volume | number, integer |  |
| cover_image | url address |  |
| released_date | string, (yyyy/mm/dd) |  |
| number_pages | number, integer |  |
| genres | array de strings |  |

Exemplo de requisição:

```json
{
	"author":"J K Rowling",
	"publisher":"Editora Rocco",
	"isbn": "9876543211556",
	"title":"Harry Potter e a ordem da fenix",
	"volume":1,
	"cover_image":"https://exemplo.com/15269",
	"released_date":"1997/12/15",
	"number_pages":264
}
```

exemplo de resposta

```json
201 - CREATED

{
	"isbn": "9876543211556",
	"title": "Harry Potter E A Ordem Da Fenix",
	"volume": 1,
	"cover_image": "https://exemplo.com/15269",
	"released_date": "1997-12-15T02:00:00.000Z",
	"number_pages": 264,
	"publisher": {
		"id": 1,
		"name": "Editora Rocco"
	},
	"genres": [
		{},
		{}
	],
	"id": 3,
	"rating": 0,
	"number_reviews": 0
}
```

### GET -  **Paginate                  /books

Aceita como query “name”. /books?name=potter

Não tem corpo na requisição.

Exemplo de resposta:

```json
200 - OK
{
	"reponse": [
		{
			"id": 3,
			"title": "Harry Potter E A Ordem Da Fenix",
			"author": "J K Rowling",
			"volume": 1,
			"isbn": "9876543211556",
			"cover_image": "https://exemplo.com/15269",
			"released_date": "1997-12-15T02:00:00.000Z",
			"number_pages": 264,
			"rating": 0,
			"qts_reviews": 0
		},
		{
			"id": 1,
			"title": "Harry Potter E A Pedra Filosofal",
			"author": "J K Rowling",
			"volume": 1,
			"isbn": "1234567898765",
			"cover_image": "https://exemplo.com/15269",
			"released_date": "1997-01-25T02:00:00.000Z",
			"number_pages": 264,
			"rating": 0,
			"qts_reviews": 0
		}
	],
	"navigate_links": {
		"next_page": "https://capstone-q4-nodejs.herokuapp.com/api/books?page=1&limit=15&name=potter"
	}
}
```

### GET -                                      /books/:id

Não tem corpo na requisição

Exemplo de reposta em [http://localhost:3000/api/books/2](http://localhost:3000/api/books/2)

```json
200 - OK
{
	"id": 2,
	"rating": 0,
	"number_reviews": 0,
	"isbn": "9876543211516",
	"title": "Teste Quatro",
	"volume": 1,
	"cover_image": "https://exemplo.com/15269",
	"released_date": "1997-12-15T02:00:00.000Z",
	"number_pages": 264
}
```

### PATCH - **AUTH **Admin     /books/:id

É necessário o id do livro para atualizar as informações.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| title | string, max(128), único |  |
| isbn | string, max(13), único |  |
| author | string |  |
| publisher | string |  |
| volume | number, integer |  |
| cover_image | url address |  |
| released_date | string, (yyyy/mm/dd) |  |
| number_pages | number, integer |  |
| genres | array de strings |  |

Exemplo de requisição

[http://localhost:3000/api/books/2](http://localhost:3000/api/books/2)

```json
{
	"title": "Harry Potter e o Prisioneiro de Azkaban"
}
```

Exemplo de resposta

```json
200 - OK

{
	"id": 2,
	"rating": 0,
	"number_reviews": 0,
	"isbn": "9876543211516",
	"title": "Harry Potter E O Prisioneiro De Azkaban",
	"volume": 1,
	"cover_image": "https://exemplo.com/15269",
	"released_date": "1997-12-15T02:00:00.000Z",
	"number_pages": 264
}
```

### DELETE - **AUTH **Admin   /books/:id

É necessário o id do livro para deletar as informações.

Não há corpo nessa requisição.

Exemplo de resposta:

```json
204 - NO CONTENT
```

## Endpoints em Authors

### POST - **AUTH **Adm                    /authors

Rota insere um autor não cadastrado no banco de dados.

Caso o nome já esteja sendo usado será retornado uma mensagem de de erro com status 409 de conflito.

```json
{ error: "This name is already exists in authors' list." }
```

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string, único | X |
| country | string |  |
| birthday | string, (yyyy/mm/dd) |  |
| death_date | string, (yyyy/mm/dd) |  |

Exemplo de requisição:

```json
{
	"name": "virginia woolf",
	"country": "Reino Unido",
	"birthday": "1882/01/25",
	"death_date": "1941/05/28"
}
```

exemplo de resposta

```json
201 - CREATED

{
	"death_date": "1941-05-28T03:00:00.000Z",
	"birthday": "1882-01-25T03:06:28.000Z",
	"country": "Reino Unido",
	"name": "Virginia Woolf",
	"id": 2
}
```

### GET -  **Paginate                  /authors

Aceita como query “name”. /authors?name=NAME_TO_SEARCH

Não tem corpo na requisição.

Exemplo de resposta:

```json
200 - OK
{
	"response": [
		{
			"id": 1,
			"name": "J K Rowling",
			"country": null,
			"birthday": null,
			"death_date": null,
			"books": [
				"Harry Potter E A Ordem Da Fenix",
				"Harry Potter E A Pedra Filosofal"
			]
		},
		{
			"id": 2,
			"name": "Virginia Woolf",
			"country": "Reino Unido",
			"birthday": "1882-01-25T03:06:28.000Z",
			"death_date": "1941-05-28T03:00:00.000Z",
			"books": []
		}
	],
	"navigate_links": {
		"next_page": "https://capstone-q4-nodejs.herokuapp.com/api/authors?page=1&limit=15&name="
	}
}
```

### GET -                                      /authors/:name

Não tem corpo na requisição

Exemplo de reposta em [https://capstone-q4-nodejs.herokuapp.com/api](https://capstone-q4-nodejs.herokuapp.com/api)[/authors/Virginia%20Woolf](http://localhost:3000/api/authors/Virginia%20Woolf)

```json
200 - OK
{
	"user": {
		"id": 2,
		"name": "Virginia Woolf",
		"country": "Reino Unido",
		"birthday": "1882-01-25T03:06:28.000Z",
		"death_date": "1941-05-28T03:00:00.000Z",
		"books": [],
		"posts": []
	}
}
```

### PATCH - **AUTH **Admin     /authors/:name

É necessário o nome exato do author para atualizar as informações.

{
"birthday": "1882/01/23"
}

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string, único |  |
| country | string |  |
| birthday | string, (yyyy/mm/dd) |  |
| death_date | string, (yyyy/mm/dd) |  |

Exemplo de requisição

[https://capstone-q4-nodejs.herokuapp.com/api/](https://capstone-q4-nodejs.herokuapp.com/api)[authors/Virginia Woolf](http://localhost:3000/api/authors/Virginia%20Woolf)

```json
{
	"birthday": "1882/01/23"
}
```

Exemplo de resposta

```json
200 - OK

{
	"id": 2,
	"name": "Virginia Woolf",
	"country": "Reino Unido",
	"birthday": "1882-01-23T03:06:28.000Z",
	"death_date": "1941-05-28T03:00:00.000Z",
	"books": [],
	"posts": []
}
```

### DELETE - **AUTH **Admin   /authors/:id

É necessário o id do livro para deletar as informações.

Não há corpo nessa requisição.

[https://capstone-q4-nodejs.herokuapp.com/api](https://capstone-q4-nodejs.herokuapp.com/api)/authors/Virginia%20Walf

Exemplo de resposta:

```json
204 - NO CONTENT
```



## Endpoints em Posts

### POST - **AUTH                   /posts

Rota insere uma postagem no banco de dados.
Ela deve conter uma das três categorias:
"Resenha", pública, se refere à uma resenha de um determinado livro, ID = 1.
"Comentario", pública, se refere a qualquer conteúdo relacionado à um autor ou à um livro, ID = 2.
"Marcacao", restrita ao usuário que a criou, se refere às marcações que queira desenvolver sem compartilhar com a rede, ID = 3.


| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| description | string, único |  |
| image | string, url address |  |
| type_id | number | X |

Exemplo de requisição:

```json
{
	"description": "uma grande descrição",
	"book": "Harry Potter E A Pedra Filosofal",
	"type_id": 2
}
```

exemplo de resposta

```json
201 - CREATED

{
		"id": 6,
		"visible": true,
		"create_date": "2022-04-28T14:04:11.892Z",
		"update_date": "2022-04-28T14:04:11.892Z",
		"description": "uma grande descrição!!",
		"image": "",
		"user": "Foo Silva",
		"type": "comentario"
	}
```

### GET -  **Paginate                  /posts

Aceita como query “name”. /posts?name=NAME_TO_SEARCH
o name será usado para buscar a palavra dentro das descriptions dos posts públicos.

Não tem corpo na requisição.

Exemplo de resposta:

```json
200 - OK
{
	"response": [
		{
			"id": 6,
			"user": {
				"name": "Foo Silva",
				"id": "992dc69d-5b11-41ee-8464-17b5e5d21600"
			},
			"book": "Harry Potter E A Pedra Filosofal",
			"author": "J K Rowling",
			"description": "Muito bom!!",
			"image": "http://imagemdacapa.com",
			"create_date": "2022-04-28T14:04:11.892Z",
			"update_date": "2022-04-28T14:04:11.892Z"
		},
		{
			"id": 5,
			"user": {
				"name": "Foo Silva",
				"id": "992dc69d-5b11-41ee-8464-17b5e5d21600"
			},
			"book": "Harry Potter E A Pedra Filosofal",
			"author": "J K Rowling",
			"description": "Gostei demais!!",
			"image": "http://imagemdacapa.com",
			"create_date": "2022-04-27T17:58:50.481Z",
			"update_date": "2022-04-27T17:58:50.481Z"
		}
	],
	"navigate_links": {
		"next_page": "https://capstone-q4-nodejs.herokuapp.com/api/posts?page=1&limit=15&name="
	}
}
```

### GET -                                      /posts/author/:author_id

Não tem corpo na requisição
Como na rota get /posts, essa rota entrega todos os posts relacionados a um determinado author.

### GET -                                      /posts/book/:book_id

Não tem corpo na requisição
Como na rota get /posts, essa rota entrega todos os posts relacionados a um determinado book.

### GET -                                      /posts/user/:user_id

Não tem corpo na requisição
Como na rota get /posts, essa rota entrega todos os posts relacionados a um determinado user.

### PATCH - **AUTH **Admin     /posts/:id

É necessário o id do post para atualizar as informações.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| description | string, único |  |
| image | string, url address |  |
| type_id | number | X |

Exemplo de requisição
https://capstone-q4-nodejs.herokuapp.com/api/posts/5

```json
{
	"description": "Devorei o livro em 1 semana"
}
```

Exemplo de resposta

```json
200 - OK

{
			"id": 5,
			"user": {
				"name": "Foo Silva",
				"id": "992dc69d-5b11-41ee-8464-17b5e5d21600"
			},
			"book": "Harry Potter E A Pedra Filosofal",
			"author": "J K Rowling",
			"description": "Devorei o livro em 1 semana",
			"image": "http://imagemdacapa.com",
			"create_date": "2022-04-27T17:58:50.481Z",
			"update_date": "2022-04-27T17:58:50.481Z"
		}
```

### DELETE - **AUTH **Admin   /posts/:id

É necessário o id do post para deletar as informações.

Não há corpo nessa requisição.

Exemplo de resposta:

```json
204 - NO CONTENT
```




## Endpoints em Publisher

### POST - **AUTH *Admin              /publisher

Rota insere uma editora no banco de dados.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string, único | X |

Exemplo de requisição:

```json
{
	"name": "editora rocco"
}
```

exemplo de resposta

```json
201 - CREATED

{
		"id": 1,
		"name": "Editora Rocco"
	}
```

### GET -                            /publisher

Não tem corpo na requisição.

Exemplo de resposta:

```json
200 - OK
[
	{
		"id": 1,
		"name": "Editora Rocco"
	}
]
```

### GET -                                      /publisher/:publisher_id

Não tem corpo na requisição
Exemplo de resposta
```json
{
	"id": 1,
	"name": "Editora Rocco"
}
```


### PATCH - **AUTH **Admin     /publisher/:id

É necessário o id da editora para atualizar as informações.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string, único | X |


```json
{
	"name": "Rocco"
}
```

Exemplo de resposta

```json
200 - OK
{
	"id": 1,
	"name": "Rocco"
}
```

### DELETE - **AUTH **Admin   /publisher/:id

É necessário o id da editora para deletar as informações.

Não há corpo nessa requisição.

Exemplo de resposta:

```json
204 - NO CONTENT
```




## Endpoints em Genres

### POST - **AUTH *Admin              /genres

Rota insere uma editora no banco de dados.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string, único | X |

Exemplo de requisição:

```json
{
	"name": "suspens"
}
```

exemplo de resposta

```json
201 - CREATED

{
		"id": 1,
		"name": "suspens"
	}
```


### GET -                                      /genres/:genre_id

Não tem corpo na requisição
Exemplo de resposta
```json
{
	"id": 1,
	"name": "suspens"
}
```


### PATCH - **AUTH **Admin     /genres/:id

É necessário o id do gênero para atualizar as informações.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| name | string, único | X |

Exemplo da requisição
```json
{
	"name": "suspense"
}
```

Exemplo de resposta

```json
200 - OK
{
	"id": 1,
	"name": "suspense"
}
```

### DELETE - **AUTH **Admin   /genres/:id

É necessário o id do gênero para deletar as informações.

Não há corpo nessa requisição.

Exemplo de resposta:

```json
204 - NO CONTENT
```




## Endpoints em User-Books
Essas rotas são responsáveis por criar as relações entre usuários e livros

### POST - **AUTH *Admin              /userBooks

Rota insere uma editora no banco de dados.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| read | boolean |  |
| reading | boolean |  |
| want_to_read | boolean |  |
| favorites | boolean |  |
| rating | number, max(5) |  |
| book | number, book_id | X |

Exemplo de requisição:

```json
{	
	"book": 3,
	"read": true,
	"reading": false,
	"want_to_read":false,
	"favorities":true,
	"rating":5
}
```

exemplo de resposta

```json
201 - CREATED
{
	"read": true,
	"reading": false,
	"want_to_read": false,
	"rating": 5,
	"book": "Harry Potter E A Ordem Da Fenix",
	"id": 2,
	"favorites": false,
	"user": "iqueique"
}
```


### GET -                                      /userBooks/:userbooks_id

Não tem corpo na requisição
Exemplo de resposta
```json
{
	"id": 2,
	"read": true,
	"reading": false,
	"want_to_read": false,
	"favorites": false,
	"rating": 5,
	"user": null,
	"book": {
		"id": 3,
		"rating": 5,
		"number_reviews": 1,
		"isbn": "9876543211556",
		"title": "Harry Potter E A Ordem Da Fenix",
		"volume": 1,
		"cover_image": "https://exemplo.com/15269",
		"released_date": "1997-12-15T02:00:00.000Z",
		"number_pages": 264,
		"posts": []
	}
}
```


### PATCH - **AUTH **Admin     /userBooks/:userbook_id

É necessário o id da relação para atualizar as informações.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| read | boolean |  |
| reading | boolean |  |
| want_to_read | boolean |  |
| favorites | boolean |  |
| rating | number, max(5) |  |
| book | number, book_id |  |

Exemplo da requisição
```json
{	
	"book": 3,
	"read": true,
	"reading": false,
	"want_to_read":false,
	"favorities":true,
	"rating":4
}
```

Exemplo de resposta

```json
200 - OK
{
	"read": true,
	"reading": false,
	"want_to_read": false,
	"rating": 4,
	"book": "Harry Potter E A Ordem Da Fenix",
	"id": 2,
	"favorites": false,
	"user": "iqueique"
}
```

### DELETE - **AUTH **Admin   /userBooks/:id

É necessário o id da relação para deletar as informações.

Não há corpo nessa requisição.

Exemplo de resposta:

```json
204 - NO CONTENT
```



## Endpoints em Tratativa-Admin


### POST - **AUTH              /tratativaAdmin

Rota insere uma editora no banco de dados.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| description | string | X |
| endpoint | string | X |

Exemplo de requisição:

```json
{
	"description": "Deletar o livro tal",
  "endpoint": "/book/123"
}
```

exemplo de resposta

```json
201 - CREATED
{
	"description": "Deletar o livro tal",
	"endpoint": "/book/123",
	"origin_user": "e497528a-e24a-4b35-9f35-dc3748e58bf7",
	"resolution": null,
	"id": 1,
	"sorted_out": false
}
```


### GET - **AUTH *Admin         /tratativaAdmin/
Entrega as tratativas não resolvidas pelos administradores.
Não tem corpo na requisição.
Exemplo de resposta
```json
[
	{
		"id": 1,
		"sorted_out": false,
		"description": "Deletar o livro tal",
		"resolution": null,
		"endpoint": "/book/123"
	},
  {
		"id": 2,
		"sorted_out": true,
		"description": "Deletar o livro tal",
		"resolution": "livro deletado",
		"endpoint": "/book/123"
	},
  ...
]
```

### GET - **AUTH *Admin         /tratativaAdmin/notRead
Entrega as tratativas não resolvidas pelos administradores.
Não tem corpo na requisição.
Exemplo de resposta
```json
[
	{
		"id": 1,
		"sorted_out": false,
		"description": "Deletar o livro tal",
		"resolution": null,
		"endpoint": "/book/123"
	},
  ...
]
```


### GET - **AUTH *Admin         /tratativaAdmin/read
Entrega as tratativas resolvidas pelos administradores.
Não tem corpo na requisição.
Exemplo de resposta
```json
[
	{
		"id": 1,
		"sorted_out": true,
		"description": "Deletar o livro tal",
		"resolution": null,
		"endpoint": "/book/123"
	}
]
```


### GET - **AUTH *Admin         /tratativaAdmin/:id
Entrega a tratativa especificada no id.
Não tem corpo na requisição
Exemplo de resposta
```json
{
	"id": 1,
	"sorted_out": false,
	"description": "Deletar o livro tal",
	"resolution": null,
	"endpoint": "/book/123"
}
```

### PATCH - **AUTH **Admin     /tratativaAdmin/:read

É necessário o id da relação para atualizar as informações.

| CHAVES | VALORES | OBRIGATORIEDADE |
| --- | --- | --- |
| description | string |  |
| endpoint | string |  |
| resoluton | string |  |
| sorted_out | boolean |  |


Exemplo da requisição
```json
{
	"sorted_out": true
}
```

Exemplo de resposta

```json
200 - OK
{
	"generatedMaps": [],
	"raw": [],
	"affected": 1
}
```
