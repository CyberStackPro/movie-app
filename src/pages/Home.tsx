import React from "react";
import styles from "../style";
import { leafeImage } from "../assets";
import Button from "../components/Button";

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1  font-bold ss:text-[2px] md:text-[50px] text-[52px] text-[#152E38]  ss:leading-[100.8px] leading-[70px]">
            Plants make a <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Positive impact on</span> your
            environment.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. annual fees.
        </p>

        <Button className="text-white px-5 p-2 mt-4 rounded-full">
          Shop Now
        </Button>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={leafeImage}
          alt="billing"
          className="md:max-w-xl max-w-sm   relative z-[5]"
        />
        <div className="absolute -z-[1] right- w-[70%] h-[35%] bg-gradient-to-t bg-green-800   blur-3xl" />
        <div className="absolute -left-[25rem] -z-[1] right- w-[100%] h-[100%]  bg-gradient-to-tl from-orange-500 opacity-40   blur-3xl" />
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Home;
