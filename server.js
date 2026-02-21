// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// إعداد مجلد public لتقديم الملفات الثابتة (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// توجيه المسار الرئيسي إلى صفحة البداية (السبلاش)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'splash.html'));
});

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل بنجاح! افتح المتصفح على الرابط: http://localhost:${PORT}`);
});
