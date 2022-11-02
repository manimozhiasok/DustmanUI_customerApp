import React from 'react';
import { icon1, icon2, icon3, icon4, otherPic } from 'src/Assets';
import './website.css';
import { useNavigate } from 'react-router';
function Services() {
  const navigateTo = useNavigate();
  const navigationToHome = () => {
    navigateTo('/dustman', { replace: true });
  };
  return (
    <>
      <img className="other-pic" src={otherPic} alt="" />
      <section>
        <div className="other-page1">
          <div className="side-head">
            <a onClick={navigationToHome}>Home</a> |{' '}
            <a className="current-view">Services</a>
          </div>
          <h1>Other Services</h1>

          <div className="container">
            <div className="box">
              <div className="square">
                <img className="icon-img" src={icon1} alt="" />
              </div>

              <h2>
                General - Waste <br></br>Recycling
              </h2>
              <p>
                From hazardous waste to confidential materials, we are experts
                in waste disposal. Our general waste management service covers
                everyday litter and garbage – things that can’t be recycled, and
                don’t need to be disposed of in a specialist environment. We
                offer waste collections for all types of waste and will advise
                and manage all aspects of waste management.
              </p>
            </div>

            <div className="box">
              <div className="square">
                <img className="icon-img" src={icon2} alt="" />
              </div>

              <h2>
                Wooden <br></br>Recycling
              </h2>
              <p>
                We are recycling scrap woods in to valuable materials with
                effective costs. We are manufacturing wooden pallets for
                companies packing uses, we recycle scrap woods are segregated
                and it used to making new wooden pallets, new doors, new
                furniture’s, supplying to companies storage yards etc. for wood
                recycling company area only 55000 Sq. ft.
              </p>
            </div>

            <div className="box">
              <div className="square">
                <img className="icon-img" src={icon3} alt="" />
              </div>
              <h2>
                Plastic <br></br>Recycling
              </h2>
              <p>
                Plastic recycling is the reprocessing of plastic waste into new
                and useful products. We segregate all plastic scrap, our
                processing and recycling unit produces plastic granules. Plastic
                granules are packed in packages, and sell throughout India. Area
                of recycling unit 5000 square feet.
              </p>
            </div>

            <div className="box">
              <div className="square">
                <img className="icon-img" src={icon4} alt="" />
              </div>
              <h2>
                Metal <br></br>Recycling
              </h2>
              <p>
                Metals are valuable materials that can be recycled again without
                degrading their properties. Scrap metal has value, which
                motivates people to collect it for sale to recycling operations.
                We accept all kind of MS scrap and CR/HR punching scrap based
                raw materials. We have long been serving our clients with
                unparalleled services concerning Scrap metal buying and selling.
              </p>
            </div>
          </div>
        </div>
        <div className="other-page2">
          <p className="title">
            Monthly Material Handling <br></br>Capacity & Production Report
          </p>
          <div className="table-box">
            <table>
              <tr>
                <td>Cartons Scraps</td>
                <td>200 MT</td>
              </tr>
              <tr>
                <td>Wooden Scraps</td>
                <td>275 MT</td>
              </tr>
              <tr>
                <td>General Waste Scraps (packing wastes)</td>
                <td>40 MT</td>
              </tr>
              <tr>
                <td>Plastic Scraps</td>
                <td>50 MT</td>
              </tr>
              <tr>
                <td>MS Scraps</td>
                <td>250 MT</td>
              </tr>
              <tr>
                <td>Aluminium Scraps</td>
                <td>10 MT</td>
              </tr>
              <tr>
                <td>Rubbish Scraps</td>
                <td>150 MT</td>
              </tr>
              <tr>
                <td>Glass Scraps</td>
                <td>150 MT</td>
              </tr>
              <tr>
                <td>Rubber scraps</td>
                <td>10 MT</td>
              </tr>
              <tr>
                <td>Copper Scraps</td>
                <td>0.5 MT</td>
              </tr>
              <tr>
                <td>Other municipality rubbish</td>
                <td>100 MT</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
