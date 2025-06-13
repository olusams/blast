import { teamData } from '@/app/data/team';
import TeamDetailsClient from './TeamDetailsClient';

export async function generateStaticParams() {
  return teamData.map(member => ({
    slug: member.slug,
  }));
}

export default function TeamDetailsPage({ params }) {
  return <TeamDetailsClient params={params} />;
}
