import styled from 'styled-components';
import { media } from './breakpoints';

export default {
  boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.3)'
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px 50px;

  ${media.small`
    max-width: 80%;
    padding: 20px;
  `}

  ${media.medium`
    max-width: 60%;
  `}
`;

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 22px;
  margin: 45px 0;
  text-align: center;

  ${media.small`
    font-size: 32px;
  `}
`;

export const SubTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;

  ${media.small`
    font-size: 26px;
  `}
`;

export const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;

  ${media.small`
    font-size: 20px;
    line-height: 30px;
  `}
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #d33339;
  font-weight: 500;
  cursor: pointer;
`;