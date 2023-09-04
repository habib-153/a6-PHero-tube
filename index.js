const menuData = async()=> {
    
    let categoryString = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    let categoryData = await categoryString.json();
    let menuData = categoryData.data;
    
    menuDis(menuData);
  };
  
  
  const menuCont = document.getElementById("menu-cont");
  const menuDis =(data)=> {
    data.forEach((element) => {
      
      let button = document.createElement("button");
      button.classList.add("btn", "lg:px-6");
      button.setAttribute("onclick", `${element.category}btn()`);
      button.setAttribute("id", `${element.category}`);
      button.innerText = `${element.category}`;
      menuCont.appendChild(button);
    });
  };
  const videoCont = document.getElementById("video");
  
  const Allbtn = async()=> {
    document.getElementById("Music").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Comedy")
      .classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Drawing")
      .classList.add("text-[#1f2935]", "bg-gray-300");
   
    document
      .getElementById("All").classList.remove("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("All").classList.add("bg-red-500", "text-white");
  
    // document.getElementById("All").classList.add("bg-red-500", "text-white");
  
    const allDataString = await fetch(
      "https://openapi.programming-hero.com/api/videos/category/1000"
    );
    const allData = await allDataString.json();
    const Alldata = allData.data;
    
    AllDataBtnDisplay(Alldata);
  };
  
  let AllDataBtnDisplay =(AllData)=> {
    videoCont.innerHTML = "";
    
    AllData.forEach((element) => {
      
      let card = document.createElement("div");
  
      let Hour = 0;
      
      let minit = 0;
      
      function toHourAndMinit(sec) {
        let mModulus = sec % 60;
        let minute = (sec - mModulus) / 60;
        let realMinute = minute % 60;
        let hour = (minute - realMinute) / 60;
        Hour = hour;
        minit = realMinute;
      }

      toHourAndMinit(element.others.posted_date);
  
      let authorString = element.authors[0].profile_name;
      authorString = authorString.split(" ");
      authorString = authorString[1];
  
      card.innerHTML = `
      <div class="card w-full p-2 bg-base-100 shadow-xl ">
      <figure class="h-[200px] rounded-b-2xl relative">
      
      <img class="h-full w-full" src="${element.thumbnail}" alt="thumbnail"/>
      
      <span id="${authorString}" class="absolute bottom-3 right-4 p-1 bg-black text-white rounded text-[10px]">${Hour}hrs ${minit}min ago</span>
      </figure>
          <section class="mt-4">
              <div class="flex items-start gap-4 pb-4 px-1">
                  <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                    element.authors[0].profile_picture
                  }" alt="">
                  <div class="space-y-2">
                      <h1 class="text-base font-bold" >${element.title}</h1>
                     <div class="flex gap-2"> <h3 class="text-sm text-[#171717a9] font-normal inline-block">${
                       element.authors[0].profile_name
                     }</h3> <span>${
        element.authors[0].verified ? '<img src="./Verified.jpeg" class="w-6">' : ""
      }</span></div>
                      <h4 class="text-sm text-[#171717a9] font-normal">${
                        element.others.views} views</h4>
                  </div>
              </div>
          </section>
      
  </div>`;
  
      videoCont.appendChild(card);
      if (Hour === 0){
        document.getElementById(`${authorString}`).classList.add("hidden");
      }
    });
  };
  

  let Musicbtn =async()=> {
    document.getElementById("All").classList.add("text-[#1f2935]", "bg-gray-300");
    document
      .getElementById("Music").classList.add("text-[#1f2935]", "bg-gray-300");
   
      document.getElementById("Comedy").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Drawing").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Music").classList.remove("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Music").classList.add("bg-red-500", "text-white");
  
    let allDataString = await fetch(
      "https://openapi.programming-hero.com/api/videos/category/1001"
    );
    let allData = await allDataString.json();
    let Alldata = allData.data;
    MusicDataBtnDisplay(Alldata);
  };
  

  let MusicDataBtnDisplay = (AllData) => {
    videoCont.innerHTML = "";
    AllData.forEach((element) => {
      let card = document.createElement("div");
  
      let Hour = 0;
      let minit = 0;
      function toHourAndMinit(sec) {
        let mModulus = sec % 60;
        let minute = (sec - mModulus) / 60;
        let realMinute = minute % 60;
        let hour = (minute - realMinute) / 60;
  
        Hour = hour;
        minit = realMinute;
      }
      toHourAndMinit(element.others.posted_date);
  
      let authorString = element.authors[0].profile_name;
      authorString = authorString.split(" ");
      authorString = authorString[1];
  
      card.innerHTML = `
      
      <div class="card w-full p-2 bg-base-100 shadow-xl ">
  
      <figure class="h-[200px] rounded-b-2xl relative">
      <img class="h-full w-full" src="${element.thumbnail}" alt="Shoes"/>
      <span id="${authorString}" class="absolute bottom-2 right-4 p-1 bg-black text-white rounded text-[10px]">${Hour}hrs ${minit}min ago</span>
      </figure>
          <section class="mt-4">
              <div class="flex items-start gap-4 pb-4 px-1">
                  <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                    element.authors[0].profile_picture
                  }" alt="">
                  <div class="space-y-2">
                      <h1 class=" font-bold" >${element.title}</h1>
                     <div class="flex gap-2"> <h3 class="text-sm text-[#171717a9] inline-block">${
                       element.authors[0].profile_name
                     }</h3> <span>${
        element.authors[0].verified ? '<img src="./Verified.jpeg" class="w-6">' : ""
      }</span></div>
                      <h4 class="text-sm text-[#171717a9]">${
                        element.others.views
                      } views</h4>
                  </div>
              </div>
          </section>   
  </div>`;
  
      videoCont.appendChild(card);
  

      if (Hour === 0) {
        document.getElementById(`${authorString}`).classList.add("hidden");
      }
    });
  };
  

  let Comedybtn =async()=> {
    
    document.getElementById("All").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Music").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Comedy").classList.remove("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Drawing").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Comedy").classList.add("bg-red-500", "text-white");
  
    let ComedyDataString = await fetch(
      "https://openapi.programming-hero.com/api/videos/category/1003"
    );

    let allData = await ComedyDataString.json();
    let Alldata = allData.data;
    ComedyDataBtnDisplay(Alldata);
  };
  
  let ComedyDataBtnDisplay = (AllData) => {
    
    videoCont.innerHTML = "";
    AllData.forEach((element) => {
      const card = document.createElement("div");
  
      let Hour = 0;
      let minit = 0;
      function toHourAndMinit(sec) {
        let mModulus = sec % 60;
        let minute = (sec - mModulus) / 60;
        let realMinute = minute % 60;
        let hour = (minute - realMinute) / 60;
        Hour = hour;
        minit = realMinute;
      }

      toHourAndMinit(element.others.posted_date);
  
      let authorString = element.authors[0].profile_name;
      authorString = authorString.split(" ");
      authorString = authorString[1];
  
      card.innerHTML = `
      <div class="card w-full p-2 bg-base-100 shadow-xl ">
      
   <figure class="h-[200px] rounded-b-2xl relative">
      
   <img class="h-full w-full" src="${element.thumbnail}" alt="Thumbnail"/>
      
      <span id="${authorString}" class="absolute bottom-2 right-4 p-1 bg-black text-white rounded text-[10px]">${Hour}hrs ${minit}min ago</span>
      
      </figure>
          <section class="mt-4">
              <div class="flex items-start gap-4 pb-4 px-1">
                 
                 <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                    element.authors[0].profile_picture
                  }" alt="">
                  <div class="space-y-2">
                      <h1 class="font-bold" >${element.title}</h1>
                     <div class="flex gap-2"> <h3 class="text-sm text-[#171717a9] inline-block">${
                       element.authors[0].profile_name
                     }</h3> <span>${element.authors[0].verified ? '<img src="./Verified.jpeg" class="w-6">' : ""
      }</span></div>
                      <h4 class="text-sm text-[#171717a9]">${
                        element.others.views
                      } views</h4>
                  </div>
              </div>
          </section>
  </div>`;
  
      videoCont.appendChild(card);
      if (Hour === 0) {
        document.getElementById(`${authorString}`).classList.add("hidden");
      }
    });
  };

