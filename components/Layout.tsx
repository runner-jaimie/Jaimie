import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 왼쪽 고정 사이드바 */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <Navbar />
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}
