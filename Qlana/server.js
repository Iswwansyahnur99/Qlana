const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk mem-parsing JSON body dan melayani file statis
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint untuk pendaftaran
app.post('/api/signup', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email diperlukan.' });
    }

    // Simulasi menyimpan email ke database
    console.log(`Email baru terdaftar: ${email}`);
    
    // Kirim respons sukses
    res.status(200).json({ message: `Terima kasih! Email ${email} telah terdaftar untuk akses awal.` });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});