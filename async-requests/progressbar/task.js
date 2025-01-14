const progress = document.getElementById('progress');
const form = document.getElementById('form');

const xhr = new XMLHttpRequest();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = document.getElementById('file').files[0];
    formData.append('file', file); 

    xhr.open ('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.upload.addEventListener("progress", function(event) {
        if (event.lengthComputable) {
          const progressPercentage = event.loaded / event.total;
          progress.value = progressPercentage;
        }
      });

      xhr.send(formData); 
})