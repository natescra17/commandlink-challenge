import classes from "./Header.module.css"

export default function Header () {
    return (
        <header className={classes.header}>
            <p className={classes.logo}>Code Challenge</p>
        </header>
    )
}