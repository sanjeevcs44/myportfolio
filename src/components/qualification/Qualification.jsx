import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__tile">Qualification </h2>
      <span className="section__subtitle"> My Personal Journey </span>
      <div className="qulification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex "
                : "qualification__button  button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i class="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex "
                : "qualification__button  button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="qualification__icon uil uil-briefcase"></i> Experince
          </div>
        </div>
        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Designer</h3>
                <span className="qualification__subtitle">Spain Institue </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2021 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain Institue </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Designer</h3>
                <span className="qualification__subtitle">Spain Institue </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain Institue </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Technical Lead (Front End )
                </h3>
                <span className="qualification__subtitle">LTIMINDTREE </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> Dec-2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Team Lead </h3>
                <span className="qualification__subtitle">
                  ACCENTURE SOLUTION PVT LTD{" "}
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> APRIL 2017 - DEC 2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> FRONT END DEVELOPER</h3>
                <span className="qualification__subtitle">Spain Institue </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> SEPT 2015 - April 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Senior Web Designer </h3>
                <span className="qualification__subtitle">
                  Xavient Software solution{" "}
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2015 - 2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
