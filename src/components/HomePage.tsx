import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Users, Target, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based parallax (vertical only)
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const heroImages = [
    "https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTE0MDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMTE0ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjExODY1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];
  const features = [
    {
      icon: Users,
      title: '전문 팀',
      description: '경험 많은 전문가들이 최고의 서비스를 제공합니다'
    },
    {
      icon: Target,
      title: '맞춤 솔루션',
      description: '고객의 니즈에 맞는 최적화된 솔루션을 제안합니다'
    },
    {
      icon: Award,
      title: '검증된 품질',
      description: '업계 최고 수준의 품질과 신뢰성을 보장합니다'
    },
    {
      icon: TrendingUp,
      title: '지속적 성장',
      description: '고객과 함께 성장하는 파트너십을 구축합니다'
    }
  ];

  const stats = [
    { number: 500, label: '성공한 프로젝트', suffix: '+' },
    { number: 10, label: '년간 경험', suffix: '+' },
    { number: 100, label: '만족한 고객', suffix: '+' },
    { number: 24, label: '고객 지원', suffix: '/7' }
  ];

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate each counter
            stats.forEach((stat, index) => {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = stat.number / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                currentStep++;
                const newValue = Math.min(Math.floor(increment * currentStep), stat.number);
                
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = newValue;
                  return newCounters;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                }
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Images with Slideshow and Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </div>
          ))}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide">
                혁신적인 기술로<br />
                <span className="text-primary-foreground">미래를 만들어갑니다</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed tracking-wide">
                TechCorp는 최첨단 기술과 전문성을 바탕으로 
                고객의 비즈니스 성공을 위한 최적의 솔루션을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => onNavigate('about')}
                  className="group"
                >
                  회사소개 보기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => onNavigate('contact')}
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  문의하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef} 
        className="py-16 bg-muted"
        style={{ y: y2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  animate={{ 
                    textShadow: hasAnimated 
                      ? ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0px rgba(0,0,0,0)"]
                      : "0 0 0px rgba(0,0,0,0)"
                  }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                >
                  {counters[index]}{stat.suffix}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              왜 TechCorp를 선택해야 할까요?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              우리는 고객의 성공을 위해 최선을 다하며, 혁신적인 기술과 전문성으로 
              최고의 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-shadow">
                  <CardContent className="p-6">
                    <motion.div 
                      className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            준비되셨나요?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            지금 바로 문의하여 귀하의 비즈니스를 한 단계 발전시켜보세요.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('contact')}
              className="group"
            >
              지금 문의하기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}