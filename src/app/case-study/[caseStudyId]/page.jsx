import CaseStudyDetailsClient from './CaseStudyDetailsClient';

export async function generateStaticParams() {
  // This is a placeholder. In a real application, you would fetch this
  // data from a CMS or database.
  const caseStudies = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return caseStudies.map((study) => ({
    caseStudyId: study.id,
  }));
}

export default function CaseStudyDetailsPage({ params }) {
  return <CaseStudyDetailsClient params={params} />;
}
