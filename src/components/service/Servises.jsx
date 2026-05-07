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
                <img src="" alt="" />
                <h3>PROJECT AND CONSTRUCTION MANAGEMENT</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
        </div>
    </section>
  )
}
