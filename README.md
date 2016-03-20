10/2 - 

		Guitar harmonic visualizer. 

			This web app is built for guitarist trying to learn the placements of nodes
			for the pinch harmonic technique. 

			The basic logic is already built, just gotta style it. 

10/4 -

		Alright, still having problems with the ng-class / ng-style directives. 

		Added more divisions, so got that going. 

		Right now, I'm trying to work on having a ---

		...Well now, nevermind. Looks like I completed it.


		So now I gotta style it. 

		

10/10 - 
		
		Added a bunch of styling on to it. It looks good
		 Gotta add @media tags so I can have it more responsive for different devices.

		 Resolved issues:

		 Fixed an issue with the fret ratio selector not being clickable. 
		 Every option except "Show All" currently works.
		
		 (#1 For me later...)
		 May have a work around with that by calling the fretRest function inside of the controller.

		 (/For me later...)

		 Current issues:

		 1- Google Font API tag keeps disappearing after every git commit/grunt serve.

		 (#2 For me later...)
		 		<link href='https://fonts.googleapis.com/css?family=Pacifico|Oxygen+Mono|Oxygen' rel='stylesheet' type='text/css'>

		 		Current css link tag
		 (/For me later...)

		 2- "Show All" selection is currently unclickable. 
		 		- Possible fix in "#1 For me later..."

		 3- Weird Margin/Padding on the nav-menu li


		 In-Progress: 

		 1- Styling
		 		-Have color scheme 
		 			- C5E5F0 
		 			- 71A2B2
		 			- 869CA3
		 			- B1E0F0
		 			- 5C6B70


12/5 -



		Alright, so it's done. 

		So far it's accurate, that's what people been telling me.

		Updates for the future

			- Add extra guitars. (Easy to do.)
				- ...Fix the values to match those of the scale lengths (...!@#$#!!!)
			- Make it mobile (TBA)
				- This is my biggest problem. I don't know how to display the data on such a small screen. 
			- Give it a title (The hardest one of all)
				- PHV? Pinch Harmonic Visualizer?
			- Work on fret board.
				- Planning to have full fretboard show notes on guitar. 
				


12/7 - 

		So stuff happened today. 
		Personal. Rather not. 


		Anyway back to the project. 

		I've updated the freboard to have the right starting notes... 

		There's two features that I need to add. 

		

			Have the notes light up the the notes being selected. 
				- Be able to light up notes in a scale. (...Pretty much making the chicken before the egg).
				- Be able to move that scale when it's fixed on a root
				  note. (I don't know why this is my trickiest one.
				  It should be easy, grab the string element, shift the 
				  array while pushing the shifted out element to the back
				  then start the scale pattern there.)

			Change the starting tuning. 
				- ...I have an idea on how to go? But I can't seem to put
				it into words. It's simply just change the ng-model (I
					think) to the approriate element in the scope array.
					...And do it to all... 144... seperate... elements...
					that need to be there individually because of the
					positioning of the frets... (Take a look. 800+ html
						with inline css >:C )



		So uhh... let's start with the first one. 



		so if I change the scope array of the music notes 

		and make a function that accepts a variable in its callback. 

		The callback will be the index for the function to search the array for the note.

		var x = function(index){
			var index = this;

			var result = $scope.musicNotes[index];

			return result;

		};


		This should give me the right note... 



2/28 - 

		Whoa man, couple of big updates.


		First, finished the back-end. Having that work with my personal site and this one (serving static files only). 

		Made a new guitar image with illustrator. Now it scales and looks a lot nicer than the really shitty cropped image. 

		Second... MADE IT SOMEWHAT MOBILE. 

		That... was interesting. So, for the mobile view, I rotated the guitar 90 degrees so it's up right. From there, I used the same concept as the desktop version... 'cept I ran into a problem. 

		With the desktop version, the guitar's on its side. Naturally the div goes from left to right, with the right side being adjusted. 

		With the mobile version, it's a different story. Since I now have to manipulate the height, I had the problem of it going from top to bottom with the bottom side being resized. I can't use that. 

		So far, my work around is by using the css transform property, I flipped the div in question upside down.  
		So now, up is down, down is up. The div now resizes from the 
		top aka the bottom. However, 
		it looks like its getting out of sync when it tries to go to different frets. 

		I got a possible work around, we'll see. 



2/29 -

		Holy shit, I finished it. 

		Finally. 


		It's complete. 


		The mobile version still has its kinks but they can smoothed out later. 
		However the layout and the general display of it, is finished and functional.



		The next phase is to complete the fretboard feature. 

		That one is a bit complicated, but I have a general idea on how to tackle it.

		 



3/14 -

		Ayyyyy Pi day. 

		Tons of big changes. 

		First, the layout is done. This is going to be a place holder layout until I decide 
		of something cool, hip, modern... or old, vintage, with vacuum tubes all over the place. 

		That doesn't sound that bad. :V

		Second, I started tackling the fretboard. 

		My idea for this fretboard was simple, have a virtual fretboard, that shows you 
		the all the notes on the neck when you change tuning. 

		That's the first feature, the second will be lighting up the notes you need. 

		So lets say you need the notes on a given scale but have no clue where they reside in this
		guitar tuning you decided to screw yourself with. With this, you'll be able to see chords,
		scales, and general notes. 



		What I've done so far is redo the whole fretboard. It was a mess. I had 144 different
		elements, being positioned manually. This time around, I made a directive that's called 
		g-String. 

		(I'm real mature...)

		This directive acts like a guitar string, the first element is the root note, aka the open the note.
		The second element is the 1st fret note, so if the root is E, the 1st fret note is F.
		This goes on until it hits the 23rd fret. Couldn't get the 24th because of bootstrap being
		a hassle. 

		 ----- I'll fix it up later once I have the whole thing up and running. 

		The directive also takes in a scope value called root. This root value is dependant on the
		value of string(name of standard guitar note here). So stringE, stringB, etc. 

		------ I might change this to ng-model require and see how that goes. 


		When the value changes, the string gets "tuned" up and down, it works. :D 

		What I have to work on right now is how to get the user to change the value. 


3/16 - 

		Oh man, oh man. 


		Made tons of progress on this. 

		First feature is done. Having the gString directive update the notes when the rootValue
		changes, works. Needed to dump the stringSelection directive because it wasn't returning 
		the data. Tbh, it's def my fault (Who else would it be since I'm alone in coding this?), 
		since I use directives like x-zbit. 

			"Hear your like directives, so we put a directive in directive inside another directive"


		Now the next thing I have to work on is the lighting of the notes. Using ngStyle should
		help, so time to ready the docs on that. 

3/18 - 	
		
		Alright, lighting up the notes. 

		Nearly done, got the chosenScale function to work somewhat. 

		Need to see what's causing it to repeat a bunch of times. 



3/20 - 
		
		And now, finished it.

		As a proof of concept, it looks really good. Totally functional. 

		As a final product, it looks disgusting. 

		All the technical work such as transfering the data and making the
		notes light up, are done. 

		All that is left is styling the UI. 

		And did you notice that all of these sentences started with A? 





