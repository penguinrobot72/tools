$(".plus").click(function () {
    plus();
  });
  
  function plus() {
    let number = $(".number").val();
    $(".number").val(++number);
    console.log(typeof (number)); // number
  }
  
  $(".minus").click(function () {
    minus();
  });
  
  function minus() {
    let number = $(".number").val();
    $(".number").val(--number);
    console.log(typeof (number)); // number
  }
  
  //歸零
  $(".zero").click(function () {
    $(".number").val(0);
  });