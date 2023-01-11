/* JavaScript のライブラリ（関数やメソッドなどをまとめたもの） */

// カルーセルにするセレクタを指定
$('.carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    arrows: true,
});


$('.show01').modaal({
    content_source: '.modal01'
});

$('.show02').modaal({
    content_source: '.modal02'
});

$('.show03').modaal({
    content_source: '.modal03'
});

$('.show04').modaal({
    content_source: '.modal04'
})


// アラートダイアログのOKボタンを押されたときの戻り値はundefined ？
$('.share-button01').on('click', () => {
    alert('イタリアンのレシピをシェアしました♪');
/* alertを表示している間は処理が止まる！！！
 　だからalertを閉じた後にやりたい処理はそのまま連続して記述すればよい↓ */
    $('.show01').modaal('close');
});

/* on('click',() )とwindow.click()どちらでもできる　使い分け必要？ */
$('.share-button02').click( () => {
    alert('フレンチのレシピをシェアしました♪');
    $('.show02').modaal('close');
});

$('.share-button03').click( () => {
    alert('ダイエットのレシピをシェアしました♪');
    $('.show03').modaal('close');
});

$('.share-button04').click( () => {
    alert('エスニックのレシピをシェアしました♪');
    $('.show04').modaal('close');
})