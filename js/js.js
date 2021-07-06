const header = document.querySelector('#header');
            function scrollFunc() {
                if (pageYOffset >= 178.5) {
                    header.classList.add('on');
                    header.style.background = '#e4b12c';
                    
                    // header.style.color = '#fff';
                } else {
                    header.classList.remove('on');
                    header.style.background = '#ffffff';
                    // header.style.color = '#444444';
                }
            }
            window.addEventListener('scroll', scrollFunc);
