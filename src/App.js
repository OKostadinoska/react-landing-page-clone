/** @jsxImportSource @emotion/react  */
import './App.css';
import { css } from '@emotion/react';
import arrow from './arrow-down.svg';
import image1 from './image1.jpeg';
import image from './logo192.png';

const landingPageBackground = css`
  background-color: #fdf8f5;
  object-fit: cover;
`;

const navbar = css`
  position: relative;
  z-index: 101;
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  width: 100%;
  height: 50px;
  /* margin-top: 32px; */
  margin-right: auto;
  margin-left: auto;
  padding-right: 2em;
  padding-left: 2em;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const navLogo = css`
  margin-left: 2rem;
  font-size: 28px;
  line-height: 19px;
  letter-spacing: 3px;
  text-decoration: none;
  font-weight: 700;
  color: #304345;
  font-family: 'Amatic SC', cursive;
`;

const navigationMenuButton = css`
  position: fixed;
  right: 2em;
  overflow: hidden;
  height: 25px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  color: #304345;
`;

const openWrap = css`
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  height: 25px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;

const navigationText = css`
  font-family: 'Indie Flower', cursive;
  color: #304345;
  font-size: 16px;
  line-height: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
`;

const hamburger = css`
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  width: 25px;
  height: 10px;
  margin-left: 12.5px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
`;

const hamburgerLine = css`
  width: 25px;
  height: 2.22px;
  background-color: #304345;
`;

const hamburgerLine2 = css`
  width: 15px;
  height: 2.22px;
  background-color: #304345;
`;

