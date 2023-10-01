import React from "react";

const WorksItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i class="uil uil-arrow-right"></i>
      </a>
    </div>
  );
};

export default WorksItem;
