import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 30px;
  padding-left: 30px;
`;
export const Img = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  display: block;
  margin-right: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
`;
export const Score = styled.p`
  color: darkgrey;
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const AddInfo = styled.div`
  margin-top: 22px;
`;

export const CartNav = styled.nav`
  display: flex;
`;
export const StyledNavLink = styled(NavLink)`
  margin-right: 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  font-size: 16px;
  width: 90px;
  padding-top: 6px;
  padding-bottom: 6px;
  /* padding: 6px 18px; */
  border: solid 2px #864202;
  background-color: #938721;
  border-radius: 8px;
`;
