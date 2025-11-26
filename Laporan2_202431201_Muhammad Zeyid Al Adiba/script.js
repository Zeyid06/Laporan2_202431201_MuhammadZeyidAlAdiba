// Show/hide interaksi
document.querySelectorAll(".item").forEach(item => {
    let judul = item.querySelector(".judul");
    let isi = item.querySelector(".isi");

    judul.addEventListener("click", () => {
        if (isi.style.display === "none") {
            let tanya = confirm("Apakah Anda ingin menampilkan penjelasan ini?");
            if (tanya) isi.style.display = "block";
        } else {
            let tanya = confirm("Apakah Anda ingin menyembunyikan penjelasan ini?");
            if (tanya) isi.style.display = "none";
        }
    });
});

// MODE TAMPILAN
document.getElementById("modeRapi").onclick = () => {
    document.querySelectorAll(".item").forEach(i => i.classList.remove("berantakan"));
};

document.getElementById("modeBerantakan").onclick = () => {
    document.querySelectorAll(".item").forEach(i => i.classList.add("berantakan"));
};
