import { css } from '@emotion/react';
import Image from 'next/image';
import picture1 from '../public/pictures/g-1.jpeg';
import picture2 from '../public/pictures/g-2.jpeg';
import picture3 from '../public/pictures/g-3.jpeg';
import picture4 from '../public/pictures/g-4.jpeg';
import picture8 from '../public/pictures/g-7.jpeg';
import picture9 from '../public/pictures/Sun-Flower.webp';

const galeryGrid = css`
  padding: 75px 0;
  background-color: #fafafa;

  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 100px;

    span {
      color: #dc3545;
    }
  }
`;
const gridWeaper = css`
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  padding: 0 15px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-gap: 30px;
  }

  img:hover {
    transform: scale(1.3);
  }
`;
export default function Galery() {
  return (
    <div css={galeryGrid}>
      <h2>
        Our <span>Gallery</span>
      </h2>
      <div css={gridWeaper}>
        <Image
          src={picture1}
          width="260"
          height="230"
          alt="Picture of flower"
        />
        <Image
          src={picture2}
          width="260"
          height="230"
          alt="Picture of flower"
        />
        <Image
          src={picture3}
          width="260"
          height="230"
          alt="Picture of flower"
        />
        <Image
          src={picture4}
          width="260"
          height="230"
          alt="Picture of flower"
        />
        <Image
          src={picture9}
          width="260"
          height="230"
          alt="Picture of flower"
        />
        <Image
          src={picture8}
          width="260"
          height="230"
          alt="Picture of flower"
        />
      </div>
    </div>
  );
}
