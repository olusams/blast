import { serviceData } from '@/app/data/services';
import ServiceDetailsClient from './ServiceDetailsClient';

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    serviceDetailsId: service.slug,
  }));
}

export default function ServiceDetailsPage({ params }) {
  return <ServiceDetailsClient params={params} />;
}
