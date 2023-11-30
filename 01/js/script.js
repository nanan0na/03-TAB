$(function () {
  // 대상을 변수에 저장
  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 초기 세팅
  tabAction();

  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    $tabMenu.removeClass('on');

    let idx = $(this).index();
    $tabMenu.eq(idx).addClass('on');

    $tabContent.hide();
    $tabContent.eq(idx).show();
  });

  // 중복되는 동작을 함수로 정의
  function tabAction() {
    $tabContent.hide();
    $tabContent.eq(0).show();

    $tabMenu.removeClass('on');
    $tabMenu.eq(0).addClass('on');
  }
});
