setInterval(() => {
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ms=date.getMilliseconds();
    let hrot=h*30 +0.5*m+s/120;
    let mrot=6*m+s/10;
    let srot=6*s+0.006*ms;
    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;
}, 1);