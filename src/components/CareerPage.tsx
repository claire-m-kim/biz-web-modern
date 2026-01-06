import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Clock, Users, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: '경쟁력 있는 연봉',
      description: '업계 최고 수준의 연봉과 성과급 제도'
    },
    {
      icon: GraduationCap,
      title: '교육 지원',
      description: '지속적인 성장을 위한 교육비 및 자격증 취득 지원'
    },
    {
      icon: Users,
      title: '수평적 조직문화',
      description: '자유롭고 창의적인 업무 환경'
    },
    {
      icon: Briefcase,
      title: '복리후생',
      description: '4대보험, 퇴직연금, 건강검진, 휴가비 지원'
    }
  ];

  const positions = [
    {
      id: 1,
      title: '시니어 풀스택 개발자',
      department: '개발팀',
      location: '서울 강남구',
      type: '정규직',
      experience: '5년 이상',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      description: '웹 애플리케이션 개발 및 아키텍처 설계를 담당할 시니어 개발자를 모집합니다.',
      deadline: '2024-08-15'
    },
    {
      id: 2,
      title: 'DevOps 엔지니어',
      department: '인프라팀',
      location: '서울 강남구',
      type: '정규직',
      experience: '3년 이상',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      description: 'CI/CD 파이프라인 구축 및 인프라 자동화를 담당할 DevOps 엔지니어를 찾습니다.',
      deadline: '2024-08-20'
    },
    {
      id: 3,
      title: 'UI/UX 디자이너',
      department: '디자인팀',
      location: '서울 강남구',
      type: '정규직',
      experience: '2년 이상',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      description: '사용자 중심의 인터페이스 디자인을 담당할 UI/UX 디자이너를 모집합니다.',
      deadline: '2024-08-10'
    },
    {
      id: 4,
      title: '데이터 사이언티스트',
      department: '데이터팀',
      location: '서울 강남구',
      type: '정규직',
      experience: '3년 이상',
      skills: ['Python', 'SQL', 'Machine Learning', 'Tableau'],
      description: '빅데이터 분석 및 머신러닝 모델 개발을 담당할 데이터 사이언티스트를 찾습니다.',
      deadline: '2024-08-25'
    },
    {
      id: 5,
      title: '프로젝트 매니저',
      department: '기획팀',
      location: '서울 강남구',
      type: '정규직',
      experience: '4년 이상',
      skills: ['Project Management', 'Agile', 'Communication', 'Leadership'],
      description: 'IT 프로젝트 전반의 기획 및 관리를 담당할 프로젝트 매니저를 모집합니다.',
      deadline: '2024-08-30'
    },
    {
      id: 6,
      title: '신입 소프트웨어 개발자',
      department: '개발팀',
      location: '서울 강남구',
      type: '정규직',
      experience: '신입',
      skills: ['Java', 'JavaScript', '기본 CS 지식'],
      description: '열정적이고 성장 가능성이 높은 신입 개발자를 모집합니다.',
      deadline: '2024-09-05'
    }
  ];

  const getExperienceColor = (experience: string) => {
    if (experience === '신입') return 'bg-green-100 text-green-800';
    if (experience.includes('2년')) return 'bg-blue-100 text-blue-800';
    if (experience.includes('3년')) return 'bg-purple-100 text-purple-800';
    return 'bg-orange-100 text-orange-800';
  };

  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            채용정보
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TechCorp와 함께 혁신적인 기술로 미래를 만들어갈 인재를 찾습니다.
            도전과 성장의 기회가 기다리고 있습니다.
          </p>
        </div>

        {/* Company Culture */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                TechCorp에서 일하는 이유
              </h2>
              <p className="text-muted-foreground mb-6">
                우리는 직원들이 최고의 성과를 낼 수 있는 환경을 제공합니다. 
                개인의 성장과 회사의 발전이 함께하는 문화를 만들어가고 있습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NTg1Mjg1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business handshake"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              현재 채용 중인 포지션
            </h2>
            <p className="text-xl text-muted-foreground">
              {positions.length}개의 포지션에서 함께할 동료를 찾고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                        <span>•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <Badge className={getExperienceColor(position.experience)}>
                      {position.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">요구 기술:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>마감: {formatDeadline(position.deadline)}</span>
                    </div>
                    <Button size="sm">
                      지원하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              채용 프로세스
            </h2>
            <p className="text-xl text-muted-foreground">
              투명하고 공정한 채용 과정을 통해 최적의 인재를 선발합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: '서류 전형', description: '이력서 및 포트폴리오 검토' },
              { step: '2', title: '1차 면접', description: '기술 면접 및 과제 수행' },
              { step: '3', title: '2차 면접', description: '임원 면접 및 문화 적합성 평가' },
              { step: '4', title: '최종 합격', description: '처우 협의 및 입사 일정 조율' }
            ].map((process, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-muted rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">
              채용 관련 문의
            </h2>
            <p className="text-muted-foreground">
              채용에 관한 궁금한 사항이 있으시면 언제든지 연락해주세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold mb-2">인사팀 직통</h3>
              <p className="text-muted-foreground">02-1234-5673</p>
              <p className="text-muted-foreground">hr@techcorp.co.kr</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">운영 시간</h3>
              <p className="text-muted-foreground">평일 09:00 - 18:00</p>
              <p className="text-muted-foreground">주말 및 공휴일 휴무</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}