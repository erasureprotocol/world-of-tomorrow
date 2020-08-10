import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import imageWorld from "./static/world.jpg";
import imageLogo from "./static/logo.png";
import imageNumeraiLogo from "./static/numerai-logo.png";
import imageErasureBayLogo from "./static/erasure-bay-logo.png";
import imageErasureQuantLogo from "./static/erasure-quant-logo.png";
import imageCrowdsourcing from "./static/crowdsourcing.jpg";
import imageXray from "./static/xray.jpg";
import imageXrayCut from "./static/xray_cut.png";
import imageXrayTurned from "./static/xray_turned.png";
import imagePunish from "./static/punish.jpg";
import imageSprout from "./static/sprout.jpg";
import styled, { css } from "styled-components";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { FaGithub, FaMediumM, FaTwitter } from "react-icons/fa";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";

import catalogEn from "./locales/en/messages.js";
import catalogZh from "./locales/zh/messages.js";
import catalogZh_HANT from "./locales/zh_HANT/messages.js";
import catalogRu from "./locales/ru/messages.js";
import catalogEs from "./locales/es/messages.js";
const catalogs = {
  en: catalogEn,
  zh: catalogZh,
  zh_HANT: catalogZh_HANT,
  ru: catalogRu,
  es: catalogEs
};

const zh_HANT_alt = ["zh_HANT", "zh_TW", "zh_HK", "zh-HANT", "zh-TW", "zh-HK"];

function detectLanguage() {
  var language = "en";

  const longLanguage =
    window.navigator.userLanguage || window.navigator.language;
  if (longLanguage && catalogs[longLanguage.slice(0, 2)]) {
    if (longLanguage.slice(0, 2) === "zh") {
      if (zh_HANT_alt.includes(longLanguage)) {
        language = "zh_HANT";
      } else {
        language = "zh";
      }
    } else {
      language = longLanguage.slice(0, 2);
    }
  }

  const pathname = window.location.pathname.toString();
  if (pathname.slice(1, 3) && catalogs[pathname.slice(1, 3)]) {
    if (pathname.slice(1, 3) === "zh") {
      if (zh_HANT_alt.includes(pathname.slice(1))) {
        language = "zh_HANT";
      } else {
        language = "zh";
      }
    } else {
      language = pathname.slice(1, 3);
    }
  }

  return language;
}

