export interface TopManga {
  mal_id: number;
  rank: number;
  title: string;
  url: string;
  type: string;
  volumes?: number | null;
  start_date: string | null;
  end_date: string | null;
  members: number;
  score: number;
  image_url: string;
}

export interface TopMangaResponse {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  top: TopManga[];
}
