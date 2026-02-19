import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      {/* Hero Section */}
      <header className="wave-bg wave-pattern relative text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Dolphin SVG Icon */}
          <div className="mb-6 flex justify-center">
            <svg viewBox="0 0 100 80" className="w-24 h-24 text-white/90 drop-shadow-lg" fill="currentColor">
              <path d="M75,15 C65,5 50,8 42,18 C38,23 36,30 38,37 C30,32 20,30 12,33 C8,34 5,38 8,40 C12,43 20,42 28,40 C26,45 28,52 33,56 C38,60 45,62 52,60 C48,65 46,72 48,76 C49,78 52,78 53,76 C55,72 55,66 56,62 C62,60 68,55 72,48 C76,41 78,32 78,25 C90,28 95,22 92,18 C89,14 82,16 78,18 C77,17 76,16 75,15 Z M65,30 C63,30 62,29 62,27 C62,25 63,24 65,24 C67,24 68,25 68,27 C68,29 67,30 65,30 Z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-md">
            نادي الدلافين للسباحة
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2 opacity-90">
            فرع حمام دباغ
          </p>
          <p className="text-lg opacity-80 mb-10">
            سجّل الآن وانضم إلى عائلة الدلافين!
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/register")}
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            📝 ابدأ التسجيل
          </Button>
        </div>
      </header>

      {/* Info Section */}
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏊", title: "تدريب احترافي", desc: "مدربون معتمدون لجميع المستويات" },
              { icon: "👶", title: "جميع الأعمار", desc: "برامج مخصصة للأطفال" },
              { icon: "🏆", title: "منافسات", desc: "مشاركة في البطولات الوطنية" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 text-center">
        <p className="text-muted-foreground text-sm">
          📍 حمام دباغ، ولاية قالمة &nbsp;|&nbsp; 📞 للتواصل: اتصل بإدارة النادي
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          © {new Date().getFullYear()} نادي الدلافين للسباحة - جميع الحقوق محفوظة
        </p>
      </footer>
    </div>
  );
};

export default Index;
