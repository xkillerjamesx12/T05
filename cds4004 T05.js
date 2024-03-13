//provided to fill the leading zero.
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
   }
   
   async function statusCheck(res) {
     if (!res.ok) {
       throw new Error(await res.text());
     }
     return res;
   }
   

   async function fetchPokemon(url) {
	const response = await fetch(url)
  .then(response => response.json())
  .then(data => {
  
  	let div_p_ = document.getElementById('pokemon');
    
    let pokemonSprite = data.sprites.front_default;
    let pokemonName = data.name;
    let pokemonID = data.id;
    let pokemonType = data.types;
    
    //console.log(pokemonID)
    
    var p_id = document.createElement("p");
    p_id.setAttribute("id","pid");
   	var textNode = document.createTextNode(pokemonID);
    p_id.appendChild(textNode)
   	div_p_.appendChild(p_id);
    
    let img_ = document.createElement("img");
    img_.src = pokemonSprite;
    div_p_.appendChild(img_);
    
    let p_name = document.createElement("p");
   	p_name.setAttribute("id","name");
    var textNode = document.createTextNode(pokemonName);
    p_name.appendChild(textNode);
    div_p_.appendChild(p_name);
    
    let p_type = document.createElement("p");
    p_type.setAttribute("id","type");
    var textNode = document.createTextNode(pokemonType);
    p_name.appendChild(textNode);
    p_type.appendChild(pokemonType);
    div_p_.appendChild(p_type);

    
    
  })


   //TODO 4: Fetch the data according to the URL parameter.
   //TODO 5: Obtain the div that created in TODO 2
   //TODO 6: Create the element p, set the class to pid and put the pokemon’s id
   // inside the element and append to the div obtained in TODO 5.
   // HINTS: you can use document.createTextNode(‘text’) to create a text node, and
   // append to the element. <p>test</p> is equivalent to:
   // var p = document.createElement(‘p’);
   // var textNode = document.createTextNode(‘test’);
   // p.appendChild(textNode)
   
   //TODO 7: Create the img element, set the src to the image link obtained from the
   // API, and append to the div obtained in TODO 5.
   //TODO 8: Create the element p, set the class to “name” and
   // put the pokemon’s name inside the element and
   // append to the div obtained in TODO 5.
   //TODO 9: Create the element p, set the class to “type” and
   // put the pokemon’s type inside the element and
   // append to the div obtained in TODO 5.
   // Note that you need to join multiple types into single string.
   }
   
   async function fetchPokemons() {
       const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5")
     .then(response => response.json())
     .then(data => {
         let results = data.results
       for (let i = 0; i < results.length; i++){
           //console.log(results.length)
         //console.log(results[i].url)
         let div_ = document.getElementById('pokemons')
         let div_p = document.createElement("div");
           div_p.setAttribute("id","pokemon");
         div_.appendChild(div_p)
         fetchPokemon(results[i].url);
       }
       })
     .catch(error => console.error('Error:', error));
   
     
   //TODO 1: Call API https://pokeapi.co/api/v2/pokemon?offset=20&limit=20 to fetch
   // the pokemons and store the returned JSON in a variable.
   // const response = await fetch(“https://pokeapi.co/...”);
   //TODO 2: For each pokemon, use “document.createElement” to create a div, set the
   // pokemon’s name as the div’s id, and set the class to ‘pokemon’. Append
   // the new created div to the given pokemons div
   // You may use setAttribute and appendChild function accordingly.
   //TODO 3: After that inside the same loop,
   // call second API to fetch individual Pokémon.
   }
   
   
   
   fetchPokemons()