import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: fit-content;
  max-width: 190px;
  min-width: 190px;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 8px;
  background-color: aliceblue;
  color: cadetblue;
  font-weight: bold;
  cursor: pointer;
`;

export const Picture = styled.img`
  height: 142px;
  width: 36px;
  object-fit: cover;
`;
