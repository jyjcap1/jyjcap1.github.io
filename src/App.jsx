import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 차장님이 요청하신 메뉴 구성입니다.
  const menuItems = [
    { name: '학원소개', id: 'about' },
    { name: '교육과정안내', id: 'curriculum' },
    { name: '입시정보', id: 'entrance' },
    { name: '합격자후기', id: 'review' },
    { name: '상담신청', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. 상단 GNB (로고 + 메뉴 일렬 배치) */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* 로고 영역 */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black text-white text-xl shadow-md">N</div>
            <div className="leading-none">
              <span className="text-xl font-black tracking-tight text-gray-900">NicoNico</span>
              <p className="text-[10px] text-red-600 font-bold tracking-widest mt-0.5">JAPANESE ACADEMY</p>
            </div>
          </div>

          {/* PC용 메인 메뉴 */}
          <div className="hidden lg:flex items-center space-x-10 font-bold text-[15px] text-gray-700">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                className="hover:text-red-600 transition-all duration-200 relative group"
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* 모바일 레이아웃 메뉴 */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b py-6 px-8 flex flex-col gap-5 font-bold shadow-xl animate-fadeIn">
            {menuItems.map((item) => (
              <button key={item.id} className="text-left text-lg py-2" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 2. 메인 이미지 섹션 (중앙 정렬) */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* 아치형 이미지 프레임 (토다이 스타일) */}
          <div className="relative w-full max-w-5xl rounded-t-[250px] overflow-hidden shadow-2xl border-x-[12px] border-t-[12px] border-white ring-1 ring-gray-100">
            <div className="aspect-[16/9] relative group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="학원 메인" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* 이미지 위 오버레이 문구 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end pb-12 md:pb-20 text-white text-center px-4">
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight drop-shadow-lg">
                  꿈을 향한 일본어 정복, <br/> 니코니코가 함께합니다.
                </h2>
                <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-transform hover:scale-105 shadow-xl flex items-center gap-3">
                  상담신청 바로가기 <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* 하단 포인트 스트라이프 */}
          <div className="w-full max-w-5xl flex flex-col gap-1.5 mt-2">
            <div className="h-1 bg-red-600/10"></div>
            <div className="h-1 bg-red-600/30"></div>
            <div className="h-1 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* 3. 학원소개 섹션 */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-sm font-black text-red-600 tracking-[0.3em] mb-4 uppercase">Introduction</h3>
        <h2 className="text-4xl font-bold mb-10">니코니코 학원을 소개합니다</h2>
        <div className="aspect-video bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
           여기에 학원 소개 영상을 넣거나 사진을 배치하세요.
        </div>
      </section>
    </div>
  );
}

export default App;