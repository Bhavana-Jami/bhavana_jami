import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Bhavana Jami",
      "jobTitle": "Frontend Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Tata Consultancy Services"
      },
      "url": "https://bhavana-jami.vercel.app",
      "sameAs": [
        "https://iambluewonk.com",
        "https://github.com/Bhavana-Jami"
      ],
      "description": "Frontend Engineer with 4 years of professional experience creating beautiful, functional websites.",
      "knowsAbout": [
        "React",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
        "Web Development"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'structured-data';
    
    // Remove existing structured data if present
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default StructuredData;
