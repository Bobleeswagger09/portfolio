"use client"

import React from 'react';
import { useSpring, animated, SpringConfig } from '@react-spring/web';

interface NumberProps {
  n: number;
}

const Number: React.FC<NumberProps> = ({ n }: NumberProps) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 } as SpringConfig, // Specify type for config
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Number;
