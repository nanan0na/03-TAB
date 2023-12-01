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

  // 배경 이미지를 배열에 저장
  const bgArr = ['blackpink01.jpg', 'blackpink02.jpg', 'blackpink03.jpg'];
  // console.log(bgArr[2]);

  // 초기화
  let idx = 0; //전역변수
  tabAction(0);

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인
    $tabMenu.removeClass('on').eq(index).addClass('on');
    $tabContent.hide().eq(index).show();

    // 배경이미지 적용
    $body.css({
      // background: 'url(img/' + bgArr[index] + ') no-repeat 0 0 / cover',
      background: `url(img/${bgArr[index]}) no-repeat 0 0 / cover`,
    });
  }

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    // 인덱스 받아오기
    idx = $(this).index();
    tabAction(idx);
  });
});
