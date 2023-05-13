import bannerImg from "../Img/banner-img.png";

export default function Header() {
  return (
    <header className="w-100 text-white">
      <div className="container d-flex align-items-center">
        <div className="header-content w-50">
          <h1 className="text-capitalize">
            lmproved production level with robotics
          </h1>
          <p>everyone wants the innovation through robotice</p>
          <button className="text-capitalize">view details</button>
        </div>
        <div className="header-img w-50">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </header>
  );
}
