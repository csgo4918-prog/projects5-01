import './Servises.css';
import service1 from '../../img/service1.svg'
import service2 from '../../img/service2.svg'
import service3 from '../../img/service3.svg'
export default function Services() {
  return (
    <section className='container services'>
        <div className='service-header'>
            <h2>OUR CAPABILITIES</h2>
            <div className='header-description'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <button>ALL SERVICES</button>
            </div>
        </div>
        <div className='services-items'>
            <div className='service-item'>
                <img src={service1} alt="service1" />
                <h3>PROJECT AND CONSTRUCTION MANAGEMENT</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
            <div className='service-item'>
                <img src={service2} alt="service2" />
                <h3>SPECIALIZED TRADES LABOR EXPERTISE</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
            <div className='service-item'>
                <img src={service3} alt="service3" />
                <h3>QUALITY ASSURANCE</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
        </div>
    </section>
  )
}
