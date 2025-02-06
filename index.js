// console.log("Hello World!");
//get the element from HTML and save the value to the variable dateElement
const dateElement = document.getElementById('date');
console.log(dateElement);
//get the current date and store it to currentDate variable
let currentDate = new Date();
console.log(currentDate);
//update the value of dateElement variable with the currentDate variable value
dateElement.innerHTML = currentDate;
//to format the current date
let dateOptions = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

//this is to access X API trend
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		//my secret key (different each user)
		'x-rapidapi-key': '44302901eemsh1867aad820e66e8p15601bjsn02731cd07571',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		//request body should be in format of url parameter
		//variable="value" not {variable: value}
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})//request body
};

let graphData = [];

//fetch code sends a request to a specific url
fetch(url, options) //request
.then(res => res.json()) //process to get response
.then(data => {
	console.log(data); //data - response of the server after our request
	
	//to push the data/objects from API to my site 25 times -- pwede rin dito .map
	for(let i=0; i<25; i++){
		graphData.push({
				"name": data.trends[i].name,
				"volume": data.trends[i].volume,
		})
	}

	//collects all the name of the topics and stores it to a variable post -- pwede rin dito for loop
	let topics = graphData.map(post =>{
		return post.name
	})
	//collects all the volumes of the topics and stores it to a variable post
	let volumes = graphData.map(post =>{
		return post.volume
	})
	console.log(graphData);
	console.log(graphData.length);

	const myChart = document.getElementById("myChart");

	let barChart = new Chart(myChart,{

		type: 'bar',
		data:{
			labels: topics,
			datasets: [{
				label: '# of tweets /xeets',
				data: volumes,
				borderWidth: 2,
				backgroundColor:[
		    		'rgba(255, 99, 132, 0.2)',
		    		'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
		        ],
		        borderColor: [
		    		'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
		        ],
		        hoverBackgroundColor: [
		    		'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
		        ]
			}]
		},
		options: {
			indexAxis: 'y',
			scales:{
				y:{
					beginAtZero: true
				}
			}
		}
	})
});

/*//object - key and value pair
let myPost = {
		name: "Lee Sung Kyung",
		queryUrl: "search?q=%22Lee+Sung+Kyung%22",
		volume: 31799,
		followers: 3895734
}

console.log(myPost);

//        object.propertyName
console.log(myPost.name);
	console.log(myPost.queryUrl);
	console.log(myPost.volume);
	console.log(myPost.followers);

//array of objects (collection of objects)
let graphData = [
		{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
		{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
	];

console.log(graphData);

graphData.push(myPost);
console.log(graphData);

console.log(graphData[2]);*/