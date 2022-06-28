import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ArtistPageLayout from "layout/ArtistPageLayout";

interface Props {
  artist: Artist;
  tracklist: TrackList
}

const Arist = ({ artist,tracklist}: Props) => {
  return <ArtistPageLayout artist={artist} tracklist={tracklist}/>;
};

export const getServerSideProps = async (context: any) => {
  try {
    const { slug } = context.params;
    const res = await fetch(`https://api.deezer.com/artist/${slug}`);
    const tracklistReq = await fetch(`https://api.deezer.com/artist/${slug}/top?limit=5`)
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
