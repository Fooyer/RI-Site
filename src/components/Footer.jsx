import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Desenvolvido por alunos da matéria de Relações Interpessoais 2025/02 -
          UDESC CEPLAN
        </p>
        <p className={styles.footerCopy}>
          © 2025 - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
