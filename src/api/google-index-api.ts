import axios from "axios";
import {EntitiesType} from "../state/app-reducer";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY

const instance = axios.create({
  headers: {
    'x-rapidapi-host': 'seo-api.p.rapidapi.com',
    // @ts-ignore
    'x-rapidapi-key': API_KEY
  }
});

export const searchAPI = {
  async getRequest(links: EntitiesType) {
    return links.map(link => instance.get(`${`https://seo-api.p.rapidapi.com/v1/search/q=site:`}${link}`))
      .map(res => res)}
}
