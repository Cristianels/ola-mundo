import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Cris!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Oi, tudo bem? Me chamo Cristiane Silva, tenho 29 anos, mãe de um pequeno furacão de 2 anos. Deixei o mundo da enfermagem para me aventurar na programação, porque, vamos combinar, programar pode ser tão emocionante quanto correr atrás de um bebê! Sou de São Paulo e atualmente estou mergulhada no incrível projeto ONE da Oracle + Alura, focada em Front-End.
            </p>
            <p className={styles.paragrafo}>
            Ler é minha paixão, mas agora estou devorando livros de código como se fossem romances emocionantes. Sou uma iniciante com sede insaciável de conhecimento e pretendo conquistar o mundo da programação. Quero trabalhar na área e me aprofundar em cada setor possível. Quem sabe até me tornar uma especialista em algo que ainda nem descobri!
            </p>
            <p className={styles.paragrafo}>
            Então, se você precisar de alguém para criar sites incríveis ou resolver problemas complexos, já sabe quem chamar: a mamãe programadora cheia de energia e vontade de aprender! 
            </p>
            <p className={styles.paragrafo}>
            Sou uma aspirante a programadora que está pronta para encarar os desafios dessa nova fase da vida!
            </p>
            <p className={styles.paragrafo}>
            Até mais (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠✧⁠*⁠。
            </p>
        </PostModelo>
    )
}