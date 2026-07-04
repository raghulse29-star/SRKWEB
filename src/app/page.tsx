import { Hero } from '@/components/sections/Hero';
import { Legacy } from '@/components/sections/Legacy';
import { SpecializedServices } from '@/components/sections/SpecializedServices';
import { Masterpieces } from '@/components/sections/Masterpieces';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { PricingPlans } from '@/components/sections/PricingPlans';
import { CtaBanner } from '@/components/sections/CtaBanner';

/**
 * LANDING PAGE.
 * Each section below is a self-contained component — open the matching file in
 * src/components/sections/ to edit its content, text, and design in one place.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Legacy />
      <SpecializedServices />
      <Masterpieces />
      <SuccessStories />
      <PricingPlans />
      <CtaBanner />
    </>
  );
}
