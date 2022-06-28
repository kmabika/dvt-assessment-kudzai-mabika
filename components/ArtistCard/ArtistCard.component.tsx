import * as S from './styled/index';
import Image from 'next/image'
import Link from 'next/link';
interface Props {
    artist: ArtistType
}

const ArtistCard = ({artist}: Props) => {

    return(
        <S.ProductCardWrapper>
            <Link href={`/artist/${artist.id}`}>
            <Image src={artist.picture_big} width={400} height={500} alt={artist.name}/>
            </Link>
            <h1>{artist.name}</h1>
        </S.ProductCardWrapper>
    )
};

export default ArtistCard;