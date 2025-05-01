export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Apexy Packers and Movers",
  "description": "Professional packing, moving, and relocation services across India and internationally",
  "url": "https://www.apexypackers.com",
  "logo": "https://www.apexypackers.com/assets/img/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service"
  }
};

interface JsonLdProps {
  data: Record<string, any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd; 