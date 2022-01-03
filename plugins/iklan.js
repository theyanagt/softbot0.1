let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `🔰 -----[ 「 *IKLAN LOLIHUNTERID* 」 ]----- 🔰

──────────────────────────────

◯ *DAFTAR PREMIUM & BUAT BOT :*

◯ *PREMIUM : 5K / BLN*

◯ *BUAT : 10K (BISA JADI OWNER, MAX OWNER UNLIMITED, RECODE SESUKANYA)*

◯ *JADI BOT : FREE 24/7 (BISA REQ OWNER MAX 3 ORANG) S&K BERLAKU HUB 089514235883*

◯ *PEMBAYARAN BISA MELALUI :*

◯ *DANA*

◯ *PULSA*

──────────────────────────────
◯ *KEUNTUNGAN PREMIUM :*

◯ *1. BISA MEMASUKAN BOT KE GROUP*

◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
──────────────────────────────
◯ *KEUNTUNGAN BUAT BOT :*

◯ *1. BISA MENJADI OWNER BOT SENDIRI*

◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*

◯ *3. BISA MEMBAWA BOT KE GROUP*

◯ *4. BISA MENGGUNAKAN COMMAND OWNER*

◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*

◯ *HARAP HUBUNGI NOMOR DIBAWAH :*

◯ *wa.me/6289514235883*
──────────────────────────────

🔰 ---[「 *POWERED BY ZAHRA メ SOFTLOLI* 」]--- 🔰` 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['iklan'] 
handler.tags = ['info'] 
handler.command = /^(iklan)$/i

module.exports = handler