function App() {
  const [isMobile, setMobile] = useState(false);

  const resize = () => {
    console.log("Resize!");
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return function cleanup() {
      window.removeEventListener("resize", resize);
    };
  });

  const language = detectLanguage();

  return (
    <I18nProvider language={language} catalogs={catalogs}>
      <div className="App">
        <NavBar mobile={isMobile} />
        <ImagePanel src={imageWorld} mobile={isMobile}>
          {/* <WhiteGradient /> */}
          <ImageTitle mobile={isMobile}>
            <strong>
              <Trans>A new staking protocol</Trans>
            </strong>
            <br />
            <Trans>powered by NMR</Trans>
          </ImageTitle>
        </ImagePanel>
        <Panel>
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <Title mobile={isMobile}>
                  <Trans>
                    A Way To Be <strong>Believed_</strong>
                  </Trans>
                </Title>
                <Copy>
                  <Trans>
                    In the real world, producing anything has a cost. This is
                    not true on the Internet, where contributing information and
                    commentary is completely free. This has been great for
                    bootstrapping and giving billions of people a platform.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    Unfortunately many online services suffer because of this
                    zero barrier to participation; there is no cost to
                    misbehaviour like false information, spam, trolling and bot
                    armies which cost only a click.
                  </Trans>
                </Copy>
                <Copy>
                  <Trans>
                    But what if you were able to attach a small amount of money
                    to your online interactions, and the person you were
                    interacting with was, for a period of time, allowed to
                    destroy your staked money? A stranger might now be more
                    willing to pay attention and trust you, because you have
                    skin in the game.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    Erasure is a live protocol on the Ethereum blockchain that
                    allows this staking mechanism to be adopted across the web.
                    Initially developed to crowdsource intelligence for the
                    Numerai hedge fund, it is now open to be used for any
                    platform.{" "}
                    <strong>
                      Creating instant trust with perfect strangers opens a
                      surprising array of new possibilities…
                    </strong>
                  </Trans>
                </Copy>
              </Col>
            </Row>
          </Container>
        </Panel>
        <ImagePanel src={imageCrowdsourcing}>
          <Slide bottom>
            <ImageTitle mobile={isMobile}>
              <Trans>
                Summon intelligence
                <br />
                <strong>out of thin air_</strong>
              </Trans>
            </ImageTitle>
          </Slide>
        </ImagePanel>
        <Panel>
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <Copy>
                  <Trans>
                    Buying information has traditionally been difficult because
                    you can only judge its quality once you have paid for and
                    received it. This has meant only buying information from
                    trusted sources with a good reputation. This excludes the
                    long tail of people around the world who have valuable
                    insights but no way to be believed.
                  </Trans>
                </Copy>
                <Copy>
                  <Trans>
                    Now imagine if information sources staked their offering: a
                    buyer can then punish the source if they do not like what
                    was delivered. Like this, information can be trusted from
                    the individuals who do not have track records or wish to
                    stay anonymous.{" "}
                    <strong>Erasure is being used for this right now:</strong>
                  </Trans>
                </Copy>
                <Spacer />
                <Copy>
                  <strong>
                    <Link href="https://numer.ai" target="_blank">
                      <strong>Numerai</strong>
                    </Link>
                  </strong>
                  :&nbsp;
                  <Trans>
                    a hedge fund that trades equities based on an aggregation of
                    thousands of predictions made by a global network of
                    competing data scientists. Because each user stakes on their
                    predictions and inaccurate predictions have their stakes
                    destroyed, Numerai can gauge the confidence of the anonymous
                    competitors.
                  </Trans>
                </Copy>
                <Spacer />
                <Copy>
                  <Link href="https://erasurebay.org" target="_blank">
                    <strong>Erasure Bay</strong>
                  </Link>
                  :&nbsp;
                  <Trans>
                    a new marketplace for sourcing any kind of information. Make
                    requests for information like predictions, secrets,
                    whistleblowers, recommendations and require that fulfillers
                    place a stake. Try it today.
                  </Trans>
                </Copy>
                <Spacer />
                <Copy>
                  <Link href="https://signals.numer.ai" target="_blank">
                    <strong>Numerai Signals</strong>
                  </Link>
                  :&nbsp;
                  <Trans>
                    an ongoing tournament to gather Russell 3000 stock
                    predictions, currently in beta. All predictions are staked, and are burned
                    according to accuracy. Rewards paid are proportional to the
                    stake.
                  </Trans>
                </Copy>
              </Col>
            </Row>
          </Container>
        </Panel>
        <Panel bigPadding>
          <Container>
            {/* <HalfImage src={imageXrayCut} /> */}

            <Row>
              <Col md={6}>
                <img src={imageXrayTurned} style={{ width: "100%" }} />
              </Col>
              <Col md={6}>
                <Title mobile={isMobile}>
                  <Trans>
                    Only see <br />
                    what’s <strong>real_</strong>
                  </Trans>
                </Title>
                <Copy>
                  <Trans>
                    Making a Twitter account doesn't cost anything. Nor does
                    making ten thousand. The growing number of bots and trolls
                    online are making important public conversations difficult.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    <Link
                      href="https://github.com/erasureprotocol/erasure-protocol"
                      target="_blank"
                    >
                      Erasure’s protocol
                    </Link>{" "}
                    can be used to create a browser-extension that hides all
                    tweets, Reddit posts and emails that aren’t staked with a
                    nominal amount of currency. Spam and bot armies would
                    suddenly become prohibitively expensive.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    Like x-ray goggles for the Internet, Erasure can cut through
                    the noise by only showing you what people have staked
                    currency on.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    Numerai currently uses staking on Erasure to filter
                    contributing data scientists’ predictions.
                  </Trans>
                </Copy>
              </Col>
            </Row>
          </Container>
        </Panel>
        <ImagePanel src={imagePunish}>
          <Slide bottom>
            <ImageTitle mobile={isMobile} end>
              <Trans>
                <strong>Punish</strong> bad dates_
              </Trans>
            </ImageTitle>
          </Slide>
        </ImagePanel>
        <Panel>
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <Copy>
                  <Trans>
                    What about using stakes to enforce promises? Imagine an app
                    that allows a man to stake on a date. For 24 hours she has
                    the power to indiscriminately slash the money he has put
                    down, so she’s more likely to believe him when he promises
                    to be a gentleman. This app can be made with Erasure.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    The instant trust earned by staking enables transacting with
                    a much broader set of people. More people would accommodate
                    a couch surfer who staked money for the duration of her
                    stay. More people would accept a staked meeting request from
                    a stranger. More people would host events if attendees
                    staked their attendance. More people would pick up cold
                    calls if they were staked.
                  </Trans>
                </Copy>

                <Copy>
                  <Trans>
                    Erasure lets you settle disputes without a middle man. It is
                    handled completely between you and your counterparty.
                  </Trans>
                </Copy>
              </Col>
            </Row>
          </Container>
        </Panel>
        <Panel bigPadding>
          <Container>
            <Row>
              <Col md={6}>
                <ImageInline src={imageSprout} alt="Man sprouting truth" />
              </Col>
              <Col md={6}>
                <Title>
                  <Trans>
                    So much <strong>more_</strong>
                  </Trans>
                </Title>
                <Quote>
                  <Trans>
                    “Erasure solves the problem of bad information online. What
                    would Reddit look like if users had something real to lose
                    for every post, would troll farms be able to manipulate it
                    as easily? What if you could burn a publication’s stake for
                    promoting fake news, or an advertiser for misleading
                    consumers? Can Erasure help manage the threat of deep-fakes?
                    It may be that the only way to distinguish good from bad
                    information online may come down to how much value its
                    creator stakes behind it. That’s the vision of this
                    protocol.”
                  </Trans>
                  <Spacer />
                  <br />—{" "}
                  <Link href="https://www.placeholder.vc/blog/2020/4/9/erasure">
                    Placeholder VC Thesis
                  </Link>
                </Quote>
                <Copy>
                  <Spacer />
                  <Spacer />
                  <Trans>
                    We won’t reach this world of the future alone. Join us in
                    making it.
                  </Trans>
                </Copy>
                <Spacer />
                <Spacer />
                <Copy>
                  <FlexRow>
                    <a
                      href="https://github.com/erasureprotocol/erasure-protocol"
                      target="_blank"
                    >
                      <Button>Github</Button>
                    </a>
                    <Spacer horizontal />
                    <a
                      href="https://medium.com/numerai/the-erasure-protocol-awakens-48a34cc4b5d0"
                      target="_blank"
                    >
                      <Button>Medium</Button>
                    </a>
                    <Spacer horizontal />
                    <a href="https://twitter.com/numerai" target="_blank">
                      <Button>Twitter</Button>
                    </a>
                  </FlexRow>
                </Copy>
              </Col>
            </Row>
          </Container>
        </Panel>
        <Footer>
          <Container>
            <FlexRow spaceBetween>
              <div>ERASURE</div>
              <FlexRow center>
                {/* <NavLink href="#">Contact</NavLink> */}
                <NavLink
                  href="https://github.com/erasureprotocol/erasure-protocol"
                  target="_blank"
                >
                  Github
                </NavLink>
                <NavLink href="https://docs.erasure.world/" target="_blank">
                  Docs
                </NavLink>
              </FlexRow>
            </FlexRow>
          </Container>
        </Footer>
      </div>
    </I18nProvider>
  );
}

