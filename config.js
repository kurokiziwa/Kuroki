require("dotenv").config();

global.owner = ["6285892728039"]; // wajib di isi tidak boleh kosong
global.mods = ["6285892728039"]; // wajib di isi tidak boleh kosong
global.prems = ["6285892728039"]; // wajib di isi tidak boleh kosong
global.nameowner = "Zii"; // wajib di isi tidak boleh kosong
global.numberowner = "6285892728039"; // wajib di isi tidak boleh kosong
global.mail = "kurokiziwa@gmail.com"; // wajib di isi tidak boleh kosong
global.gc = "https://chat.whatsapp.com/I5RpePh2b5u37OyFjzCNTr"; // wajib di isi tidak boleh kosong
global.instagram = "https://instagram.com/prm2.0"; // wajib di isi tidak boleh kosong
global.wm = "© Kuroki"; // isi nama bot atau nama kalian
global.wait = "_*Tunggu sedang di proses...*_"; // ini pesan simulasi loading
global.eror = "_*Server Error*_"; // ini pesan saat terjadi kesalahan
global.stiker_wait = "*⫹⫺ Stiker sedang dibuat...*"; // ini pesan simulasi saat loading pembuatan sticker
global.packname = "Made With"; // watermark stikcker packname
global.author = "Kuroki WhatsApp"; // watermark stikcker author
global.maxwarn = "5"; // Peringatan maksimum Warn

global.autobio = false; // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false; // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = true; // Set true/false untuk anti spam (default: false)
global.gcspam = false; // Set true/false untuk menutup grup ketika spam (default: false)

// APIKEY INI WAJIB UNTUK DI ISI! //
global.btc = process.env.API_KEY_BTC;
// global.btc = process.env.API_KEY_BTC;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org



// AKSESKEY INI DI ISI JIKA DIPERLUKAN JADI TIDAK WAJIB DI ISI! (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = process.env.API_KEY_BTC_AKSESKEY;
// global.aksesKey = process.env.API_KEY_BTC_AKSESKEY;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// Tidak boleh diganti atau di ubah
global.APIs = {
  btc: "https://api.botcahx.eu.org",
};

//Tidak boleh diganti atau di ubah
global.APIKeys = {
  "https://api.botcahx.eu.org": global.btc,
};

let fs = require("fs");
let chalk = require("chalk");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});

