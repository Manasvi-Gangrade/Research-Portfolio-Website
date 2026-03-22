const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');

pageTurnBtn.forEach((el) => {
    el.onclick = (e) => {
        e.preventDefault();
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        
        let pageIndex = Array.from(pages).indexOf(pageTurn);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - pageIndex;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + pageIndex;
            }, 500)
        }
    }
})

const contactMeBtn = document.querySelector('.btn.contact-me');
if(contactMeBtn){
    contactMeBtn.onclick = (e) => {
        e.preventDefault();
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        })
    }
}

const backProfileBtn = document.querySelector('.back-profile');
if(backProfileBtn){
    backProfileBtn.onclick = (e) => {
        e.preventDefault();
        pages.forEach((_, index) => {
            setTimeout(() => {
                let revIndex = pages.length - 1 - index;
                pages[revIndex].classList.remove('turn');
                setTimeout(() => {
                    pages[revIndex].style.zIndex = 20 - revIndex;
                }, 500)
            }, (index + 1) * 200 + 100)
        })
    }
}

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

if(coverRight) {
    setTimeout(() => {
        coverRight.classList.add('turn');
    }, 2100)

    setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 2800)
}

if(pageLeft) {
    setTimeout(() => {
        pageLeft.style.zIndex = 10;
    }, 3200)
}

pages.forEach((_, index) => {
    setTimeout(() => {
        let revIndex = pages.length - 1 - index;
        pages[revIndex].classList.remove('turn');

        setTimeout(() => {
            pages[revIndex].style.zIndex = 20 - revIndex ;
        }, 500)

    }, (index + 1) * 200 + 2100)
})