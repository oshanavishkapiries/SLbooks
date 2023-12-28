import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Card_wapper from "./Card_wapper";
import Simple_Loader from "./Simple_Loader";

let page = 1;

const LoadMore = (props) => {
  const [data, setdata] = useState([]);
  const { ref, inView } = useInView();

  async function getData(url) {
    const response = await axios.get(url);
    return response.data.link.map((item, i) => (
      <Card
        title={item.title}
        key={i + 'a' + page} 
        index={i}
        link={item.link}
        description={item.description}
      />
    ));
  }

  useEffect(() => {
    async function res() {
      if (inView) {
        const res = await getData(props.url + "&page=" + page);
        setdata([...data, ...res]);
        page++;
      }
    }
    res();
  }, [inView]);

  useEffect(() => {
    page = 1;
    setdata([]);
    async function res() {
      if (inView) {
        const res = await getData(props.url + "&page=" + page);
        setdata([...data, ...res]);
        page++;
      }
    }
    res();
  }, [props.url]);

 

  return (
    <>
      <Card_wapper>{data}</Card_wapper>

     <div ref={ref}>
         <Simple_Loader />
     </div>
    </>
  );
};

export default LoadMore;
