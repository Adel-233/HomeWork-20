import rbot from "../Img/p1.png";
export default function AboutHeader() {
  return (
    <header className="about-header w-100 vh-100">
      <h1 className="text-capitalize">featured robotics products to show</h1>
      <p className="text-capitalize">
        Who are in extremely love with eco friendly system
      </p>
      <div className="container d-flex align-items-center justify-content-center justify-content-between">
        <div className="product text-capitalize">
          <div className="product-img">
            <img src={rbot} alt="" />
          </div>
          <div className="prodcut-inf">
            <h5>the upper eye</h5>
            <p>who are in extremely love with eco friendly system.</p>
            <button>view more</button>
          </div>
        </div>
        <div className="product text-capitalize">
          <div className="product-img">
            <img src={rbot} alt="" />
          </div>
          <div className="prodcut-inf">
            <h5>the upper eye</h5>
            <p>who are in extremely love with eco friendly system.</p>
            <button>view more</button>
          </div>
        </div>
        <div className="product text-capitalize">
          <div className="product-img">
            <img src={rbot} alt="" />
          </div>
          <div className="prodcut-inf">
            <h5>the upper eye</h5>
            <p>who are in extremely love with eco friendly system.</p>
            <button>view more</button>
          </div>
        </div>
        <div className="product text-capitalize">
          <div className="product-img">
            <img src={rbot} alt="" />
          </div>
          <div className="prodcut-inf">
            <h5>the upper eye</h5>
            <p>who are in extremely love with eco friendly system.</p>
            <button>view more</button>
          </div>
        </div>
      </div>
    </header>
  );
}
