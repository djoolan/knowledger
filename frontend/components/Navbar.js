import Link from 'next/link'
import StyledNavbar from './styles/StyledNavbar'

const Navbar = () => (
    <StyledNavbar>
        {/* <Link href="/">
            <a>Home</a>
        </Link> */}
        <Link href="/article/create">
            <a>New</a>
        </Link>
        {/* <Link href="/articles/[page]" as="/articles/1">
            <a>Articles</a>
        </Link> */}
        <Link href="/articles/[page]" as='/articles/1'>
            <a>Articles</a>
        </Link>
        <Link href="/tags">
            <a>Tags</a>
        </Link>
        <Link href="/categories">
            <a>Categories</a>
        </Link>
        {/* <Link href="/import">
            <a>Import</a>
        </Link> */}
        {/* <Link href="/orders">
            <a>Commandes</a>
        </Link> */}
        {/* <Link href="/account">
            <a>Mon compte</a>
        </Link> */}
    </StyledNavbar>
)

export default Navbar