const ImageInline = styled.img`
  width: 100%;
  padding: 0.8em 3em;
`;

const ProjectLogo = styled.img`
  height: 3em;
  margin-bottom: 0.8em;
  margin-left: -0.4em;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: var(--button-color);
  color: white;
  font-weight: bold;
  border-radius: 0.2em;
  font-size: 0.8em;
  padding: 0.4em 0.8em;
  transition: all 0.2s;
  text-transform: uppercase;
  // display: flex;
  // align-items: center;
  // text-decoration: none;

  :hover {
    outline: 0;
    background-color: var(--button-hover-color);
    color: white;
  }

  :active:hover {
    background-color: var(--button-active-color);
  }
`;

const NavLink = styled.a`
  margin-right: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--nav-color);

  transition: all 0.2s;

  :hover {
    color: var(--nav-color);
    opacity: 0.7;
    text-decoration: none;
  }

  :active {
    color: var(--nav-color);
    opacity: 0.4;
  }
`;

const Link = styled.a`
  text-decoration: none;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(var(--link-color), var(--link-color));
  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0 95%, 100% 95%, 0 95%;
  font-weight: normal;
  color: #000;

  transition: color 0.2s;

  :hover {
    text-decoration: none;
    color: var(--link-color);
    background: unset;
  }
`;

