import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarDays, Pin } from 'lucide-react';

export function NewsPage() {
  const pinnedNews = [
    {
      id: 1,
      title: '[중요] 2024년 하반기 서비스 업데이트 안내',
      content: '고객 여러분께 더 나은 서비스를 제공하기 위해 2024년 하반기 주요 업데이트를 진행합니다. 자세한 내용은 공지사항을 확인해주세요.',
      date: '2024-07-15',
      category: '서비스',
      isPinned: true
    }
  ];

  const news = [
    {
      id: 2,
      title: 'TechCorp, AI 기반 새로운 솔루션 출시',
      content: '인공지능 기술을 활용한 혁신적인 비즈니스 솔루션을 새롭게 출시했습니다. 이번 솔루션은 고객의 업무 효율성을 크게 향상시킬 것으로 기대됩니다.',
      date: '2024-07-10',
      category: '제품'
    },
    {
      id: 3,
      title: '2024년 2분기 실적 발표',
      content: '2024년 2분기 우수한 실적을 기록했습니다. 전년 동기 대비 매출 25% 증가를 달성했으며, 새로운 고객사와의 파트너십도 확대되었습니다.',
      date: '2024-07-05',
      category: '실적'
    },
    {
      id: 4,
      title: '여름 휴가 및 업무 일정 안내',
      content: '여름 휴가철을 맞아 업무 일정 변경 사항을 안내드립니다. 고객지원 서비스는 정상 운영되며, 긴급 문의는 24시간 상담 서비스를 이용해주세요.',
      date: '2024-06-28',
      category: '일반'
    },
    {
      id: 5,
      title: '보안 정책 업데이트 안내',
      content: '고객 정보 보호 강화를 위해 보안 정책을 업데이트합니다. 새로운 보안 절차와 관련된 자세한 내용을 확인하시기 바랍니다.',
      date: '2024-06-20',
      category: '보안'
    },
    {
      id: 6,
      title: '신규 파트너사와의 업무 협약 체결',
      content: '글로벌 IT 기업과의 전략적 파트너십을 통해 더욱 다양하고 고품질의 서비스를 제공할 수 있게 되었습니다.',
      date: '2024-06-15',
      category: '파트너십'
    },
    {
      id: 7,
      title: '고객 만족도 조사 결과 발표',
      content: '2024년 상반기 고객 만족도 조사 결과, 전체 만족도 94%를 기록했습니다. 더 나은 서비스 제공을 위해 지속적으로 노력하겠습니다.',
      date: '2024-06-10',
      category: '조사'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      '서비스': 'bg-blue-100 text-blue-800',
      '제품': 'bg-green-100 text-green-800',
      '실적': 'bg-purple-100 text-purple-800',
      '일반': 'bg-gray-100 text-gray-800',
      '보안': 'bg-red-100 text-red-800',
      '파트너십': 'bg-orange-100 text-orange-800',
      '조사': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            공지사항
          </h1>
          <p className="text-xl text-muted-foreground">
            TechCorp의 최신 소식과 중요한 공지사항을 확인하세요.
          </p>
        </div>

        {/* Pinned News */}
        {pinnedNews.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Pin className="w-5 h-5 mr-2" />
              중요 공지
            </h2>
            {pinnedNews.map((item) => (
              <Card key={item.id} className="border-primary bg-primary/5 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                        <Pin className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Regular News */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-primary">전체 공지사항</h2>
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-primary hover:text-primary/80">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {formatDate(item.date)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">더 많은 공지사항이 있습니다.</p>
        </div>

      </div>
    </div>
  );
}