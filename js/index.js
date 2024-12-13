document.getElementById('downloadButton').addEventListener('click',function(){
    const docUrl = 'parrot.html';
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'parrot.docx';
    link.click();
});
document.getElementById('downloadButton1').addEventListener('click',function(){
    const docUrl = 'seaturtle.html';
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'seaturtle.docx';
    link.click();
});
document.getElementById('downloadButton2').addEventListener('click',function(){
    const docUrl = 'tiger.html';
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'tiger.docx';
    link.click();
});
document.getElementById('downloadButton3').addEventListener('click',function(){
    const docUrl = 'heifer.html';
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'heifer.docx';
    link.click();
});
document.getElementById('downloadButton4').addEventListener('click',function(){
    const docUrl = 'monkey.html';
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'monkey.docx';
    link.click();
});
document.getElementById('downloadButton5').addEventListener('click',function(){
    const docUrl = 'horse.html';
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'horse.docx';
    link.click();
});