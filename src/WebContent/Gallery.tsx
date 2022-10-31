import React from 'react';
import '../../src/newstyle.css';

function Gallery() {
  return (
    <>
      <img className="gallery-pic" src="images/gallery.png" alt="" />
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
                <img src="images/g1.png" alt="" />
                <h3 className="pic-title">Special Equipment's</h3>
              </div>
              <div className="gallery-pictures" data-category="Facilities">
                <img src="images/g2.png" alt="" />
                <h3 className="pic-title">Forklifts</h3>
              </div>
              <div className="gallery-pictures" data-category="Facilities">
                <img src="images/g3.png" alt="" />
                <h3 className="pic-title">Vehicles</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Woodern Recycling Unit"
              >
                <img src="images/g4.png" alt="" />
                <h3 className="pic-title">Making Door's</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Woodern Recycling Unit"
              >
                <img src="images/g5.png" alt="" />
                <h3 className="pic-title">Making Furniture's</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Woodern Recycling Unit"
              >
                <img src="images/g6.png" alt="" />
                <h3 className="pic-title">Making Wood Reaper</h3>
              </div>
              <div className="gallery-pictures" data-category="Facilities">
                <img src="images/g7.png" alt="" />
                <h3 className="pic-title">Processing Machine</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Plastic Recycling Unit"
              >
                <img src="images/g8.png" alt="" />
                <h3 className="pic-title">LDPE Granules</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Plastic Recycling Unit"
              >
                <img src="images/g9.png" alt="" />
                <h3 className="pic-title">Nylon Granules</h3>
              </div>
              <div className="gallery-pictures" data-category="Cotton Box">
                <img src="images/g10.png" alt="" />
                <h3 className="pic-title">Paper Rolls</h3>
              </div>
              <div className="gallery-pictures" data-category="Cotton Box">
                <img src="images/g11.png" alt="" />
                <h3 className="pic-title">Loose Carton Boxes</h3>
              </div>
              <div
                className="gallery-pictures"
                data-category="Zero Waste Scrap"
              >
                <img src="images/g12.png" alt="" />
                <h3 className="pic-title">Industrial Solid Waste</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Gallery;
