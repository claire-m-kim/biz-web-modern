import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 여기서 폼 데이터를 서버로 전송
    alert('문의사항이 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '전화 문의',
      content: '02-1234-5678',
      description: '평일 09:00 - 18:00'
    },
    {
      icon: Mail,
      title: '이메일 문의',
      content: 'info@techcorp.co.kr',
      description: '24시간 접수 가능'
    },
    {
      icon: MapPin,
      title: '본사 주소',
      content: '서울특별시 강남구 테헤란로 123, 45층',
      description: 'TechCorp 본사'
    },
    {
      icon: Clock,
      title: '운영 시간',
      content: '평일 09:00 - 18:00',
      description: '주말 및 공휴일 휴무'
    }
  ];

  const departments = [
    { name: '영업팀', phone: '02-1234-5671', email: 'sales@techcorp.co.kr' },
    { name: '기술지원팀', phone: '02-1234-5672', email: 'support@techcorp.co.kr' },
    { name: '인사팀', phone: '02-1234-5673', email: 'hr@techcorp.co.kr' },
    { name: '총무팀', phone: '02-1234-5674', email: 'admin@techcorp.co.kr' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            고객센터
          </h1>
          <p className="text-xl text-muted-foreground">
            궁금한 사항이나 문의사항이 있으시면 언제든지 연락해주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">문의하기</CardTitle>
                <p className="text-muted-foreground">
                  아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">이름 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">이메일 *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">회사명</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">문의 제목 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="문의 제목을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">문의 내용 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="궁금한 사항이나 문의하실 내용을 자세히 적어주세요."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    문의사항 전송
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>연락처 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-primary">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>부서별 연락처</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b border-border pb-3 last:border-b-0">
                    <h4 className="font-semibold">{dept.name}</h4>
                    <p className="text-sm text-muted-foreground">{dept.phone}</p>
                    <p className="text-sm text-primary">{dept.email}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Image */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTg2MDk0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office workspace"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
                width={1200}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">TechCorp 본사</h3>
                <p className="text-muted-foreground">
                  강남구 테헤란로에 위치한 저희 본사에서 언제든지 방문 상담을 받으실 수 있습니다. 
                  사전 예약을 통해 더욱 원활한 상담 서비스를 제공받으세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}