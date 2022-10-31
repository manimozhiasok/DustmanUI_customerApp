import React from 'react';
import {
  gallery,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12
} from 'src/Assets';

function Gallery() {
  // const indicator: any = document.querySelector('.indicator').children;
  // const main: any = document.querySelector('.pictures').children;

  // for (let i = 0; i < indicator.length; i++) {
  //   indicator[i].onclick = function () {
  //     for (let x = 0; x < indicator.length; x++) {
  //       indicator[x].classList.remove('active');
  //     }
  //     this.classList.add('active');
  //     const displayItems = this.getAttribute('data-filter');
  //     for (let z = 0; z < main.length; z++) {
  //       main[z].style.transform = 'scale(0)';
  //       setTimeout(() => {
  //         main[z].style.display = 'none';
  //       }, 500);

  //       if (
  //         main[z].getAttribute('data-category') == displayItems ||
  //         displayItems == 'all'
  //       ) {
  //         main[z].style.transform = 'scale(1)';
  //         setTimeout(() => {
  //           main[z].style.display = 'block';
  //         }, 500);
  //       }
  //     }
  //   };
  // }

  return (
    <div>
      <img className="gallery-pic" src={gallery} alt="" />
      <section>
        <div className="gallery-page">
          <div className="side-head">
            <a href="index.html">Home</a> |
            <a className="current-view" href="#">
              Gallery
            </a>
          </div>

          <div className="gallery-container">
            <h1 className="gallery-title">Gallery</h1>
            <div className="select-gallery">
              <ul className="indicator">
                <li data-filter="all" className="active">
                  Show All
                </li>
                <li data-filter="Facilities">Facilities</li>
                <li data-filter="Woodern Recycling Unit">
                  Woodern Recycling Unit
                </li>
                <li data-filter="Plastic Recycling Unit">
                  Plastic Recycling Unit
                </li>
                <li data-filter="Cotton Box">Cotton Box</li>
                <li data-filter="Zero Waste Scrap">Zero Waste Scrap</li>
              </ul>
            </div>
            <div className="pictures">
              <div className="gallery-pictures" data-category="Facilities">
                <img src={g1} alt="" />
                <h3 className="pic-title">Special Equipment's</h3>
              </div>
              <div className="gallery-pictures" data-category="Facilities">
                <img src={g2} alt="" />
                <h3 className="pic-title">Forklifts</h3>
              </div>
              <div className="gallery-pictures" data-category="Facilities">
                <img src={g3} alt="" />
                <h3 className="pic-title">Vehicles</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Woodern Recycling Unit"
              >
                <img src={g4} alt="" />
                <h3 className="pic-title">Making Door's</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Woodern Recycling Unit"
              >
                <img src={g5} alt="" />
                <h3 className="pic-title">Making Furniture's</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Woodern Recycling Unit"
              >
                <img src={g6} alt="" />
                <h3 className="pic-title">Making Wood Reaper</h3>
              </div>
              <div className="gallery-pictures" data-category="Facilities">
                <img src={g7} alt="" />
                <h3 className="pic-title">Processing Machine</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Plastic Recycling Unit"
              >
                <img src={g8} alt="" />
                <h3 className="pic-title">LDPE Granules</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Plastic Recycling Unit"
              >
                <img src={g9} alt="" />
                <h3 className="pic-title">Nylon Granules</h3>
              </div>
              <div className="gallery-pictures" data-category="Cotton Box">
                <img src={g10} alt="" />
                <h3 className="pic-title">Paper Rolls</h3>
              </div>
              <div className="gallery-pictures" data-category="Cotton Box">
                <img src={g11} alt="" />
                <h3 className="pic-title">Loose Carton Boxes</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Zero Waste Scrap"
              >
                <img src={g12} alt="" />
                <h3 className="pic-title">Industrial Solid Waste</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Gallery;
