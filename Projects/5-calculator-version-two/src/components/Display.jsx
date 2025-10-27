import styles from "./Display.module.css"

function Display({ displayVal }){
    return <input id="display" type="text" className={styles.display} value={displayVal} readOnly/>
}
export default Display;