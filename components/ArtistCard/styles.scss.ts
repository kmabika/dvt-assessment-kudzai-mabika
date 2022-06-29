import styled from 'styled-components';
import Link from 'next/link';

export const ArtistCardWrapper = styled.li`
  position: relative;

  margin-top: 103px;
  padding: 11px 14px 0px 16px;
  
  &:hover {
    box-shadow: 0px 100px 105px 0px rgba(168, 172, 176, 0.19);
    transition: 0.3s ease-in-out;
    transform: scale(1.01, 1.01);
  }
`;

export const ArtistLink = styled(Link)`
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
`;

export const ProductThumb = styled.div`
  position: relative;
  height: 338px;
`;