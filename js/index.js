document.addEventListener("DOMContentLoaded", function () {
    const launchDate = new Date("2025-02-06T00:00:00").getTime(); // Змінити на вашу дату

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft < 0) {
            document.querySelector(".countdown-container").innerHTML = "<p>Time's up!</p>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});





document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById("burger");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const closeButton = document.getElementById("close-menu");

    // Відкривання меню (переміщаємо справа)
    burgerButton.addEventListener("click", function () {
        sidebarMenu.style.right = "0";
    });

    // Закривання меню
    closeButton.addEventListener("click", function () {
        sidebarMenu.style.right = "-100%";
    });

    // Закривання меню при кліку поза ним
    document.addEventListener("click", function (event) {
        if (!sidebarMenu.contains(event.target) && !burgerButton.contains(event.target)) {
            sidebarMenu.style.right = "-100%";
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо кнопку та текстовий блок з адресою токена
    const copyButton = document.getElementById("cp");
    const tokenAddress = document.getElementById("sc").innerText;

    // Додаємо обробник кліку для копіювання
    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(tokenAddress).then(() => {
            // Змінюємо іконку на "Copied!"
            copyButton.innerHTML = `
                <span>Copied!</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round" class="lucide lucide-check h-5 w-5">
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            `;

            // Повертаємо стандартну іконку через 2 секунди
            setTimeout(() => {
                copyButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" class="lucide lucide-copy h-5 w-5">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                `;
            }, 2000);
        }).catch(err => {
            console.error("Не вдалося скопіювати текст: ", err);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".gallery-main-slider");
    const slides = document.querySelectorAll(".gallery-main-photo");
    let index = 0;

    function slideShow() {
        index = (index + 1) % slides.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideShow, 3000); // Автоматична зміна фото кожні 3 секунди
});

function openLink1() {
    window.open("https://x.com/mlkfilescto", "_blank");
}

function openLink2() {
    window.open("https://dexscreener.com/solana/8xf8mbcvhy6m52c5cumhxueqtvfatxkhq5gazgfv5q7", "_blank");
}

function openLink3() {
    window.open("https://t.me/TheMLKFiles_CTO", "_blank");
}

function openLink4() {
    window.open("https://www.dextools.io/app/en/token/mlkfiles?t=1738432765552", "_blank");
}

// Після завантаження DOM додаємо обробники подій до кожної іконки
document.addEventListener('DOMContentLoaded', function() {
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');
    const icon3 = document.querySelector('.icon3');
    const icon4 = document.querySelector('.icon4');

    if (icon1) {
        icon1.addEventListener('click', openLink1);
    }
    if (icon2) {
        icon2.addEventListener('click', openLink2);
    }
    if (icon3) {
        icon3.addEventListener('click', openLink3);
    }
    if (icon4) {
        icon4.addEventListener('click', openLink4);
    }
});


function openLinkBuy() {
    window.open("https://jup.ag/swap/SOL-e38iFXmpFbR28beVKP9Wh7sCzVCx1ZqeSawePa6pump", "_blank");
}