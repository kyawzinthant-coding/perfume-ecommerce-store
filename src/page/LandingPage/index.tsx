import CategorySection from './Components/category-section';
import FeaturedProducts from './Components/FeaturedProducts';
import HeroSection from './Components/hero-section';
import WhyAura from './Components/why-us';

const LandingPage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <WhyAura />
    </div>
  );
};

export default LandingPage;
