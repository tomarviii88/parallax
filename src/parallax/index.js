import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './styles.css';

function App() {
  const scrollRef = useRef();
  const { scrollY } = useViewportScroll();
  console.log(scrollY);
  let y1 = useTransform(scrollY, [0, 471], [0, 471]);
  let y2 = useTransform(scrollY, [0, 182, 1000], [0, -182, 636]);
  let y3 = useTransform(scrollY, [0, 326, 1000], [0, -326, 348]);
  let y4 = useTransform(scrollY, [0, 471, 1000], [0, -471, 57]);
  let y5 = useTransform(scrollY, [0, 300, 1000], [0, 10, 400]);

  // const [isInViewport, setIsInViewport] = useState(false);

  //console.log(window.innerHeight);
  //let coso = useRef(null);

  // useEffect(() => {
  //   console.log(coso.current.offsetTop);
  //   if (
  //     coso.current.offsetTop > scrollY &&
  //     coso.current.offsetTop < window.innerHeight
  //   ) {
  //     setIsInViewport(true);
  //   } else {
  //     setIsInViewport(false);
  //   }
  // }, [coso]);
  // useEffect(() => {
  //   scrollY.onChange(v => console.log(v));
  // }, [scrollY]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      ref={scrollRef}
    >
      <motion.div className='box1' style={{ y: y1 }} />
      <motion.div className='box2' style={{ y: y2 }} />
      <motion.div className='box3' style={{ y: y3 }} />
      <motion.div className='box4' style={{ y: y4 }} />
    </div>
  );
}

export default App;
