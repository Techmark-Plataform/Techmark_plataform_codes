import styles from '../css/header.module.css';
import SearchBar from './SearchBar';

export default function Header(){
        return (
            <header>
                <div className={styles.SearchBar}>
                    <SearchBar/>
                </div>
            </header>
        );
    }
