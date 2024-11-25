"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TestForm from './activeComp/TestForm';

const HeroSection: React.FC = () => {
  const heroAnimationVariants = {
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    bottom: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
  };

  return (
    <section className="flex mt-[50px] flex-col gap-20">
      <motion.div
        className="flex justify-between max-md:justify-center max-md:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={heroAnimationVariants.left}
      >
        <div className="flex flex-col justify-center gap-5 z-10 max-md:items-center">
          <h2 className="italic text-[75px] font-extrabold max-[1440px]:text-[70px] max-xl:text-[58px] max-lg:text-[40px]">
            БАНК ОТКАЗАЛ? <br />
            МЫ ПОМОЖЕМ ВАМ<br />
            ВЗЯТЬ КРЕДИТ
          </h2>
          <p className="text-[#0000007a] w-[400px] leading-[28px] max-lg:w-[350px] max-lg:leading-[22px] max-xl:w-[400px]">
            Помогаем получить кредит на выгодных условиях, даже если банк отказал. Упростим одобрение и подбор под ваши нужды.
          </p>
          <div className="flex gap-5 max-[380px]:flex-col max-[380px]:gap-2 w-full">
            <TestForm 
              buttonClass='bg-foreground text-white px-[30px] rounded-[16px] p-[15px]'
            />
          </div>
        </div>
        <motion.div
          className="relative -ml-[400px] z-0 max-md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={heroAnimationVariants.right}
        >
          <Image
            src="/img/bg2.svg"
            alt="bg"
            className="image-responsive w-[740px]"
            width={1}
            height={1}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-foreground w-full h-[150px] max-[640px]:h-[320px] rounded-[16px] flex items-center justify-evenly text-white flex-col sm:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={heroAnimationVariants.bottom}
      >
        <div className="text-center mb-4 sm:mb-0">
          <p className="text-4xl font-bold">1000+</p>
          <p className="text-sm">Клиентов с полученным кредитом</p>
        </div>
        {/* Вертикальная линия-разделитель, которая скрывается на маленьких экранах */}
        <div className="w-px h-16 bg-gray-400 hidden sm:block"></div>
        <div className="text-center mb-4 sm:mb-0">
          <p className="text-4xl font-bold">98%</p>
          <p className="text-sm">Шанс в получение кредита</p>
        </div>
        {/* Вертикальная линия-разделитель, которая скрывается на маленьких экранах */}
        <div className="w-px h-16 bg-gray-400 hidden sm:block"></div>
        <div className="text-center">
          <p className="text-4xl font-bold">89%</p>
          <p className="text-sm">Счастливый клиент только в этом году</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
