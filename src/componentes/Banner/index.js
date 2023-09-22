import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Oii, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Sejam todos bem-vindos ao meu cantinho especial! Eu sou Cristiane Silva, estudante de Front-end da Oracle + Alura. Preparem-se para uma montanha-russa de conhecimento e diversão, onde vamos aprender juntos e criar coisas incríveis!🚀

                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Cristiane sorrindo"
                />
            </div>
        </div>
    )
}