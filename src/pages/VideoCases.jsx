import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import styles from "./VideoCases.module.css";

const InteractiveCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${styles.interactiveCard} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

const FloatingElement = ({ children, duration = 3 }) => (
  <div
    className={styles.floatingElement}
    style={{ animationDuration: `${duration}s` }}
  >
    {children}
  </div>
);

const VideoCases = () => {
  const autores = ["Thiago", "Pedro"];

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
        </div>

        <div className={styles.heroContent}>
          <InteractiveCard>
            <div className={styles.heroText}>
              <FloatingElement>
                <Play className={styles.heroIcon} />
              </FloatingElement>

              <h1 className={styles.heroTitle}>
                <span className={styles.gradientText}>Vídeo</span>
                <br />
                <span className={styles.whiteText}>Relações Interpessoais</span>
              </h1>

              <p className={styles.heroSubtitle}>
                Como o relacionamento interpessoal influencia a produtividade e
                o bem estar nas organizações
              </p>
            </div>
          </InteractiveCard>
        </div>
      </section>

      {/* Vídeo Principal */}
      <section className={styles.videoSection}>
        <div className={styles.sectionContent}>
          <InteractiveCard>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradientTextPink}>
                Apresentação do Vídeo
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Assista à análise completa do vídeo
            </p>
          </InteractiveCard>

          <InteractiveCard delay={150}>
            <div className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/OuT-yolL4n0?si=Xej3znZCWQ0x1lBD"
                  title="Vídeo Cases"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoIframe}
                />
              </div>
            </div>
          </InteractiveCard>
        </div>
      </section>

      {/* Resumo */}
      <section className={styles.resumoSection}>
        <div className={styles.resumoContent}>
          <InteractiveCard>
            <div className={styles.resumoCard}>
              <h2 className={styles.resumoTitulo}>
                <span className={styles.gradientTextPink}>Sobre o Vídeo</span>
              </h2>

              <div className={styles.resumoTexto}>
                <p>
                  O vídeo apresenta uma conversa descontraída, porém
                  profundamente reflexiva, sobre como as relações interpessoais
                  influenciam diretamente o bem-estar e a produtividade dentro
                  das organizações. Os participantes discutem, a partir de
                  experiências pessoais e exemplos práticos, o papel fundamental
                  da comunicação clara e empática no ambiente de trabalho.
                </p>

                <p>
                  Ao longo do diálogo, destaca-se que a falta de comunicação
                  pode gerar ambientes tóxicos, causar desgaste emocional,
                  aumentar a incidência de problemas psicológicos — como burnout
                  — e comprometer o desempenho das equipes. Já a comunicação
                  assertiva fortalece a confiança, evita mal-entendidos, melhora
                  a fluidez das tarefas e cria um clima organizacional mais
                  saudável.
                </p>

                <p>
                  Outro ponto importante abordado é a diferença entre líderes
                  opressores e líderes inspiradores. Relatos pessoais mostram
                  como um líder despreparado pode causar traumas, insegurança e
                  queda de produtividade, enquanto um líder empático impulsiona
                  crescimento, diálogo aberto e motivação.
                </p>

                <p>
                  A conversa também explora como a competitividade e a
                  cooperação devem caminhar juntas. Competitividade excessiva
                  pode prejudicar a equipe, enquanto cooperação sem iniciativa
                  pode levar à acomodação. O equilíbrio entre essas duas forças
                  é essencial para um time funcional.
                </p>

                <p>
                  O vídeo reforça ainda que conflitos são inevitáveis em
                  qualquer ambiente, mas a forma de lidar com eles define se
                  serão saudáveis ou prejudiciais. Feedbacks bem aplicados,
                  comunicação direta e respeito mútuo ajudam a transformar
                  conflitos em oportunidades de melhoria, em vez de rupturas.
                </p>

                <p>
                  Por fim, os participantes destacam a importância da cultura
                  organizacional, integração entre colegas e rituais simples —
                  como conversas, alinhamentos e momentos de pausa — para manter
                  a saúde mental e fortalecer laços. A conclusão geral é clara:
                  relacionamentos interpessoais positivos não apenas elevam a
                  produtividade, como também tornam o ambiente de trabalho mais
                  humano, acolhedor e sustentável.
                </p>
              </div>
            </div>
          </InteractiveCard>
        </div>
      </section>

      {/* Autores */}
      <section className={styles.autoresSection}>
        <div className={styles.autoresContent}>
          <InteractiveCard>
            <h2 className={styles.autoresTitle}>
              <span className={styles.gradientTextPink}>Participantes</span>
            </h2>

            <div className={styles.autoresGrid}>
              {autores.map((autor, index) => (
                <div key={index} className={styles.autorCard}>
                  <div className={styles.autorAvatar}>
                    <Play className={styles.autorIcon} />
                  </div>
                  <p className={styles.autorNome}>{autor}</p>
                </div>
              ))}
            </div>
          </InteractiveCard>
        </div>
      </section>
    </div>
  );
};

export default VideoCases;
