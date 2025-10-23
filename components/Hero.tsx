import { useState, useEffect } from 'react';

export default function Hero() {
  const [fontChangeDone, setFontChangeDone] = useState(false); // 폰트 체인지 끝났는지
  const [moveUp, setMoveUp] = useState(false); // 이름 이동할지
  const [showContent, setShowContent] = useState(false); // 문장 등장할지
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const keywords = ['use-friendly product', 'web applications', 'experiences'];

  useEffect(() => {
    // 1. 폰트 체인지 끝내는 타이밍 (예: 3초)
    const fontTimer = setTimeout(() => {
      setFontChangeDone(true);
    }, 3000);

    // 2. 폰트 체인지 끝나고 약간 딜레이 후 이동 시작
    const moveTimer = setTimeout(() => {
      setMoveUp(true);
    }, 2500);

    // 3. 이동 끝나고 문장 등장
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 6000);

    return () => {
      clearTimeout(fontTimer);
      clearTimeout(moveTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    if (showContent) {
      const interval = setInterval(() => {
        setIsAnimatingOut(true);
        setTimeout(() => {
          setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
          setIsAnimatingOut(false);
        }, 500);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showContent]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 이름 */}
      <div
        className={`absolute bottom-12 left-12 flex text-[160px] font-bold leading-none  transition-transform duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          moveUp ? 'translate-y-[-65vh]' : 'translate-y-0'
        }`}
      >
        <span
          className={`inline-block w-[120px] text-center mr-[-4px]
 ${!fontChangeDone ? 'animate-font-change-smooth' : ''}`}
        >
          J
        </span>
        aimie Lee
      </div>

      {/* 메인 문장 */}
      {showContent && (
        // <div className="absolute top-[50%] left-12 transform -translate-y-1/2 flex flex-col space-y-8 animate-fade-in-up duration-[1800ms]">
        //   <h1 className="max-w-5xl text-6xl font-extrabold leading-tight">
        //     A developer passionate <br />
        //     about creating beautiful
        //     <br />
        //     <span className="relative inline-block h-[80px] overflow-hidden text-purple-400">
        //       <span
        //         className={`block transition-all duration-500 ease-in-out ${
        //           isAnimatingOut
        //             ? 'opacity-0 translate-y-8'
        //             : 'opacity-100 translate-y-0'
        //         }`}
        //       >
        //         {keywords[currentKeywordIndex]}
        //       </span>
        //     </span>
        //   </h1>
        // </div>
        <div className="absolute top-[50%] left-0 w-full transform -translate-y-1/2 px-12 animate-fade-in-up duration-[1800ms]">
          <div className="max-w-[1280px] mx-auto flex flex-col space-y-8">
            <h1 className="max-w-5xl text-6xl font-extrabold leading-tight">
              A developer passionate <br />
              about creating beautiful <br />
              <span className="relative inline-block h-[80px] overflow-hidden text-purple-400">
                <span
                  className={`block transition-all duration-500 ease-in-out ${
                    isAnimatingOut
                      ? 'opacity-0 translate-y-8'
                      : 'opacity-100 translate-y-0'
                  }`}
                >
                  {keywords[currentKeywordIndex]}
                </span>
              </span>
            </h1>
          </div>
        </div>
      )}
    </section>
  );
}
