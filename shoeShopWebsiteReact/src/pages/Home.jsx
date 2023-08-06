import { useState } from 'react'
import Header from '../components/Header'

function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
}

export default function Home(){
    return(
        <>
        <Header title={"Trend & Quality"} text={"Variety of shoes suitable for the trend"} backroundImg={"src/img/nike_shoes_2.jpeg"} />
        <Categories />
        <Newslatter />
        </>
    )
}


function Categories(){

    const categoryMain = [
        { name: "Daily", image: "src/img/daily-shoes.jpeg" },
        { name: "Running", image: "src/img/running_shoes.jpeg" },
        { name: "Sneakers", image: "src/img/snk.webp"},
        { name: "Fitness", image: "src/img/fitness.jpeg"},
        { name: "Football", image: "src/img/f_shoes.jpeg"},
        { name: "Basketball", image: "src/img/b_shoes.jpeg"},
      ];

    return(
        <section class="category">
      <h1>CATEGORIES</h1>
      <div class="category-content">
        {categoryMain.map((e, i) =>(
             <CategoryBox categoryBoxBg={e.image} categoryBoxTitle={e.name} key={i}/>
        ))}
      </div>
    </section>
    )
}

function CategoryBox({categoryBoxBg, categoryBoxTitle}){

      return(
        <div className="category-box" style={{ backgroundImage: `url(${categoryBoxBg})` }}>
            <h3>{categoryBoxTitle}</h3>
        </div>
      )
}



function Newslatter() {
    const newsletterBackground = "/src/img/nike_shoes_1.jpeg"; 

    const [submitForm, setSubmitForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleForm = (event) => {
        event.preventDefault();
        setSubmitForm(true);
        setName(''); // İsim alanını sıfırla
        setEmail(''); // E-posta alanını sıfırla
    };

    const handleCloseButton = () => {
        setSubmitForm(false);
    };

    return (
        <section className="newslatter" style={{ backgroundImage: `url(${newsletterBackground})` }}> 
            <form onSubmit={handleForm}>
                <h3>Join Our Newsletter</h3>
                <input
                    type="text"
                    required
                    placeholder='Your Name...'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="email"
                    required
                    placeholder='Your Email...'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit">Join</button>
            </form>
            {submitForm && (
                <div className="joined-to-newslatter">
                    <div className="welcome-newslatter">
                        <h1>Welcome to our Newsletter 😎</h1>
                        <p>You will be informed about our new products to be released or to be released. <br />
                         Enjoy our Trend & Quality products 🤩
                         </p>
                         <Button onClick={handleCloseButton}>X</Button>
                    </div>
                </div>
            )}
        </section>
    );
}