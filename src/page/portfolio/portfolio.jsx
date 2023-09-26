import Style from './portfolio.module.css';
import Counter from './../../assets/count.jpg';
import Book from './../../assets/book.jpg';
import Med from './../../assets/medi.jpg';
import Globo from './../../assets/glo.jpg';
 

export default function portfolio() {
    return(
        <>
        <h1 className={Style.title}>Portfolio</h1>

        <div className={Style.container}>

            <a href='https://livial22.github.io/Counter/' target='_blank' rel='noreferrer'>
              <img className={Style.photo} src={Counter} alt='photo-counter'/>
            </a>    

            <a href='https://livial22-book-app.netlify.app/' target='_blank' rel="noreferrer">
                <img className={Style.photo} src={Book} alt='photo-book-app'/>
            </a>
        </div>   

        <div className={Style.container}>

            <a href='https://meditation-app-ll.netlify.app/' target='_blank' rel="noreferrer">
                <img className={Style.photo} src={Med} alt='photo-meditation'/>
            </a>

            <a href='https://global-warming-ll.netlify.app/' target='_blank' rel="noreferrer">
              <img className={Style.photo} src={Globo} alt='photo-globo'/>
            </a>
          

        </div>

       
        </>
    )
}