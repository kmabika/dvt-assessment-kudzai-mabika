import ArtistPageLayout from "layout/ArtistPageLayout";
import {API_URL} from 'lib';

interface Props {
  artist: ArtistDetailType;
  tracklist: TrackListType[]
}

const Arist = ({ artist,tracklist}: Props) => {
  return <ArtistPageLayout artist={artist} tracklist={tracklist}/>;
};

export const getServerSideProps = async (context: any) => {
  try {
    const { slug } = context.params;
    const res = await fetch(`${API_URL}/artist/${slug}`);
    const tracklistReq = await fetch(`${API_URL}/artist/${slug}/top?limit=10`)
    const json = await res.json();
    const tracklist  = await tracklistReq.json();
    return { props: { 
      artist: json,
      tracklist: tracklist.data,
      redirect: false } 
    };
  } catch (err) {
    return { props: { artist: {}, redirect: true } };
  }
};

export default Arist;
