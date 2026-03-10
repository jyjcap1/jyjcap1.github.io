import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS 설정 (가입 후 받은 ID들을 입력하세요)
    // 서비스 가입 전 테스트용으로 알림창만 띄우도록 설정해두었습니다.
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          alert("상담 신청이 완료되었습니다. 곧 연락드리겠습니다!");
          form.current.reset();
      }, (error) => {
          alert("전송 중 오류가 발생했습니다. 전화(031-906-1588)로 문의 부탁드립니다.");
      })
      .finally(() => setIsSubmitting(false));
  };
  // 메뉴 토글 핸들러
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 브라우저 탭 타이틀 설정
  useEffect(() => {
    document.title = "니코니코일본어전문학원";
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    
    const handleResize = () => {
      if (window.innerWidth > 820) closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`app-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <header className="site-header">
        <div className="container header-inner">
        <a className="brand" href="/">
          <img src="/niko_ico.jpg" alt="로고" className="site-logo" />
          <span className="brand-text">니코니코 일본어 학원</span>
        </a>
          
          <nav className="site-nav" aria-label="주 메뉴">
            <button 
              className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            
            <ul className={`nav-list ${isMenuOpen ? 'is-open' : ''}`}>
              <li><a href="#about" onClick={closeMenu}>학원소개</a></li>
              <li><a href="#notice" onClick={closeMenu}>강사소개</a></li>
              <li><a href="#gallery" onClick={closeMenu}>강의프로그램</a></li>
              <li><a href="#map" onClick={closeMenu}>오시는길</a></li>
              <li><a href="#contact" onClick={closeMenu}>문의</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        {/* container 밖이 아니라 안으로 옮깁니다 */}
        <div className="container hero-container">
          <div className="hero-bg" style={{backgroundImage: "url('https://picsum.photos/1600/900?grayscale')"}}></div>
          <div className="hero-content">
            <h1 className="hero-title">NikoNiko Japanese</h1>
            <p className="hero-subtitle">일산 최고의 일본어 입시 파트너</p>
          </div>
        </div>
      </section>

      <main id="main">
        {/* 학원 소개 섹션 */}
        <section id="about" className="section">
          <div className="container">
            <div className="about-header">
              <h3>About NikoNiko</h3>
              <h2>일본 명문대 합격을 향한<br />가장 확실한 길</h2>
            </div>

            <div className="about-content">
              <div className="about-image">
                <img src="https://picsum.photos/800/600?study" alt="학원 내부 전경" />
              </div>
              <div className="about-text">
                <strong>"결과로 증명하는 일본 입시 전문, 니코니코일본어학원"</strong>
                <p>
                  단순한 지식 전달을 넘어, 학생 개개인의 잠재력을 극대화하여 
                  일본 명문 대학 합격이라는 목표를 함께 달성합니다. 
                  매년 압도적인 합격생 배출로 그 가치를 증명하고 있습니다.
                </p>
                <p>
                  꿈을 현실로 만드는 여정, 니코니코가 든든한 파트너가 되어 드리겠습니다.
                </p>
              </div>
            </div>

            <div className="philosophy-grid">
              <div className="philosophy-item">
                <span className="philosophy-icon">🎓</span>
                <h4>전문 강사진</h4>
                <p>일본 명문대 출신의 베테랑 강사진이 직접 지도합니다.</p>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">📚</span>
                <h4>맞춤형 전략</h4>
                <p>EJU부터 본고사, 면접까지 개인별 밀착 관리를 제공합니다.</p>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">🤝</span>
                <h4>높은 합격률</h4>
                <p>전통이 만든 데이터로 최적의 합격 로드맵을 제시합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 강사 소개 섹션 */}
        <section id="notice" className="section section--alt">
          <div className="container">
            <div className="about-header" style={{ marginBottom: '40px' }}>
              <h3>Instructors</h3>
              <h2>합격의 주인공을 만드는 실력파 강사진</h2>
            </div>

            <div className="instructor-grid">
              {[
                { id: 1, name: "전애나 원장", subject: "EJU 일본어 / 종합과목", desc: "와세다대학교 졸업. 15년 경력의 베테랑.", img: "https://picsum.photos/300/400?1" },
                { id: 2, name: "나이토 아키에 강사", subject: "원어민 회화 / 소논문", desc: "도쿄대학교 교육학 석사. 정교한 첨삭 지도.", img: "https://picsum.photos/300/400?2" },
                { id: 3, name: "전애리 강사", subject: "EJU 수학 / 이과과목", desc: "교토대학교 졸업. 기초부터 심화까지 완벽 정리.", img: "https://picsum.photos/300/400?3" }
              ].map((teacher) => (
                <div key={teacher.id} className="instructor-card">
                  <div className="instructor-img">
                    <img src={teacher.img} alt={teacher.name} />
                  </div>
                  <div className="instructor-info">
                    <span className="subject">{teacher.subject}</span>
                    <h4>{teacher.name}</h4>
                    <p>{teacher.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 강의 프로그램 섹션 */}
        <section id="gallery" className="section">
          <div className="container">
            <div className="about-header" style={{ marginBottom: '40px' }}>
              <h3>Curriculum</h3>
              <h2>단계별 맞춤 교육 과정</h2>
            </div>

            <div className="course-grid">
              {[
                { id: 1, title: "EJU 일본어/종합과목", subtitle: "입시의 핵심", content: "고득점을 위한 독해, 청독해 전략 대비.", tag: "BEST", icon: "📚" },
                { id: 2, title: "JLPT N1/N2 집중반", subtitle: "자격증 취득", content: "단기간 합격 목표 실전 모의고사 중심.", tag: "HOT", icon: "📝" },
                { id: 3, title: "본고사 & 소논문", subtitle: "상위권의 열쇠", content: "대학별 기출 분석과 1:1 대면 첨삭 지도.", tag: "SPECIAL", icon: "✍️" },
                { id: 4, title: "실전 면접 대비반", subtitle: "최종 합격", content: "지망이유서부터 모의 면접까지 완벽 케어.", tag: "FINAL", icon: "🤝" }
              ].map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-tag">{course.tag}</div>
                  <div className="course-icon">{course.icon}</div>
                  <h4>{course.title}</h4>
                  <span className="course-subtitle">{course.subtitle}</span>
                  <p className="course-desc">{course.content}</p>
                  <a href="#contact" className="course-link">상담 예약 →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 오시는 길 섹션 */}
        <section id="map" className="section section--alt">
          <div className="container">
            <div className="about-header" style={{ marginBottom: '40px' }}>
              <h3>Location</h3>
              <h2>니코니코일본어학원 오시는 길</h2>
            </div>

            <div className="map-wrapper">
              <div className="map-content">
                <div className="map-embed">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.4390509312384!2d126.77617507635671!3d37.65144121932375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c854b987d52bd%3A0xf3ccb50468137731!2z64uI7L2U64uI7L2U7J2867O47Ja07ZWZ7JuQ!5e0!3m2!1sko!2skr!4v1710123456789!5m2!1sko!2skr"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="NikoNiko Map"
                  ></iframe>
                </div>
              </div>

              <div className="map-info">
                <div className="info-item">
                  <h4>📍 ADDRESS</h4>
                  <p>경기도 고양시 일산동구 정발산로 43-20<br />중앙프라자 4층 (장항동)</p>
                </div>
                <div className="info-item">
                  <h4>📞 CONTACT</h4>
                  <p>전화: 031-906-1588</p>
                </div>
                <div className="info-item">
                  <h4>🚇 SUBWAY</h4>
                  <p>3호선 정발산역 1번 출구 도보 3분</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 문의하기 셋션 */}
        <section id="contact" className="section">
          <div className="container">
            <div className="about-header" style={{ marginBottom: '40px' }}>
              <h3>Admission</h3>
              <h2>입학 상담 신청</h2>
              <p className="contact-intro">상담 신청을 남겨주시면 담당 선생님이 확인 후 연락드립니다.</p>
            </div>

            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">학생 성함</label>
                <input 
                  id="user_name" 
                  name="user_name" 
                  type="text" 
                  placeholder="성함을 입력해주세요" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_phone">연락처</label>
                <input 
                  id="user_phone" 
                  name="user_phone" 
                  type="tel" 
                  placeholder="010-0000-0000" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">상담 내용 (선택)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="희망 강좌나 궁금한 점을 적어주세요"
                ></textarea>
              </div>

              <button className="btn btn-primary submit-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "전송 중..." : "상담 신청하기"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          {/* 상단 로고 및 학원명 */}
          <div className="footer-top">
            <h3 className="footer-logo">니코니코일본어학원</h3>
          </div>

          {/* 중간 상세 정보 */}
          <div className="footer-info">
            <div className="info-row">
              <span>대표자 : 홍길동</span>
              <span className="divider">|</span>
              <span>주소 : 경기도 고양시 일산동구 정발산로 43-20 중앙프라자 4층 (장항동)</span>
            </div>
            <div className="info-row">
              <span>사업자등록번호 : 101-11-111111</span>
              <span className="divider">|</span>
              <span>경기도교육청 등록 제1111호</span>
            </div>
            <div className="info-row">
              <span>TEL : 031-906-1588</span>
              <span className="divider">|</span>
              <span>FAX : 031-1111-2222</span>
            </div>
          </div>

          {/* 하단 카피라이트 */}
          <div className="footer-bottom">
            <p>COPYRIGHT ⓒ {new Date().getFullYear()} NikonikoJapanese.com ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>


      {/* 플로팅 버튼 컨테이너 */}
      <div className="floating-buttons">
        {/* 네이버 톡톡 버튼 */}
        <a 
          href="https://talk.naver.com/WXXXXX" // 본인의 네이버 톡톡 주소로 변경하세요
          target="_blank" 
          rel="noopener noreferrer"
          className="float-button naver-talk"
          aria-label="네이버 톡톡 상담하기"
        >
           {/* 네이버 톡톡 공식 로고 형태 SVG */}
           {/* public/navertoktok.png 파일을 직접 사용 */}
          <img 
            src="/navertoktok.png" 
            alt="네이버 톡톡" 
            style={{ width: '100%', height: '100%', borderRadius: '50%' }} 
          />
        </a>

        {/* 카카오톡 버튼 */}
        <a 
          href="https://pf.kakao.com/_xxxxxx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="float-button kakao-talk"
          aria-label="카카오톡 상담하기"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" 
            alt="카카오톡" 
          />
        </a>
      </div>  
    </div>
  );
}

export default App;