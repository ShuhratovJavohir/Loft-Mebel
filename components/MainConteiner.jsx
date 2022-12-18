import {Head} from "next/document";
import Header from "./Header";
import Sort from "./sort";
import Footer from "./Footer";


const MainConteiner = ({children, title}) => {
    return(
        <>
            <div className='wrapper'>
                <Header />
                <Sort />
                {children}
                {/*<Footer />*/}
            </div>
        </>
    )
}

export default MainConteiner;