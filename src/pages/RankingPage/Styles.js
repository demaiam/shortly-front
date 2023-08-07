import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankingContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export const Rank = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  gap: 20px;
  text-align: center;
`;

export const Place = styled.a`
  color: #000000;
  font-family: 'VT323', monospace;
  font-size: 15px;
  position: absolute;
  top: 30%;
  left: 3%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.a`
  color: #FFFFFF;
  font-family: 'VT323', monospace;
  font-size: 20px;
`;