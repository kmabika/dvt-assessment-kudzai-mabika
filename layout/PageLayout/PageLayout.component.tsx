// Home Page Layout:

// ___________________________________________________________________

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import ArtistList from "components/ArtistList";
import NavBar from "components/NavBar";
import * as S from "./styles.scss";
import { Heading, Text } from "shared";
import Seo from "components/Seo";

const PageLayout = () => {
  let [artistsData, setArtistsData] = useState<ArtistDataType[]>([]);
  let [searchQuery, setSearchQuery] = useState<string>("");

  const [currentURL, setCurrentURL] = useState('https://kudzaim.codes/');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);

  return (
    <S.Wrapper>
      <Seo
        title={"Kudzai Mabika • DVT Assessment"}
        description={"Kudzai Mabika • DVT Assessment"}
        locale={`${router.locale}`}
        currentUrl={currentURL}
      />
      <NavBar
        searchBox={true}
        updateArtists={setArtistsData}
        updateSearchQuery={setSearchQuery}
      />
      <S.MainContent>

        {searchQuery.length < 1 && artistsData.length < 1 && (
          <Heading as="h2">Search For Artists,Songs,Podcasts</Heading>
        )}

        {searchQuery.length > 0 && (
          <Heading pt={4} as="h5">
            Search Results For: {searchQuery}
          </Heading>
        )}
        {searchQuery.length > 1 && artistsData.length < 1 ? (
          <Heading as="h1">
            No results found for {`"${searchQuery}"`}
            <Text as="p" fontSize={"0.9rem"}>
              Please make sure yout words are typed in correctly
            </Text>
          </Heading>
        ) : (
          <ArtistList artists={artistsData} />
        )}
      </S.MainContent>
    </S.Wrapper>
  );
};

export default PageLayout;