const closeWrap = css`
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  height: 25px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const closeButton = css`
  width: 18px;
  height: 18px;
  margin-left: 12.5px;
  background-image: url(https://assets.website-files.com/5e6b08d…/5e82d06…_close_btn.svg);
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const mainHeroSection = css`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  min-height: 90vh;
  padding: 6.5em 2em 3.5em;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: #fdf8f5;
`;

const mainHeroImage = css`
  position: absolute;
  left: auto;
  top: auto;
  right: 0;
  bottom: 5%;
  width: auto;
  margin-top: -64px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  text-align: right;
`;

const mainHeroContent = css`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  max-width: 85%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const heading = css`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Indie Flower', cursive;
  font-size: 5em;
  line-height: 1.1;
  font-weight: 400;
  color: #304345;
`;

const section = css`
  position: relative;
  padding-top: 9.5em;
  padding-bottom: 9.5em;
`;
const container = css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2em;
  padding-left: 2em;
`;
const headingWrapper = css`
  padding-bottom: 3.5em;
`;
const innerSpacing = css`
  padding-right: 5em;
  padding-left: 5em;
`;
const paddingLeft = css`
  padding-left: 5em;
`;

const textCentered = css`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  font-family: 'Indie Flower', cursive;
  font-size: 2.5em;
  line-height: 1.4;
  font-weight: 400;
`;

const buttonWrapper = css`
  padding-top: 3em;
`;

const allCaps = css`
  text-align: center;
  margin-bottom: 8px;
  font-size: 1.125em;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const allCaps1 = css`
  margin-bottom: 8px;
  font-size: 1.125em;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const arrowDown = css`
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  width: 64px;
  height: 64px;
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #304345;
  border-radius: 100%;
`;

const featureProjectWrapper = css`
  margin-bottom: 6.5em;
`;
const featureProjectImageWrapper = css`
  overflow: hidden;
`;

const cardContentWrapper = css`
  padding-top: 1.5em;
`;

const cardImageWrapper = css`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  overflow: hidden;
  width: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #304345;
`;

const imageAbout = css`
  margin-top: 0;
  margin-bottom: 8px;
  font-family: 'Indie Flower', cursive;
  font-size: 2.5em;
  line-height: 1.4;
  font-weight: 400;
`;

const footer = css`
  padding-top: 3.5em;
  border-top: 1px solid #304345;
`;

const footerContainer = css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2em;
  padding-left: 2em;
`;

const footerContentWrapper = css`
  display: -webkit-box;
  display: -webkit-flex;
  /* display: -ms-flexbox; */
  display: flex;
  padding-bottom: 32px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

const footerLogo = css`
  width: 25%;
`;
const footerClaim = css`
  width: 35%;
  padding-right: 3%;
  font-family: 'Indie Flower', cursive;
`;
const footerMenu = css`
  width: 20%;
  padding-left: 5%;
  font-family: 'Indie Flower', cursive;
`;

const footerSecondary = css`
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
`;

const footerLink = css`
  display: block;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  font-size: 1.25em;
  line-height: 1.6;
  text-decoration: none;
`;

const h4 = css`
  margin-top: 0;
  margin-bottom: 8px;
  font-family: Recoleta, sans-serif;
  font-size: 2.25em;
  line-height: 1.4;
  font-weight: 400;
  font-family: 'Indie Flower', cursive;
`;

// const grainEffect = css`
//   position: fixed;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   display: block;
// `;

function App() {
  return (
    <div css={landingPageBackground}>
      {/* <div css={grainEffect}></div> */}
      <div css={navbar}>
        <div css={navLogo}>The.Papestielliz</div>
        <div css={navigationMenuButton}>
          <div css={openWrap}>
            <div css={navigationText}>Menu</div>
            <div css={hamburger}>
              <div css={hamburgerLine} />
              <div css={hamburgerLine2} />
            </div>
          </div>
          <div css={closeWrap}>
            <div css={navigationText}>Close</div>
            <div css={closeButton} />
          </div>
        </div>
      </div>
      <section css={mainHeroSection}>
        <div css={mainHeroImage}>
          <img src={image} alt="img" />
        </div>
        <div css={mainHeroContent}>
          <h1 css={heading}>
            A collaborative design duo helping you visualize, craft and automate
            your sustainable brand.
          </h1>
        </div>
      </section>
      <section css={section}>
        <div css={container}>
          <div css={headingWrapper}>
            <h3 css={textCentered}>
              Our mission is to help eco-friendly and sustainable small
              businesses transform problems into successful projects through a
              responsible design process.
            </h3>
            <div css={buttonWrapper}>
              <div css={allCaps}>here some example</div>
            </div>
            <div css={arrowDown}>
              <img src={arrow} alt="arrowDown" width={10} />
            </div>
          </div>
          <div css={innerSpacing}>
            <div css={featureProjectWrapper}>
              <div css={featureProjectImageWrapper}>
                <div css={cardImageWrapper}>
                  <img src={image1} alt="img1" />
                </div>
              </div>
              <div css={cardContentWrapper}>
                <div css={allCaps1}>E-commerce Web Design & development</div>
                <h4 css={imageAbout}>
                  For the eco-conscious shopper looking for an artistic,
                  eco-friendly and heartwarming greeting cards.
                </h4>
              </div>
            </div>
          </div>
          <div css={paddingLeft} />
        </div>
      </section>
      <div css={footer}>
        <div css={footerContainer}>
          <div css={footerContentWrapper}>
            <div css={footerLogo}>
              <div css={navLogo}>The.Papestielliz</div>
            </div>
            <div css={footerClaim}>
              <h4 css={h4}>About</h4>
              <p>
                A collaborative branding and design studio, partnering with
                companies doing great things.
              </p>
            </div>
            <div css={footerMenu}>
              <h4 css={h4}>Find</h4>
              <a css={footerLink}>The Studio</a>
              <a css={footerLink}>Work</a>
              <a css={footerLink}>Contract</a>
              <a css={footerLink}>Freebies</a>
            </div>
            <div css={footerMenu}>
              <h4 css={h4}>Social</h4>
              <a css={footerLink}>Instagram</a>
              <a css={footerLink}>Dribble</a>
            </div>
          </div>
          <div css={footerSecondary}>
            <p>© 2021 The Papestielliz Studio. P.IVA 09445951214</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
