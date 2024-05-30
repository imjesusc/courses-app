export interface Thumbnails {
  default: Default
  medium: Default
  high: Default
  standard: Default
  maxres: Default
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