function ImageTitle(props) {
  const TitleContainer = styled.div`
    padding: 0.4em 0.8em;
    margin-top: 3em;
    color: white;
    font-family: eurostile-extended, sans-serif;
    font-weight: 400;
    width: 100%;
    display: flex;
    font-style: normal;
    text-transform: uppercase;
    font-size: 2.8em;
    color: ${props => props.color};
    ${props => (props.mobile ? "font-size: 1.8em; margin-top: 1em;" : null)}
    ${props =>
      props.end ? "justify-content: flex-end; align-items: flex-end" : null}
  `;

  const TitleWrapper = styled.span`
    background-color: var(--link-color);
  `;

  return (
    <TitleContainer end={props.end} color={props.color} mobile={props.mobile}>
      <div>
        <TitleWrapper>{props.children}</TitleWrapper>
      </div>
    </TitleContainer>
  );
}

// resize = () => {
//   if (window.innerWidth < 600) {
//     this.setState({ isMobile: true })
//   } else {
//     this.setState({ isMobile: false })
//   }
// }

// componentDidMount = async () => {
//   console.log('App mounted')
//   window.addEventListener('resize', this.resize)
//   this.resize()

const NavLogo = styled.img`
  height: 3em;
`;

function NavBar(props) {
  const NavContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2em 2em;
    box-sizing: border-box;
  `;

  const Description = styled.div`
    font-size: 1.2em;
    color: var(--copyColor);
    margin-left: 1em;
    line-height: 1;
    margin-top: 0.1em;
  `;

  return (
    <NavContainer>
      <div>
        <FlexRow>
          <NavLogo src={imageLogo} />
          {/* {!props.mobile && (
            <Description>A new staking protocol powered by NMR </Description>
          )} */}
        </FlexRow>
        {/* {props.mobile && (
          <Description>A new staking protocol powered by NMR </Description>
        )} */}
      </div>

      {!props.mobile && (
        <FlexRow center>
          <NavLink href="https://docs.erasure.world" target="_blank">
            Docs
          </NavLink>
          <NavLink
            href="https://github.com/erasureprotocol/erasure-protocol"
            target="_blank"
          >
            Github
          </NavLink>
        </FlexRow>
      )}
      {props.mobile && (
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="https://docs.erasure.world" target="_blank">
              Docs
            </Dropdown.Item>
            <Dropdown.Item
              href="https://github.com/erasureprotocol/erasure-protocol"
              target="_blank"
            >
              Github
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </NavContainer>
  );
}

const Footer = styled.div`
  width: 100%;
  background-color: var(--dark-panel-color);
  padding: 2em 2em;
`;

export const Spacer = styled.div`
  height: 0px;
  max-height: 0px;
  overflow: hidden;

  ${props =>
    props.horizontal
      ? css`
          margin-right: 1.4em;
          height: 100%;
        `
      : css`
          margin-top: 1.4em;
          width: 100%;
        `};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;

  ${props =>
    props.spaceBetween ? "justify-content: space-between; width: 100%;" : null}

  ${props => (props.center ? "align-items: center;" : null)}
  ${props => (props.flexStart ? "align-items: flex-start;" : null)}
`;

const Panel = styled.div`
  padding: 4em 0;
  text-align: left;
  ${props => (props.dark ? "background-color: var(--dark-panel-color)" : null)}
  ${props => (props.noPadding ? "padding: 0;" : null)}
  ${props => (props.bigPadding ? "padding: 8em 0;" : null)}
`;

const Title = styled.div`
  font-family: eurostile-extended, sans-serif;
  font-size: 2.8em;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 1em;
  // color: white;
  ${props => (props.mobile ? "font-size: 1.8em;" : null)}
`;

const Copy = styled.p`
  color: var(--copyColor);
  font-size: 21px;
  line-height: 1.58;
`;

const Quote = styled(Copy)`
  padding: 2em 2em;
  background-color: var(--dark-panel-color);
`;

const ImagePanel = styled.div`
  width: 100%;
  height: 800px;
  background: url(${props => props.src}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: auto;
  ${props => (props.mobile ? "height: 400px;" : null)}
`;

const HalfImagePanel = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
`;

const HalfImage = styled.img`
  height: 100%;
`;

const WhiteGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 10em;
  width: 100%;
`;

export default App;
