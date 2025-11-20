import { Sermon, Event, TeamMember } from '../types';

// Mock Data representing Grace Worship Center "The Ark"
const MOCK_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Shift Splash Pt 1: Audio Series 3',
    preacher: 'Bishop John Oruma',
    date: '2025-11-09',
    series: 'Shift Splash',
    thumbnailUrl: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=2070&auto=format&fit=crop',
    description: 'The beginning of a powerful audio series designed to shift your spiritual atmosphere. Part 1 of the Shift Splash series.',
  },
  {
    id: '2',
    title: 'His Mercies: Welcome to November',
    preacher: 'Bishop John Oruma',
    date: '2025-11-02',
    series: 'Monthly Theme',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493217465235-2555af2ba905?q=80&w=2069&auto=format&fit=crop',
    description: 'May grace speak for you and favor go before you. "The Lord will make you the head and not the tail."',
  },
  {
    id: '3',
    title: 'Mid-Week Service: Prayer & Word',
    preacher: 'Bishop John Oruma',
    date: '2025-10-29',
    series: 'Mid-Week Service',
    thumbnailUrl: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop',
    description: 'Join us for a powerful time of worship, prayer, and the word. Refresh your spirit in the middle of the week.',
  },
  {
    id: '4',
    title: 'Shift Splash Pt 1: Audio Series 1',
    preacher: 'Bishop John Oruma',
    date: '2025-10-22',
    series: 'Shift Splash',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
    description: 'Entering a new dimension of grace and power. Do not miss this impartation.',
  }
];

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Sunday Service',
    date: 'Every Sunday',
    time: '8:30 AM',
    location: 'Church Auditorium, Warri',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop',
    description: 'Join Bishop John Oruma for a life-changing encounter with God.',
    category: 'Worship',
  },
  {
    id: '2',
    title: 'Mid-Week Service',
    date: 'Every Wednesday',
    time: '4:30 PM',
    location: 'Church Auditorium, Warri',
    imageUrl: 'https://images.unsplash.com/photo-1519892300165-cb5542fb4747?q=80&w=2070&auto=format&fit=crop',
    description: 'Worship, Prayer, and The Word. A time to refuel.',
    category: 'Worship',
  },
  {
    id: '3',
    title: 'Shift Splash Special',
    date: 'Nov 16, 2025',
    time: '8:30 AM',
    location: 'Church Auditorium',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
    description: 'Special series continuation with Bishop John Oruma.',
    category: 'Conference',
  },
];

const MOCK_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Bishop John Oruma',
    role: 'Presiding Bishop',
    bio: 'The visionary leader of Grace Worship Center (The Ark), dedicated to raising a generation of kingdom giants.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Pastoral Team',
    role: 'Leadership',
    bio: 'A dedicated team of ministers serving the vision of The Ark.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
  }
];

// Simulating Async API Calls
export const api = {
  getSermons: async (): Promise<Sermon[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_SERMONS), 600));
  },
  getEvents: async (): Promise<Event[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_EVENTS), 600));
  },
  getTeam: async (): Promise<TeamMember[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_TEAM), 600));
  },
};