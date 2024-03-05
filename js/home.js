document.addEventListener("DOMContentLoaded", function () {
  fetch("./data_mahasiswa.json")
    .then((response) => response.json())
    .then((data) => {
      applyStyles(data.styles);
      displayData(data.mahasiswa);
      setupSorting(data.mahasiswa);
    })
    .catch((error) => console.error("Error:", error));
});

function applyStyles(styles) {
  const element = document.getElementById("popupData");
  Object.keys(styles).forEach((style) => {
    element.style[style] = styles[style];
  });
}

function setupSorting(data) {
  document.getElementById("sortAsc").addEventListener("click", function () {
    sortData(data, "asc");
  });

  document.getElementById("sortDesc").addEventListener("click", function () {
    sortData(data, "desc");
  });
}

function sortData(data, order) {
  const sortedData = data.sort((a, b) => {
    const nameA = a.nama.toLowerCase();
    const nameB = b.nama.toLowerCase();
    if (order === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  displayData(sortedData);
}

function showPopup(
  nama,
  asal_sekolah,
  jurusan,
  fakultas,
  nama_kampus,
  no_hp,
  email,
  jenis_kelamin,
  tempat,
  tanggal,
  alamat,
  tb,
  bb,
  golongan_darah,
  agama,
  organisasi,
  hobbi,
  cita_cita,
  nama_ayah,
  pendidikan_ayah,
  pekerjaan_ayah,
  nama_ibu,
  pendidikan_ibu,
  pekerjaan_ibu,
  alamat_ortu
) {
  const popup = document.getElementById("popup");
  popup.style.display = "block";

  const popupData = document.getElementById("popupData");
  popupData.innerHTML = `
    <h4>Data Akademik</h4>
    <p>Nama Lengkap: ${nama}</p>
    <p>Nama Kampus: ${asal_sekolah}</p>
    <p>Jurusan: ${jurusan}</p>
    <p>Fakultas: ${fakultas}</p>
    <p>Asal_Sekolah: ${nama_kampus}</p>
    <br>
    <h4>Data pribadi</h4>
    <p>Jenis Kelamin: ${no_hp}</p>
    <p>Tempat/Tanggal Lahir: ${email}/${jenis_kelamin}</p>
    <p>Tinggi/Berat Badan: ${tempat}/${tanggal}</p>
    <p>Golongan Darah: ${alamat}</p>
    <p>Alamat: ${tb}</p>
    <p>Agama: ${bb}</p>
    <p>Hobby: ${golongan_darah}</p>
    <p>Cita-Cita: ${agama}</p>
    <p>Organisasi: ${organisasi}</p>
    <p>No HP: ${hobbi}</p>
    <p>email: ${cita_cita}</p>
    <br>
    <h4>Data Orang Tua</h4>
    <p>Nama Ayah: ${nama_ayah}</p>
    <p>Pendidikan Terakhir Ayah: ${pendidikan_ayah}</p>
    <p>Pekerjaan Ayah: ${pekerjaan_ayah}</p>
    <p>Nama Ibu: ${nama_ibu}</p>
    <p>Pendidikan Terakhir Ibu: ${pekerjaan_ibu}</p>
    <p>Pekerjaan Ibu: ${pendidikan_ibu}</p>
    <p>Alamat Orang Tua: ${alamat_ortu}</p>
  `;
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

document.addEventListener("click", function (event) {
  if (event.target === popup) {
    closePopup();
  }
});

// Untuk menampilkan pop-up, Anda perlu memperbarui pemanggilan showPopup di dalam displayData
function displayData(data) {
  const mahasiswaList = document.getElementById("mahasiswaList");
  mahasiswaList.innerHTML = "";

  data.forEach(function (item, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td><a href="#data" class="mahasiswa-link" onclick="showPopup(
      '${item.nama}',
      '${item.nama_kampus}', 
      '${item.jurusan}', 
      '${item.fakultas}', 
      '${item.asal_sekolah}', 
      '${item.jenis_kelamin}', 
      '${item.tempat}', 
      '${item.tanggal}', 
      '${item.tb}', 
      '${item.bb}', 
      '${item.golongan_darah}', 
      '${item.alamat}', 
      '${item.agama}', 
      '${item.hobbi}', 
      '${item.cita_cita}', 
      '${item.organisasi}', 
      '${item.no_hp}', 
      '${item.email}', 
      '${item.nama_ayah}', 
      '${item.pendidikan_ayah}', 
      '${item.pekerjaan_ayah}', 
      '${item.nama_ibu}', 
      '${item.pekerjaan_ibu}', 
      '${item.pendidikan_ibu}', 
      '${item.alamat_ortu}')">
      ${item.nama}</a></td>`;
    mahasiswaList.appendChild(row);
  });
}
