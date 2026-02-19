@media print {
  @page {
    size: A4;
    margin: 10mm;
  }

  /* إخفاء أي عناصر لا نريدها في الطباعة */
  .no-print {
    display: none !important;
  }

  /* إزالة خلفية/هوامش الشاشة */
  html, body {
    background: #fff !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* حاوية الصفحة: خلّيها مهيأة لـ A4 وتفادى كسر الصفحة */
  .print-root {
    padding: 0 !important;
  }

  .print-form {
    max-width: none !important;
    width: 190mm;            /* 210mm - (10mm يمين + 10mm يسار) */
    margin: 0 auto !important;
    padding: 8mm !important; /* صغّر padding باش ما تفوتش صفحة */
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  /* منع تقسيم الأقسام بين الصفحات */
  section, .avoid-break {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* تقليل ارتفاع الحقول قليلاً لتفادي صفحة ثانية */
  input {
    height: 32px !important;
  }
}
