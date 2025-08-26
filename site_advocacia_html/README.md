# Site Institucional - Escritório de Advocacia Premium

Este é um site institucional completo para um escritório de advocacia corporativa premium, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 🎨 Design e Características

- **Tema:** Azul marinho e dourado (profissional e elegante)
- **Layout:** Responsivo e moderno
- **Seções:** Home, Cases, Equipe, Contato
- **Funcionalidades:** Carousel interativo, formulário de contato, navegação suave

## 📁 Estrutura do Projeto

```
site_advocacia_html/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # JavaScript
├── images/
│   └── background_premium.jpg  # Imagem de fundo
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Abrir localmente:**
   - Abra o arquivo `index.html` diretamente no navegador

2. **Servidor local (recomendado):**
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   
   # Node.js (se tiver o http-server instalado)
   npx http-server
   ```
   
3. **Acesse:** http://localhost:8080

## ✨ Funcionalidades

### 🏠 Seção Home (Hero)
- Design impactante com gradiente azul marinho
- Estatísticas em destaque
- Botões de call-to-action
- Navegação suave para outras seções

### 📋 Carousel de Cases
- 4 cases de sucesso
- Navegação por setas e pontos
- Auto-play com pausa ao hover
- Barra de progresso
- Suporte a touch/swipe em dispositivos móveis

### 👥 Seção Equipe
- 4 perfis de advogados
- Fotos profissionais
- Links para redes sociais
- Efeitos hover elegantes

### 📞 Formulário de Contato
- Validação de campos
- Feedback visual
- Campos obrigatórios marcados
- Simulação de envio

### 📱 Responsividade
- Design adaptável para desktop, tablet e mobile
- Menu mobile com animações
- Layout otimizado para diferentes tamanhos de tela

## 🎯 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica
- **CSS3:** 
  - Flexbox e Grid Layout
  - Gradientes e animações
  - Variáveis CSS customizadas
  - Media queries para responsividade
- **JavaScript ES6+:**
  - Carousel interativo
  - Navegação suave
  - Validação de formulários
  - Animações de scroll

## 🎨 Paleta de Cores

- **Azul Marinho:** #1a237e
- **Azul Escuro:** #0d1757
- **Dourado:** #ffd700
- **Dourado Claro:** #fff8dc
- **Branco:** #ffffff
- **Cinzas:** #f9fafb, #4b5563, #111827

## 📝 Personalização

### Alterar Conteúdo
- **Cases:** Edite o array `cases` no arquivo `js/script.js`
- **Equipe:** Modifique a seção team no `index.html`
- **Contato:** Atualize as informações na seção contact

### Alterar Cores
- Modifique as variáveis CSS no início do arquivo `css/style.css`
- Exemplo:
  ```css
  :root {
      --navy-blue: #1a237e;
      --gold: #ffd700;
      /* ... outras cores */
  }
  ```

### Adicionar Novas Seções
1. Adicione o HTML na estrutura
2. Crie os estilos CSS correspondentes
3. Atualize a navegação no header

## 🔧 Funcionalidades JavaScript

- **Carousel:** Auto-play, navegação por setas, dots e teclado
- **Menu Mobile:** Toggle com animações
- **Scroll Suave:** Navegação entre seções
- **Formulário:** Validação e feedback
- **Animações:** Fade-in ao scroll
- **Performance:** Lazy loading de imagens

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móveis (iOS/Android)

## 🚀 Deploy

O site pode ser hospedado em qualquer servidor web estático:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Apache/Nginx**
- **Hospedagem compartilhada**

## 📄 Licença

Este projeto foi desenvolvido para fins demonstrativos. Você pode usar e modificar conforme necessário.

## 🤝 Suporte

Para dúvidas ou sugestões sobre o código, consulte os comentários nos arquivos ou entre em contato.

---

**Desenvolvido com ❤️ para demonstrar as melhores práticas em desenvolvimento web front-end.**

