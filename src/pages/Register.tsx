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
    <div className="min-h-screen bg-muted/40 py-6 px-4" dir="rtl">
      {/* شريط علوي - لا يُطبع */}
      <div className="no-print max-w-[210mm] mx-auto mb-4 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-muted-foreground"
        >
          ← العودة للصفحة الرئيسية
        </Button>
        <span className="text-xs text-muted-foreground">
          تاريخ اليوم: {today}
        </span>
      </div>

      {/* ورقة A4 */}
      <div className="print-sheet max-w-[210mm] mx-auto bg-white rounded-lg shadow-xl border border-border overflow-hidden">
        <div className="print-content p-8">
          {/* رأس الاستمارة */}
          <header className="header-section">
            <div className="header-row">
              <div className="header-gov">
                <div className="gov-line">الجمهورية الجزائرية الديمقراطية الشعبية</div>
                <div className="gov-line">مديرية الشباب والرياضة لولاية قالمة</div>
              </div>
              <div className="header-info">
                <div className="info-line">الموسم الرياضي: 2026 / 2025</div>
                <div className="info-line">رقم الاستمارة: ................</div>
              </div>
            </div>

            <div className="header-title">
              <h1 className="title-main">نادي الدلافين للسباحة</h1>
              <div className="title-sub">فرع حمام دباغ</div>
              <div className="title-desc">استمارة تسجيل / انخراط</div>
            </div>
          </header>

          {/* القسم الأول: معلومات المنخرط */}
          <section className="form-section">
            <div className="section-title">القسم الأول: معلومات المنخرط</div>

            <div className="form-grid">
              <div className="form-field col-7">
                <Label className="field-label">الاسم واللقب</Label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="أدخل الاسم الكامل كما في شهادة الميلاد"
                  className="screen-only field-input"
                />
                <div className="print-only print-field">{formData.fullName || "\u00A0"}</div>
              </div>

              <div className="form-field col-3">
                <Label className="field-label">تاريخ الميلاد</Label>
                <Input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => update("birthDate", e.target.value)}
                  className="screen-only field-input"
                />
                <div className="print-only print-field">{formData.birthDate || "\u00A0"}</div>
              </div>

              <div className="form-field col-2">
                <Label className="field-label">الجنس</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(v) => update("gender", v)}
                  className="screen-only flex items-center gap-4 mt-1"
                  dir="rtl"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="ذكر" id="male" />
                    <Label htmlFor="male" className="cursor-pointer text-[12px]">ذكر</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="أنثى" id="female" />
                    <Label htmlFor="female" className="cursor-pointer text-[12px]">أنثى</Label>
                  </div>
                </RadioGroup>
                <div className="print-only print-field">{formData.gender}</div>
              </div>

              <div className="form-field col-7">
                <Label className="field-label">العنوان الكامل</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="البلدية – الحي – رقم المنزل"
                  className="screen-only field-input"
                />
                <div className="print-only print-field">{formData.address || "\u00A0"}</div>
              </div>

              <div className="form-field col-5">
                <Label className="field-label">ملاحظات صحية هامة (إن وجدت)</Label>
                <Input
                  value={formData.medicalNotes}
                  onChange={(e) => update("medicalNotes", e.target.value)}
                  placeholder="حساسية، مرض مزمن، دواء دائم ..."
                  className="screen-only field-input"
                />
                <div className="print-only print-field">{formData.medicalNotes || "\u00A0"}</div>
              </div>
            </div>
          </section>

          {/* القسم الثاني: معلومات ولي الأمر */}
          <section className="form-section">
            <div className="section-title">القسم الثاني: معلومات ولي الأمر</div>

            <div className="form-grid">
              <div className="form-field col-6">
                <Label className="field-label">اسم ولقب ولي الأمر</Label>
                <Input
                  value={formData.guardianName}
                  onChange={(e) => update("guardianName", e.target.value)}
                  placeholder="أدخل اسم ولقب ولي الأمر"
                  className="screen-only field-input"
                />
                <div className="print-only print-field">{formData.guardianName || "\u00A0"}</div>
              </div>

              <div className="form-field col-3">
                <Label className="field-label">رقم الهاتف</Label>
                <Input
                  value={formData.guardianPhone}
                  onChange={(e) => update("guardianPhone", e.target.value)}
                  placeholder="مثال: 06xx xx xx xx"
                  className="screen-only field-input"
                />
                <div className="print-only print-field">{formData.guardianPhone || "\u00A0"}</div>
              </div>

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

            <div className="approval-grid">
              <div className="approval-col">
                <div className="approval-title">توقيع ومصادقة الطبيب</div>
                <div className="approval-note">(قبول المنخرط في رياضة السباحة)</div>
                <div className="approval-box" />
              </div>

              <div className="approval-col">
                <div className="approval-title">توقيع رئيس النادي</div>
                <div className="approval-box mt-3" />
              </div>

              <div className="approval-col">
                <div className="approval-title">الصورة الشمسية</div>
                <div className="approval-box mt-3 flex items-center justify-center">
                  <span className="approval-note">تُلصق الصورة هنا (4×3)</span>
                </div>
              </div>
            </div>
          </section>

          {/* إقرار ولي الأمر */}
          <section className="declaration-section">
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
      <div className="no-print max-w-[210mm] mx-auto mt-6 text-center">
        <Button
          size="lg"
          onClick={handlePrint}
          className="font-bold text-base px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🖨️ طباعة الاستمارة
        </Button>
        <p className="text-muted-foreground text-xs mt-2">
          للحصول على أفضل نتيجة: اختر A4، Scale 100%، وأوقف Headers/Footers
        </p>
      </div>

      {/* الأنماط الكاملة - شاشة وطباعة */}
      <style>{`
        /* ==================== أنماط الشاشة ==================== */
        .print-sheet {
          width: 100%;
        }

        .print-content {
          background: white;
        }

        /* رأس الاستمارة */
        .header-section {
          padding-bottom: 8px;
          margin-bottom: 12px;
          border-bottom: 1px dashed rgba(59, 130, 246, 0.35);
        }

        .header-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 8px;
        }

        .header-gov, .header-info {
          flex: 1;
        }

        .gov-line, .info-line {
          font-size: 11px;
          font-weight: 600;
          color: hsl(var(--muted-foreground));
          line-height: 1.4;
        }

        .header-info {
          text-align: left;
        }

        .header-title {
          text-align: center;
        }

        .title-main {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.3px;
          margin-bottom: 4px;
        }

        .title-sub {
          font-size: 13px;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-bottom: 2px;
        }

        .title-desc {
          font-size: 11px;
          font-weight: 600;
          color: hsl(var(--muted-foreground));
        }

        /* الأقسام */
        .form-section {
          margin-bottom: 12px;
          break-inside: avoid;
        }

        .section-title {
          font-size: 12px;
          font-weight: 800;
          padding: 5px 12px;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid rgba(2, 6, 23, 0.1);
          border-right: 4px solid rgba(59, 130, 246, 0.6);
          border-radius: 6px;
          margin-bottom: 10px;
        }

        /* الشبكة */
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
          font-size: 11px;
          font-weight: 700;
          display: block;
          margin-bottom: 4px;
        }

        .field-input {
          width: 100%;
          height: 36px;
          border-radius: 6px;
        }

        .signature-box, .empty-box {
          margin-top: 4px;
          height: 48px;
          border: 1px dashed rgba(2, 6, 23, 0.25);
          border-radius: 6px;
          background: rgba(2, 6, 23, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: hsl(var(--muted-foreground));
        }

        .empty-box {
          height: 36px;
        }

        /* شبكة المصادقات */
        .approval-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .approval-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .approval-title {
          font-size: 11px;
          font-weight: 800;
          color: hsl(var(--muted-foreground));
          margin-bottom: 4px;
        }

        .approval-note {
          font-size: 10px;
          font-weight: 600;
          color: hsl(var(--muted-foreground));
          margin-bottom: 4px;
        }

        .approval-box {
          height: 70px;
          border: 1px dashed rgba(2, 6, 23, 0.25);
          border-radius: 6px;
          background: transparent;
        }

        /* الإقرار */
        .declaration-section {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px dashed rgba(2, 6, 23, 0.25);
        }

        .declaration-title {
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .declaration-text {
          font-size: 11px;
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
          font-weight: 600;
        }

        .declaration-footer {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
          font-size: 11px;
          font-weight: 700;
        }

        /* إخفاء/إظهار حسب الوضع */
        .screen-only { display: block; }
        .print-only { display: none; }

        /* ==================== أنماط الطباعة ==================== */
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .no-print {
            display: none !important;
          }

          .screen-only {
            display: none !important;
          }

          .print-only {
            display: block !important;
          }

          .print-sheet {
            max-width: none !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }

          .print-content {
            padding: 0 !important;
          }

          /* رأس الطباعة */
          .header-section {
            border-bottom: 1.5pt solid #000;
            padding-bottom: 4mm;
            margin-bottom: 4mm;
          }

          .gov-line, .info-line {
            color: #000 !important;
            font-size: 10pt;
          }

          .title-main {
            font-size: 18pt;
            color: #000 !important;
          }

          .title-sub {
            font-size: 12pt;
            color: #000 !important;
          }

          .title-desc {
            font-size: 10pt;
            color: #000 !important;
          }

          /* الأقسام */
          .form-section {
            margin-bottom: 4mm;
          }

          .section-title {
            background: transparent !important;
            border: 1.5pt solid #000 !important;
            border-right: 4pt solid #000 !important;
            border-radius: 2mm;
            padding: 1.5mm 3mm;
            font-size: 11pt;
            color: #000 !important;
          }

          .field-label {
            font-size: 10pt;
            color: #000 !important;
            margin-bottom: 1mm;
          }

          /* حقول الطباعة */
          .print-field {
            margin-top: 1mm;
            height: 8mm;
            border: 1pt solid #000;
            border-radius: 1mm;
            padding: 1.5mm 2mm;
            font-size: 10pt;
            display: flex;
            align-items: center;
            background: white;
          }

          .signature-box, .empty-box {
            border: 1pt solid #000 !important;
            border-radius: 1mm;
            background: white !important;
            color: #666 !important;
          }

          .signature-box {
            height: 12mm;
          }

          .empty-box {
            height: 8mm;
          }

          /* المصادقات */
          .approval-title {
            font-size: 10pt;
            color: #000 !important;
            font-weight: 800;
          }

          .approval-note {
            font-size: 9pt;
            color: #666 !important;
          }

          .approval-box {
            height: 28mm;
            border: 1pt solid #000 !important;
            border-radius: 1mm;
          }

          /* الإقرار */
          .declaration-section {
            border-top: 1pt solid #000 !important;
            padding-top: 3mm;
            margin-top: 4mm;
          }

          .declaration-title {
            font-size: 10pt;
            color: #000 !important;
          }

          .declaration-text {
            font-size: 9pt;
            color: #000 !important;
            line-height: 1.5;
          }

          .declaration-footer {
            font-size: 9pt;
            color: #000 !important;
            margin-top: 3mm;
          }

          /* منع التقطيع */
          .form-section, .form-field, .approval-col {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
