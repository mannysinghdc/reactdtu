import { useEffect, useState } from "react"
import style from "./Home.module.css"
import axios from "axios"
import Button from "./Button"

const Home = () => {
  const [data, setData] = useState(null)


  useEffect(() => {
    axios.get("https://api.github.com/users/mannysinghdc")
      .then((res) => {
        // handle success
        setData(res.data.avatar_url)
      })
  }, [])

  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      {/* Background Image */}
      <img src="home.jpg" alt="background" style={{ height: "89.8vh", width: "100%", objectFit: "cover" }} />


      {/* Overlay Text */}
      <div className={style.over_lay}>
        <h1>About Our Website!</h1>
        {/* Github image */}
        {data && <img src={data} alt="image" style={{ borderRadius: "50%", width: "250px" }} />}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi repellat autem magni possimus
          reprehenderit laudantium distinctio, illum est suscipit qui obcaecati placeat repudiandae esse eveniet
          molestias ullam.
        </p>
        <Button/>

      </div>
    </div>
  );
}

export default Home;

