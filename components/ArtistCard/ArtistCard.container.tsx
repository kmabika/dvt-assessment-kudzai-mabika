import ArtistCard from "./ArtistCard.component";



interface Props {
    artist: ArtistType;
}

const ArtistCardContainer = ({artist}: Props) => {
    return (
        <ArtistCard artist={artist} />
    )
}

export default ArtistCardContainer;