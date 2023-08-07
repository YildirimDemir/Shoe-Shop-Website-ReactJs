import { useState } from 'react'
import Header from '../components/Header'

const questions = [
    {title: "CARGO",
     text: "We deliver your shipments to logistics companies with the most care. We are followed by our special software throughout the entire delivery process, and if there is the slightest roughness, we take care of it. Our shipping types vary according to the continents. But the quality and reliability of the product does not change. ALWAYS CUSTOMER SATISFACTION",
    },
    {title: "QUALITY",
     text: "Our shoes, with high quality standards, combine durability, comfort and elegance. Our products, produced with superior material quality and careful workmanship, give confidence at every step.",
    },
    {title: "SUPPLIERS",
     text: "Our trusted suppliers are carefully selected to ensure top-notch quality for our products. With a focus on reliability, we collaborate with suppliers who uphold rigorous standards, guaranteeing consistent excellence in every item we offer.",
    },
    {title: "RETURNS",
     text: "We understand that customer satisfaction is paramount. Our hassle-free return policy ensures peace of mind. If you're not completely satisfied with your purchase, simply initiate a return within the specified timeframe, and our dedicated team will swiftly assist you in the process, ensuring a smooth and convenient experience.",
    },

]

export default function Questions(){
    return(
        <>
        <Header backroundImg={"/src/img/releated-q.jpeg"} title={"Releated Questions"} />
        <ReleatedQuestions question={questions}/>
        </>
    )
}

function ReleatedQuestions({question}){
    return(
    <div className="questions-content">
        {question.map((e, num) => (
            <Question title={e.title} text={e.text}  num={num} key={e.title}/>
        ))}
    </div>
    )
}

function Question({title, text, num}){

  const [isOpen, setIsOpen] = useState(false);

  function handleToogle(){
    setIsOpen((isOpen) => !isOpen)
  }

    return(
        <div className={`question ${isOpen ? "question-open" : ""}`} onClick={handleToogle}>
            <p className="question-number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
            <span className='question-icon'>{isOpen ? "-" : "+"}</span>
            <h2 className="question-title">{title}</h2>
            {isOpen && <div className='question-text'>{text}</div> }
        </div>
    )
}