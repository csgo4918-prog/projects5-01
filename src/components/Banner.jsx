import logo from '../img/logoCorp.svg'

export default function Banner() {
  return (
    <section className='banner'>
        <img src={logo} alt="logo" />

        <div className='title-banner'>
            <h1>PARTNER WITH KONSTUCT</h1>
            <p>An award-winning construction management firm</p>
        </div>

        <p>SCROLL DOWN</p>
    </section>
  )
}
