export interface Event {
  id: string
  title: string
  description: string
  category: EventCategory
  imageUrl?: string
  date?: Date
  location?: string
  organizer?: string
  isVerified?: boolean
  readTime: number
}

export type EventCategory = 'free-food' | 'music' | 'cultural' | 'study' | 'sports'

export interface User {
  id: string
  name: string
  email: string
  isVerified: boolean
  university: string
}
