import { ytPlaylistModel } from '@/models'

export const mockYTPlaylist: ytPlaylistModel = {
  kind: 'youtube#playlistListResponse',
  etag: 'hGCMO0bTT8zc9eE_Sxj_ht8_4gw',
  pageInfo: {
    totalResults: 2,
    resultsPerPage: 9
  },
  items: [
    {
      kind: 'youtube#playlist',
      etag: 'lJICrxVcYm_7rGBAb4xu8wX9bAo',
      id: 'PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29',
      snippet: {
        publishedAt: '2023-04-12T13:51:54Z',
        channelId: 'UC3aj05GEEyzdOqYM5FLSFeg',
        title: '⚛️ CURSO DE REACT 2024',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/7iobxzd_2wY/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/7iobxzd_2wY/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/7iobxzd_2wY/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/7iobxzd_2wY/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/7iobxzd_2wY/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: 'midulive',
        localized: {
          title: '⚛️ CURSO DE REACT 2024',
          description: ''
        }
      }
    },
    {
      kind: 'youtube#playlist',
      etag: 'ennYna7NPOMGJIUQr81z50NbOLY',
      id: 'PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA',
      snippet: {
        publishedAt: '2020-02-07T18:52:33Z',
        channelId: 'UCXR7VjA26PcHP3vb6F2X3VQ',
        title: 'Curso JavaScript',
        description:
          "Aprende JavaScript el lenguaje que domina la web: Sintaxis, Gramática, Lógica, EcmaScript, POO, Asincronía, DOM, AJAX, JSON, API's, Node y más.",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/2SetvwBV-SU/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/2SetvwBV-SU/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/2SetvwBV-SU/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/2SetvwBV-SU/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/2SetvwBV-SU/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: 'jonmircha',
        localized: {
          title: 'Curso JavaScript',
          description:
            "Aprende JavaScript el lenguaje que domina la web: Sintaxis, Gramática, Lógica, EcmaScript, POO, Asincronía, DOM, AJAX, JSON, API's, Node y más."
        }
      }
    }
  ]
}
