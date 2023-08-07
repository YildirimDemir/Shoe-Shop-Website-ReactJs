import { useState } from 'react'
import Header from '../components/Header'

export default function Contact(){
    return(
        <>
        <Header backroundImg={"src/img/contact.webp"} title={"Contact"} text={"Our Contact Information"}/>
        <ContactUs />
        </>
    )
}


function ContactUs(){

    const offices = [
        {
        location: "Istanbul - Turkey",
        phoneNumber: "+90 500 000 00 00",
        email: "tr@trendandquality.com",
        map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1049960024598!2d29.028360887673248!3d41.11039793923565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab59291089e1f%3A0x3352c1d8c1741990!2zxLBzdGlueWUgUGFyayBBbMSxxZ92ZXJpxZ8gTWVya2V6aQ!5e0!3m2!1str!2str!4v1691398259031!5m2!1str!2str" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        },
        {
            location: "Miami - USA",
            phoneNumber: "+1 100 000 00 00",
            email: "usa@trendandquality.com",
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.031853296876!2d-80.18674631787285!3d25.79949429298502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b401bcc2da41%3A0x72cbdba7deb252d9!2sElysee%20Miami!5e0!3m2!1str!2str!4v1691398139094!5m2!1str!2str" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        },
        {
            location: "London - UK",
            phoneNumber: "+44 100 000 00 00",
            email: "uk@trendandquality.com",
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.504915661674!2d-0.15023151872431295!3d51.487731971376064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafcdcba2d0a179b3%3A0x5333fac6c88164fc!2sAVM!5e0!3m2!1str!2str!4v1691398309051!5m2!1str!2str" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        }
    ]

    return(
        <>
        <div className="contact-us">
            {offices.map((office, index) => (
                <ContactUsContent office={office} key={index} />
            ))}
        </div>
        </>
    )
}

function ContactUsContent({office}){
    return(
        <div className="office">
            <div className="office-map">
                {office.map}
            </div>
            <div className="office-detail">
                <h1>{office.location}</h1>
                <p>Phone Number: {office.phoneNumber}</p>
                <p>Email: {office.email}</p>
            </div>
        </div>
    )
}