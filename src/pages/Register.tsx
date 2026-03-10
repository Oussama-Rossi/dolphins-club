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

  return (
    <div className="screen-wrapper" dir="rtl">
      {/* شريط علوي - شاشة فقط */}
      <div className="no-print toolbar">
        <Button variant="ghost" onClick={() => navigate("/")}>
          ← العودة للصفحة الرئيسية
        </Button>
        <Button size="lg" onClick={handlePrint} className="print-btn">
          🖨️ طباعة الاستمارة
        </Button>
      </div>

      {/* ورقة A4 */}
      <div className="a4-sheet">
        <div className="a4-content">
          {/* رأس الاستمارة */}
          <header className="form-header">
            <div className="header-row">
              <div className="header-right">
                <div className="header-text">الجمهورية الجزائرية الديمقراطية الشعبية</div>
                <div className="header-text">مديرية الشباب والرياضة لولاية قالمة</div>
              </div>
              <div className="header-left">
                <div className="header-text">الموسم الرياضي: 2026 / 2025</div>
                <div className="header-text">رقم الاستمارة: ................</div>
              </div>
            </div>

            <div className="header-center">
              <h1 className="club-name">نادي نجوم للسباحة</h1>
              <div className="club-branch">فرع حمام دباغ</div>
              <div className="form-type">استمارة تسجيل / انخراط</div>
            </div>
          </header>

          {/* القسم الأول */}
          <section className="form-section">
            <div className="section-header">القسم الأول: معلومات المنخرط</div>

            <div className="field-row">
              <div className="field field-70">
                <Label className="label">الاسم واللقب</Label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="أدخل الاسم الكامل"
                  className="screen-input"
                />
                <div className="print-box">{formData.fullName || ""}</div>
              </div>
              <div className="field field-30">
                <Label className="label">تاريخ الميلاد</Label>
                <Input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => update("birthDate", e.target.value)}
                  className="screen-input"
                />
                <div className="print-box">{formData.birthDate || ""}</div>
              </div>
            </div>

            <div className="field-row">
              <div className="field field-70">
                <Label className="label">الجنس</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(v) => update("gender", v)}
                  className="screen-input radio-group"
                  dir="rtl"
                >
                  <div className="radio-item">
                    <RadioGroupItem value="ذكر" id="male" />
                    <Label htmlFor="male" className="radio-label">ذكر</Label>
                  </div>
                  <div className="radio-item">
                    <RadioGroupItem value="أنثى" id="female" />
                    <Label htmlFor="female" className="radio-label">أنثى</Label>
                  </div>
                </RadioGroup>
                <div className="print-box">{formData.gender}</div>
              </div>
              <div className="field field-30">
                <Label className="label">رقم الهاتف (اختياري)</Label>
                <Input
                  value={formData.guardianPhone}
                  onChange={(e) => update("guardianPhone", e.target.value)}
                  placeholder="06xx xx xx xx"
                  className="screen-input"
                />
                <div className="print-box">{formData.guardianPhone || ""}</div>
              </div>
            </div>

            <div className="field-row">
              <div className="field field-100">
                <Label className="label">العنوان الكامل</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="البلدية – الحي – رقم المنزل"
                  className="screen-input"
                />
                <div className="print-box">{formData.address || ""}</div>
              </div>
            </div>

            <div className="field-row">
              <div className="field field-100">
                <Label className="label">ملاحظات صحية هامة (إن وجدت)</Label>
                <Input
                  value={formData.medicalNotes}
                  onChange={(e) => update("medicalNotes", e.target.value)}
                  placeholder="حساسية، مرض مزمن، دواء دائم ..."
                  className="screen-input"
                />
                <div className="print-box">{formData.medicalNotes || ""}</div>
              </div>
            </div>
          </section>

          {/* القسم الثاني */}
          <section className="form-section">
            <div className="section-header">القسم الثاني: معلومات ولي الأمر</div>

            <div className="field-row">
              <div className="field field-60">
                <Label className="label">اسم ولقب ولي الأمر</Label>
                <Input
                  value={formData.guardianName}
                  onChange={(e) => update("guardianName", e.target.value)}
                  placeholder="أدخل اسم ولقب ولي الأمر"
                  className="screen-input"
                />
                <div className="print-box">{formData.guardianName || ""}</div>
              </div>
              <div className="field field-40">
                <Label className="label">توقيع ولي الأمر</Label>
                <div className="signature-box">مكان التوقيع</div>
              </div>
            </div>
          </section>

          {/* القسم الثالث */}
          <section className="form-section">
            <div className="section-header">القسم الثالث: الفوج واليوم</div>

            <div className="field-row">
              <div className="field field-33">
                <Label className="label">الفوج</Label>
                <div className="empty-box"></div>
              </div>
              <div className="field field-33">
                <Label className="label">اليوم</Label>
                <div className="empty-box"></div>
              </div>
              <div className="field field-33">
                <Label className="label">الساعة</Label>
                <div className="empty-box"></div>
              </div>
            </div>
          </section>

          {/* القسم الرابع */}
          <section className="form-section">
            <div className="section-header">القسم الرابع: التوقيعات والمصادقات</div>

            <div className="approval-row">
              <div className="approval-col">
                <div className="approval-title">توقيع ومصادقة الطبيب</div>
                <div className="approval-note">(قبول المنخرط في رياضة السباحة)</div>
                <div className="approval-box"></div>
              </div>
              <div className="approval-col">
                <div className="approval-title">توقيع رئيس النادي</div>
                <div className="approval-box mt-approval"></div>
              </div>
              <div className="approval-col">
                <div className="approval-title">الصورة الشمسية</div>
                <div className="approval-box mt-approval photo-box">
                  <span>(4×3)</span>
                </div>
              </div>
            </div>
          </section>

          {/* الإقرار */}
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

      {/* CSS محسّن للطباعة A4 */}
      <style>{`
        /* ===== الشاشة ===== */
        .screen-wrapper {
          min-height: 100vh;
          background: #f1f5f9;
          padding: 20px;
        }

        .toolbar {
          max-width: 210mm;
          margin: 0 auto 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .print-btn {
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 999px;
        }

        .a4-sheet {
          max-width: 210mm;
          margin: 0 auto;
          background: white;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .a4-content {
          padding: 12mm;
        }

        .screen-input { display: block; }
        .print-box { display: none; }

        /* رأس الاستمارة */
        .form-header {
          padding-bottom: 3mm;
          margin-bottom: 4mm;
          border-bottom: 1px solid #e2e8f0;
        }

        .header-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4mm;
          font-size: 10px;
          font-weight: 600;
        }

        .header-text {
          line-height: 1.4;
          color: #64748b;
        }

        .header-center {
          text-align: center;
        }

        .club-name {
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 2mm;
        }

        .club-branch {
          font-size: 13px;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-bottom: 1mm;
        }

        .form-type {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
        }

        /* الأقسام */
        .form-section {
          margin-bottom: 4mm;
        }

        .section-header {
          font-size: 11px;
          font-weight: 800;
          padding: 1.5mm 3mm;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid #e2e8f0;
          border-right: 3px solid hsl(var(--primary));
          border-radius: 4px;
          margin-bottom: 3mm;
        }

        /* الحقول */
        .field-row {
          display: flex;
          gap: 3mm;
          margin-bottom: 3mm;
        }

        .field {
          flex: 1;
        }

        .field-30 { flex: 0 0 30%; }
        .field-33 { flex: 0 0 calc(33.33% - 2mm); }
        .field-40 { flex: 0 0 40%; }
        .field-60 { flex: 0 0 60%; }
        .field-70 { flex: 0 0 70%; }
        .field-100 { flex: 0 0 100%; }

        .label {
          font-size: 10px;
          font-weight: 700;
          display: block;
          margin-bottom: 2mm;
        }

        .screen-input {
          width: 100%;
          height: 36px;
          border-radius: 6px;
        }

        .radio-group {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .radio-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .radio-label {
          font-size: 11px;
          cursor: pointer;
        }

        .signature-box,
        .empty-box {
          height: 48px;
          border: 1px dashed #cbd5e1;
          border-radius: 6px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
          color: #94a3b8;
        }

        .empty-box {
          height: 36px;
        }

        /* المصادقات */
        .approval-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4mm;
        }

        .approval-col {
          text-align: center;
        }

        .approval-title {
          font-size: 10px;
          font-weight: 800;
          color: #475569;
          margin-bottom: 1mm;
        }

        .approval-note {
          font-size: 9px;
          color: #64748b;
          margin-bottom: 2mm;
        }

        .approval-box {
          height: 60px;
          border: 1px dashed #cbd5e1;
          border-radius: 6px;
          background: transparent;
        }

        .mt-approval {
          margin-top: 6mm;
        }

        .photo-box {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          color: #94a3b8;
        }

        /* الإقرار */
        .declaration {
          margin-top: 4mm;
          padding-top: 3mm;
          border-top: 1px solid #e2e8f0;
        }

        .declaration-title {
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 2mm;
        }

        .declaration-text {
          font-size: 10px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 3mm;
        }

        .declaration-footer {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 700;
        }

        /* ===== الطباعة A4 المحسّنة ===== */
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .no-print,
          .toolbar,
          .screen-input {
            display: none !important;
          }

          .print-box {
            display: flex !important;
          }

          .a4-sheet {
            width: 210mm;
            height: 297mm;
            max-width: none;
            box-shadow: none !important;
            border-radius: 0 !important;
            margin: 0;
            overflow: hidden;
          }

          .a4-content {
            padding: 12mm 14mm !important;
            height: 273mm;
            display: flex;
            flex-direction: column;
          }

          /* رأس محسّن */
          .form-header {
            border-bottom: 0.8pt solid #000;
            padding-bottom: 2.5mm;
            margin-bottom: 3.5mm;
          }

          .header-text {
            color: #000 !important;
            font-size: 9pt;
          }

          .club-name {
            font-size: 16pt;
            color: #000 !important;
          }

          .club-branch {
            font-size: 11pt;
            color: #000 !important;
          }

          .form-type {
            font-size: 9pt;
            color: #000 !important;
          }

          /* أقسام محسّنة */
          .form-section {
            margin-bottom: 3.5mm;
            break-inside: avoid;
          }

          .section-header {
            background: transparent !important;
            border: 0.8pt solid #000 !important;
            border-right: 3pt solid #000 !important;
            border-radius: 1.5mm;
            padding: 1.2mm 2.5mm;
            font-size: 10pt;
            color: #000 !important;
          }

          /* حقول محسّنة */
          .field-row {
            gap: 2.5mm;
            margin-bottom: 2.5mm;
          }

          .label {
            font-size: 9pt;
            color: #000 !important;
            margin-bottom: 1mm;
          }

          .print-box {
            height: 8mm;
            border: 0.5pt solid #000;
            border-radius: 1mm;
            padding: 1mm 2mm;
            font-size: 10pt;
            align-items: center;
            background: white;
          }

          .signature-box,
          .empty-box {
            border: 0.5pt dashed #000 !important;
            border-radius: 1mm;
            background: white !important;
            color: #666 !important;
            font-size: 8pt;
          }

          .signature-box {
            height: 11mm;
          }

          .empty-box {
            height: 8mm;
          }

          /* مصادقات محسّنة */
          .approval-row {
            gap: 3mm;
          }

          .approval-title {
            font-size: 9pt;
            color: #000 !important;
          }

          .approval-note {
            font-size: 8pt;
            color: #444 !important;
          }

          .approval-box {
            height: 24mm;
            border: 0.5pt dashed #000 !important;
            border-radius: 1mm;
          }

          .mt-approval {
            margin-top: 4.5mm;
          }

          /* إقرار محسّن */
          .declaration {
            border-top: 0.5pt solid #000 !important;
            padding-top: 2.5mm;
            margin-top: 3.5mm;
          }

          .declaration-title {
            font-size: 9pt;
            color: #000 !important;
          }

          .declaration-text {
            font-size: 8.5pt;
            color: #000 !important;
            line-height: 1.5;
          }

          .declaration-footer {
            font-size: 8.5pt;
            color: #000 !important;
            margin-top: 2.5mm;
          }

          /* منع التقطيع */
          .form-section,
          .field-row,
          .approval-col,
          .declaration {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
