import TeamDetailsClient from './TeamDetailsClient';

export async function generateStaticParams() {
  // This is a placeholder. In a real application, you would fetch this
  // data from a CMS or database.
  const team = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return team.map((member) => ({
    teamDetailsId: member.id,
  }));
}

export default function TeamDetailsPage({ params }) {
  return <TeamDetailsClient params={params} />;
}
