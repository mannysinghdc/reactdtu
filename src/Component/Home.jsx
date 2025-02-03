import style from "./Home.module.css"

const Home = () => {
    return (
      <div className="container-fluid" style={{ position: "relative",border:"1px solid" }}>
        {/* Background Image */}
        <img src="home.jpg" alt="background" style={{ height: "89.8vh", width: "100%", objectFit: "cover" }}/>
  
        {/* Overlay Text */}
        <div className={style.over_lay}>
          <h1>About Our Website!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi repellat autem magni possimus 
            reprehenderit laudantium distinctio, illum est suscipit qui obcaecati placeat repudiandae esse eveniet 
            molestias ullam.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  
