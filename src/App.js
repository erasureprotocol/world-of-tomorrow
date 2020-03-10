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
import { Row, Col, Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";

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
  return (
    <div className="App">
      <NavBar mobile={isMobile} />
      <ImagePanel src={imageWorld} mobile={isMobile}>
        {/* <WhiteGradient /> */}
        <ImageTitle mobile={isMobile}>
          <strong>A new staking protocol</strong>
          <br />
          powered by NMR
        </ImageTitle>
      </ImagePanel>
      <Panel>
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Title mobile={isMobile}>
                A Way To Be <strong>Believed_</strong>
              </Title>
              <Copy>
                In the real world, producing anything has a cost. This is not
                true on the Internet, where contributing information and
                commentary is completely free. This has been great for
                bootstrapping and giving billions of people a platform.
              </Copy>

              <Copy>
                Unfortunately many online services suffer because of this zero
                barrier to participation; there is no cost to misbehaviour like
                false information, spam, trolling and bot armies which cost only
                a click.
              </Copy>
              <Copy>
                But what if you were able to attach a small amount of money to
                your online interactions, and the person you were interacting
                with was, for a period of time, allowed to destroy your staked
                money? A stranger might now be more willing to pay attention and
                trust you, because you have skin in the game.
              </Copy>

              <Copy>
                Erasure is a live protocol on the Ethereum blockchain that
                allows this staking mechanism to be adopted across the web.
                Initially developed to crowdsource intelligence for the Numerai
                hedge fund, it is now open to be used for any platform.{" "}
                <strong>
                  Creating instant trust with perfect strangers opens a
                  surprising array of new possibilities…
                </strong>
              </Copy>
            </Col>
          </Row>
        </Container>
      </Panel>
      <ImagePanel src={imageCrowdsourcing}>
        <Slide bottom>
          <ImageTitle mobile={isMobile}>
            Summon intelligence
            <br />
            <strong>out of thin air_</strong>
          </ImageTitle>
        </Slide>
      </ImagePanel>
      <Panel>
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Copy>
                Buying information has traditionally been difficult because you
                can only judge its quality once you have paid for and received
                it. This has meant only buying information from trusted sources
                with a good reputation. This excludes the long tail of people
                around the world who have valuable insights but no way to be
                believed.
              </Copy>
              <Copy>
                Now imagine if information sources staked their offering: a
                buyer can then punish the source if they do not like what was
                delivered. Like this, information can be trusted from the
                individuals who do not have track records or wish to stay
                anonymous.{" "}
                <strong>Erasure is being used for this right now:</strong>
              </Copy>
              <Spacer />
              {/* <ProjectLogo src={imageNumeraiLogo} /> */}
              <Copy>
                <strong>
                  <Link href="#">
                    <strong>Numerai</strong>
                  </Link>
                </strong>
                : a hedge fund that trades equities based on an aggregation of
                thousands of predictions made by a global network of competing
                data scientists. Because each user stakes on their predictions
                and inaccurate predictions have their stakes destroyed, Numerai
                can gauge the confidence of the anonymous competitors.
              </Copy>
              <Spacer />
              {/* <ProjectLogo src={imageErasureBayLogo} /> */}
              <Copy>
                <Link href="#">
                  <strong>Erasure Bay</strong>
                </Link>
                : a new marketplace for sourcing any kind of information. Make
                requests for information like predictions, secrets,
                whistleblowers, recommendations and require that fulfillers
                place a stake. Try it today.
              </Copy>
              <Spacer />
              {/* <ProjectLogo src={imageErasureQuantLogo} /> */}
              <Copy>
                <Link href="#">
                  <strong>Erasure Quant</strong>
                </Link>
                : an ongoing tournament to gather Russel 3000 stock predictions.
                All predictions are staked, and are burned according to
                accuracy. Rewards paid are proportional to the stake.
              </Copy>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Panel dark>
        <Container>
          {/* <HalfImage src={imageXrayCut} /> */}

          <Row>
            <Col md={6}>
              <img src={imageXrayTurned} style={{ width: "100%" }} />
            </Col>
            <Col md={6}>
              <Title mobile={isMobile}>
                Only see what’s <strong>real_</strong>
              </Title>
              <Copy>
                Making a Twitter account doesn't cost anything. Nor does making
                ten thousand. The growing number of bots and trolls online are
                making important public conversations difficult.
              </Copy>

              <Copy>
                <Link href="#">Erasure’s SDK</Link> can be used to create a
                browser-extension that hides all tweets, Reddit posts and emails
                that aren’t staked with a nominal amount of currency. Spam and
                bot armies would suddenly become prohibitively expensive.
              </Copy>

              <Copy>
                Like x-ray goggles for the Internet, Erasure can cut through the
                noise by only showing you what people have staked currency on.
              </Copy>

              <Copy>
                Numerai currently uses staking on Erasure to filter contributing
                data scientists’ predictions.
              </Copy>
            </Col>
          </Row>
        </Container>
      </Panel>
      <ImagePanel src={imagePunish}>
        <Slide bottom>
          <ImageTitle mobile={isMobile} end>
            <strong>Punish</strong> bad dates_
          </ImageTitle>
        </Slide>
      </ImagePanel>
      <Panel dark>
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Copy>
                What about using stakes to enforce promises? Imagine an app that
                allows a man to stake on a date. For 24 hours she has the power
                to indiscriminately slash the money he has put down, so she’s
                more likely to believe him when he promises to be a gentleman.
                This app can be made with Erasure.
              </Copy>

              <Copy>
                The instant trust earned by staking enables transacting with a
                much broader set of people. More people would accommodate a
                couch surfer who staked money for the duration of her stay. More
                people would accept a staked meeting request from a stranger.
                More people would host events if attendees staked their
                attendance. More people would pick up cold calls if they were
                staked.
              </Copy>

              <Copy>
                Erasure lets you settle disputes without a middle man. It is
                handled completely between you and your counterparty.
              </Copy>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Panel>
        <Container>
          <Row>
            <Col md={6}>
              <ImageInline src={imageSprout} alt="Man sprouting truth" />
            </Col>
            <Col md={6}>
              <Title>
                So much <strong>more_</strong>
              </Title>
              <Quote>
                “Erasure solves the problem of bad information online. What
                would Reddit look like if users had something real to lose for
                every post, would troll farms be able to manipulate it as
                easily? What if you could burn a publication’s stake for
                promoting fake news, or an advertiser for misleading consumers?
                Can Erasure help manage the threat of deep-fakes? It may be that
                the only way to distinguish good from bad information online may
                come down to how much value its creator stakes behind it. That’s
                the vision of this protocol.”
                <br />—{" "}
                <Link href="https://www.placeholder.vc/">Placeholder VC</Link>
              </Quote>

              <Copy>
                We won’t reach this world of the future alone. Join us in making
                it. Erasure will be useful in many more ways that we haven’t
                thought of, so we’ve packaged it into an SDK that anyone can use
                to develop apps that implement the protocol.
              </Copy>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Footer>
        <Container>
          <FlexRow spaceBetween>
            <div>Erasure</div>
            <div>
              <NavLink href="#">Contact</NavLink>
              <NavLink href="#">Github</NavLink>
              <NavLink href="#">Docs</NavLink>
            </div>
          </FlexRow>
        </Container>
      </Footer>
    </div>
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

function NavBar(props) {
  const NavContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2em 2em;
    box-sizing: border-box;
  `;

  const Logo = styled.img`
    height: 3em;
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
          <Logo src={imageLogo} />
          {/* {!props.mobile && (
            <Description>A new staking protocol powered by NMR </Description>
          )} */}
        </FlexRow>
        {/* {props.mobile && (
          <Description>A new staking protocol powered by NMR </Description>
        )} */}
      </div>

      <div>
        <NavLink href="#">Docs</NavLink>
        <NavLink href="#">Github</NavLink>
      </div>
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
`;

const Title = styled.div`
  font-family: eurostile-extended, sans-serif;
  font-size: 2.8em;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 1em;
  // color: white;
  // background-color: var(--link-color);
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
