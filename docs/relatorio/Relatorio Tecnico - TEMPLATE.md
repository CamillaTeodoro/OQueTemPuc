# Informações do Projeto

`TÍTULO DO PROJETO`

Informações sobre bares e restaurantes dentro e ao redor da PUC.

`CURSO`

Ciência da Computação

## Participantes

- Helena Ferreira Fernandes

- Matheus Pimentel Kansaon

- Olga Camilla Silva Teodoro

- Saulo Braga Silveira

- Vinicius Augusto Alves Santos Mello

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)

# Introdução

## Problema

> Aproximadamente 60% dos alunos da PUC desconhecem os serviço e produtos oferecidos na região,
> como alimentos, preços, promoções e atrações.
> Consequentemente isso diminui o potencial de compra e satisfação do cliente.
>
> Em pesquisas de opinião, foi identificado que isso ocorre devido a determinadas situações, como:
>
> - Falta de tempo.
> - praticidade de ir onde já conhecem .
> - Preconceito em relação ao preço.

## Objetivos

> O principal objetivo deste projeto é criar um site para que os alunos acessem e obtenham facilmente
> informações sobre estabelecimentos próximas à PUC.
>
> No entanto, este projeto também visa:
>
> - Melhorar o fluxo de clientes nos estabelecimentos.
> - Aumentar o consumo na região.
> - Melhorar o relacionamento entre o cliente e a empresa.

## Justificativa

> A motivação para a realização deste projeto deve-se ao fato de que grande parte dos alunos
> afirmaram não conhecer a maioria dos produtos e serviços oferecidos na região. Por meio das pesquisas de opinião,
> identificou-se que um dos principais fatores na ocorrência desse problema é o pré-conceito em relação ao preço do produto,
> pois aproximadamente 60% dos entrevistados alegaram não entrar em novos estabelecimentos
> por receio do valor, diante desse cenário é imprescindível a criação de um site no
> qual os alunos possam se informar de maneira rápida e fácil sem nenhum constrangimento.

## Público-Alvo

> O público-alvo é composto principalmente por alunos da PUC e pessoas que normalmente consomem na região.

# Especificações do Projeto

Para podermos definir quem eram as personas que usariam nosso aplicativo, realizamos uma pesquisa presencial com 45 alunos da PUC do Coração Eucaristico. Conversamos com alunos de diversos cursos e periodos para podermos entender quais eram suas necessidades em se tratando de consumo de alimentos dentro e fora da universidade.

Conversamos também com proprietários de 10 estabelecimentos dentro e fora da PUC.

E foi com base nessa necessidade levantada que os requisitos funcionais do projeto foram definidos, de forma a construirmos um aplicativo de fácil e rápido uso.

## Personas e Mapas de Empatia

