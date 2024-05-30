import { PageInfo, Thumbnails } from './yt-items'

export interface ytPlaylistModel {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: ytPlaylistItemModel[]
}

export interface ytPlaylistItemModel {
  kind: string
  etag: string
  id: string
  snippet: ytPlaylistSnippetModel
}

export interface ytPlaylistSnippetModel {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  localized: ytPlaylistLocalizedMOdel
}

export interface ytPlaylistLocalizedMOdel {
  title: string
  description: string
}

export interface courseInfo extends ytPlaylistItemModel {
  views: number
}
