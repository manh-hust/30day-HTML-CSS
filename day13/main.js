const imageFile = document.querySelector('#image-file')
const preview = document.querySelector('.preview')
const error = document.querySelector('.error')


imageFile.addEventListener('change', function (e) {
    const file = imageFile.files[0]

    if (!file) {
        return;
    }
    // Check dinh dang jpg
    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = 'Hình ảnh phải ở định dạng .JPG(.jpg)';
        return;
    } else {
        error.innerHTML = '';
    }
    // Check size < 20kb
    if (file.size / (1024 * 1024) > 1) {
        error.innerHTML = 'Hình ảnh phải có size không vượt quá 5Mb';
        return;
    }
    // const url = URL.createObjectURL(file)

    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
        img.src = e.target.result;
    }
    // Create element 'img' with attribute src = url
    var img = document.createElement('img')
    // img.src = url
    preview.appendChild(img)

})