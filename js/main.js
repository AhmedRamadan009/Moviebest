let responsedata;
let apiResponse;
const usernameInput = document.getElementById("usernameInput"); 
const userEmailInput = document.getElementById("userEmailInput"); 
const userPasswordInput = document.getElementById("userPasswordInput");
const  phoneInput  = document.getElementById("phoneInput");
const ageInput  = document.getElementById("ageInput");
const userRePasswordInput= document.getElementById("userRePasswordInput");
const signupBtn = document.getElementById("signupBtn"); 
let submitbtn=document.getElementById("Submit");
let searchBykeyWord =document.getElementById("searchByWord");
let searchByMovie=document.getElementById("searchByMovie");

let movie;

let TrendingMovies = [];
let users = [];

async function getApi(movieType = "top_rated") {
  apiResponse = await fetch(
    `https://api.themoviedb.org/3/${movieType}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&&language=en-US&page=1&query=${movie}`
  );

  responsedata = await apiResponse.json();

  TrendingMovies = responsedata.results;

  displayTrendingMovies();
}

getApi("movie/now_playing");

function displayTrendingMovies() {
  let box = ``;
  for (let i = 0; i < TrendingMovies.length; i++) {
    box += `  <div class="col-md-4">
        <div class="movie position-relative">
        
    
        <div class="movie-layer h-100  w-100 d-flex flex-column text-center justify-content-center align-items-center p-4">

        <h4>${TrendingMovies[i].title}</h4>
        <p>${TrendingMovies[i].overview}</p>
        <p>Rate:${TrendingMovies[i].vote_average}</p>
        <p>${TrendingMovies[i].release_date}</p>

        
      </div>
    
      <img src="https://image.tmdb.org/t/p/w500${TrendingMovies[i].poster_path}" class="w-100" alt="">
     
  </div>
  </div>`;
  }
  document.getElementById("movieBody").innerHTML = box;
}





$("#top-rated").click(function () {
  getApi("movie/top_rated");
});
$("#up-coming").click(function () {
  getApi("movie/upcoming");
});
$("#popluar").click(function () {
  getApi("movie/popular");
});
$("#now-playing").click(function () {
  getApi("movie/now_playing");
});
$("#trending").click(function () {
  getApi("trending/all/day");
});



searchByMovie.addEventListener("keyup", function() {
   movie = searchByMovie.value;
  getApi("search/movie")

});


searchBykeyWord.addEventListener("keyup", function() {
  movie = searchBykeyWord.value;
 getApi("search/multi")

});
  
 
 

  submitbtn.addEventListener("click",function () {
    getContact();
  })
 

let usersinfo;

function getContact()
{

    userInputsValidation();
    

    if(userInputsValidation() == true )
    {
        let user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value,
            phone:phoneInput.value,
            age:ageInput.value,
            repassword:userRePasswordInput.value
        }

        usersinfo.push(user)
      
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
       
    }
    else
    {
        const tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

}

function usernameValidation()
{
    const usernameAlert = document.getElementById("usernameAlert");

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userPasswordValidation()
{
    let regex = /^.{5,15}$/;
    const userPasswordAlert = document.getElementById("userPasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userRePasswordValidation()
{
    let regex = /^.{5,15}$/;
    const userRePasswordAlert = document.getElementById("userRePasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userRePasswordInput.classList.add("is-valid");
        userRePasswordInput.classList.remove("is-invalid");
        userRePasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userRePasswordInput.classList.add("is-invalid");
        userRePasswordInput.classList.remove("is-valid");
        userRePasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userEmailValidation()
{
    const userEmailAlert = document.getElementById("userEmailAlert");

    let regex = /@[a-z]{5,10}(\.com)$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function validatePhone() {

    const phoneAlret= document.getElementById("phoneAlert");

    let regex =/^01[0125][0-9]{8}$/;

    if(regex.test(phoneInput.value)==true && phoneInput.value !="")
    {
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid")
        phoneAlret.classList.replace("d-block","d-none")
      return true;
    }
  else{
    phoneInput.classList.add("is-invalid");
    phoneInput.classList.remove("is-valid")
    phoneAlret.classList.replace("d-none","d-block")
  
      return false;
  }
    
  }
  function validateAge() {

    const ageAlret= document.getElementById("ageAlert");

    let regex = /^[1-9][0-9]$|^100$/;

    if(regex.test(ageInput.value)==true && ageInput.value !="")
    {
        ageInput.classList.add("is-valid");
        ageInput.classList.remove("is-invalid")
        ageAlret.classList.replace("d-block","d-none")
      return true;
    }
  else{
    ageInput.classList.add("is-invalid");
    ageInput.classList.remove("is-valid")
    ageAlret.classList.replace("d-none","d-block")
  
      return false;
  }
    
  }
 
function userInputsValidation()
{
    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();
    userRePasswordValidation();
    validatePhone();
    validateAge();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true && userRePasswordValidation()==true && validatePhone()== true && validateAge()== true))
    {
        return true
    }
    else
    {
        return false
    }
}






  var nvWidth = 0,
  isTrue = !0;
$(".strip-toggel-menu").click(function () {
  isTrue
      ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"),
        (nvWidth = $(".nav-tab-menu").width() - 10),
        $(".strip-header-nav").css("left", nvWidth),
        $(".fa-align-justify").toggleClass("fa-times"),
        $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
        $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
        $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
        $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
        $(".nav-tab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
        $(".nav-tab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 1600),
        (isTrue = !isTrue))
      : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),
        $(".fa-align-justify").toggleClass("fa-times"),
        $(".strip-header-nav").css("left", 0),
        $(".nav-tab-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500),
        (isTrue = !isTrue));
});
var allData,
  allMovies,
  isSearchTrue = !0;
$(".strip-search").click(function () {
  isSearchTrue
      ? ($(".search").addClass("open-menu").removeClass("close-search"),
        $(".fa-search").toggleClass("fa-times"),
        $(".search-input").animate({ top: "49%" }, 1500, function () {
            $(".search-input").animate({ top: "50%" }, 250);
        }),
        (isSearchTrue = !isSearchTrue))
      : ($(".search").addClass("close-search").removeClass("open-menu"), $(".fa-search").toggleClass("fa-times"), $(".search-input").animate({ top: "300%" }), (isSearchTrue = !isSearchTrue));
});

 