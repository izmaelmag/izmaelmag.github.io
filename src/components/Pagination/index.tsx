import React from 'react';
import styled from 'styled-components';

type PaginationItem = {
  link?: string;
  text?: string;
  onClick: (e: React.SyntheticEvent) => void;
};

interface PaginationI {
  items: PaginationItem[];
  activeIndex?: number;
  showSingle?: boolean
}

const Pagination = ({ items = [], activeIndex, showSingle = true }: PaginationI) => {

  if (!showSingle && items.length === 1) return null

  return(
    <Pagination$>
      {items.map((item, i) => (
        <Button$ disabled={activeIndex === i} onClick={item.onClick}>
          {item.text || i + 1}
        </Button$>
      ))}
    </Pagination$>
  )
}

export default Pagination;

const Pagination$ = styled.nav`
  display: flex;
  align-items: center;
`;

const Button$ = styled.button`
  border: none;
  background: #333;
  height: 32px;
  line-height: 32px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0 16px;
  z-index: 10;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background: #000;
  }

  &:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-right: 1px solid #333;
  }

  &:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-right: none;
  }

  &:disabled,
  &:disabled:hover {
    cursor: default;
    background: #999;
    color: #000 !important;
  }
`;
