document.getElementById("popupButton").addEventListener("click", function() {
    const container = document.querySelector(".container");
    const button = document.getElementById("popupButton");
    const images = [
        "/cute/imgs/5884_0.jpg", 
        "/cute/imgs/5885_0.jpg", 
        "/cute/imgs/5886_0.jpg", 
        "/cute/imgs/5887_0.jpg", 
        "/cute/imgs/5888_0.jpg", 
        "/cute/imgs/5889_0.jpg", 
        "/cute/imgs/5890_0.jpg", 
        "/cute/imgs/5891_0.jpg"
    ];
    const radius = 200;
    const angleIncrement = (2 * Math.PI) / images.length;

    // ซ่อนปุ่มเมื่อคลิก
    button.style.display = "none";

    images.forEach((src, index) => {
        const imgElement = document.createElement("div");
        imgElement.className = "image-popup";
        imgElement.style.backgroundImage = `url(${src})`;
        
        const angle = index * angleIncrement;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        imgElement.style.left = `${x + container.offsetWidth / 2 - 60}px`;
        imgElement.style.top = `${y + container.offsetHeight / 2 - 60}px`;

        container.appendChild(imgElement);

        setTimeout(() => {
            imgElement.style.opacity = 1;
        }, 1000 * index);
    });

    // แสดงข้อความหลังจากภาพสุดท้ายปรากฏ
    setTimeout(() => {
        const message = document.getElementById("message");
        message.classList.remove("hidden");
        message.style.opacity = 1;

        // เรียกใช้ฟังก์ชันสร้างหัวใจหลังจากข้อความแสดงเสร็จ
        setTimeout(createHeartsContinuously, 0); // 2000ms คือระยะเวลาหลังจากข้อความแสดงเสร็จ
    }, images.length * 100 + 7000); // 500ms สำหรับความล่าช้าเพิ่มเติม

    function createHeartsContinuously() {
        setInterval(createHeart, 200); // สร้างหัวใจใหม่ทุก 500ms
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = `${Math.random() * 100}%`; // สุ่มตำแหน่งแนวนอน
        heart.style.width = `${Math.random() * 30 + 20}px`; // สุ่มขนาดหัวใจ
        heart.style.height = heart.style.width;

        // เพิ่มการหน่วงเวลาการเคลื่อนไหวแบบสุ่มระหว่าง 0 ถึง 3 วินาที
        const randomDelay = Math.random() * 3;
        heart.style.animationDelay = `${randomDelay}s`; 

        document.body.appendChild(heart);

        // ลบหัวใจหลังจากการลอยขึ้นสุดสิ้น (กำหนดเวลาในการลบตามความยาวของแอนิเมชัน)
        setTimeout(() => {
            heart.remove();
        }, 5000 + randomDelay * 1000); // เพิ่มการลบหัวใจหลังจากการเคลื่อนไหว
    }
});
