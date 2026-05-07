import img1 from '../../img/story1.png';
import img2 from '../../img/story2.png';
import img3 from '../../img/story3.png';
import './ourStories.css';

export default function OurStories() {
  return (
    <section className="container story">
        <h1>OUR STORY</h1>
        <div className="our-stories-content">
            <div className="description">
                <h3>Founded in 2011 by John Mathew Smith, Konstruct has become the number one construction management firm</h3>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
            <div className="picture">
                <div className="item">
                    <img src={img1} alt="" />
                    <h2>WE PLAN</h2>
                </div>
                <div className="item">
                    <img src={img2} alt="" />
                    <h2>WE MANAGE</h2>
                </div>
                <div className="item">
                    <img src={img3} alt="" />
                    <h2>WE BUILD</h2>
                </div>
            </div>
        </div>
    </section>
  )
}
