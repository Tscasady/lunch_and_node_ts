import { LearningResource, VideoData, ImageData } from './learning_resources.interface'
import axios from 'axios'


export async function getLearningResources(country: string): Promise<LearningResource> {
  return {
    id: null,
    type: 'learning_resource',
    attributes: {
      country: country,
      video: await getVideo(country), 
      images: await getImages(country)
    }
    }
}

async function getVideo(country: string): Promise<VideoData>{

  const conn = axios.create({
    baseURL: 'https://youtube.googleapis.com',
    params: {
      channelId: 'UCluQ5yInbeAkkeCndNnUhpw',
      key: process.env.GOOGLE_API_KEY,
      type: 'video',
      part: 'snippet'
    },
  })

  const response = await conn.get('/youtube/v3/search', {
    params: {
      q: country,
    },
  })
  let data = response.data.items.shift()
  return {
    title: data.snippet.title,
    youtube_video_id: data.id.videoId
  }
}

async function getImages(country: string): Promise<ImageData[]>{

  const conn = axios.create({
    baseURL: 'https://api.unsplash.com/',
    params: {
      client_id: process.env.UNSPLASH_ACCESS_KEY,
    },
  })

  const response = await conn.get('/search/photos', {
    params: {
      query: country,
    },
  })
  let data = response.data.results
  return data.map(image => ({alt_tag: image.description, url: image.urls.raw }))
}
