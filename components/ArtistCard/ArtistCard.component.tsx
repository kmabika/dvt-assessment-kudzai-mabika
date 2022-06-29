// Artist Card Component:

// ___________________________________________________________________
import Image from "next/image";

// Styles + Component
import * as S from "./styles.scss";

// Shared
import { Text, Heading } from "shared";


// Component Props
interface Props {
  artist: ArtistDataType;
}

// ___________________________________________________________________

const ArtistCard = ({ artist }: Props) => {
  return (
    <S.ArtistCardWrapper>
      <div className="image-container">
        <Image
          src={artist.album.cover_big}
          layout="responsive"
          loading="lazy"
          width={417}
          height={417}
          alt={artist.title}
        />
      </div>

      <Heading as="h5" mt={"1rem"}>
        {artist.title}
      </Heading>
      <S.ArtistLink href={`/artist/${artist.artist.id}`}>
          {artist.artist.name}
      </S.ArtistLink>
      <Text as="p">{artist.album.title}</Text>
    </S.ArtistCardWrapper>
  );
};

export default ArtistCard;
