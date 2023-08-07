import { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import medal from "../../assets/medal.svg";
import { PageContainer, RankingContainer, Rank, Place, Text } from "./Styles";
import axios from "axios";

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const req = axios.get(`${import.meta.env.VITE_API_URL}/ranking`);

    req.then(res => 
      setRanking(res.data)
    );

    req.catch(res =>
      alert(`Failed to get ranking! ${res.response.data}`)
    );
  }, []);

  return (
    <PageContainer>
      <Logo />
      <RankingContainer>
        {ranking.map((rank, index) => (
            <Rank>
            <img src={medal} />
            <Place>{index}</Place>
            <Text>user: {rank.name}</Text>
            <Text>visits: {rank.visitCount}</Text>
          </Rank>
        ))}
      </RankingContainer>
      <Footer />
    </PageContainer>
  );
}