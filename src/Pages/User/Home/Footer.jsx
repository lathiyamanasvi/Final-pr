import React from 'react';
import '../User.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

function Footer() {
  return (
    <>
<section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <a href="#"><img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/03/logo.png" alt="logo"/></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                        <div class="hr"></div>
                        <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><FaFacebookF /></a></li>
                                <li><a class="hover-target" href=""><FaLinkedinIn /></a></li>
                                <li><a class="hover-target" href=""><BsGithub /></a></li>
                                <li><a class="hover-target" href=""><FaBehance /></a></li>
                                <li><a class="hover-target" href=""><FaPinterestP /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p className='mb-0'>Copyright &copy; 2019 <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/03/logo-80x27.png" alt="logo"/> All Rights Reserved.</p>
    </footer>

    </>
  )
}

export default Footer
