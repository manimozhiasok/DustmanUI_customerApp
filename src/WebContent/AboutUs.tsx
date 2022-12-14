import React from 'react';
import {
  aboutPh,
  about,
  cards,
  hisIcon1,
  hisIcon2,
  hisIcon3,
  hisIcon4,
  hisIcon5,
  line,
  satisfaction,
  statuary,
  financial,
  work,
  leftarrow,
  rating,
  quotation,
  face,
  rightarrow,
  google1,
  app1,
  iconbox1,
  iconbox2,
  iconbox3,
  iconbox4
} from 'src/Assets';
import { useNavigate } from 'react-router';
import './website.css';
function AboutUs() {
  const navigateTo = useNavigate();
  const navigationToHome = () => {
    navigateTo('/dustman', { replace: true });
  };
  return (
    <>
      <img className="about1" src={about} alt="" />
      <section />
      <div className="about-page1">
        <div className="side-head">
          <a onClick={navigationToHome}>Home</a> |{' '}
          <a className="current-view">About Us</a>
        </div>
        <h1 className="about-title">Who We Are</h1>
        <div className="about-body">
          <p>
            We have started DUSTMAN WASTE MANAGEMENT & RECYCLING PVT LTD, with
            experience of 7 years in this business. Over the years, We have
            gained sufficient experience and established ourselves as an
            effective E Waste Management Company. We have all certifications for
            recycling and scrap vendor activities.
          </p>
          <p>
            We are a team of expert professionals, who have vast experience in
            the field of taking all kind of Scraps.
          </p>
          <p>
            Owing to our vast experience and deep insight of the field, we make
            possible that the all kinds of Scrap is taking to the clients within
            the stipulated timeframe. In addition, we take a vigilant approach
            at the time of the transit of the Scraps and offer these products
            with the guarantee of quality of clearing and excellence services.
            And we are financially fit for large quantity scraps.
          </p>
        </div>
      </div>
      <div className="about-page2">
        <h1 className="about-title1">Our History</h1>
        {/* <img className="his-img" src={cards} alt="" /> */}

        <div className="his-chart">
          <div className="his-icon-text">
            <img className="his-icon" src={hisIcon1} alt="" />
            <h2>
              University<br></br>Graduated
            </h2>
            <p>1892</p>
          </div>
          <img className="his-line" src={line} alt="" />
          <div className="his-icon-text">
            <img className="his-icon" src={hisIcon2} alt="" />
            <h2>
              University<br></br>Graduated
            </h2>
            <p>1894</p>
          </div>
          <img className="his-line" src={line} alt="" />
          <div className="his-icon-text">
            <img className="his-icon" src={hisIcon3} alt="" />
            <h2>
              University<br></br>Graduated
            </h2>
            <p>1977</p>
          </div>
          <img className="his-line" src={line} alt="" />
          <div className="his-icon-text">
            <img className="his-icon" src={hisIcon4} alt="" />
            <h2>
              University<br></br>Graduated
            </h2>
            <p>1999</p>
          </div>
          <img className="his-line" src={line} alt="" />
          <div className="his-icon-text">
            <img className="his-icon" src={hisIcon5} alt="" />
            <h2>
              University<br></br>Graduated
            </h2>
            <p>2002</p>
          </div>
        </div>
        <div className="about-box">
          <p>
            ???We have been getting ready to recycle more E-Waste by investing in
            infrastructure, prividing grants to local government and working
            with industry???
          </p>
        </div>
        <div className="about-para">
          <p>
            Dustman has all the necessary latest equipment???s at its disposal to
            ensure quick response to the clients need and flawless execution. We
            use the quality and eco-friendly clearing material for cleaning.
          </p>
        </div>
      </div>
      <div className="about-page3">
        <div className="row">
          <div className="about-text column-left">
            <div className="up-line"></div>
            <h1>Our Satisfication</h1>
            <p>
              We work in close association with the clients to understand their
              needs and work accordingly. We also make available a wide range of
              vehicles and manpower to offer variety to the clients. Owing to
              our transparent business practices, we have succeeded in offering
              complete satisfaction to the clients.
            </p>
          </div>
          <div className="about-pics">
            <img src={satisfaction} alt="" />
          </div>
          {/* <img className="about-pics column-right" src={satisfaction} alt="" /> */}
        </div>

        <div className="row">
          {/* <div className="about-pics">
                <img src="images/statuary.png" alt="">
            </div> */}
          <img className="about-pics column-left" src={statuary} alt="" />
          <div className="about-text column-right">
            <div className="up-line"></div>
            <h1>Statuary Requirement</h1>
            <p>
              We are strictly law abiding management and complies with all the
              statuary requirement laid down under various labour laws
              applicable form time to time. Even in non ESIC Covered areas, we
              depute employee with ESIC covering for greater benefits in the
              event of causality. For dangerous work place workers are under
              coverage of Workmen compensation policy without any delay. Dustman
              "Operational and administrative" in fracture is very strong and
              comprehensive, our network all over ensures a healthy report with
              the labour department police authorities and lots of government
              agencies.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="about-text column-left">
            <div className="up-line"></div>
            <h1>Financially Sound</h1>
            <p>
              We have good financial support from HDFC Bank Ltd, payment terms
              will be as company requirement like RTGS, NEFT, IMPS or DD for
              your company convenience and also provide security deposit (EMD)
              payment or irrevocable Bank Guarantee.
            </p>
          </div>
          {/* <!-- <div className="about-pics">
                <img src="images/financial.png" alt="">
            </div> --> */}
          {/* <img className="about-pics column-right" src={financial} alt="" /> */}
        </div>

        <div className="row">
          <img className="about-pics column-left" src={work} alt="" />
          <div className="about-text column-right">
            <div className="up-line"></div>
            <h1>Work Force</h1>
            <p>50 numbers of all workers, 5 supervisors and 2 Managers.</p>
          </div>
        </div>
      </div>
      <div className="about-page5">
        <div className="arrow-square">
          <div className="arrow-round">
            <img
              className="arrow"
              id="left-btn"
              src={leftarrow}
              alt="previous testimony"
            />
          </div>
        </div>

        <div className="testimonal testimonal-visible">
          <img className="testi-quote" src={quotation} alt="" />
          <p className="testi-body">
            ???Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur???
          </p>
          <div className="testi-center">
            <img className="testi-face" src={face} alt="" />
            <div className="testi-desi">
              <h2 className="testi-name">Jonathan Lee</h2>
              <p className="testi-sub">Joe???s Parents</p>
            </div>
            <img className="testi-rate" src={rating} alt="" />
          </div>
        </div>
        <div className="testimonal testimonal-hidden">
          <img className="testi-quote" src={quotation} alt="" />
          <p className="testi-body">
            ???Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur???
          </p>
          <div className="testi-center">
            <img className="testi-face" src={face} alt="" />
            <div className="testi-desi">
              <h2 className="testi-name">Andrew Right</h2>
              <p className="testi-sub">Chief Director</p>
            </div>
            <img className="testi-rate" src={rating} alt="" />
          </div>
        </div>
        <div className="testimonal testimonal-hidden">
          <img className="testi-quote" src={quotation} alt="" />
          <p className="testi-body">
            ???Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur???
          </p>
          <div className="testi-center">
            <img className="testi-face" src={face} alt="" />
            <div className="testi-desi">
              <h2 className="testi-name">Simon Lee</h2>
              <p className="testi-sub">Director</p>
            </div>
            <img className="testi-rate" src={rating} alt="" />
          </div>
        </div>

        <div className="arrow-square">
          <div className="arrow-round">
            <img
              className="arrow"
              id="right-btn"
              src={rightarrow}
              alt="next testimony"
            />
          </div>
        </div>
      </div>
      <div className="about-page6">
        <img className="about-ph-image" src={aboutPh} alt="" />
        <div className="about-ph-text">
          <h5>Mobile apps</h5>
          {/* <h1>Book your<br>pickup from<br>our App</h1> */}
          <p>
            Dedicated mobile app for Customers and Vendors. Download the app for
            exclusive deals and ease of booking.
          </p>
          <div className="play-btn">
            <img className="play-btn-img" src={google1} alt="" />
            <img className="play-btn-img" src={app1} alt="" />
          </div>
        </div>
      </div>

      <div className="landing2">
        <div className="round">
          <img src={iconbox1} alt="" />
          <p>TNPCB Approved</p>
        </div>

        <div className="round">
          <img src={iconbox2} alt="" />
          <p>50+ Staff Members</p>
        </div>

        <div className="round">
          <img src={iconbox3} alt="" />
          <p>Bank Support</p>
        </div>

        <div className="round">
          <img src={iconbox4} alt="" />
          <p>All Vehicle Types</p>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
