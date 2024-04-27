import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(10px);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>
          &copy; 2024 Abishek Mahenderaraja. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
