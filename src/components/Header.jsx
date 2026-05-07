import headerLogo from '../img/projeco-logo-black.svg';

export default function Header() {
  return (
    <header className="main-header">
        <div className="container row">
            <img src={headerLogo} alt="headerLogo" />
            <nav>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>WORK</li>
                <li>CONTACT</li>
            </nav>
        </div>
    </header>
  )
}
