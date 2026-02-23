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
<div className="min-h-screen bg-muted/40 py-6 px-4 flex items-center justify-center" dir="rtl">
{/* حاوية كاملة لإبقاء الورقة في الوسط */}
<div className="w-full max-w-[220mm] flex flex-col items-center">
{/* زر الرجوع - لا يطبع */}
<div className="no-print w-full max-w-[210mm] mb-4 flex justify-between items-center">
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
<div className="print-form w-[210mm] bg-white border border-border shadow-xl rounded-lg p-8 relative">
{/* هيدر إداري رسمي */}
<header className="pb-4 mb-4 border-b border-dashed border-primary/40">
<div className="flex items-start justify-between gap-4">
<div className="text-sm leading-[1.4]">
<p className="font-semibold">الجمهورية الجزائرية الديمقراطية الشعبية</p>
<p className="text-xs text-muted-foreground">
مديرية الشباب والرياضة لولاية قالمة
</p>

</div>
<div className="text-right text-xs leading-[1.4]">
<p className="text-[11px] text-muted-foreground">
الموسم الرياضي: 2026&nbsp;&nbsp;/&nbsp;&nbsp;2025
</p>
<p className="text-[11px] text-muted-foreground">
رقم الاستمارة: ................
</p>
</div>
</div>

<div className="text-center mt-3">
<h1 className="text-xl font-black text-foreground tracking-wide">
نادي الدلافين للسباحة
</h1>
<p className="text-sm font-semibold text-primary mt-1">
فرع حمام دباغ
</p>
<p className="text-xs text-muted-foreground mt-1 font-semibold">
استمارة تسجيل / انخراط
</p>
</div>
</header>

{/* القسم الأول: معلومات المنخرط */}
<section className="mb-4">
<h2 className="font-bold text-sm bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded mb-3 inline-block">
القسم الأول: معلومات المنخرط
</h2>
<div className="grid grid-cols-12 gap-3 text-sm">
<div className="col-span-12 md:col-span-7">
<Label className="font-semibold text-[12px]">الاسم واللقب</Label>
<Input
value={formData.fullName}
onChange={(e) => update("fullName", e.target.value)}
placeholder="أدخل الاسم الكامل كما في شهادة الميلاد"
className="mt-1 h-9 border-b-2 border-primary/40 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
/>
</div>
<div className="col-span-6 md:col-span-3">
<Label className="font-semibold text-[12px]">تاريخ الميلاد</Label>
<Input
type="date"
value={formData.birthDate}
onChange={(e) => update("birthDate", e.target.value)}
className="mt-1 h-9 border-b-2 border-primary/40 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary text-[13px]"
/>
</div>
<div className="col-span-6 md:col-span-2">
<Label className="font-semibold text-[12px]">الجنس</Label>
<RadioGroup
value={formData.gender}
onValueChange={(v) => update("gender", v)}
className="flex items-center gap-4 mt-1"
dir="rtl"
>
<div className="flex items-center gap-1.5">
<RadioGroupItem value="ذكر" id="male" />
<Label htmlFor="male" className="cursor-pointer text-[12px]">
ذكر
</Label>
</div>
<div className="flex items-center gap-1.5">
<RadioGroupItem value="أنثى" id="female" />
<Label htmlFor="female" className="cursor-pointer text-[12px]">
أنثى
</Label>
</div>
</RadioGroup>
</div>

<div className="col-span-12 md:col-span-7">
<Label className="font-semibold text-[12px]">العنوان الكامل</Label>
<Input
value={formData.address}
onChange={(e) => update("address", e.target.value)}
placeholder="البلدية – الحي – رقم المنزل"
className="mt-1 h-9 border-b-2 border-primary/40 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
/>
</div>
<div className="col-span-12 md:col-span-5">
<Label className="font-semibold text-[12px]">ملاحظات صحية هامة (إن وجدت)</Label>
<Input
value={formData.medicalNotes}
onChange={(e) => update("medicalNotes", e.target.value)}
placeholder="حساسية، مرض مزمن، دواء دائم ..."
className="mt-1 h-9 border-b-2 border-primary/40 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
/>
</div>
</div>
</section>

