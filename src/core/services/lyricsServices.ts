import axios from "axios";
import { LyricsModel } from "../model/LyricsModel";

export async function fetchLyrics(
  artist: string,
  song: string
): Promise<LyricsModel> {
  return await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}
