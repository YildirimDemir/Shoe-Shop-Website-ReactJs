import { useState } from 'react'
import Header from '../components/Header'

export default function About(){
    return (
        <>
        <Header backroundImg={"src/img/about.jpg"} title={"About"} text={"Learn more about us"}/>
        <AboutUs />
        </>
    )
}

function AboutUs(){
    return(
        <div class="about-us-content">
        <div class="about-us-text">
            <p>
                Welcome to our online shoe store! Established in 2020, we are a prominent footwear retailer based in Istanbul, Turkey. Our mission is to prioritize customer satisfaction while offering the latest trends and high-quality products.
                
                At Trend & Quality, we understand the importance of finding the perfect pair of shoes that not only complements your style but also provides comfort and durability. That's why we carefully curate our collection to bring you a diverse range of fashionable and well-crafted footwear options.
                
                We pride ourselves on being a customer-centric brand, and we strive to exceed your expectations with every interaction. Our dedicated team is committed to providing excellent service, ensuring that your shopping experience with us is enjoyable, convenient, and hassle-free.
                
                As fashion enthusiasts ourselves, we stay up to date with the latest industry trends to ensure that our inventory always reflects the current fashion landscape. We collaborate with reputable manufacturers and suppliers to source products that meet our high standards of quality and style.
                
                We believe in the power of shoes to enhance your confidence and complete your look, whether it's for a casual outing, a formal event, or sports activities. Our extensive selection includes footwear for men, women, and children, catering to a wide range of preferences and needs.
                
                Thank you for choosing Trend & Quality as your go-to destination for trendy and reliable footwear. We value your trust and look forward to serving you with the utmost dedication and care. Feel free to browse our online catalog and explore our exciting collection. Should you have any questions or require assistance, our friendly customer support team is here to help.
                
                Start your shoe shopping journey with us today, and let us help you step out in style!
                </p>
        </div>
    </div>
    )
}