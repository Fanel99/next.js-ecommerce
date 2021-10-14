import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const heroStyle = css`
  background-image: url('/pictures/hero.png');
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin-bottom: 50px;
`;

const heroContainer = css`
  max-width: 1150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  padding: 90px 15px 0;

  h2 {
    font-size: 56px;
    @media (max-width: 768px) {
      font-size: 30px;
      text-align: center;
      width: 100%;
    }
  }

  h1 {
    font-size: 90px;
    color: #dc3545;
    @media (max-width: 768px) {
      font-size: 50px;
      text-align: center;
      width: 100%;
      margin-bottom: 50px;
    }
  }

  p {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  button {
    font-size: 26px;
    padding: 8px 85px;
    border-radius: 25px;
    background-color: #0d0806;
    border: 1px solid #0d0806;
    color: #fff;
    margin: 35px 0;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: #0d0806;
    }
    @media (max-width: 768px) {
      margin: 0 auto;
      margin-top: 30px;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const line1 = 'Welcome to';
const line2 = 'Flowers shop';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section css={heroStyle}>
      <div css={heroContainer}>
        <motion.h1 variants={sentence} initial="hidden" animate="visible">
          {line1.split('').map((char, index) => {
            return (
              <motion.span key={char + ' ' + index.i} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split('').map((char, index) => {
            return (
              <motion.span key={char + ' ' + index.i} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          asperiores. <br /> Ipsam asperiores saepe nam sint quibusdam et alias
          quidem <br /> voluptatum esse est neque dolorum, autem repellendus.
        </p>

        <button> Buy Now</button>
      </div>
    </section>
  );
}
