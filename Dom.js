function ambildata() {
    var nama = document.getElementById('name');
    var email = document.getElementById('email');
    var negara = document.getElementById('negaraa', 'negara');
    var umur = document.getElementById('tahun');
    var gender = document.getElementsByName('gender');

    var opsinama = nama.value;
    var opsiemail = email.value;
    var opsinegara = negara.value;
    var opsiumur = tahun.value;
    var realumur = 2020-tahun.value;
    var opsigender = '';
    for (var i = 0; i < gender.length; i++) {
      if(gender[i].checked == true){
        opsigender = gender[i].value;
        break;
      }
    }
    let oke = document.getElementById('demo');
    let data = '';
    if( opsinama == '' ||
      opsiemail == '' ||
      opsinegara == '' ||
      opsiumur == '' ||
      opsigender == '') {
      if(opsinama == '') data += '<b>Mohon Masukkan Nama!</b><br></p>';
      if(opsiemail == '') data += '<p><b>Mohon Masukkan Email!</b></p>';
      if(opsinegara == '') data += '<p><b>Mohon Pilih Negara!</b></p>';
      if(opsiumur == '') data += '<p><b>Mohon Masukkan Tahun Lahir!</b></p>';
      if(opsigender == '') data += '<p><b>Mohon Pilih Jenis Kelamin!</b></p>';
    }else{
      data += `<b><h3>Selamat Datang Di HIGirls</h3>
      <table>
        <tr>
          <td>Nama Lengkap </td>
          <td>:</td>
          <td>${opsinama}</td>
        </tr>
        <tr>
          <td>Email </td>
          <td>:</td>
          <td>${opsiemail}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin </td>
          <td>:</td>
          <td>${opsigender}</td>
        </tr>
        <tr>
          <td>Negara </td>
          <td>:</td>
          <td>${opsinegara}</td>
        </tr>
        <tr>
          <td>Umur </td>
          <td>:</td>
          <td>${realumur}</td>
        </tr>
      </table>`;
    }
  oke.innerHTML = ketampil;
}