export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  series: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  description: string;
  category: 'Worship' | 'Youth' | 'Outreach' | 'Conference';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}