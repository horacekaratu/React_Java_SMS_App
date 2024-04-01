import { styled } from "styled-components";
import { Button } from "../styled/Buttons";
import { CenteredContent } from "../styled/Layout";
import {
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import { Features, GetStartedData, Testimonials } from "../../App";
import {Card, CardContainer,  CardContentWithMargins, CardImage} from "../styled/Card"
import { BlackIcon } from "../styled/Icons";
const Lead=styled.p`
font-size: 1.728rem;
    font-weight: 300;
    line-height: 2rem;
    margin-bottom: 1rem;
`


const WitnessName = styled.p`
  font-weight: bold;
  margin: 8px;
`;
const WitnessTitle = styled.p`
  font-style: italic;
  margin-top: 0px;
`;
const FeatureContainer = styled.ul``;
const Feature = styled.li`
  display: flex;
  gap: calc(var(--base-point) * 2);
  span {
    
    width: 400px;
    min-width: 0;
    /* background-color: red; */
    color:  ${(props) => props.theme.colors.neutrals.black};
    font-weight: bold;
    white-space: nowrap; /* Prevent text from wrapping onto multiple lines */
    &::after {
      content: " : ";
    }
  }
`;



const FeatureText = styled.p`
  /* display: inline; */
  margin: 0;
`;
const Section=styled.div`
margin-bottom: calc(var(--base-point)*4);

`

export const Home = () => {
  const [testimonials, setTestimonials]=useState()
  const [getStarted, setGetStarted]=useState()
  const [features, setFeatures]=useState()
  const memoizedGetStartedData=useMemo(()=>Object.entries(GetStartedData),[])
  const memoizedFeatures=useMemo(()=>Object.entries(Features),[])
  const memoizedTestimonials=useMemo(()=>Object.entries(Testimonials),[])
useEffect(()=>{
  console.log("home reload")
 setGetStarted(memoizedGetStartedData)
 setFeatures(memoizedFeatures)
 setTestimonials(memoizedTestimonials)
},[memoizedFeatures, memoizedGetStartedData,memoizedTestimonials])

  return (
    <>
    <Section>
      <CenteredContent>
        <h1>Online Messages</h1>
        <Lead data-testid="sub-heading">

        Welcome to Online Messages – the platform where communication is effortless and 
        secure. Experience lightning-fast messaging and stay connected with friends,
         family, and colleagues in real-time. With robust security features, you can
          chat with confidence, knowing your privacy is protected. Join Online 
          Messages today and discover a new level of seamless communication.


        </Lead>
      </CenteredContent>
      </Section>
      <Section id="get-started">
        <CenteredContent>
          <h2>Getting Started</h2>
          <h5>Explore the various features in the application</h5>
        </CenteredContent>
        <CardContainer>
      {getStarted?.map((getStartedItem, index)=>{
        return  (
          <Card key={index}>
            <p>{getStartedItem[1].Message}</p>
            <Button>{getStartedItem[1].buttonText}</Button>
          </Card>
        )
      })}
        </CardContainer>
      </Section>
      <Section id="features">
        <h2>Features</h2>
        <h5>key features about our app</h5>
        <FeatureContainer data-testid="feature-container">
         {features?.map((feature,index)=>{
          return(
            <Feature key={index}>
            <BlackIcon icon={faBoltLightning} />
            <span data-testid={`feature-icon-${index}`}>{feature[1].name}</span>
            <FeatureText data-testid="feature-message">
            {feature[1].message}
            </FeatureText>
          </Feature>
          
          )
         })}
        </FeatureContainer>
      </Section>
      <Section data-testid="testimonials" id="testimonials">
        <CenteredContent>
          <h2>Testimonials</h2>
          <h5>What our clients say about us</h5>
        </CenteredContent>
        <CardContainer>
        {testimonials?.map((testimonial,index)=>{
          return(
            <Card key={index} style={{ marginTop: "48px" }}>
           
            <CardImage id="profile-pic">
              <img
                src=""
                alt="client-profile-pic"
              />
            </CardImage>
            <CardContentWithMargins data-testid="client-message">
              <p>
              {testimonial[1].message}
              </p>
            </CardContentWithMargins>

            <WitnessName>{testimonial[1].name}</WitnessName>
            <WitnessTitle>{testimonial[1].position}</WitnessTitle>
          </Card>
          )
        })}
        
         
          
        </CardContainer>
      </Section>
      <Section style={{color:"white"}}  id="about-us">
        <h2  style={{color:"white"}} >About The Product</h2>
        <h5  style={{color:"white"}} >Get to know our product</h5>
      </Section>
    </>
  );
};