//   drawing section

  let Drawingbtn = () => {
    
    document.getElementById("All").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Music").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Comedy").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Drawing").classList.remove("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Drawing").classList.add("bg-red-500", "text-white");
    
    videoCont.innerHTML = "";

    const drawSection = document.createElement("section");
    drawSection.classList.add(
      "w-full",
      "h-[calc(100vh-200px)]",
      "flex",
      "justify-center",
      "items-center",
      "flex-col",
      "gap-8",
      "col-span-full"
    );
    drawSection.innerHTML = `
    <img src="./Icon.png" alt="">
  <h2 class="text-3xl font-bold text-center">Oops!! Sorry, There is no <br>content here</h2>`;
   
  videoCont.appendChild(drawSection);
  };
  
  let pageFire = async () => {
    await menuData();
    await Allbtn();
  };
  
  pageFire();
  
  // blog button
  let blogButton =()=> {
    window.location.href = 'blog.html'
  };


// sort by view button
const sort = async () => {
    let dataFetch = await fetch(
      "https://openapi.programming-hero.com/api/videos/category/1000"
    );
    
    let res = await dataFetch.json();
    allBtnDataSort(res.data);
  };
  
  let allBtnDataSort =(data)=> {

    document.getElementById("All").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Music").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Comedy").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Drawing").classList.add("text-[#1f2935]", "bg-gray-300");
    
    document.getElementById("Music").classList.add("text-[#1f2935]", "bg-gray-300");
   
  
    videoCont.innerHTML = "";
    
    data.sort(function (a, b){
      if (parseFloat(a.others.views) < parseFloat(b.others.views)) {
        return 1;
      } else if (parseFloat(a.others.views) > parseFloat(b.others.views)) {
        return -1;
      }
    });
    
    data.forEach((element) => {
        
        let card = document.createElement("div");
        let Hour = 0;
        let minit = 0;
        function toHourAndMinit(sec) {
          let mModulus = sec % 60;
          let minute = (sec - mModulus) / 60;
          let realMinute = minute % 60;
          let hour = (minute - realMinute) / 60;
          Hour = hour;
          minit = realMinute;
        }

        toHourAndMinit(element.others.posted_date);
        let authorString = element.authors[0].profile_name;
        authorString = authorString.split(" ");
        authorString = authorString[1];
    

        card.innerHTML = `
        <div class="card w-full p-2 bg-base-100 shadow-xl ">
    
        <figure class="h-[200px] rounded-b-2xl relative">
        <img class="h-full w-full" src="${element.thumbnail}" alt="Thumbnail"/>
        
        <span id="${authorString}" class="absolute bottom-2 right-4 p-1 bg-black text-white rounded text-[10px]">${Hour}hrs ${minit}min ago</span>
        
        </figure>
            <section class="mt-4">
                <div class="flex items-start gap-2 pb-2 px-1">
                    <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                      element.authors[0].profile_picture
                    }" alt="">
                    <div class="space-y-2">
                        <h1 class="font-bold" >${element.title}</h1>
                       <div class="flex gap-2"> <h3 class="text-sm text-[#171717a9] inline-block">${
                         element.authors[0].profile_name
                       }</h3> <span>${
          element.authors[0].verified ? '<img src="./Verified.jpeg" class="w-6">' : ""
        }</span>
         </div>
         <h4 class="text-sm text-[#171717a9]">${element.others.views} views</h4>
         </div>
        </div>
     </section>    
    </div>`;
    
        videoCont.appendChild(card);
        
        
        if (Hour === 0) {
          document.getElementById(`${authorString}`).classList.add("hidden");
        }
      });
    }