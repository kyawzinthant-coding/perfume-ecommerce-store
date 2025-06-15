import CategorySection from './Components/category-section';
import FeaturedProducts from './Components/FeaturedProducts';
import HeroSection from './Components/hero-section';
import WhyAura from './Components/why-us';
import { Layout } from './Layout';

const LandingPage = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        <WhyAura />
      </div>
    </Layout>
  );
};

export default LandingPage;
