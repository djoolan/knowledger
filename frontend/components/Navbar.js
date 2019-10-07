import Link from 'next/link'
import StyledNavbar from './styles/StyledNavbar'

const Navbar = () => (
    <StyledNavbar>
        {/* <Link href="/">
            <a>Home</a>
        </Link> */}
        <Link href="/creation">
            <a>Ajouter</a>
        </Link>
        <Link href="/articles">
            <a>Articles</a>
        </Link>
        <Link href="/tags">
            <a>Tags</a>
        </Link>
        {/* <Link href="/orders">
            <a>Commandes</a>
        </Link> */}
        {/* <Link href="/account">
            <a>Mon compte</a>
        </Link> */}
    </StyledNavbar>
)

export default Navbar