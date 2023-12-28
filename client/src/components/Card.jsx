import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { storeData } from '../redux/actions/dataActions';


const Card = (props) => {

  const dispatch = useDispatch(); 

  const colors = {
    1: "bg-red-500",
    2: "bg-blue-500",
    3: "bg-green-500",
    4: "bg-yellow-500",
    5: "bg-pink-500",
    6: "bg-purple-500",
    7: "bg-orange-500",
    8: "bg-teal-500",
    9: "bg-indigo-500",
    10: "bg-gray-500",
  };

  const images = {
    1: "book1.svg",
    2: "book2.svg",
    3: "book3.svg",
    4: "book4.svg",
    5: "book5.svg",
    6: "book6.svg",
    7: "book7.svg",
    8: "book8.svg",
    9: "book9.svg",
    10: "book10.svg",
  };

  function pickRandom(object) {
    const keys = Object.keys(object);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return object[randomKey];
  }

  const randomColor = pickRandom(colors);
  const randomimges = pickRandom(images);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  function modalon(link,title){
    document.getElementById("my_modal_1").showModal();
    const data = {
      link: link,
      title: title
    }
    dispatch(storeData(data));
  }

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: props.index * 0.25,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="card card-compact bg-base-100 shadow-xl"
      >
        <figure>
          <div
            className={`w-full h-40 flex justify-center items-center ${randomColor}`}
          >
            <img
              src={"./src/assets/cardimg/" + randomimges}
              width="60"
              alt="github"
            ></img>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title overflow-hidden">{props.title}</h2>
          <p className="overflow-hidden">{props.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {modalon(props.link , props.title)}}
            >
              View
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
