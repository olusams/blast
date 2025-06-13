import ServiceDetailsClient from './ServiceDetailsClient';

export async function generateStaticParams() {
  // This is a placeholder. In a real application, you would fetch this
  // data from a CMS or database.
  const services = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return services.map((service) => ({
    serviceDetailsId: service.id,
  }));
}

export default function ServiceDetailsPage({ params }) {
  return <ServiceDetailsClient params={params} />;
}
