import React from 'react';
import { FeaturedHeroSection } from '../home/FeaturedHeroSection';
import { TrendingSection } from '../home/TrendingSection';
import { LatestNewsSection } from '../home/LatestNewsSection';
import { HomeDecorSection } from '../home/HomeDecorSection';
import { EventsSection } from '../home/EventsSection';
import { TrendsSection } from '../home/TrendsSection';
import { DesignersSection } from '../home/DesignersSection';
import { DesignTechSection } from '../home/DesignTechSection';
import { FurnitureSection } from '../home/FurnitureSection';
import { DecorSection } from '../home/DecorSection';
import { ShowroomSection } from '../home/ShowroomSection';
import { ProjectsSection } from '../home/ProjectsSection';
import { ProductsSection } from '../home/ProductsSection';
import { EditorialDeskSection } from '../home/EditorialDeskSection';
import { SpecialReportsSection } from '../home/SpecialReportsSection';
import { PodcastVideoSection } from '../home/PodcastVideoSection';
import { NewsletterBand } from '../shared/NewsletterBand';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Featured Stories (asymmetric grid) */}
      <FeaturedHeroSection />

      {/* 2. Trending Stories (numbered 01-04) */}
      <TrendingSection />

      {/* 3. Latest News (Tokyo lead + 2x2 grid) */}
      <LatestNewsSection />

      {/* 4. Home Decor */}
      <HomeDecorSection />

      {/* 5. Events & Industry Updates */}
      <EventsSection />

      {/* 6. Trends */}
      <TrendsSection />

      {/* 7. Designers */}
      <DesignersSection />

      {/* 8. Design Tech / Technology Hub */}
      <DesignTechSection />

      {/* 9. Furniture */}
      <FurnitureSection />

      {/* 10. Decor */}
      <DecorSection />

      {/* 11. Showroom Showcase */}
      <ShowroomSection />

      {/* 12. Projects */}
      <ProjectsSection />

      {/* 13. Products */}
      <ProductsSection />

      {/* 14. Editorial Desk & Designer Interviews */}
      <EditorialDeskSection />

      {/* 15. Special Reports (Dark band) */}
      <SpecialReportsSection />

      {/* 16. Podcast & Video */}
      <PodcastVideoSection />

      {/* 17. The Daily Brief Newsletter */}
      <NewsletterBand />
    </div>
  );
}
