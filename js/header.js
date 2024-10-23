/* 헤더 */
document.addEventListener("DOMContentLoaded", function() {
    // 모든 nav 항목을 가져옴
    const navItems = document.querySelectorAll('nav ul li');

    // 각 nav 항목에 마우스 오버 및 아웃 이벤트 추가
    navItems.forEach(item => {
        const subMenu = item.querySelector('.sub');
        const ul = item.querySelector('.sub');
        

        if(subMenu,navItems) {
            item.addEventListener('mouseenter', () => {
                subMenu.style.display = 'flex';
                ul.style.display = 'flex';
                // 서브메뉴 나타남
            });

            item.addEventListener('mouseleave', () => {
                subMenu.style.display = 'none'; // 서브메뉴 숨김
            });
        }
    });
});


//반응형 내비게이션
let accordionItems = document.querySelectorAll('.accordion-item');
  // 첫 번째 아코디언을 열어놓음
  accordionItems[0].querySelector('.accordion-content').style.display = 'block';
  accordionItems.forEach(function(item) {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    title.addEventListener('click', function() {
      // 모든 아코디언 내용을 숨김
      accordionItems.forEach(function(i) {
        i.querySelector('.accordion-content').style.display = 'none';
      });
      // 클릭한 아코디언 내용만 표시
      content.style.display = 'block';
    });
  });





/* 탑 버튼 */
let btn = document.getElementById('gototop');
let doc = document.documentElement;
let scrollAmount; //스크롤의 양
window.addEventListener('scroll',function(){
  scrollAmount = doc.scrollTop;
  if(scrollAmount > 100){
    btn.classList.add('visible');
  }else{
    btn.classList.remove('visible');
  }
})

//클릭했을 때 맨 위로 스크롤
btn.addEventListener('click', function(event){
  event.preventDefault(); 
  window.scroll({
    top:0,
    behavior:'smooth'
  });
})
