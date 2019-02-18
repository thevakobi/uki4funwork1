SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {

  SC.stream('/tracks/5562968123',function(sound){
    $('#start').click(function(e) {
               e.preventDefault();
               sound.start();
             });

             $('#stop').click(function(e) {
                        e.preventDefault();
                        sound.stop();
                      });
 });

 SC.stream('/tracks/348081108',function(sound){
   $('#start').click(function(e) {
              e.preventDefault();
              sound.start1();
            });

            $('#stop').click(function(e) {
                       e.preventDefault();
                       sound.stop1();
                     });
});

SC.stream('/tracks/225519099',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start2();
           });

           $('#stop').click(function(e) {
                      e.preventDefault();
                      sound.stop2();
                    });
});

SC.stream('/tracks/524553387',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start3();
           });

           $('#stop').click(function(e) {
                      e.preventDefault();
                      sound.stop3();
                    });
});

SC.stream('/tracks/83205085',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start4();
           });

           $('#stop').click(function(e) {
                      e.preventDefault();
                      sound.stop4();
                    });
});

SC.stream('/tracks/183187952',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start5();
           });

           $('#stop').click(function(e) {
                      e.preventDefault();
                      sound.stop5();
                    });
});
 });
