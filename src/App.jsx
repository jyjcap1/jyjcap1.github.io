import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#333]">
      {/* 네비게이션 바 */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-[#E63946]">NicoNico Japanese</h1>
        <div className="space-x-6 font-medium">
          <a href="#" className="hover:text-[#E63946]">학원소개</a>
          <a href="#" className="hover:text-[#E63946]">커리큘럼</a>
          <a href="#" className="hover:text-[#E63946]">수강후기</a>
          <button className="bg-[#E63946] text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
            상담신청
          </button>
        </div>
      </nav>

      {/* 메인 히어로 섹션 */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          왕초보도 웃으며 시작하는 <br />
          <span className="text-[#E63946]">니코니코 일본어 학원</span>
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          기초부터 JLPT 합격까지, 50명의 수강생과 함께 증명한 <br />
          차별화된 1:1 밀착 케어를 경험해보세요.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800">
            무료 레벨테스트 신청
          </button>
          <button className="border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100">
            시간표 보기
          </button>
        </div>
      </main>
    </div>
  )
}

export default App