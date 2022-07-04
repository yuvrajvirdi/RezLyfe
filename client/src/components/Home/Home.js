import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Uni from '../Uni/Uni'
import './home.styles.css'
import history from "../../history";

function handleWesternClick(e) {
    e.preventDefault();
    window.location = '/posts';
    console.log('Going to western');
}

const Home = () => {
    return (
        <body>
            <div class="navr">
                <div class="logo-wrapper"> 
                    <img src={logo} class="logo"/>
                </div>
            </div>
            <div class="cards-list">

                <a class="uni-link" onClick={handleWesternClick}>
                    <div class="card 1">
                        <div class="card_image"> <img src="https://www.applyboard.com/wp-content/uploads/2021/12/western-university-1.jpg" /> </div>
                        <div class="card_title title-white">
                            <p>Western</p>
                        </div>
                    </div>
                </a>
          
                <a class="uni-link" href="">
                    <div class="card 1">
                        <div class="card_image"> <img src="https://www.queensu.ca/gazette/sites/default/files/assets/NEW%20DJI_0015.jpg" /> </div>
                        <div class="card_title title-white">
                            <p>Queen's - Coming Soon</p>
                        </div>
                    </div>
                </a>
                <a class="uni-link" href="">
                    <div class="card 1">
                        <div class="card_image"> <img src="https://www.utoronto.ca/sites/default/files/st-george-campus_0.jpg" /> </div>
                        <div class="card_title title-white">
                            <p>UofT - Coming Soon</p>
                        </div>
                    </div>
                </a>
                <a class="uni-link" href="">
                    <div class="card 1">
                        <div class="card_image"> <img src="https://micefa.org/wp-content/uploads/2011/10/campus-aerial-west-side-1024x682.jpg" /> </div>
                        <div class="card_title title-white">
                            <p>Waterloo - Coming Soon</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="info-wrapper">
                <div class="example bg-1">
                    <section class="panel">
                        <header class="panel__header">
                            <h1 class="panel__title">
                                By the students, for the students
                            </h1>
                        </header>
                        <div class="panel__content">
                            Aggregated space for all of your future residence inquiries
                        </div>
                    </section>
                </div>
            </div>

            <div class="data-wrapper">

                <div class="row1-container">
                    <div class="box box-down cyan">
                    <h2>See Reviews</h2>
                    <p>Incoming residents can see past reviews on student residences</p>
                    <img class="info-img"src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
                    </div>

                    <div class="box red">
                    <h2>Leave Ratings</h2>
                    <p>Past residences at buildings can leave reviews of their experiences</p>
                    <img class="info-img"src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
                    </div>

                    <div class="box box-down blue">
                    <h2>Understand</h2>
                    <p>Read on how the unfiltered residence life is like</p>
                    <img class="info-img"src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
                    </div>
                </div>
                <div class="row2-container">
                    <div class="box orange">
                    <h2>Get An Idea</h2>
                    <p>See what residence is preferred through reviews and ratings</p>
                    <img class="info-img"src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
                    </div>
                </div>
            </div>
            
           


        </body>
    );
};

export default Home;

