$(function () {
  // 대상을 변수에 저장
  const $body = $('body');

  // 테스트 : body에 배경이미지 넣기
  // $body.css({
  // jQuery는 경로 불러올 때 img부터 불러와야 함
  // 인라인 스타일로 들어오게 된다 -> 가장 우선되는 명령
  // background: 'url(img/blackpink01.jpg) no-repeat 0 0 / cover',
  // });

  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 초기화
  let idx = 0; //전역변수
  tabAction(0);

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인
    $tabMenu.removeClass('on').eq(index).addClass('on');
    $tabContent.hide().eq(index).show();
  }

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    // 인덱스 받아오기
    idx = $(this).index();
    tabAction(idx);
  });
});
