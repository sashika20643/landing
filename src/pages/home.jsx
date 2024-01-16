
import Header from "../components/header";

import image from "../assets/image.svg";
import Pricecard from "../components/Pricecard";
import TextButton from "../components/TextButton";
import ImgSvg from "../components/ImgSvg";
import {motion} from 'framer-motion'

 
const Home = () => {
    const carddata=[
        {
            name:"Lite",
            price:"19",
            theme:"light",
            bullets:["20 users","200 transactions","100MB storage","API access","Email support"]
        },
        {
            name:"Premium",
            price:"199",
            theme:"dark",
            bullets:["100 users","1000 transactions","500MB storage","API access","Email support"]
        }
    ]
    return (
        <div className="font-roboto">
            
            <Header />
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:1,}} className="my-20 w-full px-40 flex flex-col justify-center items-center space-y-3 max-sm:px-3 max-lg:px-20">
                <div className="text-5xl font-bold max-sm:text-4xl">Save 50% for 12 months</div>
                <div className="text-4xl max-sm:text-3xl">Simple, transparent pricing</div>
                <div className="text-xl">No hidden or surprise fees</div>
            </motion.div>

            <div className="mt-20 w-full px-30 flex gap-10 justify-center items-center max-xl:px-0 max-xl:flex-col max-xl:relative pb-10">
                <div className="max-xl:flex max-xl:gap-10 flex gap-10 max-sm:flex-col ">
                    {carddata.map(
(card,index)=>(
    <Pricecard card={card} key={index}/>
)

                    )}
                
                </div>

                <div className="px-12 w-[30em] space-y-8 text-white max-xl:mb-10 max-xl:flex-col max-xl:text-center">
                   <ImgSvg/>
                    <div >
                        <div>Need a custom pricing package,</div>
                        <div> unique for your business?</div>
                    </div>
                 <TextButton >Contact Sales</TextButton>
                </div>
                <div className="flex-grow w-full -z-10 h-[37%] bg-indigo-500 overflow-hidden fixed bottom-0"></div>

            </div>
        </div>
    );
}

export default Home;