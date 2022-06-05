import React from "react";
import "./card.css";

// Bs Modal Requirements
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

//React Icons
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Card = (data) => {
  //MODAL BS
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{data.nama}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal_container">
          <Carousel>
            <div className="carousel-img-wrap">
              <img src={data.image} className="card-img-modal" alt="home img" />
            </div>
            <div className="carousel-img-wrap">
              <img src={data.image} className="card-img-modal" alt="home img" />
            </div>
            <div className="carousel-img-wrap">
              <img src={data.image} className="card-img-modal" alt="home img" />
            </div>
            <div className="carousel-img-wrap">
              <img src={data.image} className="card-img-modal" alt="home img" />
            </div>
            <div className="carousel-img-wrap">
              <img src={data.image} className="card-img-modal" alt="home img" />
            </div>
          </Carousel>

          <div className="modal-container-right">
            <div className="modal-right-content">
              <div>
                <h4 className="modal-desc-title">Deskripsi</h4>
                <p className="modal-desc">{data.desc}</p>
              </div>

              <div className="modal-desc-wrap">
                <table>
                  <tr>
                    <td>
                      <MdLocationOn className="modal-icon-desc" />
                    </td>
                    <td>&nbsp;:&nbsp;&nbsp;</td>
                    <td>
                      <p className="modal-desc-icon">{data.alamat}</p>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="modal-desc-wrap">
                <table>
                  <tr>
                    <td>
                      <IoMdPricetags className="modal-icon-desc" />
                    </td>
                    <td>&nbsp;:&nbsp;&nbsp;</td>
                    <td>
                      <p className="modal-desc-icon"> Rp.{data.harga}</p>
                    </td>
                  </tr>
                </table>
              </div>
              <div>
                <div className="modal-etc-title">Keterangan Lainnya</div>
                <div className="modal-etc-desc">{data.keterangan}</div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="bottom-left-modal">
            <div className="modal-facilities">
              <div className="facilitiy">
                <div>{data.kamar}</div>
                <FaBed className="icon-1-modal" />
              </div>
              <div className="facilitiy">
                <div>{data.toilet}</div>
                <FaBath className="icon-2-modal" />
              </div>
              <div className="facilitiy">
                <tbody className="luas-wrap">
                  <tr className="wrap-m2">
                    <td>
                      {/* <BsArrowsFullscreen className="icon-2" /> */}
                      <strong>LB</strong>
                    </td>
                    <td>&nbsp;:&nbsp;</td>
                    <td className="bottom-text">
                      {data.lb}m<sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* <BsArrowsFullscreen className="icon-2" /> */}
                      <strong>LT</strong>
                    </td>
                    <td>&nbsp;:&nbsp;</td>
                    <td className="bottom-text">
                      {data.lt}m<sup>2</sup>
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>

          <div className="bottom-right-modal">
            <Button>Hubungi</Button>
            <Button onClick={props.onHide}>Tutup</Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="card-container" onClick={() => setModalShow(true)}>
        <div className="card-top">
          <img className="card-img" src={data.image} alt="home img"></img>
          <div className="card-desc">
            <div className="property-title">{data.nama}</div>
            <div className="property-desc-title">Deskripsi Singkat</div>
            <div className="property-desc">Rumah minimalis nyaman dan siap huni lengkap dengan segala perabotan rumah</div>
            <div className="property-address">
              <tbody>
                <tr>
                  <td>
                    <MdLocationOn className="property-address-icon" />
                  </td>
                  <td>:&nbsp;</td>
                  <td>{data.alamat}</td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <div className="property-price">
            <tbody>
              <tr>
                <td>
                  <IoMdPricetags className="icon-1" />
                </td>
                <td>&nbsp;:&nbsp;</td>
                <td className="bottom-text">Rp. {data.harga}</td>
              </tr>
            </tbody>
          </div>
          <div className="property-facilities">
            <div className="facilitiy">
              <div className="bottom-text">{data.kamar}</div>
              <FaBed className="icon-1" />
            </div>
            <div className="facilitiy">
              <div className="bottom-text">{data.toilet}</div>
              <FaBath className="icon-2" />
            </div>
            <div className="facilitiy">
              <tbody className="luas-wrap">
                <tr className="wrap-m2">
                  <td>
                    {/* <BsArrowsFullscreen className="icon-2" /> */}
                    <strong>LB</strong>
                  </td>
                  <td>&nbsp;:&nbsp;</td>
                  <td className="bottom-text">
                    {data.lb}m<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* <BsArrowsFullscreen className="icon-2" /> */}
                    <strong>LT</strong>
                  </td>
                  <td>&nbsp;:&nbsp;</td>
                  <td className="bottom-text">
                    {data.lt}m<sup>2</sup>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Card;
