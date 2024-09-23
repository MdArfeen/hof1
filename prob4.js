function filterImageFiles(filePaths) {
    return filePaths.filter(filePath => {
      return filePath.endsWith('.png') || filePath.endsWith('.jpg');
    });
  }
  
  const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];
  
  const imageFiles = filterImageFiles(filePaths);
  console.log(imageFiles);
  
  