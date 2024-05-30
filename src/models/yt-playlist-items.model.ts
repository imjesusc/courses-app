import { PageInfo, Thumbnails } from './yt-items'

export interface ytPlaylistItemsModel {
  kind: string
  etag: string
  nextPageToken: string
  items: ytPlaylistItemsItemModel[]
  pageInfo: PageInfo
}

export interface ytPlaylistItemsItemModel {
  kind: string
  etag: string
  id: string
  snippet: ytPlaylistItemSnippetModel
  contentDetails: ytPlaylistItemDetailsModel
}

export interface ytPlaylistItemDetailsModel {
  videoId: string
  videoPublishedAt: Date
}

export interface ytPlaylistItemSnippetModel {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  playlistId: string
  position: number
  resourceId: ytPlaylistItemResourceID
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
}

export interface ytPlaylistItemResourceID {
  kind: string
  videoId: string
}
