import React from "react";
import { Link } from "react-router-dom";
import hotel from "../../img/hotel.png";
import fun from "../../img/fun.jpg";
import roomie from "../../img/roomie.jpg";
import apt from "../../img/apt.jpg";

const Landing = () => {
  return (
    <header className="showcase">
      <div className="container">
        <div class="content">
          <div>
            <h1>Try our the mix between tinder and airbnb</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
              vitae dolore.
            </p>
            <div class="links">
              <Link to="/login" class="btn-primary">
                Log In
              </Link>
              <Link to="/register" class="btn-secondary">
                Register
              </Link>
            </div>
          </div>
          <img src={hotel} alt="hotel" />
        </div>
        <section className="home-cards">
          <div>
            <img src={roomie} alt="roomie" />
            <h3>New way to find roomantes</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={fun} alt="fun" />
            <h3>New way to find roomantes</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={apt} alt="apt" />
            <h3>New way to find roomantes</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
            </p>
            <a href="#">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Landing;
