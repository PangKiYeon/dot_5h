import Header from "../component/header_m.jsx";
import one from "../image/one.jpg";
import two from "../image/two.jpg";
import three from "../image/three.jpg";
import { useState, useEffect } from "react";

export default function Main() {
  const [Randomimg, setRandomimg] = useState(0);

  const imgArray = [one, two, three];

  useEffect(() => {
    const imgNum = Math.round(Math.random() * imgArray.length);
    setRandomimg(imgArray[imgNum]);
  }, []);

  return (
    <>
      <Header />
      <img src={Randomimg} height={300} />
    </>
  );
}

//원영 푸터
