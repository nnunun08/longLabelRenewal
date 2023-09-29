// 하트 클릭 색상 변경
const like = document.querySelectorAll('.data .like')
console.log(like)
like.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('ac')
    })
})