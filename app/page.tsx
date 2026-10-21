import React from 'react';
import { FeaturedHeroSection } from '@/components/home/FeaturedHeroSection';
import { TrendingSection } from '@/components/home/TrendingSection';
import { LatestNewsSection } from '@/components/home/LatestNewsSection';
import { HomeDecorSection } from '@/components/home/HomeDecorSection';
import { EventsSection } from '@/components/home/EventsSection';
import { TrendsSection } from '@/components/home/TrendsSection';
import { DesignersSection } from '@/components/home/DesignersSection';
import { DesignTechSection } from '@/components/home/DesignTechSection';
import { FurnitureSection } from '@/components/home/FurnitureSection';
import { DecorSection } from '@/components/home/DecorSection';
import { ShowroomSection } from '@/components/home/ShowroomSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { EditorialDeskSection } from '@/components/home/EditorialDeskSection';
import { SpecialReportsSection } from '@/components/home/SpecialReportsSection';
import { PodcastVideoSection } from '@/components/home/PodcastVideoSection';
import { NewsletterBand } from '@/components/shared/NewsletterBand';

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. Featured Stories (asymmetric grid) */}
      <FeaturedHeroSection />

      {/* 2. Tren ding Stories (numbered 01-04) */}
      <TrendingSection />

      {/* 3. Latest News (Tokyo lead + 2x2 grid) */}
      <LatestNewsSection />

      {/* 4. Home Decor */}
      <HomeDecorSection />

      {/* 5. Events & Industry Updates */}
      <EventsSection />

      {/* 6. Trends */}
      {/* <TrendsSection /> */}

      {/* 7. Designers */}
      {/* <DesignersSection /> */}

      {/* 8. Design Tech / Technology Hub */}
      {/* <DesignTechSection /> */}

      {/* 9. Furniture */}
      {/* <FurnitureSection /> */}

      {/* 10. Decor */}
      {/* <DecorSection /> */}

      {/* 11. Showroom Showcase */}
      {/* <ShowroomSection /> */}

      {/* 12. Projects */}
      {/* <ProjectsSection /> */}

      {/* 13. Products */}
      {/* <ProductsSection /> */}

      {/* 14. Editorial Desk & Designer Interviews */}
      {/* <EditorialDeskSection /> */}

      {/* 15. Special Reports (Dark band) */}
      {/* <SpecialReportsSection /> */}

      {/* 16. Podcast & Video */}
      {/* <PodcastVideoSection /> */}

      {/* 17. The Daily Brief Newsletter */}
      {/* <NewsletterBand /> */}
    </div>
  );
}
