const profilSAYA = `<h2 id="profil">PROFIL</h2>
<div class="isiprofil">
  <p>
  Mahasiswa Teknik Informatika dari ITERA tingkat tiga. memiliki berbagai pengalaman organisasi bahkan dalam bidang IT.
  Tertarik dalam bidang IT walaupun belum sepenuhnya menguasai, menyukai tantangan baru, mencari relasi seluas mungkin,
  dan mencoba menyeimbangkan akademik dan non akademik.
  </p>
</div>`;
const pengalamanSAYA = `<h2 id="pengalaman">PENGALAMAN</h2>
<div class="isipengalaman">
  <table border="1">
    <thead>
      <tr>
        <th rowspan="2">NO</th>
        <th rowspan="2">PENGALAMAN</th>
        <th rowspan="2">PENJELASAN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-align="center">1</td>
        <td>Kepala Divisi Acara • Malam Keakraban BATAVIA 20</td>
        <td>•mengarahkan dan mengawasi berjalan nya acara •membuat detail konsep acara
            •membagi tugas kepada staff acara</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Kepala Sub Divisi Content Research • PPLK ITERA 2022</td>
        <td>• membagi Tugas kepada staff CR • membuat detail konsep content untuk web dan game
            • melakukan teknik lapangan untuk content web • mencari informasi agar content menarik</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Awardee BSI Scholarship Inspirasi</td>
        <td>• Pembinaan ekonomi syariah • Sosial Project</td>
      </tr>
    </tbody>
  </table>
</div>`;
const kontakSAYA = `<h2 id="kontak">KONTAK</h2>
<table>
<tr><td>Instagram</td><td>:</td><td><a href="https://www.instagram.com/sintaadwptri_/">sintaadwptri_</a></td></tr>
<tr><td>No Hp / whatsApp</td><td>:</td><td>08979354264</td></tr>
<tr><td>Twitter</td><td>:</td><td>@mii_nion</td></tr>
<tr><td>Email student</td><td>:</td><td>sinta.120140033@student.itera.ac.id</td></tr>
</table>
<div class="isikontak">
  <form action="index.html" method="GET">
    <div class="nama">
      <label>Bagaimana tampilan CV saya ? </label>
      <input type="text" id="fname" />
    </div>
    <div class="nonton">
      <label for="pil">Akan kah menghubungi saya?</label>
      <div>
        <input
          type="radio"
          name="pilih"
          id="iya"
          value="Ya"
        />
        <label>Ya</label>
        <input
          type="radio"
          name="pilih"
          id="tidak"
          value="Tidak"
        />
        <label>Tidak</label>
      </div>
    </div>
    <div class="submit" onmousedown="mDown(this)" onmouseup="mUp(this)">
    <button onclick="tombol()">Kirim Pesan!</button>
    </div>
  </form>
</div>`;
function tombol() {
  const judul = document.getElementById("judul");
  judul.innerText = "CURRICULUM VITAE";
  const main = document.getElementById("main");
  main.innerHTML = ` <img src="sinta.jpg" alt />
  <h1>Sinta Dwi Putri</h1>
  <nav>
    <ul>
      <a href="#" onclick="profil()">PROFIL</a>
      <a href="#" onclick="pengalaman()">PENGALAMAN</a>
      <a href="#" onclick="kontak()">KONTAK</a>
    </ul>
  </nav>
  <div id="content">${profilSAYA}${pengalamanSAYA}${kontakSAYA}</div> `;
}
function profil() {
  const content = document.getElementById("content");
  content.innerHTML = `${profilSAYA}${pengalamanSAYA}${kontakSAYA}`;
}
function pengalaman() {
  const content = document.getElementById("content");
  content.innerHTML = pengalamanSAYA;
}
function kontak() {
  const content = document.getElementById("content");
  content.innerHTML = kontakSAYA;
}
function mUp(obj) {
  obj.style.backgroundColor= "#8f0073";
  obj.innerHTML="PESAN TERKIRIM";
}
