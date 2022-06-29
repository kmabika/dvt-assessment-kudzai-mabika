// ArtistPage Layout:

// ___________________________________________________________________

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as S from "./styles.scss";
import NavBar from "components/NavBar";

import ArtistTracksBox from "shared/ArtistTracksBox";

import { Box, Heading } from "shared";
import Billboard from "components/Billboard";
import Seo from "components/Seo";

interface Props {
  artist: ArtistDetailType;
  tracklist: TrackListType[];
}

const ArtistPageLayout = ({ artist, tracklist }: Props) => {
  const [currentURL, setCurrentURL] = useState<string>(
    "https://kudzaim.codes/"
  );
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);

  return (
    <>
      <NavBar searchBox={false} />
      <Seo
        title={`${artist.name} • Kudzai Mabika • DVT Assessment`}
        description={`${artist.name} • Kudzai Mabika DVT • Assessment`}
        locale={`${router.locale}`}
        currentUrl={currentURL}
      />
      <S.ArtistPage>
        <Box width={[1, 13 / 20]}>
          <Billboard artist={artist} />
        </Box>
        <Box width={[1, 7 / 20]}>
          <div className="image-container">
            <Image
              src={artist.picture_xl}
              priority
              alt={artist.name}
              width={640}
              height={640}
            />
          </div>
          <Box pt={8} pl={2} pb={8} id="what">
            <Heading as="h2" fontSize={3} mb={6}>
              Top Tracks
            </Heading>
            {tracklist.length > 0 && (
              <ArtistTracksBox>
                {tracklist.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ArtistTracksBox>
            )}
          </Box>
        </Box>
      </S.ArtistPage>
    </>
  );
};

export default ArtistPageLayout;
