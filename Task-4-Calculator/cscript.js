var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function perc(){
        screen.value /= 100; 
    }

    function p_m() {
        if (screen.value>0){
            screen.value = 0 - screen.value;
        }
        else{
            screen.value = -1 * (screen.value);
        }
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }