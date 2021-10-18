import { css } from '@emotion/react';

const whyContainer = css`
  background-image: url('https://html.design/demo/fior/images/why-bg.jpg');
  background-size: cover;

  text-align: center;
  color: #fff;
`;

const textWraper = css`
  max-width: 1150px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 15px;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    margin: 60px 0;
    line-height: 1.5;
  }

  button {
    padding: 10px 55px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    color: #e1603a;
    border-radius: 30px;
    font-size: 22px;

    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }
`;

export default function Whyus() {
  return (
    <section css={whyContainer}>
      <div css={textWraper}>
        <div>
          <h2>Why Choose US</h2>
          <p>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quos
            sunt quibusdam doloribus, impedit quisquam hic odio ut consequatur,
            porro provident voluptatibus reprehenderit, voluptate ipsum
            recusandae asperiores dignissimos accusantium eius ducimus et
            libero. Totam aut praesentium facilis, iusto repellat omnis
            reprehenderit vero nihil eius officiis dolore deserunt vel
            consequuntur iste veritatis nulla voluptates accusantium minus at ea
            debitis alias cupiditate cumque expedita? Enim voluptas atque
            excepturi harum commodi ea adipisci.{' '}
          </p>
        </div>
        <button>Read More</button>
      </div>
    </section>
  );
}
