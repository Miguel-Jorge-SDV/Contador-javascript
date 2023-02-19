let contador = 0
const value = document.querySelector("#valor")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if(styles.contains('decrescente')) {
            contador--
        }

        else if(styles.contains('resetar')) {
            contador = 0
        }

        else {
            contador++
        }

        value.textContent = contador
    })
})