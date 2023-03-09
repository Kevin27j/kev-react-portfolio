
const DownloadResume = () => {
    const link = document.createElement('a');
    // replace with the actual file path
    link.href = "/src/assets/CV-Kev-2022.pdf"; 
    // set the file name for download
    link.setAttribute('download', 'CV-Kev-2022.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  export default DownloadResume;
  