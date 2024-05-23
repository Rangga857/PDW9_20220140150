function tampilkanData() {

    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var jenis_kelamin = document.getElementById("jenis_kelamin").value;
    var setuju = document.getElementById("setuju").checked;

    var pesan = "Nama: " + nama + "\n" +
        "Umur: " + umur + "\n" +
        "Jenis Kelamin: " + jenis_kelamin + "\n" +
        "Setuju dengan syarat dan ketentuan: " + (setuju ? "Ya" : "Tidak");

    alert(pesan);
}