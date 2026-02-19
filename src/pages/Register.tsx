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
  });

  const update = (key: string, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-background py-6 px-4" dir="rtl">
      {/* Back button - no print */}
      <div className="no-print max-w-[210mm] mx-auto mb-4">
        <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground">
          → العودة للصفحة الرئيسية
        </Button>
      </div>

      {/* A4 Form Container */}
      <div className="print-form max-w-[210mm] mx-auto bg-card border border-border shadow-lg rounded-lg p-8 relative">
        {/* Header - بدون شعار */}
        <div className="text-center border-b-2 border-primary pb-4 mb-6">
          <h1 className="text-2xl font-black text-foreground">نادي الدلافين للسباحة</h1>
          <p className="text-lg font-bold text-primary">فرع حمام دباغ</p>
          <p className="text-sm text-muted-foreground mt-1 font-semibold">استمارة تسجيل / انخراط</p>
        </div>

        {/* Section 1: Member Info */}
        <section className="mb-4">
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الأول: معلومات المنخرط
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2">
            <div className="space-y-1">
              <Label className="font-semibold text-sm">الاسم واللقب</Label>
              <Input
                value={formData.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="أدخل الاسم الكامل"
                className="border-b-2 border-primary/30 focus:border-primary h-9"
              />
            </div>
            <div className="space-y-1">
              <Label className="font-semibold text-sm">تاريخ الميلاد</Label>
              <Input
                type="date"
                value={formData.birthDate}
                onChange={(e) => update("birthDate", e.target.value)}
                className="border-b-2 border-primary/30 focus:border-primary h-9"
              />
            </div>
            <div className="space-y-1 col-span-1 md:col-span-2">
              <Label className="font-semibold text-sm">الجنس</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(v) => update("gender", v)}
                className="flex gap-6 mt-1"
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
            </div>
          </div>
        </section>

        {/* Section 2: Guardian Info */}
        <section className="mb-4">
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الثاني: معلومات ولي الأمر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2">
            <div className="space-y-1">
              <Label className="font-semibold text-sm">اسم ولقب ولي الأمر</Label>
              <Input
                value={formData.guardianName}
                onChange={(e) => update("guardianName", e.target.value)}
                placeholder="أدخل اسم ولي الأمر"
                className="border-b-2 border-primary/30 focus:border-primary h-9"
              />
            </div>
            <div className="space-y-1">
              <Label className="font-semibold text-sm">توقيع ولي الأمر</Label>
              <div className="h-14 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-muted-foreground text-xs">
                مكان التوقيع
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Group & Day - للكتابة باليد */}
        <section className="mb-4">
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الثالث: الفوج واليوم
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2">
            <div className="space-y-1">
              <Label className="font-semibold text-sm">الفوج</Label>
              <div className="h-10 border-2 border-dashed border-muted-foreground/30 rounded bg-muted/20" />
            </div>
            <div className="space-y-1">
              <Label className="font-semibold text-sm">اليوم</Label>
              <div className="h-10 border-2 border-dashed border-muted-foreground/30 rounded bg-muted/20" />
            </div>
          </div>
        </section>

        {/* Section 4: Signatures & Photo */}
        <section>
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الرابع: التوقيعات والمصادقات
          </h2>
          <div className="grid grid-cols-3 gap-3 px-2">
            <div className="text-center">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                توقيع ومصادقة الطبيب
              </p>
              <p className="text-[9px] text-muted-foreground mb-1">
                (قبول المنخرط في رياضة السباحة)
              </p>
              <div className="h-20 border-2 border-dashed border-muted-foreground/30 rounded" />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                توقيع رئيس النادي
              </p>
              <div className="h-20 border-2 border-dashed border-muted-foreground/30 rounded mt-4" />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                الصورة الشمسية
              </p>
              <div className="h-20 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center mt-4">
                <span className="text-muted-foreground text-[9px]">ألصق الصورة هنا</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Print Button - no print */}
      <div className="no-print max-w-[210mm] mx-auto mt-6 text-center">
        <Button
          size="lg"
          onClick={handlePrint}
          className="font-bold text-lg px-12 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🖨️ طباعة الاستمارة
        </Button>
        <p className="text-muted-foreground text-xs mt-3">
          يمكنك أيضاً حفظها كملف PDF من خيار "حفظ كـ PDF" في نافذة الطباعة
        </p>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-form {
            max-width: 100%;
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 15mm;
            box-shadow: none;
            border: none;
            border-radius: 0;
            page-break-after: avoid;
            page-break-inside: avoid;
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
