import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import styles from "./StoryTelling.module.css";

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

const StoryTelling = () => {
  const autores = ["Gustavo", "Lauana", "Nicoly", "Erik"];

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
                <BookOpen className={styles.heroIcon} />
              </FloatingElement>

              <h1 className={styles.heroTitle}>
                <span className={styles.gradientText}>StoryTelling</span>
                <br />
                <span className={styles.whiteText}>Relações Interpessoais</span>
              </h1>

              <p className={styles.heroSubtitle}>
                Narrativas que conectam, inspiram e transformam equipes
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
              <span className={styles.gradientTextEmerald}>
                Apresentação do StoryTelling
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Assista à apresentação completa sobre relações interpessoais
            </p>
          </InteractiveCard>

          <InteractiveCard delay={150}>
            <div className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/I8AKKuBnJXc?si=_uXZA2L8IDnNksZW"
                  title="StoryTelling"
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
                <span className={styles.gradientTextEmerald}>
                  Sobre o StoryTelling
                </span>
              </h2>

              <div className={styles.resumoTexto}>
                <p>
                  A história apresentada no vídeo ilustra de forma clara como as
                  relações interpessoais influenciam diretamente o desempenho de
                  equipes e a qualidade dos resultados dentro de um ambiente de
                  trabalho — ou, nesse caso, acadêmico. O grupo de três
                  estudantes inicia o projeto acreditando que dividir tarefas
                  rapidamente seria suficiente, mas a ausência de comunicação
                  genuína, escuta ativa e alinhamento inicial gera falhas
                  significativas no processo.
                </p>

                <p>
                  Logo no início, a liderança adotada por Marina revela um
                  estilo centralizador, baseado mais na divisão autoritária das
                  responsabilidades do que na construção coletiva. Carolina, por
                  sua vez, reprime suas ideias por medo de julgamento, enquanto
                  Felipe trabalha de maneira isolada, deixando de compartilhar
                  decisões importantes. Esses comportamentos evidenciam como a
                  falta de empatia e diálogo pode comprometer a colaboração e
                  criar tensões que, quando acumuladas, resultam em conflitos
                  abertos e desgaste emocional.
                </p>

                <p>
                  O ponto de virada surge quando os três reconhecem suas
                  próprias falhas comunicativas e emocionais. O encontro
                  presencial marca o início de uma nova fase, em que a escuta
                  ativa, a transparência e o respeito mútuo passam a ser
                  prioridade. O grupo abandona a lógica de “cada um por si” e
                  constrói um processo verdadeiramente colaborativo, baseado em
                  reuniões curtas, alinhamento constante e valorização das
                  contribuições individuais.
                </p>

                <p>
                  Ao reconstruírem não apenas o trabalho, mas também a maneira
                  como se relacionam, os estudantes vivenciam na prática os
                  pilares das relações interpessoais saudáveis: liderança
                  humanizada, comunicação clara, empatia, cooperação e mediação
                  de conflitos. A integração entre código, design e documentação
                  — antes incompatíveis — torna-se possível quando o diálogo se
                  torna parte central do processo.
                </p>

                <p>
                  A apresentação final não representa apenas a entrega de um
                  projeto, mas o resultado da maturidade emocional que
                  desenvolveram. Eles aprendem que trabalhar em equipe não
                  significa simplesmente dividir tarefas, mas construir juntos;
                  que liderar não é mandar, mas ouvir; e que confiar no outro
                  exige coragem para comunicar necessidades, ideias e
                  vulnerabilidades.
                </p>

                <p>
                  Assim, o vídeo demonstra que o verdadeiro sucesso coletivo
                  nasce da união entre comunicação honesta, escuta ativa e
                  respeito às diferenças. Quando o grupo abandona o
                  individualismo e adota uma postura colaborativa, descobre que
                  relações interpessoais sólidas são a base para qualquer
                  trabalho eficaz, humano e significativo.
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
              <span className={styles.gradientTextEmerald}>Participantes</span>
            </h2>

            <div className={styles.autoresGrid}>
              {autores.map((autor, index) => (
                <div key={index} className={styles.autorCard}>
                  <div className={styles.autorAvatar}>
                    <BookOpen className={styles.autorIcon} />
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

export default StoryTelling;
