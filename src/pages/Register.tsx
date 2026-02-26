import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "ذكر",
    guardianName: "",
    guardianPhone: "",
    address: "",
    medicalNotes: "",
  });

  const update = (key: string, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handlePrint = () => window.print();

  const today = useMemo(() => new Date().toLocaleDateString("ar-DZ"), []);

  return (
    <div className="min-h-screen bg-muted/40 py-6 px-3" dir="rtl">
      {/* شريط أدوات - لا يطبع */}
      <div className="no-print mx-auto w-full max-w-[210mm] mb-4 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-muted-foreground"
        >
          ← العودة للصفحة الرئيسية
        </Button>

        <div className="text-xs text-muted-foreground">
          تاريخ اليوم: {today}
        </div>
      </div>

      {/* ورقة A4 */}
      <div className="a4-page mx-auto w-full max-w-[210mm]">
        <div className="a4-inner">
          {/* Header */}
          <header className="a4-header">
            <div className="a4-header__row">
              <div className="a4-header__left">
                <div className="a4-muted">الجمهورية الجزائرية الديمقراطية الشعبية</div>
                <div className="a4-muted">مديرية الشباب والرياضة لولاية قالمة</div>
              </div>

              <div className="a4-header__right">
                <div className="a4-muted">الموسم الرياضي: 2026 / 2025</div>
                <div className="a4-muted">رقم الاستمارة: ................</div>
              </div>
            </div>

            <div className="a4-title">
              <div className="a4-title__main">نادي الدلافين للسباحة</div>
              <div className="a4-title__sub">فرع حمام دباغ</div>
              <div className="a4-title__note">استمارة تسجيل / انخراط</div>
            </div>
          </header>

          {/* Section: Member */}
          <section className="a4-section">
            <div className="a4-section__title">القسم الأول: معلومات المنخرط</div>

            <div className="a4-grid">
              <div className="a4-col a4-col-7">
                <Label className="a4-label">الاسم واللقب</Label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="أدخل الاسم الكامل كما في شهادة الميلاد"
                  className="a4-input"
                />
              </div>

              <div className="a4-col a4-col-3">
                <Label className="a4-label">تاريخ الميلاد</Label>
                <Input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => update("birthDate", e.target.value)}
                  className="a4-input"
                />
              </div>

              <div className="a4-col a4-col-2">
                <Label className="a4-label">الجنس</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(v) => update("gender", v)}
                  className="a4-radio"
                  dir="rtl"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="ذكر" id="male" />
                    <Label htmlFor="male" className="a4-label cursor-pointer">
                      ذكر
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="أنثى" id="female" />
                    <Label htmlFor="female" className="a4-label cursor-pointer">
                      أنثى
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="a4-col a4-col-7">
                <Label className="a4-label">العنوان الكامل</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="البلدية – الحي – رقم المنزل"
                  className="a4-input"
                />
              </div>

              <div className="a4-col a4-col-5">
                <Label className="a4-label">ملاحظات صحية هامة (إن وجدت)</Label>
                <Input
                  value={formData.medicalNotes}
                  onChange={(e) => update("medicalNotes", e.target.value)}
                  placeholder="حساسية، مرض مزمن، دواء دائم ..."
                  className="a4-input"
                />
              </div>
            </div>
          </section>

          {/* Section: Guardian */}
          <section className="a4-section">
            <div className="a4-section__title">القسم الثاني: معلومات ولي الأمر</div>

            <div className="a4-grid">
              <div className="a4-col a4-col-6">
                <Label className="a4-label">اسم ولقب ولي الأمر</Label>
                <Input
                  value={formData.guardianName}
                  onChange={(e) => update("guardianName", e.target.value)}
                  placeholder="أدخل اسم ولقب ولي الأمر"
                  className="a4-input"
                />
              </div>

              <div className="a4-col a4-col-3">
                <Label className="a4-label">رقم الهاتف</Label>
                <Input
                  value={formData.guardianPhone}
                  onChange={(e) => update("guardianPhone", e.target.value)}
                  placeholder="مثال: 06xx xx xx xx"
                  className="a4-input"
                />
              </div>

              <div className="a4-col a4-col-3">
                <Label className="a4-label">توقيع ولي الأمر</Label>
                <div className="a4-box a4-box--sign">مكان التوقيع</div>
              </div>
            </div>
          </section>

          {/* Section: Group */}
          <section className="a4-section">
            <div className="a4-section__title">القسم الثالث: الفوج واليوم</div>

            <div className="a4-grid">
              <div className="a4-col a4-col-4">
                <Label className="a4-label">الفوج</Label>
                <div className="a4-box" />
              </div>
              <div className="a4-col a4-col-4">
                <Label className="a4-label">اليوم</Label>
                <div className="a4-box" />
              </div>
              <div className="a4-col a4-col-4">
                <Label className="a4-label">الساعة</Label>
                <div className="a4-box" />
              </div>
            </div>
          </section>

          {/* Section: Approvals */}
          <section className="a4-section">
            <div className="a4-section__title">القسم الرابع: التوقيعات والمصادقات</div>

            <div className="a4-grid">
              <div className="a4-col a4-col-4 a4-center">
                <div className="a4-smallhead">توقيع ومصادقة الطبيب</div>
                <div className="a4-smallnote">(قبول المنخرط في رياضة السباحة)</div>
                <div className="a4-box a4-box--tall" />
              </div>

              <div className="a4-col a4-col-4 a4-center">
                <div className="a4-smallhead">توقيع رئيس النادي</div>
                <div className="a4-box a4-box--tall mt-3" />
              </div>

              <div className="a4-col a4-col-4 a4-center">
                <div className="a4-smallhead">الصورة الشمسية</div>
                <div className="a4-box a4-box--tall mt-3 flex items-center justify-center">
                  <span className="a4-smallnote">تُلصق الصورة هنا (4×3)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Declaration */}
          <section className="a4-declaration">
            <div className="a4-declaration__title">إقرار ولي الأمر:</div>
            <div className="a4-declaration__text">
              أقر أنا الممضي أسفله، ولي أمر المنخرط، أن المعلومات المدونة أعلاه صحيحة،
              وأتحمل كامل المسؤولية عن أي تصريح غير صحيح، كما ألتزم باحترام القانون
              الداخلي للنادي وجميع التعليمات التنظيمية الخاصة بممارسة رياضة السباحة.
            </div>

            <div className="a4-declaration__row">
              <span>حرّر بـ: حمام دباغ في: ........../........../........</span>
              <span>إمضاء ولي الأمر: ....................................</span>
            </div>
          </section>
        </div>
      </div>

      {/* زر الطباعة - لا يُطبع */}
      <div className="no-print mx-auto w-full max-w-[210mm] mt-6 text-center">
        <Button
          size="lg"
          onClick={handlePrint}
          className="font-bold text-base px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🖨️ طباعة الاستمارة
        </Button>
        <p className="text-muted-foreground text-xs mt-2">
          للطباعة الأفضل: اختر A4، و Scale = 100%، وأوقف Headers/Footers.
        </p>
      </div>

      {/* CSS (شاشة + طباعة احترافية) */}
      <style>{`
        /* ===== Screen look ===== */
        .a4-page{
          background:#fff;
          border:1px solid hsl(var(--border));
          border-radius: 12px;
          box-shadow: 0 20px 50px rgba(2,6,23,.08);
          overflow: hidden;
        }
        .a4-inner{
          padding: 10mm 10mm;
        }

        /* ===== Typography ===== */
        .a4-muted{ font-size: 11px; color: hsl(var(--muted-foreground)); font-weight: 600; line-height: 1.35; }
        .a4-title{ text-align:center; margin-top: 6px; }
        .a4-title__main{ font-size: 20px; font-weight: 900; letter-spacing: .2px; }
        .a4-title__sub{ font-size: 12px; font-weight: 800; margin-top: 2px; color: hsl(var(--primary)); }
        .a4-title__note{ font-size: 11px; margin-top: 2px; color: hsl(var(--muted-foreground)); font-weight: 700; }

        .a4-header{
          padding-bottom: 8px;
          margin-bottom: 10px;
          border-bottom: 1px dashed rgba(59,130,246,.35);
        }
        .a4-header__row{
          display:flex;
          justify-content: space-between;
          gap: 12px;
        }
        .a4-header__left, .a4-header__right{ width: 50%; }
        .a4-header__right{ text-align: left; } /* في RTL نحب الأرقام على اليسار */

        /* ===== Sections ===== */
        .a4-section{ margin-bottom: 10px; }
        .a4-section__title{
          font-size: 12px;
          font-weight: 800;
          padding: 4px 10px;
          border: 1px solid rgba(2,6,23,.12);
          border-right: 4px solid rgba(59,130,246,.6);
          border-radius: 8px;
          background: rgba(241,245,249,.75);
          margin-bottom: 8px;
        }

        /* ===== Grid ===== */
        .a4-grid{
          display:grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 8px 10px;
        }
        .a4-col{ grid-column: span 12; }
        .a4-col-2{ grid-column: span 12; }
        .a4-col-3{ grid-column: span 12; }
        .a4-col-4{ grid-column: span 12; }
        .a4-col-5{ grid-column: span 12; }
        .a4-col-6{ grid-column: span 12; }
        .a4-col-7{ grid-column: span 12; }

        @media (min-width: 768px){
          .a4-col-2{ grid-column: span 2; }
          .a4-col-3{ grid-column: span 3; }
          .a4-col-4{ grid-column: span 4; }
          .a4-col-5{ grid-column: span 5; }
          .a4-col-6{ grid-column: span 6; }
          .a4-col-7{ grid-column: span 7; }
        }

        .a4-label{ font-size: 11px; font-weight: 700; }
        .a4-input{
          margin-top: 3px;
          height: 34px;
          border-radius: 8px;
          box-shadow: none !important;
        }

        .a4-radio{ display:flex; gap: 14px; margin-top: 4px; }

        .a4-box{
          margin-top: 3px;
          height: 34px;
          border: 1px dashed rgba(2,6,23,.25);
          border-radius: 8px;
          background: rgba(2,6,23,.02);
        }
        .a4-box--sign{
          height: 52px;
          display:flex;
          align-items:center;
          justify-content:center;
          color: hsl(var(--muted-foreground));
          font-size: 11px;
          font-weight: 700;
          background: transparent;
        }
        .a4-box--tall{ height: 72px; background: transparent; }

        .a4-center{ text-align: center; }
        .a4-smallhead{ font-size: 11px; font-weight: 800; color: hsl(var(--muted-foreground)); }
        .a4-smallnote{ font-size: 10px; font-weight: 700; color: hsl(var(--muted-foreground)); margin-top: 2px; }

        .a4-declaration{
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px dashed rgba(2,6,23,.25);
          font-size: 11px;
          line-height: 1.55;
        }
        .a4-declaration__title{ font-weight: 900; margin-bottom: 4px; }
        .a4-declaration__text{ color: hsl(var(--muted-foreground)); font-weight: 650; }
        .a4-declaration__row{
          display:flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 8px;
          font-weight: 750;
        }

        /* ===== PRINT: احترافي وثابت ===== */
        @media print {
          /* توجيه الطباعة: A4 وهوامش معقولة (أفضل من margin:0 لمعظم الطابعات) */
          @page { size: A4; margin: 12mm; } /* [web:40][web:39] */

          html, body{
            margin:0 !important;
            padding:0 !important;
            background:#fff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .no-print{ display:none !important; }

          /* إزالة كل تجميل الشاشة */
          .a4-page{
            box-shadow:none !important;
            border:none !important;
            border-radius:0 !important;
            max-width: unset !important;
            width: auto !important;
          }
          .a4-inner{ padding: 0 !important; }

          /* اجعلها أبيض/أسود عملي */
          .a4-section__title{
            background: transparent !important;
            border-color: #111 !important;
            border-right-color: #111 !important;
          }
          .a4-muted, .a4-title__note, .a4-smallhead, .a4-smallnote, .a4-declaration__text{
            color: #111 !important;
          }

          /* منع التقطيع داخل العناصر */
          .a4-page, .a4-page *{
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
