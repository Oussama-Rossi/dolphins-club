import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "ذكر",
    guardianName: "",
    group: "",
    day: "",
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
        {/* Header */}
        <div className="text-center border-b-2 border-primary pb-4 mb-6">
          <div className="flex justify-center mb-2">
            <svg viewBox="0 0 100 80" className="w-14 h-14 text-primary" fill="currentColor">
              <path d="M75,15 C65,5 50,8 42,18 C38,23 36,30 38,37 C30,32 20,30 12,33 C8,34 5,38 8,40 C12,43 20,42 28,40 C26,45 28,52 33,56 C38,60 45,62 52,60 C48,65 46,72 48,76 C49,78 52,78 53,76 C55,72 55,66 56,62 C62,60 68,55 72,48 C76,41 78,32 78,25 C90,28 95,22 92,18 C89,14 82,16 78,18 C77,17 76,16 75,15 Z M65,30 C63,30 62,29 62,27 C62,25 63,24 65,24 C67,24 68,25 68,27 C68,29 67,30 65,30 Z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-foreground">نادي الدلافين للسباحة</h1>
          <p className="text-lg font-bold text-primary">فرع حمام دباغ</p>
          <p className="text-sm text-muted-foreground mt-1 font-semibold">استمارة تسجيل / انخراط</p>
        </div>

        {/* Section 1: Member Info */}
        <section className="mb-5">
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الأول: معلومات المنخرط
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="space-y-1.5">
              <Label className="font-semibold">الاسم واللقب</Label>
              <Input
                value={formData.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="أدخل الاسم الكامل"
                className="border-b-2 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="font-semibold">تاريخ الميلاد</Label>
              <Input
                type="date"
                value={formData.birthDate}
                onChange={(e) => update("birthDate", e.target.value)}
                className="border-b-2 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-1.5 col-span-1 md:col-span-2">
              <Label className="font-semibold">الجنس</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(v) => update("gender", v)}
                className="flex gap-6 mt-1"
                dir="rtl"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="ذكر" id="male" />
                  <Label htmlFor="male" className="cursor-pointer">ذكر</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="أنثى" id="female" />
                  <Label htmlFor="female" className="cursor-pointer">أنثى</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Section 2: Guardian Info */}
        <section className="mb-5">
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الثاني: معلومات ولي الأمر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="space-y-1.5">
              <Label className="font-semibold">اسم ولقب ولي الأمر</Label>
              <Input
                value={formData.guardianName}
                onChange={(e) => update("guardianName", e.target.value)}
                placeholder="أدخل اسم ولي الأمر"
                className="border-b-2 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="font-semibold">توقيع ولي الأمر</Label>
              <div className="h-16 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-muted-foreground text-xs">
                مكان التوقيع
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Group & Day */}
        <section className="mb-5">
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الثالث: الفوج واليوم
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="space-y-1.5">
              <Label className="font-semibold">الفوج</Label>
              <Select value={formData.group} onValueChange={(v) => update("group", v)}>
                <SelectTrigger className="border-b-2 border-primary/30">
                  <SelectValue placeholder="اختر الفوج" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="فوج-1">الفوج 1</SelectItem>
                  <SelectItem value="فوج-2">الفوج 2</SelectItem>
                  <SelectItem value="فوج-3">الفوج 3</SelectItem>
                  <SelectItem value="فوج-4">الفوج 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="font-semibold">اليوم</Label>
              <Select value={formData.day} onValueChange={(v) => update("day", v)}>
                <SelectTrigger className="border-b-2 border-primary/30">
                  <SelectValue placeholder="اختر اليوم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="السبت">السبت</SelectItem>
                  <SelectItem value="الأحد">الأحد</SelectItem>
                  <SelectItem value="الإثنين">الإثنين</SelectItem>
                  <SelectItem value="الثلاثاء">الثلاثاء</SelectItem>
                  <SelectItem value="الأربعاء">الأربعاء</SelectItem>
                  <SelectItem value="الخميس">الخميس</SelectItem>
                  <SelectItem value="الجمعة">الجمعة</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Section 4: Signatures & Photo */}
        <section>
          <h2 className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1.5 rounded mb-3">
            القسم الرابع: التوقيعات والمصادقات
          </h2>
          <div className="grid grid-cols-3 gap-4 px-2">
            <div className="text-center">
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                توقيع ومصادقة الطبيب
              </p>
              <p className="text-[10px] text-muted-foreground mb-1">
                (قبول المنخرط في رياضة السباحة)
              </p>
              <div className="h-24 border-2 border-dashed border-muted-foreground/30 rounded" />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                توقيع رئيس النادي
              </p>
              <div className="h-24 border-2 border-dashed border-muted-foreground/30 rounded mt-5" />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                الصورة الشمسية
              </p>
              <div className="h-24 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center mt-5">
                <span className="text-muted-foreground text-[10px]">ألصق الصورة هنا</span>
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
    </div>
  );
};

export default Register;
