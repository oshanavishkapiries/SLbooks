import React, { useEffect, useState } from "react";
import Simple_Loader from "./Simple_Loader.jsx";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal_Card from "./Modal_Card.jsx";
import env from "../data/env.js";

const Mordal = () => {
  const Modaldata = useSelector((state) => state.data.Modaldata);
  const [loading, setLoading] = useState(true);
  const [downLoadData, setdownLoadData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get(env.file_url + Modaldata.link)
        .then((res) => {
          setLoading(false);
          setdownLoadData([res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
    setLoading(true);
    setdownLoadData([]);
  }, [Modaldata]);

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Download Files ... </h3>

          {loading && <Simple_Loader />}

          {downLoadData.length > 0 &&
            downLoadData[0] !== "" &&
            downLoadData[0].map((item, i) =>
              item !== null ? (
                <Modal_Card
                  title={item.title}
                  DownloadLink={item.DownloadLink}
                  key={i}
                />
              ) : null
            )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Mordal;
