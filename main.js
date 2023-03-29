let scrolltop= document.querySelector('.scroll-top')
window.addEventListener('scroll', function(){
    scrolltop.classList.toggle('activer', window.scrollY>500)
})
function toone(){
    window.scrollTo(
        {
            top:0,
            behavior:'smooth',
        })
}
const header = document.querySelector('header');
window .addEventListener ('scroll', function()
{ header.classList.toggle('stick', this.window.scrollY>0);
});
