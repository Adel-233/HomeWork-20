import P2Img from "../Img/P 2.jpg";
import P1Img from "../Img/P 1.jpg";
export default function ServicesHeader() {
  return (
    <header className="Services-header w-100 ">
      <div className="container d-flex align-items-center">
        <div className="services-img text-align-center">
          <img className="w-50" src={P2Img} alt="" />
        </div>
        <div className="services-inf w-50">
          <h1>Globally Connected By Large Network</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Praesentium ipsa natus asperiores commodi expedita, enim nobis omnis
            rerum eaque dolores assumenda sapiente, non earum beatae id quia
            perferendis et dolore!
          </p>
          <button>view details</button>
        </div>
      </div>
      <div className="container d-flex align-items-center">
        <div className="services-inf w-50">
          <h1>Globally Connected By Large Network</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Praesentium ipsa natus asperiores commodi expedita, enim nobis omnis
            rerum eaque dolores assumenda sapiente, non earum beatae id quia
            perferendis et dolore!
          </p>
          <button>view details</button>
        </div>
        <div className="services-img text-align-center">
          <img className="w-50" src={P1Img} alt="" />
        </div>
      </div>
    </header>
  );
}
