import styles from './MolduraInformacoes.module.css';

const MolduraInformacoes = (props) => {
  return (
    <div className={styles.moldura}>
      <h3 className={styles.subtitulo}>Informações</h3>
      <div className={styles.info}>{props.children}</div>
    </div>
  );
};

export default MolduraInformacoes;


