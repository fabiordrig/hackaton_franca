import imoveis from '@/dates/json/houses.json'
import reports from './Maps'
import avaliar from './TableList1'
import anunciar from './Icons'

export default {
  components: {
    'reports': reports,
    'avaliar': avaliar,
    'anunciar': anunciar
  },
  created () {
    this.arrayImoveis = imoveis.houses
    this.avancarConversa()
    this.avatar = './img/francis.png'
  },
  data () {
    return {
      avatar: '',
      arrayHistoricoConversa: [],
      arrayScriptPrincipal: [
        {
          id: 0,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Oi, tudo bem? Eu sou o Francis!'
        },
        {
          id: 1,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Vou te auxiliar hoje!'
        },
        {
          id: 4,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'O que você precisa fazer?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Alugar um imóvel',
                funcao: 'alugar'
              },
              {
                id: 1,
                texto: 'Comprar um imóvel',
                funcao: 'comprar'
              },
              {
                id: 2,
                texto: 'Anunciar meu imóvel',
                funcao: 'anunciar'
              },
              {
                id: 3,
                texto: 'Avaliar um imóvel',
                funcao: 'avaliar'
              },
              {
                id: 4,
                texto: 'Reportar um problema',
                funcao: 'reportar'
              }
            ]
          }
        }
      ],
      arrayScriptCompraAluguelSimples: [
        {
          id: 0,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Acho que ainda não nos conhecemos!'
        },
        {
          id: 1,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o seu nome?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Meu nome é...',
            texto: ''
          }
        },
        {
          id: 2,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Muito prazer!'
        },
        {
          id: 3,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Gostaria de saber sua idade...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'number',
            label: 'Minha idade é...',
            texto: ''
          }
        },
        {
          id: 4,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Hmm, você é jovem como eu 😀!'
        },
        {
          id: 5,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual tipo de imóvel te atende?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Casa'
              },
              {
                id: 1,
                texto: 'Apartamento ou casa em condomínio'
              },
              {
                id: 2,
                texto: 'Chácara ou sítio'
              },
              {
                id: 3,
                texto: 'Terreno ou terreno em condomínio'
              }
            ]
          }
        },
        {
          id: 6,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Legal! Quantos dormitórios você precisa?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apenas 1'
              },
              {
                id: 1,
                texto: 'Entre 1 e 3'
              },
              {
                id: 2,
                texto: 'Mais de 3'
              }
            ]
          }
        },
        {
          id: 7,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Suítes são necessárias?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apenas 1'
              },
              {
                id: 1,
                texto: 'Entre 1 e 3'
              },
              {
                id: 2,
                texto: 'Mais de 3'
              }
            ]
          }
        },
        {
          id: 8,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Beleza! Qual o valor máximo do imóvel?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'number',
            label: 'Consigo pagar até...',
            texto: ''
          }
        },
        {
          id: 9,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você tem carro?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apenas 1, meu possante...'
              },
              {
                id: 1,
                texto: 'Tenho 2 xodós'
              },
              {
                id: 2,
                texto: 'Mais de 3, sim, isso mesmo'
              }
            ]
          }
        },
        {
          id: 10,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Já encontrei alguns imóveis...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Vamos ver quais são',
                funcao: 'finalizarSimples'
              },
              {
                id: 1,
                texto: 'Quero filtrar mais',
                funcao: 'iniciarExtendido'
              }
            ]
          }
        }
      ],
      arrayScriptAnuncio: [
        {
          id: 0,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Acho que ainda não nos conhecemos!'
        },
        {
          id: 1,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o seu nome completo?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Meu nome é...',
            texto: ''
          }
        },
        {
          id: 2,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Muito prazer!'
        },
        {
          id: 3,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'E você tem email?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Meu email é',
            texto: ''
          }
        },
        {
          id: 4,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'E se precisarmos te ligar...'
        },
        {
          id: 5,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o seu telefone mesmo?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'phone',
            label: 'Meu telefone é...',
            texto: ''
          }
        },
        {
          id: 6,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Vamos falar do seu imóvel!'
        },
        {
          id: 7,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Como você apresentaria seu imóvel?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Lindo apartamento em área nobre',
            texto: ''
          }
        },
        {
          id: 8,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o endereço do imóvel?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Av. Super Devs já ganhou',
            texto: ''
          }
        },
        {
          id: 9,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Descreva seu imóvel',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Meu imóvel tem lareira para os dias frios...',
            texto: ''
          }
        },
        {
          id: 10,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o tipo do seu imóvel?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apartamento'
              },
              {
                id: 1,
                texto: 'Casa'
              },
              {
                id: 2,
                texto: 'Casa em Condomínio'
              },
              {
                id: 3,
                texto: 'Chácara'
              },
              {
                id: 4,
                texto: 'Sítio'
              },
              {
                id: 5,
                texto: 'Terreno'
              },
              {
                id: 6,
                texto: 'Terreno em Condomínio'
              },
              {
                id: 7,
                texto: 'Área'
              }
            ]
          }
        },
        {
          id: 10,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Que tal adcionar algumas fotos?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'imagem',
            label: '',
            texto: ''
          }
        },
        {
          id: 11,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o tipo do seu negócio?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Residencial'
              },
              {
                id: 1,
                texto: 'Comercial'
              },
              {
                id: 2,
                texto: 'Empreendimento'
              }
            ]
          }
        },
        {
          id: 12,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Por fim, o que deseja?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Alugar',
                funcao: 'finalizarAnuncio'
              },
              {
                id: 1,
                texto: 'Vender',
                funcao: 'finalizarAnuncio'
              }
            ]
          }
        }
      ],
      arrayScriptCompraAluguelExtendido: [
        {
          id: 10,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Sobre espaço, qual a área máxima?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'number',
            label: 'Até quantos metros quadrados?',
            texto: ''
          }
        },
        {
          id: 11,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Na área de lazer...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Meu lazer é fazer churrasco'
              },
              {
                id: 1,
                texto: 'Gosto muito de piscina'
              },
              {
                id: 2,
                texto: 'Playground para as crianças!'
              },
              {
                id: 3,
                texto: 'Jogo tênis'
              },
              {
                id: 4,
                texto: 'Gosto é de um salão de festas'
              },
              {
                id: 5,
                texto: 'Tem que ter sala de jogos'
              }
            ]
          }
        },
        {
          id: 12,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'A minha casa dos sonhos...'
        },
        {
          id: 13,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Tem que ter uma banheira bem grande!'
        },
        {
          id: 14,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Opa! Conversa errada hehe'
        },
        {
          id: 15,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Voltando ao seu imóvel'
        },
        {
          id: 16,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'O que você quer muito?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Ar condicionado'
              },
              {
                id: 1,
                texto: 'Uma lareira ❤'
              },
              {
                id: 2,
                texto: 'Imóvel mobiliado'
              },
              {
                id: 3,
                texto: 'Uma sauna quentinha'
              }
            ]
          }
        },
        {
          id: 17,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Ultima pergunta, juro hehe'
        },
        {
          id: 18,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Sobre segurança...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Precisa ter alarme',
                funcao: 'finalizarSimples'
              },
              {
                id: 1,
                texto: 'Condomínio fechado',
                funcao: 'finalizarSimples'
              },
              {
                id: 2,
                texto: 'Interfone',
                funcao: 'finalizarSimples'
              },
              {
                id: 3,
                texto: 'Portaria 24 horas',
                funcao: 'finalizarSimples'
              },
              {
                id: 4,
                texto: 'Vigilância 24 horas',
                funcao: 'finalizarSimples'
              }
            ]
          }
        }
      ],
      arrayImoveis: [],
      objetoResposta: null,
      exibComponent: false,
      objetoImovelSelecionado: {},
      sheet: false,
      rating: 4
    }
  },
  methods: {
    avancarConversa () {
      let objetoProximaInteracao = this.arrayScriptPrincipal.filter(e => e.foiExibido === false)[0]
      let interacaoParaHistorico = this.arrayScriptPrincipal.filter(e => e.foiExibido === false)[0]

      if (!objetoProximaInteracao) {
        // this.objetoResposta = null
        // this.arrayHistoricoConversa = this.arrayHistoricoConversa.concat([
        //   {
        //     id: this.arrayHistoricoConversa.length,
        //     foiExibido: true,
        //     modelo: 'informacao',
        //     texto: 'Desculpe, ocorreu um erro.'
        //   },
        //   {
        //     id: this.arrayHistoricoConversa.length + 1,
        //     foiExibido: true,
        //     modelo: 'informacao',
        //     texto: 'Podemos conversar mais tarde?'
        //   }
        // ])
        // return false
      }

      interacaoParaHistorico.id = this.arrayHistoricoConversa.length
      this.arrayHistoricoConversa.push(objetoProximaInteracao)

      // let avancaNovamente = objetoProximaInteracao.modelo === 'pergunta' && objetoProximaInteracao.resposta ? false : true
      let avancaNovamente = !(objetoProximaInteracao.modelo === 'pergunta' && objetoProximaInteracao.resposta)

      for (let index = 0; index < this.arrayScriptPrincipal.length; index++) {
        const item = this.arrayScriptPrincipal[index]

        if (item.id === objetoProximaInteracao.id) {
          this.arrayScriptPrincipal[index].foiExibido = true

          if (avancaNovamente) {
            this.avancarConversa()
          } else this.objetoResposta = objetoProximaInteracao.resposta
          break
        }
      }

      // this.$vuetify.goTo(9999, { duration: 800, offset: 0, easing: 'easeInOutCubic' })
      return true
    },
    responder (resposta) {
      let respostaUsuario = resposta.texto || resposta

      if (!respostaUsuario || respostaUsuario.texto === '') return false

      this.arrayHistoricoConversa.push({
        id: this.arrayHistoricoConversa.length,
        foiExibido: true,
        modelo: 'resposta',
        texto: respostaUsuario
      })

      if (resposta.funcao) {
        if (resposta.funcao === 'alugar' || resposta.funcao === 'comprar') {
          this.arrayScriptCompraAluguelSimples.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })
        }

        if (resposta.funcao === 'iniciarExtendido') {
          this.arrayScriptCompraAluguelExtendido.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })
        }

        if (resposta.funcao === 'finalizarSimples') {
          this.arrayScriptPrincipal.push({
            id: this.arrayScriptPrincipal.length,
            foiExibido: false,
            pausaEscrita: 2,
            modelo: 'pergunta',
            texto: 'Encontrei esses imóveis!',
            resposta: {
              visivel: true,
              modelo: 'resposta',
              tipo: 'resultados',
              opcoes: this.arrayImoveis
            }
          })
        }

        if (resposta.funcao === 'finalizarAnuncio') {
          this.arrayScriptPrincipal.push({
            id: this.arrayScriptPrincipal.length,
            foiExibido: false,
            pausaEscrita: 2,
            modelo: 'pergunta',
            texto: 'Muito obrigado por anunciar conosco!',
            resposta: {
              visivel: false,
              modelo: 'resposta',
              tipo: 'resultados',
              opcoes: []
            }
          })
        }

        if (resposta.funcao === 'anunciar') {
          this.arrayScriptAnuncio.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })
          /* this.arrayScriptPrincipal.push({
            id: this.arrayScriptPrincipal.length,
            foiExibido: false,
            pausaEscrita: 2,
            modelo: 'pergunta',
            texto: 'Vamos caprichar nos detalhes do anuncio!',
            resposta: {
              visivel: true,
              modelo: 'anunciar',
              tipo: 'component'
            }
          }) */
        }

        if (resposta.funcao === 'avaliar') {
          this.arrayScriptPrincipal.push({
            id: this.arrayScriptPrincipal.length,
            foiExibido: false,
            pausaEscrita: 2,
            modelo: 'pergunta',
            texto: 'Sua avaliação é importante para nós',
            resposta: {
              visivel: true,
              modelo: 'avaliar',
              tipo: 'component'
            }
          })
        }

        if (resposta.funcao === 'reportar') {
          this.arrayScriptPrincipal.push({
            id: this.arrayScriptPrincipal.length,
            foiExibido: false,
            pausaEscrita: 2,
            modelo: 'pergunta',
            texto: 'Vamos resolver seu problema!',
            resposta: {
              visivel: true,
              modelo: 'reportar',
              tipo: 'component'
            }
          })
        }
      }

      this.avancarConversa()
    }
  }
}
