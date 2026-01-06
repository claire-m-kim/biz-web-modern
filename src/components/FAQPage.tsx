import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

export function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = ['전체', '서비스', '기술지원', '결제/계약', '보안', '기타'];

  const faqs = [
    {
      id: 1,
      category: '서비스',
      question: 'TechCorp에서 제공하는 주요 서비스는 무엇인가요?',
      answer: 'TechCorp는 IT 컨설팅, 소프트웨어 개발, 시스템 통합, 클라우드 서비스, 데이터 분석 등 다양한 IT 솔루션을 제공합니다. 고객의 비즈니스 요구사항에 맞춘 맞춤형 서비스를 통해 디지털 전환을 지원합니다.'
    },
    {
      id: 2,
      category: '기술지원',
      question: '기술지원은 어떻게 받을 수 있나요?',
      answer: '기술지원은 여러 방법으로 받으실 수 있습니다. 온라인 문의, 전화 상담(02-1234-5672), 이메일(support@techcorp.co.kr), 또는 원격 지원 서비스를 통해 신속한 기술지원을 제공합니다. 긴급한 경우 24시간 상담 서비스도 이용 가능합니다.'
    },
    {
      id: 3,
      category: '결제/계약',
      question: '서비스 이용료는 어떻게 결제하나요?',
      answer: '서비스 이용료는 계좌이체, 신용카드, 현금 등 다양한 방법으로 결제 가능합니다. 정기 서비스의 경우 자동이체 설정도 가능하며, 세금계산서는 이메일로 발송됩니다. 결제 관련 문의는 총무팀(02-1234-5674)으로 연락주세요.'
    },
    {
      id: 4,
      category: '보안',
      question: '데이터 보안은 어떻게 보장되나요?',
      answer: 'TechCorp는 ISO 27001 정보보안관리시스템 인증을 보유하고 있으며, 고객 데이터의 안전한 보관과 처리를 위해 최신 보안 기술을 적용합니다. 데이터 암호화, 접근 제어, 정기적인 보안 점검 등을 통해 철저한 보안 관리를 실시하고 있습니다.'
    },
    {
      id: 5,
      category: '서비스',
      question: '프로젝트 진행 기간은 얼마나 걸리나요?',
      answer: '프로젝트 규모와 복잡도에 따라 진행 기간이 달라집니다. 소규모 프로젝트는 2-4주, 중규모는 2-6개월, 대규모 프로젝트는 6개월 이상 소요될 수 있습니다. 정확한 일정은 초기 상담을 통해 상세히 안내드립니다.'
    },
    {
      id: 6,
      category: '기술지원',
      question: '유지보수 서비스는 어떻게 이루어지나요?',
      answer: '유지보수 서비스는 정기 점검, 버그 수정, 기능 개선, 보안 업데이트 등을 포함합니다. 서비스 수준에 따라 Bronze, Silver, Gold 등급으로 구분되며, 각 등급별로 응답 시간과 지원 범위가 다릅니다.'
    },
    {
      id: 7,
      category: '결제/계약',
      question: '계약 해지는 어떻게 하나요?',
      answer: '계약 해지는 계약서에 명시된 해지 조건에 따라 진행됩니다. 일반적으로 30일 전 서면 통지가 필요하며, 해지 수수료나 위약금이 발생할 수 있습니다. 자세한 내용은 계약 담당자에게 문의해주세요.'
    },
    {
      id: 8,
      category: '기타',
      question: '파트너십이나 협업 기회는 어떻게 문의하나요?',
      answer: '파트너십이나 협업에 관심이 있으시면 영업팀(sales@techcorp.co.kr)으로 연락주시거나, 온라인 문의 양식을 통해 자세한 제안서를 보내주세요. 검토 후 담당자가 연락드리겠습니다.'
    },
    {
      id: 9,
      category: '보안',
      question: '개인정보 처리방침은 어디서 확인할 수 있나요?',
      answer: '개인정보 처리방침은 저희 웹사이트 하단에서 확인하실 수 있습니다. 개인정보 수집, 이용, 보관, 파기에 관한 모든 절차를 투명하게 공개하고 있으며, 관련 문의는 개인정보보호 담당자에게 연락주세요.'
    },
    {
      id: 10,
      category: '서비스',
      question: '무료 상담이나 데모는 제공하나요?',
      answer: '네, 신규 고객을 위한 무료 상담 및 데모 서비스를 제공합니다. 전화나 온라인으로 상담 일정을 예약하시면, 전문 컨설턴트가 귀하의 요구사항을 분석하고 최적의 솔루션을 제안해드립니다.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === '전체' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-muted-foreground">
            궁금한 사항에 대한 답변을 빠르게 찾아보세요.
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="질문이나 키워드를 검색해보세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'secondary'}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <Card key={faq.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full p-6 h-auto text-left justify-between hover:bg-accent"
                    onClick={() => toggleExpanded(faq.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {faq.category}
                        </Badge>
                      </div>
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <h3 className="font-semibold text-left">{faq.question}</h3>
                      </div>
                    </div>
                    {expandedItems.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </Button>
                  
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">검색 결과가 없습니다</h3>
                <p className="text-muted-foreground mb-4">
                  다른 키워드로 검색하시거나 카테고리를 변경해보세요.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('전체');
                  }}
                >
                  검색 조건 초기화
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">
              원하는 답변을 찾지 못하셨나요?
            </h3>
            <p className="mb-6 text-primary-foreground/90">
              고객센터를 통해 직접 문의하시면 빠르고 정확한 답변을 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                1:1 문의하기
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                전화 상담: 02-1234-5678
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}