import { useQuery } from "react-query";
import api from "services/api";

import { TopMangaResponse } from "./types";

const getTopMangas = async () => {
  const { data } = await api.get<TopMangaResponse>("top/manga");

  return data;
};

export default function useFetchTopMangas() {
  return useQuery("topMangas", getTopMangas);
}
