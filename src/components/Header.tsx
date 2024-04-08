import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src="https://www.rafaelglavam.com.br/wp-content/uploads/2020/03/correct-icon-png-8.png" alt="Imagem" />
                <h1>ToDo</h1>
            </div>
        </header>
    )
}

export default Header