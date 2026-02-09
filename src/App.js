import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel
  const heroSlides = [
    {
      id: 1,
      title: 'Reparos em Telhados',
      subtitle: 'Conserto e manutenção profissional com garantia',
      image: '/images/Telhado.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 2,
      title: 'Serviços Elétricos',
      subtitle: 'Instalações e reparos com segurança certificada',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 3,
      title: 'Montagem de Móveis',
      subtitle: 'Montagem rápida e eficiente de qualquer móvel',
      image: '/images/Moveis.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 4,
      title: 'Desentupimento',
      subtitle: 'Soluções rápidas para pias, ralos e fossas',
      image: '/images/Esgoto.webp',
      cta: 'Solicitar Orçamento'
    }
  ];

  // Verificar se está em dispositivo móvel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar formulário de orçamento
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp - ORÇAMENTO
    const whatsappMessage = `Olá Norte Service! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Tipo de Serviço:* ${formData.servico}%0A` +
      `*Detalhes:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    // Número da empresa (substitua pelo número real)
    const whatsappNumber = '5548991012627';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      servico: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para solicitar orçamento de serviço específico
  const solicitarOrcamentoServico = (nomeServico) => {
    const whatsappMessage = `Olá Norte Service! Gostaria de solicitar um orçamento para o serviço de *${nomeServico}*.%0A%0APoderia me passar mais informações sobre valores, disponibilidade e como funciona a contratação?`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem do HERO
  const openWhatsAppHero = () => {
    const whatsappMessage = `Olá Norte Service! Vi o site de vocês e gostaria de mais informações sobre os serviços de manutenção. Podem me ajudar?`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Serviço Personalizado
  const openWhatsAppPersonalizado = () => {
    const whatsappMessage = `Olá Norte Service! Preciso de um serviço de manutenção que não encontrei listado no site. Gostaria de conversar sobre uma solução personalizada. Podem me atender?`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Botão Flutuante
  const openWhatsAppFlutuante = () => {
    const whatsappMessage = `Olá Norte Service! Gostaria de solicitar um orçamento para serviços de manutenção.`;
    
    const whatsappNumber = '5548991012627';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  // Função para abrir o Instagram
  const openInstagram = () => {
    window.open('https://instagram.com/norteservice10', '_blank');
  };


  const services = [
    {
      id: 1,
      name: 'Reparos em Telhados',
      description: 'Conserto e manutenção completa de telhados, telhas e calhas com materiais de qualidade',
      image: '/images/Telhado.jpg'
    },
    {
      id: 2,
      name: 'Manutenção de Caixa d\'Água',
      description: 'Limpeza profunda, reparo e instalação de caixas d\'água com garantia',
      image: '/images/CaixaAgua.jpg'
    },
    {
      id: 3,
      name: 'Instalação de Calhas',
      description: 'Instalação, limpeza e manutenção de calhas e rufos com eficiência',
      image: '/images/Calha.webp'
    },
    {
      id: 4,
      name: 'Reparos Elétricos',
      description: 'Serviços elétricos residenciais e comerciais com total segurança',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
    },
    {
      id: 5,
      name: 'Montagem de Móveis',
      description: 'Montagem profissional e rápida de móveis de todos os tipos e marcas',
      image: '/images/Moveis.jpg'
    },
    {
      id: 6,
      name: 'Instalação de TV e Quadros',
      description: 'Fixação segura de TVs, suportes e quadros na parede com precisão',
      image: '/images/TV.jpeg'
    },
    {
      id: 7,
      name: 'Desentupimento',
      description: 'Desentupimento de pias, ralos, fossas e caixas de gordura',
      image: '/images/Esgoto.webp'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      text: 'Excelente serviço! Consertaram o telhado da minha casa com muita agilidade e profissionalismo. Recomendo!',
      rating: 5
    },
    {
      id: 2,
      name: 'Maria Santos',
      text: 'Precisava de um reparo elétrico urgente e eles atenderam no mesmo dia. Equipe muito competente!',
      rating: 5
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      text: 'Fizeram a limpeza da caixa d\'água e desentupimento. Trabalho impecável e preço justo. Muito satisfeito!',
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Profissionais Qualificados',
      description: 'Equipe treinada e experiente em diversos tipos de manutenção residencial'
    },
    {
      id: 2,
      title: 'Atendimento Rápido',
      description: 'Agilidade no atendimento e na execução dos serviços, respeitando prazos'
    },
    {
      id: 3,
      title: 'Preço Justo',
      description: 'Orçamentos transparentes sem taxas ocultas, sempre com o melhor custo-benefício'
    },
    {
      id: 4,
      title: 'Garantia dos Serviços',
      description: 'Todos os nossos serviços possuem garantia de qualidade e satisfação'
    },
    {
      id: 5,
      title: 'Equipamentos Modernos',
      description: 'Utilizamos ferramentas e equipamentos de última geração para melhor resultado'
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
          <div className="logo">
            <img 
              src='/images/Logo3.png' 
              alt='Logo Norte Service'
              className="logo-image"
            />
          </div>
        </div>
          
          {/* Botão do menu hamburger (visível apenas no mobile) */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#servicos" onClick={handleNavClick}>Serviços</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
            <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
            <a href="#contato" onClick={handleNavClick} className="nav-cta">Solicitar Orçamento</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Carrossel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay"></div>
              <div className="container">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                  <div className="carousel-buttons">
                    <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>
                      {slide.cta}
                    </a>
                    <button className="btn btn-secondary" onClick={openWhatsAppHero}>
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Controles do carrossel */}
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo">
            ❯
          </button>
          
          {/* Indicadores */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços - LOGO APÓS O HERO */}
      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas em manutenção para sua residência ou empresa</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">
                    <button 
                      className="btn-service-quick"
                      onClick={() => solicitarOrcamentoServico(service.name)}
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Serviço Personalizado */}
          <div className="cta-container">
            <div className="cta-content">
              <h3>Precisa de outro tipo de serviço?</h3>
              <p>Oferecemos soluções personalizadas para qualquer necessidade de manutenção. Entre em contato!</p>
              <button className="btn btn-primary" onClick={openWhatsAppPersonalizado}>
                💬 Falar sobre serviço personalizado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre - APÓS SERVIÇOS */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a Norte Service</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                A <strong>Norte Service</strong> é referência em <strong>serviços de manutenção residencial e comercial </strong> 
                 Com anos de experiência no mercado, nossa missão é proporcionar tranquilidade 
                e segurança para nossos clientes através de serviços de alta qualidade.
              </p>
              <p>
                Nossa equipe é formada por <strong>profissionais especializados e certificados</strong> em diversas áreas 
                da manutenção predial. Seja um pequeno reparo ou uma reforma completa, estamos prontos para atender 
                suas necessidades com agilidade, eficiência e o melhor custo-benefício da região.
              </p>
              <ul className="features">
                <li>5 anos de experiência no mercado</li>
                <li>Equipe técnica qualificada e treinada</li>
                <li>Atendimento 24h para emergências</li>
                <li>Orçamento gratuito e sem compromisso</li>
                <li>Garantia em todos os serviços</li>
                <li>Equipamentos modernos e seguros</li>
                <li>Preços competitivos e justos</li>
                <li>Satisfação do cliente em primeiro lugar</li>
              </ul>
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Clientes Atendidos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfação</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
              </div>
            </div>
            <div className="sobre-image">
              <img src="/images/Sobre.jpg" alt="Equipe Norte Service" />
              <div className="image-badge">
                <span>🏆</span>
                <p>Compromisso com a Excelência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="section testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">A satisfação dos nossos clientes é nossa maior conquista</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário e será direcionado ao WhatsApp - Sem compromisso!</p>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Obrigado pelo seu interesse!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/5548991012627" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(48) 99101-2627"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servico">Tipo de Serviço *</label>
                    <select 
                      id="servico" 
                      name="servico" 
                      value={formData.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Reparos em Telhados">Reparos em Telhados</option>
                      <option value="Manutenção de Caixa d'Água">Manutenção de Caixa d'Água</option>
                      <option value="Instalação de Calhas">Instalação de Calhas</option>
                      <option value="Reparos Elétricos">Reparos Elétricos</option>
                      <option value="Montagem de Móveis">Montagem de Móveis</option>
                      <option value="Instalação de Quadros e TV">Instalação de Quadros e TV</option>
                      <option value="Desentupimento">Desentupimento</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Descrição do Serviço</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva o serviço que você precisa..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <span>💬</span> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da Norte Service.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Norte Service</h3>
              <p>Serviços de manutenção residencial e comercial com qualidade e confiança desde 2020.</p>
              <div className="contact-info">
                <p><strong>📱 WhatsApp:</strong> (48) 991012627</p>
                <p><strong>📧 E-mail:</strong> norteservico2025@gmail.com</p>
                <p><strong>📍 Endereço:</strong> Florianópolis - SC</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#servicos" onClick={handleNavClick}>Serviços</a>
              <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
              <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
              <a href="#contato" onClick={handleNavClick}>Orçamento</a>
            </div>
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <p>Siga-nos e fique por dentro das novidades</p>
              <div className="social-icons">
                <button className="social-btn instagram-btn" onClick={openInstagram}>
                  📸 Instagram
                </button>
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppFlutuante}>
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Norte Service. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;