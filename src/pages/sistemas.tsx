import React, { useState } from "react"
import * as Style from "../styles/pages/sistema"
export function Sistemas() {
  type Conteudo = {
    Titulo: string;
    Texto: string;
  };

  type Topico = {
    Qtd: number;
    Texto: string;
    Topicos: string[];
  };

  type Info = {
    Conteudo: Conteudo;
    Topico: Topico;
  };

  type Modulo = {
    Name: string;
    info: Info;
  };

  const objetoDados: Modulo[] = [
    {
      Name: 'Financeiro',
      info: {
        Conteudo: {
          Titulo: 'Módulo Financeiro',
          Texto: 'O módulo financeiro tem como objetivo fazer o controle financeiro da empresa, gerandorelatórios para melhor decisão tomar; com a nossa tecnologia a empresa tem como usar uma inteligência artificial que tem a capacidadede analisar seus números e dar dicas de umaboa decisão, até mesmo fazendo previsões com estatistica'
        },
        Topico: {
          Qtd: 3,
          Texto: 'Esse modulo tem a opção de adicionar os dados de forma manual, mas não recomendamos, então para um resultado melhor é necessário adicionar os seguintes módulos:',
          Topicos: [
            "Cadastro de Colaboradores",
            "Cadastro de Produtos",
            "Controle de Vendas"
          ]
        }
      }
    },
    {
      Name: 'RH',
      info: {
        Conteudo: {
          Titulo: 'Módulo Recursos Humanos',
          Texto: 'O módulo Recursos Humanos visa fazer o controle de contratos, faltas, atestados, salários,  definição de função, controle de horas trabalhadas.Tudo que é necessário para auxiliar a empresa no controle doscolaboradores.'
        },
        Topico: {
          Qtd: 2,
          Texto: "Esse módulo pode funcionar de forma autônoma, mas tem como opção atribuir a alguns outros módulos, como:",
          Topicos: [
            "Módulo Financeiro",
            "Cadastro de Colaboradores"
          ]
        }
      }
    },
    {
      Name: 'Estoque',
      info: {
        Conteudo: {
          Titulo: 'Módulo Estoque',
          Texto: 'O módulo Estoque vai ficar responsável por fazer o controle de entrada e saída dos produtos/materiais cadastrados.'
        },
        Topico: {
          Qtd: 3,
          Texto: "Esse módulo pode funcionar de forma autônoma, mas tem como opção atribuir a alguns outros módulos, como:",
          Topicos: [
            "Módulo Financeiro",
            "Cadastro de Colaboradores",
            "Controle de Vendas"
          ]
        }
      }
    }
  ];
  const [titulo1, setTitulo1] = useState('');
  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  const [titulo2, setTitulo2] = useState('');
  /*
          LOGICA: ler o dado que vai ser passado na função(Dado) fazer a busca no objeto para ver se encontra
          encontrou, faz as atribuições com o set(ex: setTitulo1), depois é necessario fazer um for usando como parametro a quantidade de topicos
          essa função vai adicionar dinamicamente os topicos.
      */
  const alteraTexto = (Dado: string) => {
    // o .find verifica se existe no objetoDados.modulo.name uma valor passado no parametro Dado
    //senão for encontrado ele ja é definido com undefined
    const moduloChamado = objetoDados.find((modulo) => modulo.Name === Dado);

    // Verifique se o módulo foi encontrado
    if (moduloChamado) {
      setTitulo1(moduloChamado.info.Conteudo.Titulo);
      setTexto1(moduloChamado.info.Conteudo.Texto);
      setTexto2(moduloChamado.info.Topico.Texto);
      setTitulo2('É Independente?');

      // Crie uma string HTML para os tópicos
      let topicosHTML = "";

      // Loop para adicionar os tópicos
      for (let i = 0; i < moduloChamado.info.Topico.Qtd; i++) {
        topicosHTML += `<li>${moduloChamado.info.Topico.Topicos[i]}</li>`;
      }

      // Adicione a string HTML à sua página HTML onde deseja exibir os tópicos
      const listaTopicos = document.getElementById("Topicos");
      if (listaTopicos) {
        listaTopicos.innerHTML = `<ul>${topicosHTML}</ul>`;
      }
    } else {
      // Se o módulo não for encontrado, limpe os campos
      setTitulo1("");
      setTexto1("");
      setTexto2("");
    }
  };

  return (
    <Style.Sistema>
      <div>
        <button className="Sistemas" onClick={() => { alteraTexto('Financeiro'); return null; }}  ><h2>Módulo Financeiro</h2></button>
        <button className="Sistemas" onClick={() => { alteraTexto('RH'); return null; }}><h2>Módulo RH</h2></button>
        <button className="Sistemas" onClick={() => { alteraTexto('Estoque'); return null; }}><h2>Módulo Estoque</h2></button>
      </div>
      <div>
        <div>
          <h2>{titulo1}</h2>
          <p>{texto1}</p>
        </div>
        <div>
          <h2>{titulo2}</h2>
          <p>{texto2}</p>
          <ul id="Topicos">

          </ul>
        </div>

      </div>
      <div id="seta"></div>
    </Style.Sistema>
  )
}