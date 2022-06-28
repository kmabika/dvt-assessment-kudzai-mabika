import styled from "styled-components";

export const ArtistPageLayout = styled.div`
width: 100%;
`;

export const ArtistPage = styled.div`
display: flex;
flex-direction:row;
`;

export const ArtistDetails = styled.div`
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
`;

export const ArtistTitle = styled.div`
    padding: 10rem;
    h2 {
        font-size: 4rem;
    }
`;

export const ArtistTrackList = styled.div`
    display: flex;
    flex-direction: column;
    margin:5rem 0rem 0rem 2rem;
`;

export const ArtistTracks = styled.ul`
 
`

export const ArtistTrack = styled.li`
    margin-top: 1rem;
    font-size: 1.5rem;
    border-bottom: black solid 1px;
    width: 100%;
`

