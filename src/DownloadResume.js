
const DownloadResume = () => {
    const link = document.createElement('a');
    // replace with the actual file path
    link.href = "./KejvinPashajResume.pdf"; 
    // set the file name for download
    link.setAttribute('download', 'KejvinPashajResume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  export default DownloadResume;
  