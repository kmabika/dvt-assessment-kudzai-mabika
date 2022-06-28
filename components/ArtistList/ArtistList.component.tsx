import { CategoryProductListWrapper } from './styled';
import ArtistCard from 'components/ArtistCard';
interface Props {
  artists: ArtistsType
}

const ArtistList = ({artists}: Props) => {
  return (
    <CategoryProductListWrapper>
     {artists.map((artist: ArtistType) => (
      <ArtistCard key={artist.id} artist={artist} />
     ))}
    </CategoryProductListWrapper>
  )
}

export default ArtistList