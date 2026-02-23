import { HeroCarousel } from "@/components/hero-carousel"
import { ActivitiesRow } from "@/components/activities-row"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ActivitiesRow />
      <CtaBanner />
    </>
  )
}
