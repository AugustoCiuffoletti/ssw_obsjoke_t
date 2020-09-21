// Produce una battuta ogni 10 secondi
import { Observable, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interval(10000).subscribe( 
     n => ajax("https://api.icndb.com/jokes/random").
	        subscribe( data => console.log(data.response.value.joke) 
	 ) 
);
