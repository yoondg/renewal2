var swipe = new Swiper(".snsSwiper", {
    slidesPerView: 3, // 기본 보여지는 슬라이드 개수
    spaceBetween: 30, // 슬라이드 간 간격
    centeredSlides: true, // 활성화된 슬라이드 가운데 위치
    initialSlide: 1,
    loop: true, // 무한 루프 설정
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 768px 이하 화면에서는 한 개의 슬라이드만 보이도록 설정
      768: {
        slidesPerView: 1, // 작은 화면에서 슬라이드 1개 보임
        spaceBetween: 10, // 작은 화면에서 슬라이드 간격 줄임
      },
      1024: {
        slidesPerView: 3, // 데스크탑에서 슬라이드 3개 보임
        spaceBetween: 30, // 데스크탑에서 슬라이드 간격
      },
    },
  });



  //아코디언
  // .menu-icon을 클릭하면 .accordion을 토글하는 기능
document.querySelector('.menu-icon').addEventListener('click', function() {
  // .accordion 요소 선택
  const accordionMenu = document.querySelector('.accordion');

  // active 토글 (클래스가 없으면 추가, 있으면 제거)
  accordionMenu.classList.toggle('active');
});

// 모든 .accordion-title 요소에 클릭 이벤트 추가
document.querySelectorAll('.accordion-title').forEach(function(title) {
  title.addEventListener('click', function() {
    // 먼저 모든 .accordion-content에서 active 클래스 제거
    document.querySelectorAll('.accordion-content').forEach(function(content) {
      content.classList.remove('active');
    });

    // 현재 클릭한 제목의 다음 요소(.accordion-content)를 찾아서 active 클래스 토글
    const content = this.nextElementSibling;
    content.classList.toggle('active');
  });
});

