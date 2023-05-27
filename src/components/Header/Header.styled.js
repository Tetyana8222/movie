import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #938721;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HeaderNav = styled.nav`
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: 30px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  color: #000;
  border: solid 3px #864202;
  border-radius: 8px;
  padding: 6px 20px;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
