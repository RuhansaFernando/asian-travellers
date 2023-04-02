//font increase and decrease//
function increaseFont() {
    var text = document.getElementById("description");
    var currentSize = parseFloat(window.getComputedStyle(text, null).getPropertyValue('font-size'));
    text.style.fontSize = (currentSize + 2) + 'px';
    }
    function decreaseFont() {
    var text = document.getElementById("description");
    var currentSize = parseFloat(window.getComputedStyle(text, null).getPropertyValue('font-size'));
    text.style.fontSize = (currentSize - 2) + 'px';
    }

//thumbnail description//
    function description_colombo(){
        var colombo="<p><u>Colombo,Sri Lanka</u><br>Colombo is one of largest cities in sri lanka which has a great history\
        its a well developed city with all the attractions matched proper to foreigners needs\
        there are beaches popular architecural structures and its the main trade hub in sri lanka , the most popular places here are\
        galleface beach and gangaramya.</p>";
        document.getElementById("description").innerHTML=colombo;
        }
        
        function description_dubai(){
        var dubai ="<p ><u >Dubai, UAE</u><br>Dubai is a city known for its luxuries for tousrism\
        it has been a great destination for travellers throughout the years with services offered and the respect received \
        from public. Dubai is famous for its hotels and some of the popular ones are burj khalifa and palm jumeirah.</p>"; 
        document.getElementById("description").innerHTML=dubai;
        }
        
        function description_jakarta(){
        var jakarta="<p ><u >Jakarta, Indonesia</u><br>Jakarta the buisness hub of indonesia also know for its \
        culture,modern shopping malls, nightlife, and historical landmarks being such as \
        the National Monument and the Old Batavia district.</p>";
        document.getElementById("description").innerHTML=jakarta;
        }
        
        function description_mumbai(){
        var mumbai="<p><u >Mumbai, India </u><br>Mumbai is a hustling city with a great history and respectable culture.\
         known for its capital market, street food, and historical heritages such as  Gateway of India and the Taj Mahal Palace.\
        It's also home to the Bollywood film industry which is highly popular in the world after Hollywood.</p>";
        document.getElementById("description").innerHTML=mumbai;
        }
        
        function description_delhi(){
        var delhi="<p ><b><u >Delhi, India</u><br>Delhi is the capital city of India with a blent of ancient and modern culture.\
        known for its skyscrappers,cultural heritages and food , \
        with famous landmarks such as the Red Fort and the Qutub Minar. </p>";
        document.getElementById("description").innerHTML=delhi;
        }
        
        function description_bali(){
        var bali="<p ><u >Bali, Indonesia</u></b><br>Bali is a beautiful island  in Indonesia \
        known for its beaches, forests and culture.Being popular tourist destination for its relaxing, \
         adventurous, and spiritual wellbeings.The important landmarks include the Ubud Monkey Forest and the Uluwatu Temple. \
        </p>";
        document.getElementById("description").innerHTML=bali;
            }
    //thumbnail selection for main image//
            var thumbnails = document.getElementById("thumbnails")
            var thumbnails2 = document.getElementById("thumbnails2");
            var imgs2 = thumbnails2.getElementsByTagName("img");
            var imgs = thumbnails.getElementsByTagName("img")
            var main = document.getElementById("main")
            var counter=0;

 for (let i = 0; i < imgs2.length; i++) {
      let img = imgs2[i];
      img.addEventListener("mouseover", function () {
          main.src = this.src;
      });
  }

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.addEventListener("mouseover", function () {
        main.src = this.src;
    });
}
            
//change background color//
    function pagecolor(color){
    document.body.style.background=color;
    }
   
    
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', () => {
        document.body.style.backgroundColor = colorPicker.value;
    })

   
   


