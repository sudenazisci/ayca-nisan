document.addEventListener('DOMContentLoaded', function() {
    
    // --- PARÇACIK ANİMASYONU ---
    /* particles-js kütüphanesinin yüklü olduğundan emin olun */
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#a8d5c8"
                },
                shape: {
                    type: ["circle", "triangle", "polygon"],
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#7cbaa5",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: false },
                    onclick: { enable: false },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // --- ZARF AÇMA/KAPAMA ---
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const waxSeal = document.querySelector('.wax-seal');

    if (envelopeWrapper && waxSeal) {
        // Mühüre tıklayarak açma
        waxSeal.addEventListener('click', function(e) {
            e.stopPropagation();
            envelopeWrapper.classList.toggle('open');
        });

        // Zarfın herhangi bir yerine tıklayarak açma
        envelopeWrapper.addEventListener('click', function() {
            envelopeWrapper.classList.toggle('open');
        });
    }

    // --- GERİ SAYIM SAYACI ---
    const countToDate = new Date("Jan 24, 2026 19:00:00").getTime();
    
    // Sayaç elementlerinin varlığını kontrol et (Hata almamak için)
    const daysEl = document.getElementById("days");
    
    if (daysEl) { 
        const updateTimer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countToDate - now;

            // Hesaplamalar
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // HTML'e yazdırma
            document.getElementById("days").innerText = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

            // Süre dolarsa
            if (distance < 0) {
                clearInterval(updateTimer);
                const countdownContainer = document.querySelector(".countdown-grid") || document.getElementById("countdown");
                if(countdownContainer) {
                    countdownContainer.innerHTML = "<div class='countdown-ended' style='text-align:center; font-size:1.5rem; color:#5e5048;'>Mutluluklar!</div>";
                }
            }
        }, 1000);
    }

  

}); // DOMContentLoaded kapanışı