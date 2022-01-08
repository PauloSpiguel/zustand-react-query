import styled from "styled-components";

export const MangaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    width: fit-content;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    border-radius: 2px;
    border: 0;
    cursor: pointer;

    background-color: var(--color-secondary);
    color: var(--color-primary);
    font-weight: 600;
  }
`;

export const MangaContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  img {
    width: 100%;
    height: 28rem;
  }

  > li > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }

  .showOnlyFavorites {
    background-color: var(--color-primary);
  }
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0;

  svg {
    font-size: 1.5rem;
    color: var(--color-text);
  }
`;
