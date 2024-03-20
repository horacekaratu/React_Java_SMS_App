import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  BrandImage,
  CopyWrite,
  FooterBrand,
  FooterContactItem,
  FooterContacts,
  FooterSection,
  FooterSubSection,
  Slogan,
  SocialMeadiaContainer,
  SocialMeadiaHandle,
} from "./FooterStyles";
import { CustomIcon } from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterSection
      data-testid="footer-section"
    >
      <FooterSubSection>
      
        <FooterBrand>
          <BrandImage src="logo.svg" alt="brand-image" />
          <Slogan>Simple solutions for simpler life</Slogan>
        </FooterBrand>

        <FooterContacts>
          <FooterContactItem>NY City</FooterContactItem>
          <FooterContactItem>Kaukaza Street</FooterContactItem>
          <FooterContactItem>Miar Building, 18th Floor</FooterContactItem>
          <FooterContactItem>onlinemessages@faInfo.com</FooterContactItem>
        </FooterContacts>
      </FooterSubSection>

      <SocialMeadiaContainer>
        <SocialMeadiaHandle>
          <span>
            <CustomIcon icon={faFacebook} data-testid="facebookicon" />{" "}
            facebook.com
          </span>
        </SocialMeadiaHandle>
        <SocialMeadiaHandle>
          <span>
            <CustomIcon icon={faInstagram} data-testid="instagramicon" />{" "}
            instagram.com
          </span>
        </SocialMeadiaHandle>
        <SocialMeadiaHandle>
          <span>
            <CustomIcon icon={faTwitter} data-testid="twittericon" />{" "}
            twitter.com
          </span>
        </SocialMeadiaHandle>
      </SocialMeadiaContainer>

      <CopyWrite>©Copyright 2024. All Rights Reserved.</CopyWrite>
    </FooterSection>
  );
};
