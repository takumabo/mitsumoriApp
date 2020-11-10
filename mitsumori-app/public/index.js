$(function(){
    //ボタンを押すごとに画面が切り替わる関数
   $(function () {
 
     $(".btn").on("click", function () {
       $(this).closest("div").css("display", "none");
       id = $(this).attr("href");
       $(id).addClass("fit").fadeIn("slow").show();
     });
 
 
 
 //選択ボタンのデータを配列に入れて処理する関数
       var priceBox =[];
       var nameBox =[];
     $(".btn").each(function(){
       $(this).on('click',function(){
         var value = $(this).data("value");
         var name = $(this).children(".btn-top").text();
          priceBox.push(value);
          nameBox.push(name);
 
          countMaster();
       });
     });
 
     //問題数カウント関数
     function countMaster() {
         const s = $(".countNumber").text()
         const m = Number(s);
         if(m < 10) {
             var cnt = m;
             cnt++;
             $(".countNumber").text(cnt);
         }
     }
    
 
 
 //結果を出力する関数
     $('.end').on('click',function(){
         const sumArray = (priceBox) => {
             let sum = 0;
             for (let i = 0, len = priceBox.length; i < len; i++) {
               sum += priceBox[i];
             }
             return sum.toLocaleString();　//３桁通貨調整
           };
 
 
         $('#answer').css("display",""); //見積もり結果表示
 
         $('.all-cost').text(sumArray(priceBox));
         $(".q1_kind").text(nameBox[0]);　$(".q1_price").text(priceBox[0].toLocaleString());
         $(".q2_kind").text(nameBox[1]);　$(".q2_price").text(priceBox[1].toLocaleString());
         $(".q3_kind").text(nameBox[2]);　$(".q3_price").text(priceBox[2].toLocaleString());
         $(".q4_kind").text(nameBox[3]);　$(".q4_price").text(priceBox[3].toLocaleString());
         $(".q5_kind").text(nameBox[4]);　$(".q5_price").text(priceBox[4].toLocaleString());
         $(".q6_kind").text(nameBox[5]);　$(".q6_price").text(priceBox[5].toLocaleString());
         $(".q7_kind").text(nameBox[6]);　$(".q7_price").text(priceBox[6].toLocaleString());
         $(".q8_kind").text(nameBox[7]);　$(".q8_price").text(priceBox[7].toLocaleString());
         $(".q9_kind").text(nameBox[8]);　$(".q9_price").text(priceBox[8].toLocaleString());
         $(".q10_kind").text(nameBox[9]);　$(".q10_price").text(priceBox[9].toLocaleString());
   });
 
   });
 })
 
 
 
 // 問い合わせモーダル
 $(function () {
     $('#openModal').click(function(){
         $('#modalArea').fadeIn();
     });
     $('#closeModal , #modalBg, .send-btn input').click(function(){
       $('#modalArea').fadeOut();
     });
   })
 
 
 