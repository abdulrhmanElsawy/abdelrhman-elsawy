import React, { useEffect } from 'react';
import './css/navbar.css';
import Logo from './images/logo.svg';
import $ from 'jquery';

function Navbar() {
useEffect(() => {
    $("#open-nav").on("click", function () {
    $(".nav-elements").slideDown(400);
    $(".nav-elements").css({ display: "flex" });
    });

    $("#close-nav").on("click", function () {
    $(".nav-elements").slideUp(400);
    });

    if ($(window).width() < 950) {
    $(".nav-elements ul li").on("click", function () {
        $(".nav-elements").slideUp(400);
    });
    }
}, []);

const handleDownload = () => {
    // Replace the URL with the actual URL of the PDF file
    const fileUrl = 'https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/docs/AbdelrhmanElsawyCV.pdf';
    window.open(fileUrl, '_blank');
};

return (
    <>
    <div className='navbar'>
        <div className='container-fluid'>
        <div className='nav-content'>
            <div className='logo'>
            <img src={Logo} alt='logo' />
            </div>

            <button id='open-nav'>
            <i className='las la-bars'></i>
            </button>
            <div className='nav-elements'>
            <button id='close-nav'>
                <i className='las la-times'></i>
            </button>

            <ul>
                <li>
                <a href='#home'>الرئيسية</a>
                </li>

                <li>
                <a href='#projects'>الأعمال</a>
                </li>

                <li>
                <a href='#about'>السيرة الذاتية</a>
                </li>

                <li>
                <a href='#services'>الخدمات</a>
                </li>

                <li>
                <a href='#rates'>التقيمات</a>
                </li>
            </ul>
            <button className='download-cv' onClick={handleDownload}>
                تنزيل السيرة الذاتية <i className='las la-download'></i>
            </button>
            </div>
        </div>
        </div>
    </div>
    </>
);
}

export default Navbar;
