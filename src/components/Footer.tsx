import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-4">TechCorp</h3>
            <p className="text-muted-foreground mb-4">
              혁신적인 기술 솔루션으로 고객의 성공을 지원하는 전문 기업입니다.
              고품질 서비스와 신뢰할 수 있는 파트너십을 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">회사소개</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">서비스</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">고객지원</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">채용정보</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">연락처</h4>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@techcorp.co.kr</span>
              </div>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>서울특별시 강남구<br />테헤란로 123, 45층</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}