> 1.  Primeira persona e mapa de empatia
>
> ![Primeira persona](imaages/../images/Persona1.png) > ![Primeiro mapa de empatia](imaages/../images/MapaEmpatia1.jpg)
>
> 2.  Segunda persona e mapa de empatia
>
> ![Segunda persona](imaages/../images/Persona2.png) > ![Segundo mapa de empatia](imaages/../images/MapaEmpatia2.jpg)
>
> 3.  Terceira persona e mapa de empatia
>
> ![Segunda persona](imaages/../images/Persona3.png) > ![Segundo mapa de empatia](imaages/../images/MapaEmpatia3.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                   | PARA ... `MOTIVO/VALOR`                                                                        |
| -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Lucas                | Praticidade em achar comércios que fiquem perto do prédio que estudo na universidade | Não gastar muito tempo procurando saber onde eu posso economizar mais                          |
| Luiza                | Descobrir comércios que fiquem perto do prédio que estudo na universidade            | Saber onde eu posso economizar mais e consumir produtos segundo meu gosto pessoal              |
| Lúcio                | Divulgar meu negócio                                                                 | Deixá-lo visível e atrativo para todos os estudantes da PUC e, assim, conseguir novos clientes |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

Requisitos funcionais são todas as necessidades, características ou funcionalidades esperadas em um processo que podem ser atendidos pelo software.

Já os Requisitos Não Funcionais definem como o sistema fará.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                             | Prioridade |
| ------ | ------------------------------------------------------------------ | ---------- |
| RF-001 | Permitir que o aluno utilize o aplicativo sem fazer login          | ALTA       |
| RF-002 | Permitir o cadastro do aluno e comerciante com email e senha       | ALTA       |
| RF-003 | Permitir alteração dos dados de cadastro dos alunos e comerciantes | ALTA       |
| RF-004 | Permitir que o aluno favorite o estabelecimento.                   | BAIXA      |
| RF-005 | Permitir que o aluno visualize a lista de favoritos                | BAIXA      |
| RF-006 | Permitir que o aluno pesquise pelo produto que ele quer consumir   | MÉDIA      |
| RF-007 | Permitir o compartilhamento de ofertas pelo WhatsApp               | MÉDIA      |
| RF-008 | Permitir que o comerciante cadastre/altere/exclua suas ofertas     | ALTA       |
| RF-009 | Permitir que o comerciante veja uma relação de ofertas cadastradas | ALTA       |
| RF-010 | Permitir que o comerciante veja o valor da assinatura mensal       | BAIXA      |
| RF-011 | Permitir que o comerciante emita o boleto de assinatura mensal     | BAIXA      |
| RF-012 | Permitir que o comerciante veja o histórico de pagamento           | BAIXA      |
| RF-013 | Permitir que o comerciante coloque um link para seu site externo   | ALTA       |
| RF-014 | Permitir que o comerciante insira data final nas ofertas           | ALTA       |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                | Prioridade |
| ------- | ----------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser mobile first                       | ALTA       |
| RNF-002 | Deve carregar página inicial em no máximo 3s          | MÉDIA      |
| RNF-003 | Deve ser multiplataforma (IOS/Android/Windows/MacOS ) | ALTA       |
| RNF-004 | Deve estar disponivel offline                         | MÉDIA      |
| RNF-005 | Deve ser desenvolvido em HTML, CSS e Javascript       | ALTA       |
| RNF-006 | Deve retornar resultado de pesquisa em no máximo 3s   | MÉDIA      |
| RNF-007 | Deve suportar aumento do número de cadastros          | MÉDIA      |
| RNF-008 | Servidor deve suportar 1000 requisições por hora      | ALTA       |
| RNF-009 | Deve excluir ofertas vencidas automaticamente         | MÉDIA      |

> Links externos:

- [PUC MINAS em números.](https://www.pucminas.br/AdministracaoSuperior/Secretarias/Documents/puc_numeros_2019_02.pdf)

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | O desenvolvimento do site não pode ser terceirizado   |

# Projeto de Interface

O objetivo do site é oferecer aos alunos e funcinários da PUC Coração Eucarístico um acesso
fácil às informações sobre os restaurantes, bares e lanchonetes dentro e próximos à universidade.
Pensando nisso e no fato de que essas pessoas usariam o site principalmente pelo celular enquanto
se movimentam pelo campus, o projeto de interface foi feito com foco inicial no uso do site em
aparelhos móveis, pois a interface no mobile é a que será mais utilizada.
Um site fácil de ser usado no celular também é importante para as lojas que o utilizem, pois serão
capazes de fazer seu cadastro, login e editar suas informações e produtos de forma prática e sem a
necessidade de um computador ou notebook.

A interface do site começa em uma tela inicial que permite o usuário fazer seu cadastro, entrar em
sua conta ou ir diretamente para a tela principal onde pode ver ou pesquisar informações sobre os
estabelecimentos e produtos.
A tela principal possui uma barra de pesquisa, uma área para novas ofertas e uma lista dos
estabelecimentos cadastrados com seu nome e palavras-chave sobre si. Também conta com um fácil
filtro para estabelecimentos dentro ou perto da universidade, para tornar a experiência do usuário
mais prática.
As telas de log in, cadastro para lojas e cadastro para consumidores possuem poucos elementos para
simplificar e tornar esse processo mais agradável aos usuários.

O protótipo interativo no Figma pode acessado no link abaixo:
https://www.figma.com/proto/9usSICVL1KvVK5G0IHVH3I/O-que-tem%3F---PUC-Coreu?node-id=0%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2

## User Flow

![UserFlow](https://user-images.githubusercontent.com/103282849/163723764-eff68413-a768-425e-b637-3436d77ae621.png)

## Wireframes

Aqui são mostradas os wireframes das principais telas do site.

![wireframes](https://user-images.githubusercontent.com/103282849/163724013-e6344c2f-5f98-4d84-af2b-0287d9f3c2d6.png)

# Metodologia

> O método "Design Thinking" foi utilizado na fase de concepção do projeto.
> Já na fase de desenvolvimento, a forma de gerenciamento escolhida pela equipe foi o Scrumban.

## Divisão de Papéis

> ### Scrum Master
>
> - Rommel Vieira Carneiro
>
> ### Product Owner
>
> - Julio Cesar Dillinger Conway
>
> ### Equipe de Desenvolvimento
>
> - Helena Ferreira Fernandes
> - Matheus Pimentel Kansaon
> - Olga Camilla Silva Teodoro
> - Saulo Braga Silveira
> - Vinicius Augusto Alves Santos Mello

## Ferramentas

| Ambiente                    | Plataforma      | Link de Acesso                                                                           |
| --------------------------- | --------------- | ---------------------------------------------------------------------------------------- |
| Processo de Design Thinkgin | Miro            | https://miro.com/app/board/uXjVOB3aPNI=/                                                 |
| Repositório de código       | GitHub          | [GitHub](encurtador.com.br/clvHP>)                                                       |
| Hospedagem do site          | Replit          | https://replit.com/                                                                      |
| Protótipo Interativo        | Figma           | https://www.figma.com/proto/9usSICVL1KvVK5G0IHVH3I/O-que-tem%3F---PUC-Coreu?node-id=0%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2 |
| Editor de código            | Vs code         | https://code.visualstudio.com/                                                           |
| Ferramenta de comunicação   | WhatsApp        | [whatsApp](encurtador.com.br/lpsS1)                                                      |
| Ferramenta de comunicação   | Microsoft Teams | [Teams](encurtador.com.br/vKN79)                                                         |

> As ferramentas empregadas no projeto são:
>
> - Visual studio code.
> - WhatsApp.
> - Figma.
> - Replit.
> - Microsoft Teams
> - GitHub

> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> um fácil manuseio por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos o figma por melhor captar as
> necessidades da nossa solução.

## Controle de Versão

> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
>
> O projeto segue a seguinte convenção para o nome de branchs:
>
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
>
> Quanto à gerência de commits cada desenvolvedor tem a sua autononomia, porém deve-se respeitar
> o propósito de cada branch.
>
> Os merges são utilizados para a unificação, sendo executado somente após a finalização dos testes, também
> por medida de segurança ao efetuar um merge é realizado o pull requests para averiguação das mundanças.
> Em relação as tags
> ou issues a equipe optou por não utilizar neste primeiro momento.

# **############## SPRINT 1 ACABA AQUI #############**

# Projeto da Solução

...... COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

...... COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
>
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

...... COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
>
> **Exemplo do diagrama de Arquitetura**:
>
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)

# Avaliação da Aplicação

...... COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

...... COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
>
> **Links Úteis**:
>
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

...... COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
>
> **Links Úteis**:
>
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

...... COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.

# Referências

...... COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
>
> **Links Úteis**:
>
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
