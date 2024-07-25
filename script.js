document.addEventListener('DOMContentLoaded', function() {
    const certificationInput = document.getElementById('certificationInput');
    const projectFile = document.getElementById('projectFile');
    const photoInput = document.getElementById('photoInput');

    function handleFileUpload(inputElement) {
        const file = inputElement.files[0];
        if (file) {
            console.log('File yang diunggah:', file.name);
            // Lakukan sesuatu dengan file yang diunggah, misalnya mengirim ke server

            // Tambahkan animasi
            inputElement.classList.add('file-upload-animation');
            setTimeout(() => {
                inputElement.classList.remove('file-upload-animation');
            }, 500); // Sesuaikan dengan durasi animasi (0.5s = 500ms)
        }
    }

    // Fungsi untuk menangani pengunggahan sertifikasi
    certificationInput.addEventListener('change', function() {
        handleFileUpload(certificationInput);
    });

    // Fungsi untuk menangani pengunggahan proyek
    projectFile.addEventListener('change', function() {
        handleFileUpload(projectFile);
    });

    // Fungsi untuk menangani pengunggahan foto profil
    photoInput.addEventListener('change', function() {
        handleFileUpload(photoInput);
    });

    // Animasi pada bagian About
    const aboutSection = document.querySelector('.section.about');
    aboutSection.addEventListener('mouseover', function() {
        aboutSection.classList.add('about-animation');
    });
    aboutSection.addEventListener('mouseout', function() {
        aboutSection.classList.remove('about-animation');
    });
})