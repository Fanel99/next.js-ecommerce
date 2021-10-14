import { css } from '@emotion/react';

const aboutSection = css`
  max-width: 1150px;
  margin: 0 auto 50px;
  padding: 0 15px;
`;

const aboutContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const textContainer = css`
  h2 {
    font-size: 58px;
    margin-bottom: 60px;
    text-align: center;

    span {
      color: #dc3545;
    }
  }

  p {
    font-size: 22px;
  }
`;

const imgWraper = css`
  flex: 1 0 600px;
  @media (max-width: 1024px) {
    flex: 1 0 auto;
  }

  img {
    width: 100%;
    margin-top: 100px;
  }
`;

export default function About() {
  return (
    <section css={aboutSection}>
      <div css={aboutContainer}>
        <div css={imgWraper}>
          <img
            src="https://html.design/demo/fior/images/about-img.png"
            alt="flowers"
          />
        </div>
        <div css={textContainer}>
          <h2>
            About <span>Flowers</span>{' '}
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            adipisci sequi nam? Eum ducimus ex possimus laudantium magni,
            inventore quas, ullam, voluptatibus officia vero pariatur a
            consectetur delectus rem explicabo animi ea! At quis neque
            consectetur fugiat, aliquid odio placeat.
          </p>
        </div>
      </div>
    </section>
  );
}
