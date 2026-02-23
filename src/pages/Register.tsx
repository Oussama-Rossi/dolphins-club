import { useState } from "react";
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

  const today = new Date().toLocaleDateString("ar-DZ");

  return (
    <div
      className="min-h-screen bg-muted/40 py-4 px-2 flex items-center justify-center"
      dir="rtl"
    >
      <div className="w-full max-w-[220mm] flex flex-col items-center">
        {/* شريط علوي - لا يطبع */}
        <div className="no-print w-full max-w-[210mm] mb-3 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground text-sm"
          >
            ← العودة للصفحة الرئيسية
          </Button>
          <span className="text-[11px] text-muted-foreground">
            تاريخ اليوم: {today}
          </span>
        </div>

        {/* ورقة A4 مضبوطة تماماً */}
        <div className="print-sheet bg-white shadow-xl border border-border">
          <div className="print-inner">
            {/* هيدر إداري رسمي */}
            <header className="pb-2 mb-2 border-b border-dashed border-primary/40">
              <div className="flex items-start justify-between gap-3 text-[11px] leading-[1.35]">
                <div>
                  <p className="font-semibold">
                    الجمهورية الجزائرية الديمقراطية الشعبية
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    مديرية الشباب والرياضة لولاية قالمة
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground">
                    الموسم الرياضي: 2026 / 2025
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    رقم الاستمارة: ................
                  </p>
                </div>
              </div>

              <div className="text-center mt-1">
                <h1 className="text-lg font-black text-foreground tracking-wide">
                  نادي الدلافين للسباحة
                </h1>
                <p className="text-[11px] font-semibold text-primary mt-0.5">
                  فرع حمام دباغ
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold">
                  استمارة تسجيل / انخراط
                </p>
              </div>
            </header>

            {/* القسم الأول: معلومات المنخرط */}
            <section className="mb-2.5">
              <h2 className="section-title">
                القسم الأول: معلومات المنخرط
              </h2>
              <div className="grid grid-cols-12 gap-x-3 gap-y-1.5 text-[11px]">
                <div className="col-span-12 md:col-span-7">
                  <Label className="label-small">الاسم واللقب</Label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="أدخل الاسم الكامل كما في شهادة الميلاد"
                    className="input-line"
                  />
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Label className="label-small">تاريخ الميلاد</Label>
                  <Input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => update("birthDate", e.target.value)}
                    className="input-line text-[11px]"
                  />
                </div>
                <div className="col-span-6 md:col-span-2">
                  <Label className="label-small">الجنس</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(v) => update("gender", v)}
                    className="flex items-center gap-3 mt-0.5"
                    dir="rtl"
                  >
                    <div className="flex items-center gap-1.5">
                      <RadioGroupItem value="ذكر" id="male" />
                      <Label
                        htmlFor="male"
                        className="cursor-pointer text-[11px]"
                      >
                        ذكر
                      </Label>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RadioGroupItem value="أنثى" id="female" />
                      <Label
                        htmlFor="female"
                        className="cursor-pointer text-[11px]"
                      >
                        أنثى
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <Label className="label-small">العنوان الكامل</Label>
                  <Input
                    value={formData.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder="البلدية – الحي – رقم المنزل"
                    className="input-line"
                  />
                </div>
                <div className="col-span-12 md:col-span-5">
                  <Label className="label-small">
                    ملاحظات صحية هامة (إن وجدت)
                  </Label>
                  <Input
                    value={formData.medicalNotes}
                    onChange={(e) => update("medicalNotes", e.target.value)}
                    placeholder="حساسية، مرض مزمن، دواء دائم ..."
                    className="input-line"
                  />
                </div>
              </div>
            </section>

            {/* القسم الثاني: معلومات ولي الأمر */}
            <section className="mb-2.5">
              <h2 className="section-title">
                القسم الثاني: معلومات ولي الأمر
              </h2>
              <div className="grid grid-cols-12 gap-x-3 gap-y-1.5 text-[11px]">
                <div className="col-span-12 md:col-span-6">
                  <Label className="label-small">
                    اسم ولقب ولي الأمر
                  </Label>
                  <Input
                    value={formData.guardianName}
                    onChange={(e) => update("guardianName", e.target.value)}
                    placeholder="أدخل اسم ولقب ولي الأمر"
                    className="input-line"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Label className="label-small">رقم الهاتف</Label>
                  <Input
                    value={formData.guardianPhone}
                    onChange={(e) => update("guardianPhone", e.target.value)}
                    placeholder="مثال: 06xx xx xx xx"
                    className="input-line"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Label className="label-small">توقيع ولي الأمر</Label>
                  <div className="mt-0.5 h-10 border border-dashed border-muted-foreground/40 rounded-sm flex items-center justify-center text-[10px] text-muted-foreground">
                    مكان التوقيع
                  </div>
                </div>
              </div>
            </section>

            {/* القسم الثالث: الفوج واليوم */}
            <section className="mb-2.5">
              <h2 className="section-title">
                القسم الثالث: الفوج واليوم
              </h2>
              <div className="grid grid-cols-12 gap-x-3 gap-y-1.5 text-[11px]">
                <div className="col-span-12 md:col-span-4">
                  <Label className="label-small">الفوج</Label>
                  <div className="mt-0.5 h-8 border border-dashed border-muted-foreground/50 rounded-sm bg-muted/10" />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <Label className="label-small">اليوم</Label>
                  <div className="mt-0.5 h-8 border border-dashed border-muted-foreground/50 rounded-sm bg-muted/10" />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <Label className="label-small">الساعة</Label>
                  <div className="mt-0.5 h-8 border border-dashed border-muted-foreground/50 rounded-sm bg-muted/10" />
                </div>
              </div>
            </section>

            {/* القسم الرابع: التوقيعات والمصادقات */}
            <section className="mb-2">
              <h2 className="section-title">
                القسم الرابع: التوقيعات والمصادقات
              </h2>
              <div className="grid grid-cols-12 gap-x-3 gap-y-1.5 text-[10px]">
                <div className="col-span-12 md:col-span-4 text-center">
                  <p className="font-semibold text-muted-foreground mb-0.5">
                    توقيع ومصادقة الطبيب
                  </p>
                  <p className="text-[9px] text-muted-foreground mb-0.5">
                    (قبول المنخرط في رياضة السباحة)
                  </p>
                  <div className="h-18 border border-dashed border-muted-foreground/40 rounded-sm" />
                </div>
                <div className="col-span-12 md:col-span-4 text-center">
                  <p className="font-semibold text-muted-foreground mb-0.5">
                    توقيع رئيس النادي
                  </p>
                  <div className="h-18 border border-dashed border-muted-foreground/40 rounded-sm mt-2" />
                </div>
                <div className="col-span-12 md:col-span-4 text-center">
                  <p className="font-semibold text-muted-foreground mb-0.5">
                    الصورة الشمسية
                  </p>
                  <div className="h-18 border border-dashed border-muted-foreground/40 rounded-sm flex items-center justify-center mt-2">
                    <span className="text-muted-foreground text-[9px]">
                      تُلصق الصورة هنا (4×3)
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* إقرار ولي الأمر */}
            <section className="mt-1.5 text-[10px] leading-relaxed border-t border-dashed border-muted-foreground/40 pt-1.5">
              <p className="font-semibold mb-0.5">إقرار ولي الأمر:</p>
              <p className="text-muted-foreground">
                أقر أنا الممضي أسفله، ولي أمر المنخرط، أن المعلومات المدونة أعلاه صحيحة،
                وأتحمل كامل المسؤولية عن أي تصريح غير صحيح، كما ألتزم باحترام القانون
                الداخلي للنادي وجميع التعليمات التنظيمية الخاصة بممارسة رياضة السباحة.
              </p>

              <div className="flex justify-between mt-1.5">
                <span>حرّر بـ: حمام دباغ في: ........../........../20....</span>
                <span>إمضاء ولي الأمر: ....................................</span>
              </div>
            </section>
          </div>
        </div>

        {/* زر الطباعة - لا يُطبع */}
        <div className="no-print w-full max-w-[210mm] mt-4 text-center">
          <Button
            size="lg"
            onClick={handlePrint}
            className="font-bold text-sm px-8 py-3 rounded-full shadow-lg"
          >
            🖨️ طباعة الاستمارة
          </Button>
          <p className="text-muted-foreground text-[11px] mt-2">
            يُفضّل اختيار A4، مقياس 100%، وتعطيل رؤوس وتذييل المتصفح.
          </p>
        </div>
      </div>

      {/* أنماط خاصة بالطباعة A4 */}
      <style>{`
        .print-sheet {
          width: 210mm;
          height: 296.99mm; /* أقل قليلاً من 297 لتفادي overflow في بعض المتصفحات */ /* [web:30][web:34] */
        }

        .print-inner {
          box-sizing: border-box;
          padding: 8mm 10mm;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .section-title {
          font-weight: 700;
          font-size: 11px;
          background-color: rgb(241 245 249);
          color: rgb(15 23 42);
          padding: 3px 8px;
          border-radius: 4px;
          margin-bottom: 6px;
          display: inline-block;
        }

        .label-small {
          font-size: 10px;
          font-weight: 600;
        }

        .input-line {
          margin-top: 2px;
          height: 20px;
          border-width: 0 0 1px 0;
          border-color: rgba(37, 99, 235, 0.5);
          border-radius: 0;
          padding-top: 0;
          padding-bottom: 0;
          background: transparent;
        }

        .input-line:focus-visible {
          outline: none;
          box-shadow: none;
          border-color: rgb(37 99 235);
        }

        .h-18 {
          height: 38mm;
        }

        @media print {
          html, body {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          #root {
            width: 210mm;
            height: 297mm;
          }

          .no-print {
            display: none !important;
          }

          .print-sheet {
            margin: 0;
            box-shadow: none !important;
            border-radius: 0 !important;
            border: none !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-before: avoid !important;
            page-break-after: avoid !important;
            overflow: hidden;
          }

          .print-sheet * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
