import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import styles from "./Seminario.module.css";

import seminarioPdf from "../assets/seminario.pdf";

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

const Seminario = () => {
  const autores = [
    "André Cardozo Rodrigues",
    "Kalebe Daniel Elisio Scheidt",
    "Murilo Eduardo da Rosa",
  ];

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
                <Users className={styles.heroIcon} />
              </FloatingElement>

              <h1 className={styles.heroTitle}>
                <span className={styles.gradientText}>Seminário</span>
                <br />
                <span className={styles.whiteText}>
                  Relações Interpessoais no Contexto Organizacional
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
                Empatia · Liderança · Colaboração em Equipes · Mediação de
                Conflitos
              </p>
            </div>
          </InteractiveCard>
        </div>
      </section>

      {/* Apresentação (PDF) */}
      <section className={styles.subtemasSection}>
        <div className={styles.sectionContent}>
          <InteractiveCard>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradientTextBlue}>
                Apresentação (.pdf)
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Acesse a apresentação completa do seminário
            </p>
          </InteractiveCard>

          <InteractiveCard delay={150}>
            <div className={styles.subtemaCard}>
              <iframe
                src={seminarioPdf}
                title="Apresentação"
                className={styles.pdfFrame}
                style={{
                  width: "100%",
                  height: "600px",
                  borderRadius: "1rem",
                  border: "2px solid rgba(139,92,246,0.3)",
                }}
              />
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
                <span className={styles.gradientTextViolet}>
                  Resumo da Apresentação
                </span>
              </h2>

              <div className={styles.resumoTexto}>
                <p>
                  As relações interpessoais constituem um elemento central no
                  funcionamento das organizações, pois envolvem as interações
                  estabelecidas entre indivíduos em ambientes sociais e
                  profissionais. No contexto corporativo, essas interações
                  influenciam diretamente o clima organizacional, os fluxos de
                  comunicação, a produtividade, a motivação e, consequentemente,
                  a qualidade dos resultados alcançados pelas equipes. Por esse
                  motivo, compreender como se desenvolvem fatores como empatia,
                  liderança, colaboração e mediação de conflitos torna-se
                  fundamental para a construção de ambientes de trabalho
                  saudáveis e alinhados aos objetivos institucionais. Esses
                  elementos são considerados pilares da gestão de pessoas
                  contemporânea e contribuem para a formação de equipes coesas,
                  capazes de enfrentar desafios e responder de forma eficiente
                  às demandas organizacionais.
                </p>

                <p>
                  A empatia representa uma das competências socioemocionais mais
                  relevantes no âmbito das relações interpessoais. Ela envolve a
                  capacidade de identificar, compreender e considerar o estado
                  emocional do outro, manifestando-se tanto no nível cognitivo,
                  quando o indivíduo compreende racionalmente a perspectiva
                  alheia, quanto no nível emocional, que se refere ao
                  reconhecimento afetivo das emoções do interlocutor. No
                  ambiente organizacional, a empatia possibilita maior clareza
                  comunicativa, reduz mal-entendidos e contribui para o
                  fortalecimento dos vínculos entre colegas e equipes. Práticas
                  como escuta ativa, ausência de julgamentos precipitados,
                  reconhecimento verbal de sentimentos e atenção ao contexto
                  situacional ampliam a qualidade das interações e favorecem um
                  clima de cooperação.
                </p>

                <p>
                  No que se refere à liderança, observa-se que exercer essa
                  função vai além de ocupar uma posição formal de autoridade:
                  trata-se de influenciar positivamente pessoas para atingir
                  objetivos compartilhados. A liderança centrada nas relações
                  interpessoais destaca a importância da comunicação clara, da
                  motivação, do feedback construtivo, da confiança e da
                  participação dos colaboradores no processo decisório. Líderes
                  eficazes compreendem que seu papel envolve orientar pessoas, e
                  não apenas supervisionar tarefas. Dessa forma, contribuem para
                  o desenvolvimento individual e coletivo, estimulando ambientes
                  colaborativos e proporcionando maior engajamento e
                  comprometimento com os resultados organizacionais.
                </p>

                <p>
                  A colaboração em equipes também se configura como um aspecto
                  essencial das relações interpessoais dentro das instituições.
                  Diferentemente do simples ato de trabalhar junto, a
                  colaboração envolve corresponsabilidade e compromisso com o
                  alcance de metas coletivas. Equipes colaborativas são
                  caracterizadas pela divisão clara de papéis, pelo
                  compartilhamento de conhecimentos, pela confiança mútua e pelo
                  foco no resultado comum. Tal dinâmica reduz retrabalhos,
                  intensifica a sinergia entre os membros e favorece uma cultura
                  organizacional positiva e orientada à cooperação, fortalecendo
                  a eficácia dos processos internos.
                </p>

                <p>
                  Por fim, os conflitos interpessoais constituem um fenômeno
                  inevitável nas relações humanas, resultando de divergências
                  entre ideias, interesses ou características individuais. Entre
                  suas principais causas, destacam-se falhas na comunicação,
                  diferenças de personalidade, disputas por espaço ou recursos e
                  falta de clareza nas responsabilidades. Embora frequentemente
                  associados a impactos negativos, os conflitos podem gerar
                  inovação e aprimoramento de processos quando abordados de
                  forma adequada. A mediação surge como uma estratégia relevante
                  nesse contexto, envolvendo escuta ativa das partes envolvidas,
                  identificação de necessidades reais, compreensão dos pontos de
                  divergência e construção conjunta de soluções mutuamente
                  benéficas. O uso de comunicação empática e o foco em fatos, e
                  não em ataques pessoais, são fundamentais durante esse
                  processo.
                </p>

                <p>
                  As relações interpessoais constituem um componente
                  indispensável para o desempenho organizacional. A partir de
                  práticas baseadas na empatia, na liderança humanizada, na
                  colaboração e na mediação eficaz de conflitos, é possível
                  construir ambientes de trabalho mais saudáveis, integrados e
                  produtivos. Esses elementos fortalecem vínculos profissionais,
                  aprimoram processos comunicativos, estimulam o engajamento e
                  previnem a deterioração do clima organizacional. Assim,
                  desenvolver competências relacionais não deve ser considerado
                  um diferencial, mas um requisito essencial para organizações
                  que buscam sustentabilidade, inovação e valorização humana.
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
              <span className={styles.gradientTextViolet}>Participantes</span>
            </h2>

            <div className={styles.autoresGrid}>
              {autores.map((autor, index) => (
                <div key={index} className={styles.autorCard}>
                  <div className={styles.autorAvatar}>
                    <Users className={styles.autorIcon} />
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

export default Seminario;
