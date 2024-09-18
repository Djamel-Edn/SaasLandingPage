"use client"
import React, { useEffect, useRef } from 'react'
import appScreen from '@/assets/images/app-screen.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion"

const AppImage = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', "end 99%"] 
  });

  useEffect(() => {
    scrollYProgress.on('change', (latestValue) => console.log("latestValue", latestValue));
  }, []);

  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        opacity: opacity,
        rotateX: rotateX,
        transformPerspective: "800px",
      }}
    >
      <Image src={appScreen} alt='image screenshot' className='mt-14' ref={appImage} />
    </motion.div>
  );
}

export default AppImage;
