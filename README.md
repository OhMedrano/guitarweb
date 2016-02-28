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


		

