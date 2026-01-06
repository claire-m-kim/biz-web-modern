import { Card, CardContent } from './ui/card';
import { Users, Eye, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function AboutPage() {
  const values = [
    {
      icon: Eye,
      title: '비전',
      description: '기술 혁신을 통해 더 나은 미래를 창조하는 글로벌 리더가 되겠습니다.'
    },
    {
      icon: Target,
      title: '미션',
      description: '고객의 성공을 위한 최적의 기술 솔루션을 제공하여 비즈니스 가치를 극대화합니다.'
    },
    {
      icon: Heart,
      title: '핵심 가치',
      description: '신뢰, 혁신, 협력, 고객 중심의 가치를 바탕으로 지속 가능한 성장을 추구합니다.'
    }
  ];

  const team = [
    {
      name: '김대표',
      role: '대표이사',
      description: '20년간의 IT 업계 경험을 바탕으로 회사를 이끌고 있습니다.',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTEwNTg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: '이기술이사',
      role: '기술이사',
      description: '최신 기술 트렌드를 선도하며 혁신적인 솔루션을 개발합니다.',
      image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMTU4MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: '박영업이사',
      role: '영업이사',
      description: '고객과의 신뢰 관계를 바탕으로 최적의 서비스를 제공합니다.',
      image: 'https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTE4OTA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            회사소개
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TechCorp는 2014년 설립된 이래로 혁신적인 기술 솔루션을 통해 
            고객의 비즈니스 성공을 지원해온 전문 기업입니다.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">우리의 이야기</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TechCorp는 "기술로 세상을 변화시킨다"는 비전으로 시작되었습니다. 
                  작은 스타트업에서 시작하여 현재는 업계를 선도하는 기업으로 성장했습니다.
                </p>
                <p>
                  우리는 끊임없는 혁신과 고객 중심의 서비스로 다양한 산업 분야에서 
                  성공적인 프로젝트를 수행해왔습니다. 고객의 니즈를 정확히 파악하고 
                  최적의 솔루션을 제공하는 것이 우리의 핵심 경쟁력입니다.
                </p>
                <p>
                  앞으로도 TechCorp는 기술 혁신을 통해 고객과 함께 성장하며, 
                  더 나은 미래를 만들어가겠습니다.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODYwOTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business team meeting"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              우리의 가치
            </h2>
            <p className="text-xl text-muted-foreground">
              TechCorp를 움직이는 핵심 원동력입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <motion.div 
                      className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              경영진
            </h2>
            <p className="text-xl text-muted-foreground">
              풍부한 경험과 전문성을 갖춘 리더들이 TechCorp를 이끌고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20"
                      whileHover={{ 
                        scale: 1.1,
                        borderColor: "rgba(59, 130, 246, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="bg-muted rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">회사 정보</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium">설립연도:</span> 2014년</p>
                <p><span className="font-medium">임직원 수:</span> 150명</p>
                <p><span className="font-medium">주요 사업:</span> IT 솔루션, 컨설팅, 소프트웨어 개발</p>
                <p><span className="font-medium">주요 고객:</span> 대기업, 중소기업, 공공기관</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">인증 및 수상</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• ISO 9001 품질경영시스템 인증</p>
                <p>• ISO 27001 정보보안관리시스템 인증</p>
                <p>• 2023 우수 IT 서비스 기업 선정</p>
                <p>• 2022 고객만족도 1위 수상</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}