{/* القسم الثاني: معلومات ولي الأمر */}
<section className="mb-4">
<h2 className="font-bold text-sm bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded mb-3 inline-block">
القسم الثاني: معلومات ولي الأمر
</h2>
<div className="grid grid-cols-12 gap-3 text-sm">
<div className="col-span-12 md:col-span-6">
<Label className="font-semibold text-[12px]">
اسم ولقب ولي الأمر
</Label>
<Input
value={formData.guardianName}
onChange={(e) => update("guardianName", e.target.value)}
placeholder="أدخل اسم ولقب ولي الأمر"
className="mt-1 h-9 border-b-2 border-primary/40 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
/>
</div>
<div className="col-span-12 md:col-span-3">
<Label className="font-semibold text-[12px]">رقم الهاتف</Label>
<Input
value={formData.guardianPhone}
onChange={(e) => update("guardianPhone", e.target.value)}
placeholder="مثال: 06xx xx xx xx"
className="mt-1 h-9 border-b-2 border-primary/40 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
/>
</div>
<div className="col-span-12 md:col-span-3">
<Label className="font-semibold text-[12px]">توقيع ولي الأمر</Label>
<div className="mt-1 h-14 border border-dashed border-muted-foreground/40 rounded-md flex items-center justify-center text-[11px] text-muted-foreground">
مكان التوقيع
</div>
</div>
</div>
</section>

{/* القسم الثالث: الفوج واليوم (للتعبئة اليدوية) */}
<section className="mb-4">
<h2 className="font-bold text-sm bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded mb-3 inline-block">
القسم الثالث: الفوج واليوم
</h2>
<div className="grid grid-cols-12 gap-3 text-sm">
<div className="col-span-12 md:col-span-4">
<Label className="font-semibold text-[12px]">الفوج</Label>
<div className="mt-1 h-9 border border-dashed border-muted-foreground/50 rounded-md bg-muted/20" />
</div>
<div className="col-span-12 md:col-span-4">
<Label className="font-semibold text-[12px]">اليوم</Label>
<div className="mt-1 h-9 border border-dashed border-muted-foreground/50 rounded-md bg-muted/20" />
</div>
<div className="col-span-12 md:col-span-4">
<Label className="font-semibold text-[12px]">الساعة</Label>
<div className="mt-1 h-9 border border-dashed border-muted-foreground/50 rounded-md bg-muted/20" />
</div>
</div>
</section>

{/* القسم الرابع: التوقيعات والمصادقات */}
<section className="mb-4">
<h2 className="font-bold text-sm bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded mb-3 inline-block">
القسم الرابع: التوقيعات والمصادقات
</h2>
<div className="grid grid-cols-12 gap-3 text-xs">
<div className="col-span-12 md:col-span-4 text-center">
<p className="font-semibold text-muted-foreground mb-1">
توقيع ومصادقة الطبيب
</p>
<p className="text-[10px] text-muted-foreground mb-1">
(قبول المنخرط في رياضة السباحة)
</p>
<div className="h-20 border border-dashed border-muted-foreground/40 rounded-md" />
</div>
<div className="col-span-12 md:col-span-4 text-center">
<p className="font-semibold text-muted-foreground mb-1">
توقيع رئيس النادي
</p>
<div className="h-20 border border-dashed border-muted-foreground/40 rounded-md mt-4" />
</div>
<div className="col-span-12 md:col-span-4 text-center">
<p className="font-semibold text-muted-foreground mb-1">
الصورة الشمسية
</p>
<div className="h-20 border border-dashed border-muted-foreground/40 rounded-md flex items-center justify-center mt-4">
<span className="text-muted-foreground text-[10px]">
تُلصق الصورة هنا (4×3)
</span>
</div>
</div>
</div>
</section>

{/* فقرة إقرار ولي الأمر */}
<section className="mt-4 text-[11px] leading-relaxed border-t border-dashed border-muted-foreground/40 pt-2">
<p className="font-semibold mb-1">إقرار ولي الأمر:</p>
<p className="text-muted-foreground">
أقر أنا الممضي أسفله، ولي أمر المنخرط، أن المعلومات المدونة أعلاه صحيحة،
وأتحمل كامل المسؤولية عن أي تصريح غير صحيح، كما ألتزم باحترام القانون
الداخلي للنادي وجميع التعليمات التنظيمية الخاصة بممارسة رياضة السباحة.
</p>

<div className="flex justify-between mt-3">
<span>حرّر بـ: حمام دباغ في: ........../........../20....</span>
<span>إمضاء ولي الأمر: ....................................</span>
</div>
</section>
</div>

{/* أزرار الطباعة - لا تُطبع */}
<div className="no-print w-full max-w-[210mm] mt-6 text-center">
<Button
size="lg"
onClick={handlePrint}
className="font-bold text-base px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
>
🖨️ طباعة الاستمارة
</Button>
<p className="text-muted-foreground text-xs mt-2">
يمكنكم اختيار &quot;حفظ كـ PDF&quot; من نافذة الطباعة للاحتفاظ بنسخة رقمية.
</p>
</div>
</div>

{/* أنماط خاصة بالطباعة A4 */}
<style>{`
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
}

.no-print {
display: none !important;
}

.print-form {
max-width: 100%;
width: 210mm;
min-height: 297mm;
margin: 0;
padding: 12mm 14mm;
box-shadow: none !important;
border-radius: 0 !important;
border: none !important;
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
