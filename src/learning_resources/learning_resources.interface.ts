export type LearningResource = {
  id: null;
  type: 'learning_resource';
  attributes: {
    country: string;
    video: VideoData
    images: ImageData[];
  }
}

export type VideoData = {
  title: string;
  youtube_video_id: string;
}

export type ImageData = {
  alt_tag: string;
  url: string;
}

