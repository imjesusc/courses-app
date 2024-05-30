import { SCHEMA } from '@/enviroments/schema'
import { courseInfo, ytPlaylistItemsModel } from '@/models'
import { revalidatePath } from 'next/cache'

export const getPlaylistsInfo = async (playlistIds: string[]): Promise<courseInfo[] | undefined> => {
  try {
    const url = `${SCHEMA.YT_URL}/playlists?key=${SCHEMA.YT_V3_API_KEY}&part=snippet&id=${playlistIds.join(',')}&maxResults=9`

    const OPTIONS = { method: 'GET' }

    const response = await fetch(url, OPTIONS)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = (await response.json()) as { items: courseInfo[] }
    revalidatePath('/explorar')
    return data.items
  } catch (error) {
    console.log(error)
  }
}

export const getCourseDetails = async (courseId: string): Promise<ytPlaylistItemsModel | undefined> => {
  try {
    const url = `${SCHEMA.YT_URL}/playlistItems?key=${SCHEMA.YT_V3_API_KEY}&part=snippet&playlistId=${courseId}&maxResults=5`

    const OPTIONS = { method: 'GET' }

    const response = await fetch(url, OPTIONS)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
