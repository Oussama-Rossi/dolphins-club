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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4" dir="rtl">
      {/* شريط الأدوات - لا يطبع */}
      <div className="no-print max-w-[210mm] mx-auto mb-6 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-slate-600 hover:text-slate-900"
        >
          ← العودة للصفحة الرئيسية
        </Button>
        <div className="text-xs text-slate-500 font-semibold">
          تاريخ اليوم: {today}
        </div>
      </div>

      {/* ورقة A4 */}
      <div className="print-sheet max-w-[210mm] mx-auto bg-white shadow-2xl rounded-xl border border-slate-200">
        <div className="sheet-inner">
          {/* الهيدر الرسمي */}
          <header className="sheet-header">
            <div className="header-row">
              <div className="header-left">
                <div className="header-text">الجمهورية الجزائرية الديمقراطية الشعبية</div>
                <div className="header-subtext">مديرية الشباب والرياضة لولاية قالمة</div>
              </div>
              <div className="header-right">
                <div className="header-subtext">الموسم الرياضي: 2026 / 2025</div>
                <div className="header-subtext">رقم الاستمارة: ................</div>
              </div>
            </div>

            <div className="header-title">
              <h1 className="title-main">نادي الدلافين للسباحة</h1>
              <div className="title-sub">فرع حمام دباغ</div>
              <div className="title-note">استمارة تسجيل / انخراط</div>
            </div>
          </header>

          {/* القسم الأول: معلومات المنخرط */}
          <section className="form-section">
            <div className="section-title">القسم الأول: معلومات المنخرط</div>

            <div className="form-grid">
              {/* الاسم واللقب */}
              <div className="form-field col-7">
                <Label className="field-label">الاسم واللقب</Label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="أدخل الاسم الكامل كما في شهادة الميلاد"
                  className="field-input screen-only"
                />
                <div className="field-print print-only">
                  {formData.fullName || "\u00A0"}
                </div>
              </div>

              {/* تاريخ الميلاد */}
              <div className="form-field col-3">
                <Label className="field-label">تاريخ الميلاد</Label>
                <Input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => update("birthDate", e.target.value)}
                  className="field-input screen-only"
                />
                <div className="field-print print-only">
                  {formData.birthDate || "\u00A0"}
                </div>
              </div>

              {/* الجنس */}
              <div className="form-field col-2">
                <Label className="field-label">الجنس</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(v) => update("gender", v)}
                  className="field-radio screen-only"
                  dir="rtl"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="ذكر" id="male" />
                    <Label htmlFor="male" className="cursor-pointer text-sm">ذكر</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="أنثى" id="female" />
                    <Label htmlFor="female" className="cursor-pointer text-sm">أنثى</Label>
                  </div>
                </RadioGroup>
                <div className="field-print print-only">
                  {formData.gender}
                </div>
              </div>

              {/* العنوان */}
              <div className="form-field col-7">
                <Label className="field-label">العنوان الكامل</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="البلدية – الحي – رقم المنزل"
                  className="field-input screen-only"
                />
                <div className="field-print print-only">
                  {formData.address || "\u00A0"}
                </div>
              </div>

              {/* الملاحظات الصحية */}
              <div className="form-field col-5">
                <Label className="field-label">ملاحظات صحية هامة (إن وجدت)</Label>
                <Input
                  value={formData.medicalNotes}
                  onChange={(e) => update("medicalNotes", e.target.value)}
                  placeholder="حساسية، مرض مزمن، دواء دائم ..."
                  className="field-input screen-only"
                />
                <div className="field-print print-only">
                  {formData.medicalNotes || "\u00A0"}
                </div>
              </div>
            </div>
          </section>

          {/* القسم الثاني: معلومات ولي الأمر */}
          <section className="form-section">
            <div className="section-title">القسم الثاني: معلومات ولي الأمر</div>

            <div className="form-grid">
              {/* اسم ولي الأمر */}
              <div className="form-field col-6">
                <Label className="field-label">اسم ولقب ولي الأمر</Label>
                <Input
                  value={formData.guardianName}
                  onChange={(e) => update("guardianName", e.target.value)}
                  placeholder="أدخل اسم ولقب ولي الأمر"
                  className="field-input screen-only"
                />
                <div className="field-print print-only">
                  {formData.guardianName || "\u00A0"}
                </div>
              </div>

              {/* رقم الهاتف */}
              <div className="form-field col-3">
                <Label className="field-label">رقم الهاتف</Label>
                <Input
                  value={formData.guardianPhone}
                  onChange={(e) => update("guardianPhone", e.target.value)}
                  placeholder="مثال: 06xx xx xx xx"
                  className="field-input screen-only"
                />
                <div className="field-print print-only">
                  {formData.guardianPhone || "\u00A0"}
                </div>
              </div>

              {/* توقيع ولي الأمر */}
              <div className="form-field col-3">
                <Label className="field-label">توقيع ولي الأمر</Label>
                <div className="signature-box">مكان التوقيع</div>
              </div>
            </div>
          </section>

          {/* القسم الثالث: الفوج واليوم */}
          <section className="form-section">
            <div className="section-title">القسم الثالث: الفوج واليوم</div>

            <div className="form-grid">
              <div className="form-field col-4">
                <Label className="field-label">الفوج</Label>
                <div className="empty-box" />
              </div>
              <div className="form-field col-4">
                <Label className="field-label">اليوم</Label>
                <div className="empty-box" />
              </div>
              <div className="form-field col-4">
                <Label className="field-label">الساعة</Label>
                <div className="empty-box" />
              </div>
            </div>
          </section>

          {/* القسم الرابع: التوقيعات والمصادقات */}
          <section className="form-section">
            <div className="section-title">القسم الرابع: التوقيعات والمصادقات</div>

            <div className="form-grid">
              <div className="form-field col-4 text-center">
                <div className="approval-title">توقيع ومصادقة الطبيب</div>
                <div className="approval-note">(قبول المنخرط في رياضة السباحة)</div>
                <div className="approval-box" />
              </div>

              <div className="form-field col-4 text-center">
                <div className="approval-title">توقيع رئيس النادي</div>
                <div className="approval-box mt-4" />
              </div>

              <div className="form-field col-4 text-center">
                <div className="approval-title">الصورة الشمسية</div>
                <div className="approval-box photo-box mt-4">
                  <span className="photo-text">تُلصق الصورة هنا (4×3)</span>
                </div>
              </div>
            </div>
          </section>

          {/* إقرار ولي الأمر */}
          <section className="declaration">
            <div className="declaration-title">إقرار ولي الأمر:</div>
            <div className="declaration-text">
              أقر أنا الممضي أسفله، ولي أمر المنخرط، أن المعلومات المدونة أعلاه صحيحة،
              وأتحمل كامل المسؤولية عن أي تصريح غير صحيح، كما ألتزم باحترام القانون
              الداخلي للنادي وجميع التعليمات التنظيمية الخاصة بممارسة رياضة السباحة.
            </div>
            <div className="declaration-footer">
              <span>حرّر بـ: حمام دباغ في: ........../........../........</span>
              <span>إمضاء ولي الأمر: ....................................</span>
            </div>
          </section>
        </div>
      </div>

      {/* زر الطباعة - لا يُطبع */}
      <div className="no-print max-w-[210mm] mx-auto mt-8 text-center">
        <Button
          size="lg"
          onClick={handlePrint}
          className="font-bold text-lg px-12 py-6 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
        >
          🖨️ طباعة الاستمارة
        </Button>
        <p className="text-slate-600 text-sm mt-4 font-semibold">
          للطباعة المثالية: اختر A4، Scale = 100%، وفعّل "Background graphics"
        </p>
      </div>

      {/* CSS الاحترافي - شاشة + طباعة */}
      <style>{`
        /* ===== عرض الشاشة ===== */
        .screen-only { display: block; }
        .print-only { display: none; }

        .print-sheet {
          overflow: hidden;
        }

        .sheet-inner {
          padding: 12mm 10mm;
        }

        /* الهيدر */
        .sheet-header {
          padding-bottom: 8px;
          margin-bottom: 12px;
          border-bottom: 2px solid #e2e8f0;
        }

        .header-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 8px;
        }

        .header-left { width: 50%; }
        .header-right { width: 50%; text-align: left; }

        .header-text {
          font-size: 12px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.4;
        }

        .header-subtext {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          line-height: 1.4;
        }

        .header-title {
          text-align: center;
          margin-top: 8px;
        }

        .title-main {
          font-size: 22px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: 0.3px;
        }

        .title-sub {
          font-size: 14px;
          font-weight: 800;
          color: #3b82f6;
          margin-top: 4px;
        }

        .title-note {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          margin-top: 4px;
        }

        /* الأقسام */
        .form-section {
          margin-bottom: 12px;
          break-inside: avoid;
        }

        .section-title {
          font-size: 13px;
          font-weight: 800;
          padding: 6px 12px;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-right: 4px solid #3b82f6;
          border-radius: 8px;
          margin-bottom: 10px;
          color: #0f172a;
        }

        /* Grid النموذج */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 10px 12px;
        }

        .form-field {
          grid-column: span 12;
          break-inside: avoid;
        }

        .col-2 { grid-column: span 12; }
        .col-3 { grid-column: span 12; }
        .col-4 { grid-column: span 12; }
        .col-5 { grid-column: span 12; }
        .col-6 { grid-column: span 12; }
        .col-7 { grid-column: span 12; }

        @media (min-width: 768px) {
          .col-2 { grid-column: span 2; }
          .col-3 { grid-column: span 3; }
          .col-4 { grid-column: span 4; }
          .col-5 { grid-column: span 5; }
          .col-6 { grid-column: span 6; }
          .col-7 { grid-column: span 7; }
        }

        .field-label {
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          display: block;
          margin-bottom: 4px;
        }

        .field-input {
          width: 100%;
          height: 38px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 0 12px;
          font-size: 13px;
          transition: all 0.2s;
        }

        .field-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .field-radio {
          display: flex;
          gap: 16px;
          margin-top: 6px;
        }

        .signature-box {
          height: 50px;
          border: 2px dashed #cbd5e1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
          margin-top: 4px;
        }

        .empty-box {
          height: 38px;
          border: 2px dashed #cbd5e1;
          border-radius: 8px;
          background: #f8fafc;
          margin-top: 4px;
        }

        .approval-title {
          font-size: 12px;
          font-weight: 700;
          color: #475569;
          margin-bottom: 4px;
        }

        .approval-note {
          font-size: 10px;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 6px;
        }

        .approval-box {
          height: 70px;
          border: 2px dashed #cbd5e1;
          border-radius: 8px;
        }

        .photo-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .photo-text {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
        }

        .declaration {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 2px dashed #cbd5e1;
          font-size: 11px;
          line-height: 1.6;
          break-inside: avoid;
        }

        .declaration-title {
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .declaration-text {
          color: #475569;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .declaration-footer {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-weight: 700;
          color: #334155;
          margin-top: 10px;
        }

        /* ===== الطباعة الاحترافية ===== */
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          .no-print { display: none !important; }
          .screen-only { display: none !important; }
          .print-only { display: block !important; }

          .print-sheet {
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }

          .sheet-inner {
            padding: 0 !important;
          }

          /* إزالة الألوان للطباعة */
          .section-title {
            background: transparent !important;
            border-right-color: #000 !important;
            color: #000 !important;
          }

          .title-sub {
            color: #000 !important;
          }

          .header-text,
          .header-subtext,
          .field-label,
          .approval-title,
          .approval-note,
          .declaration-title,
          .declaration-text {
            color: #000 !important;
          }

          /* خانات الطباعة */
          .field-print {
            height: 9mm;
            border: 1.5pt solid #000;
            border-radius: 2mm;
            padding: 1.5mm 3mm;
            font-size: 11pt;
            display: flex;
            align-items: center;
            margin-top: 1mm;
            min-height: 9mm;
          }

          .signature-box,
          .empty-box,
          .approval-box {
            border-color: #000 !important;
            background: transparent !important;
          }

          /* منع التقطيع */
          .form-section,
          .form-field,
          .declaration {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          /* إخفاء أيقونة التاريخ */
          input::-webkit-calendar-picker-indicator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
