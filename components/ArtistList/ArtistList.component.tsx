// Artist List:

// ___________________________________________________________________

// Components
import ArtistCard from "components/ArtistCard";

// Styled Components
import * as S from './styles.scss';

interface Props {
  artists: ArtistDataType[];
}

const ArtistList = ({ artists }: Props) => {

  return (
    <S.ArtistListWrapper>
      {artists.map((artist: ArtistDataType) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </S.ArtistListWrapper>
  );
};

export default ArtistList;
