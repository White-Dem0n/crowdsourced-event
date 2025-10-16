export interface Event {
  id: string
  title: string
  description: string
  category: EventCategory
  imageUrl?: string
  date?: string
  location?: string
  organizer?: string
  isVerified?: boolean
  readTime: number
  status?: EventStatus
  createdAt?: string
  updatedAt?: string
}

export type EventCategory = 'free-food' | 'music' | 'cultural' | 'study' | 'sports'

export type EventStatus = 'draft' | 'published'

export interface User {
  id: string
  name: string
  email: string
  isVerified: boolean
  university: string
}
