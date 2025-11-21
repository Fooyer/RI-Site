import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Mic,
  BookOpen,
  Video,
  Users,
  Heart,
  Target,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const InteractiveCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`interactive-card ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

const FloatingElement = ({ children, duration = 3 }) => (
  <div
    className="floating-element"
    style={{ animationDuration: `${duration}s` }}
  >
    {children}
  </div>
);

const App = () => {
  // === REF para scroll ===
  const trabalhosRef = useRef(null);

  const trabalhos = [
    {
      id: "seminario",
      icon: Users,
      titulo: "Seminário",
      cor: "violet",
      descricao:
        "Apresentações sobre comunicação, liderança e clima organizacional",
      subtemas: [
        "Comunicação assertiva e escuta ativa",
        "Empatia, liderança e colaboração",
        "Conflitos e estratégias de mediação",
        "Inteligência emocional",
        "O papel do RH",
      ],
      autores: [
        "André Cardozo Rodrigues",
        "Kalebe Daniel Elisio Scheidt",
        "Murilo Eduardo da Rosa",
      ],
    },
    {
      id: "podcast",
      icon: Mic,
      titulo: "Podcast",
      cor: "blue",
      descricao: "Discussões sobre o relacionamento interpessoal.",
      destaque: "Podcast em formato de entrevista",
      autores: ["Vitor", "Alyne", "Vitória"],
    },
    {
      id: "storytelling",
      icon: BookOpen,
      titulo: "Storytelling",
      cor: "emerald",
      descricao: "Narrativas sobre conflitos e resoluções positivas",
      destaque: "Pode ser dramatização, animação ou encenação",
      autores: ["Gustavo", "Lauana", "Nicoly", "Erik"],
    },
    {
      id: "video",
      icon: Video,
      titulo: "Vídeo - Cases",
      cor: "pink",
      descricao: "Cases de sucesso e fundamentação científica",
      destaque: "Conectando teoria e prática empresarial",
      autores: ["Thiago", "Pedro"],
    },
  ];

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="hero-content">
          <InteractiveCard>
            <div className="hero-text">
              <FloatingElement>
                <Sparkles className="hero-icon" />
              </FloatingElement>

              <h1 className="hero-title">
                <span className="gradient-text">Relacionamento</span>
                <br />
                <span className="white-text">Interpessoal</span>
              </h1>

              <p className="hero-subtitle">
                Explorando as conexões humanas que transformam organizações
              </p>

              <div className="hero-buttons">
                <button
                  className="cta-button"
                  onClick={() =>
                    trabalhosRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  <Target className="button-icon" />
                  <span>Ver Trabalhos</span>
                  <ChevronRight className="button-arrow" />
                </button>
              </div>
            </div>
          </InteractiveCard>
        </div>
      </section>

      {/* Trabalhos Grid */}
      <section className="trabalhos-section" ref={trabalhosRef}>
        <div className="section-content">
          <InteractiveCard>
            <h2 className="section-title">
              <span className="gradient-text-blue">
                Modalidades de Trabalho
              </span>
            </h2>
            <p className="section-subtitle">
              Quatro formatos únicos para explorar as relações humanas
            </p>
          </InteractiveCard>

          <div className="trabalhos-grid">
            {trabalhos.map((trabalho, index) => (
              <InteractiveCard key={trabalho.id} delay={0}>
                <div className={`trabalho-card trabalho-${trabalho.cor}`}>
                  <div className="card-header">
                    <FloatingElement duration={2 + index * 0.5}>
                      <div className={`card-icon-wrapper icon-${trabalho.cor}`}>
                        <trabalho.icon className="card-icon" />
                      </div>
                    </FloatingElement>
                  </div>

                  <h3 className="card-title">{trabalho.titulo}</h3>
                  <p className="card-description">{trabalho.descricao}</p>

                  {trabalho.subtemas && (
                    <div className="card-subtemas">
                      {trabalho.subtemas.map((subtema, i) => (
                        <div key={i} className="subtema-item">
                          <ChevronRight className="subtema-icon" />
                          <span className="subtema-text">{subtema}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {trabalho.destaque && (
                    <div className="card-destaque">
                      <p className="destaque-text">{trabalho.destaque}</p>
                    </div>
                  )}

                  {trabalho.autores && (
                    <div className="card-autores">
                      <p className="autores-title">Desenvolvido por:</p>
                      <ul className="autores-list">
                        {trabalho.autores.map((nome, i) => (
                          <li key={i} className="autor-item">
                            {nome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to={`/trabalhos/${trabalho.id}`}
                    className={`card-button button-${trabalho.cor}`}
                  >
                    <Play className="button-icon" />
                    <span>Saiba Mais</span>
                  </Link>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="objetivos-section">
        <div className="objetivos-content">
          <InteractiveCard>
            <div className="objetivos-card">
              <h2 className="objetivos-title">
                <span className="gradient-text-green">
                  Objetivos do Projeto
                </span>
              </h2>
              <div className="objetivos-grid">
                {[
                  { icon: Users, texto: "Trabalho em Equipe" },
                  { icon: Heart, texto: "Desenvolver Empatia" },
                  { icon: Sparkles, texto: "Estimular Criatividade" },
                ].map((obj, i) => (
                  <div key={i} className="objetivo-item">
                    <FloatingElement duration={2 + i * 0.3}>
                      <obj.icon className="objetivo-icon" />
                    </FloatingElement>
                    <p className="objetivo-text">{obj.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </InteractiveCard>
        </div>
      </section>

      <section className="creditos-section">
        <div className="creditos-content">
          <h2 className="creditos-title">Créditos</h2>

          <p className="creditos-subtitle">
            Trabalho desenvolvido pelos alunos da UDESC – CEPLAN
            <br />
            Turma de Relações Interpessoais 2025/02 – São Bento do Sul
          </p>

          <div className="creditos-equipe">
            <h3 className="creditos-equipe-title">
              Equipe de Desenvolvimento do Site
            </h3>

            <ul className="creditos-lista">
              <li>Gianne Meireles</li>
              <li>Thamires Augustin</li>
              <li>Freddy Albert Baier</li>
              <li>Arthur Eduardo Fary</li>
              <li>Fernando Costa Nogueira</li>
              <li>Matheus Henrique Weber Pasini</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
