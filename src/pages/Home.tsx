import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Star, Award, Ruler, Shield } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import ReviewCard from '../components/common/ReviewCard';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { products, reviews } from '../data/products';
import { navigationConfig, contentConfig } from '../config';
import { businessConfig } from '../config/business';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  useEffect(() => {
    const backgrounds = ['hero-bg', 'features-bg', 'products-bg', 'stats-bg'];
    let currentIndex = 0;

    const switchBackground = () => {
      // Get all background elements
      const heroBg = document.getElementById('hero-bg');
      const featuresBg = document.getElementById('features-bg');
      const productsBg = document.getElementById('products-bg');
      const statsBg = document.getElementById('stats-bg');

      if (!heroBg || !featuresBg || !productsBg || !statsBg) return;

      const allBgs = [heroBg, featuresBg, productsBg, statsBg];

      // Reset all backgrounds
      allBgs.forEach(bg => {
        bg.style.opacity = '0';
      });

      // Show current background (CSS transitions handle the smoothness)
      allBgs[currentIndex].style.opacity = '1';

      // Move to next background
      currentIndex = (currentIndex + 1) % backgrounds.length;
    };

    // Wait for images to load before starting transitions
    let interval: number;

    const startTimeout = setTimeout(() => {
      switchBackground();

      // Set up periodic switching every 8 seconds for better UX
      interval = setInterval(switchBackground, 8000);
    }, 2000);

    // Cleanup
    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] overflow-hidden">
        {/* Background images that change per section - static */}
        <div className="fixed inset-0 -z-10">
          {/* Hero background */}
          <div className="absolute inset-0" id="hero-bg">
            <img
              src="/hero.jpg"
              alt="Beautiful Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/60 via-primary-900/40 to-primary-800/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          {/* Why Choose Us background */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-[2000ms] ease-in-out" id="features-bg">
            <img
              src="/green-kitchen-cabinets-16-64484b02999d7.jpg"
              alt="Green Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/70 via-primary-900/50 to-primary-800/60"></div>
          </div>

          {/* Products background */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-[2000ms] ease-in-out" id="products-bg">
            <img
              src="/modern-custom-kitchen-remodel-lux-design-builds-img~6ed17ff20d15389a_14-9308-1-58408ce.jpg"
              alt="Modern Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/60 via-primary-900/40 to-primary-800/50"></div>
          </div>

          {/* Stats background */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-[2000ms] ease-in-out" id="stats-bg">
            <img
              src="/Sand-Inspired-Coastal-Kitchen-4526_181112_Varma-6lFxOopwq2OA4KE6SahDWr-f18b6cf561374248a489fa576ffc7642.jpg"
              alt="Coastal Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/70 via-primary-900/50 to-primary-800/60"></div>
          </div>
        </div>

        {/* Main content - positioned in bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            {/* Text content */}
            <ScrollAnimation direction="up" delay={0.2} className="space-y-6 mb-8" immediate={true}>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
                  <ScrollAnimation direction="up" delay={0.3} immediate={true}>
                    <span className="block">{contentConfig.hero.headline}</span>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" delay={0.4} immediate={true}>
                    <span className="block text-accent-400">{contentConfig.hero.subHeadline}</span>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" delay={0.5} immediate={true}>
                    <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90 font-medium mt-2">{contentConfig.hero.location}</span>
                  </ScrollAnimation>
                </h2>
                <ScrollAnimation direction="up" delay={0.6} immediate={true}>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
                    {contentConfig.hero.description}
                  </p>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            {/* Action buttons */}
            <ScrollAnimation direction="up" delay={0.7} className="flex flex-col sm:flex-row gap-4 max-w-2xl" immediate={true}>
              <Link
                to={navigationConfig.cta.consultation.path}
                className="group bg-accent-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-700 transition-all duration-300 flex items-center justify-center shadow-sharpLg hover:shadow-sharpLg border border-white/10 hover:scale-105 hover:translate-y-[-2px]"
              >
                <span className="transform transition-all duration-200 group-hover:translate-x-1">
                  {navigationConfig.cta.consultation.label}
                </span>
                <ArrowRight className="ml-3 h-5 w-5 transform transition-all duration-300 group-hover:translate-x-2" />
              </Link>
              <Link
                to={navigationConfig.cta.secondary.path}
                className="group border-2 border-white/60 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary-950 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:translate-y-[-2px] hover:border-white"
              >
                <span className="transform transition-all duration-200 group-hover:translate-x-1">
                  {navigationConfig.cta.secondary.label}
                </span>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">Why Choose {businessConfig.name}?</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="group text-center p-8 bg-white rounded-lg shadow-sharp hover:shadow-sharpMd transition-all duration-200">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors">
                  <Shield className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-950">5-Year Warranty</h3>
                <p className="text-primary-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="group text-center p-8 bg-white rounded-lg shadow-sharp hover:shadow-sharpMd transition-all duration-200">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors">
                  <Ruler className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-950">Free In-Home Measuring</h3>
                <p className="text-primary-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="group text-center p-8 bg-white rounded-lg shadow-sharp hover:shadow-sharpMd transition-all duration-200">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors">
                  <Award className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-950">A+ BBB Rating</h3>
                <p className="text-primary-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">Featured Cabinet Styles</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">Discover our most popular cabinet designs, crafted with precision and style</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ScrollAnimation key={product.id} direction="up" delay={index * 0.1}>
                <ProductCard product={product} />
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation direction="up" className="text-center">
            <Link
              to="/shop"
              className="group bg-accent-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-700 transition-all duration-200 inline-flex items-center shadow-sharp hover:shadow-sharpMd"
            >
              View All Products
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Local SEO Callout */}
      <section className="py-24 bg-cabinet-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="up" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proudly Serving {businessConfig.serviceAreas.slice(0, 4).join(', ')} & the Twin Cities
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Local expertise, premium materials, professional installation — bringing your dream kitchen to life
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                <div className="text-4xl font-bold text-accent-400 mb-2">500+</div>
                <div className="text-white/90 font-medium">Kitchens Completed</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                <div className="text-4xl font-bold text-accent-400 mb-2">15+</div>
                <div className="text-white/90 font-medium">Years Experience</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                <div className="text-4xl font-bold text-accent-400 mb-2">4-6</div>
                <div className="text-white/90 font-medium">Week Delivery</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                <div className="text-4xl font-bold text-accent-400 mb-2">5</div>
                <div className="text-white/90 font-medium">Year Warranty</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">What Our Customers Say</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-2xl font-bold text-primary-950">5/5</span>
            </div>
            <p className="text-xl text-primary-600">from 200+ verified reviews</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ScrollAnimation key={review.id} direction="up" delay={index * 0.1}>
                <ReviewCard review={review} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-neutral-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">How It Works</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">Simple 5-step process from design to installation</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: 1, title: 'Measure', description: 'Lorem ipsum dolor sit amet, consectetur.' },
              { step: 2, title: 'Design', description: 'Lorem ipsum dolor sit amet, consectetur.' },
              { step: 3, title: 'Order', description: 'Lorem ipsum dolor sit amet, consectetur.' },
              { step: 4, title: 'Build', description: 'Lorem ipsum dolor sit amet, consectetur.' },
              { step: 5, title: 'Install', description: 'Lorem ipsum dolor sit amet, consectetur.' }
            ].map((item, index) => (
              <ScrollAnimation key={item.step} direction="up" delay={index * 0.1} className="relative text-center group">
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-1/2 transform translate-x-8 w-full h-0.5 bg-gradient-to-r from-accent-400 to-accent-300 opacity-30"></div>
                )}
                <div className="relative bg-white rounded-lg p-6 shadow-sharp group-hover:shadow-sharpMd transition-all duration-200 border border-neutral-200">
                  <div className="bg-accent-600 text-white w-12 h-12 rounded-md flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-sharp">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-950">{item.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600 via-accent-700 to-accent-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
            <p className="text-xl text-accent-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get your free design consultation today and discover why hundreds of homeowners trust us with their dream kitchens
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-white text-accent-700 px-8 py-4 rounded-md font-semibold hover:bg-neutral-50 transition-all duration-200 inline-flex items-center justify-center shadow-sharp hover:shadow-sharpMd"
            >
              Book Free Consult
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/custom"
              className="group border border-white/40 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-accent-700 transition-all duration-200 inline-flex items-center justify-center"
            >
              Request Custom Quote
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
