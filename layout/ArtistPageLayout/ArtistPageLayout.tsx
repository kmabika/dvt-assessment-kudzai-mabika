import Header from "components/Header/Header";
import Image from "next/image";
import React from "react";
import * as S from "./styles.scss";
interface Props {
  artist: Artist;
  tracklist: TrackList;
}

const ArtistPageLayout = ({ artist, tracklist }: Props) => {
  return (
    <S.ArtistPageLayout>
      <Header />
      <S.ArtistPage>
        <S.ArtistDetails>
          <S.ArtistTitle>
            <h2>{artist.name}</h2>
            <h2>{artist.nb_fan}</h2>
          </S.ArtistTitle>
          <Image
            src={artist.picture_xl}
            alt={artist.name}
            width={317}
            height={317}
          />
        </S.ArtistDetails>
        <S.ArtistTrackList>
          <S.ArtistTracks>
            {tracklist.map((tracklist) => (
              <S.ArtistTrack>{tracklist.title} {tracklist.duration}</S.ArtistTrack>
            ))}
          </S.ArtistTracks>
        </S.ArtistTrackList>
      </S.ArtistPage>
    </S.ArtistPageLayout>
  );
};

export default ArtistPageLayout;
