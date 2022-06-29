// NavBar:
// NavBar with Search Bar input

// ___________________________________________________________________

import React, { useRef, useState } from "react";
import Link from "next/link";

import Logo from "../Logo";

import { Flex } from "shared";

import * as S from "./styles.scss";

// ___________________________________________________________________

type HeaderShape = {
  searchBox: boolean;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const NavBar: React.FC<HeaderShape> = ({ handleChange, searchBox }) => {
  return (
    <>
      <S.Header as="header" px={[4, 5]}>
        <S.Logo>
          <Link href="/" aria-label="Back to home">
            <a>
              <Flex className="logo">
                <Logo />
              </Flex>
            </a>
          </Link>
        </S.Logo>
        {searchBox && (
          <S.SearchBar>
            <S.SearchInput
              type="text"
              onChange={handleChange}
              placeholder="Artists, songs or podcasts..."
            />
          </S.SearchBar>
        )}
      </S.Header>
    </>
  );
};

export default NavBar;
