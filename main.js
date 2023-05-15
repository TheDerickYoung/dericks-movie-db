function shortenOverview(str) {
    let split = str.split('')
    return split.slice(0, 160).join('').trim() + '...'
}


// Check if the current page is 'index.html'
if (window.location.pathname.endsWith('index.html')) {
    addEventListener("load", (event) => {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8e6fd968cc27fdf9ffc1350938f6c87c&language=en-US&page=1`
    
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.results)
    
          data.results.forEach(element => {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'card');
    
            const newImg = document.createElement('img');
            newImg.src = 'https://image.tmdb.org/t/p/w500' + element.poster_path;
    
            const newTitle = document.createElement('h2');
            newTitle.innerText = element.original_title;

            const newOverview = document.createElement('p')
            newOverview.innerText = shortenOverview(element.overview)
            newOverview.setAttribute('class', 'card-overview')
    
            newDiv.appendChild(newImg);
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newOverview)
    
            const parentElement = document.querySelector('.row');
            parentElement.appendChild(newDiv);
          });
        })
    });
  }
  
  // Check if the current page is 'upcoming.html'
  if (window.location.pathname.endsWith('upcoming.html')) {
    addEventListener("load", (event) => {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=8e6fd968cc27fdf9ffc1350938f6c87c&language=en-US&page=1`
    
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.results)
    
          data.results.forEach(element => {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'card');
    
            const newImg = document.createElement('img');
            newImg.src = 'https://image.tmdb.org/t/p/w500' + element.poster_path;
    
            const newTitle = document.createElement('h2');
            newTitle.innerText = element.original_title;
    
            newDiv.appendChild(newImg);
            newDiv.appendChild(newTitle);
    
            const parentElement = document.querySelector('.row');
            parentElement.appendChild(newDiv);
          });
        })
    });
  }
  
  
  
  
  
  
  
  document.querySelector('#search-button').addEventListener('click', getSearchFetch);
  
  function getSearchFetch() {
    const searchBar = document.querySelector('#search-bar');
    const searchValue = searchBar.value;
    console.log(searchValue);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=8e6fd968cc27fdf9ffc1350938f6c87c&language=en-US&query=${searchValue}&page=1&include_adult=false`;
  
    // Clear the input field
    searchBar.value = '';
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        
        // Clear the DOM
        clearDOM();
        
        data.results.forEach(element => {
          const newDiv = document.createElement('div');
          newDiv.setAttribute('class', 'card');
  
          const newImg = document.createElement('img');
          newImg.src = 'https://image.tmdb.org/t/p/w500' + element.poster_path;
  
          const newTitle = document.createElement('h2');
          newTitle.innerText = element.original_title;
  
          newDiv.appendChild(newImg);
          newDiv.appendChild(newTitle);
  
          const parentElement = document.querySelector('.row');
          parentElement.appendChild(newDiv);
        });
      });
  }
  
  // Function to clear the DOM
  function clearDOM() {
    const parentElement = document.querySelector('.row');
    
    // Remove all child elements
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
