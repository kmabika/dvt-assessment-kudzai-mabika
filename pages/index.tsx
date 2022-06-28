import { useState, useEffect } from "react";
import ArtistList from "components/ArtistList";
import Header from "components/Header/Header";
import PageLayout from "layout/PageLayout";
import { API_URL } from "lib";
import { PageLayoutContainer } from "layout/PageLayout/styles.scss";

interface Props {
  artists: ArtistsType;
}

const Home = ({ artists }: Props) => {
  let [artistsData,setArtistsData] = useState("");
  const {data} = artistsData;
  return (
    <PageLayoutContainer>
      <Header updateArtists={setArtistsData} />
        {data === undefined ? ( <ArtistList artists={artists}/>) : (<h1>loaded</h1>)}
    </PageLayoutContainer>
  );
};

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${API_URL}/chart`);
    const json = await data.json();
    const { artists } = json;
    return {
      props: {
        artists: artists.data,
      },
    };
  } catch (err) {
    return {
      props: {
        artists: [],
      },
    };
  }
};

export default Home;
