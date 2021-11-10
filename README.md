Good Morning hiring group!

Thank you so much for taking the time to take a look at my mock up wireframe for a Taco Bell landing page.

 My main inspiration for this project was to build on the hidden-in-plain-sight ethos that makes up a large part of Illuminati imagery. I took images of items from the Taco Bell dollar menu and programtically hid them, using Javascript, until the user moused over or clicked on the elements in question. By hiding images and asking the user to find them, I hoped to build engagement with the ad itself. The images, once found, of course, lead back to the Taco Bell home page. 

 I had some trouble implementing this feature and went through a couple different versions before I landed on the one I did. My original intention had been for the user to need to find all four of the hidden elements, at which point they would be transported to the Taco Bell home page, like some kind of taco scavenger hunt. In order to accomplish this I created an object in the script file that contained four boolean values, one for each of the hidden elements. Once these elements were clicked or moused over, the image would become visible and the associated boolean value would become true. Then the function would check if all four values were true and send the user to Taco Bell if that was the case. A fine plan I thought, but it was quickly flummoxed when I discovered that altering the boolean value of the object in the script file also, somehow, mysteriously, managed to get rid of the styling I had set for the image elements themselves. Having been foiled by this mysterious behavior I opted to make the images themselves become clickable links that would navigate to the Taco Bell home page. By having multiple hidden elements, I hope to endow the user with a curiousity to mouse around the ad and find all the Taco Bell dollar menu items. 

 That effort was the majority of work I did with Javascript for this project. Now to discuss the HTML and CSS. In order to keep the elements relatively similarly styled across different viewports, I used viewheights and viewwidths for the most of the element portraits. Using vmax for the text size was surprisingly effective at maintaing a healthy text size across viewing formats. Unfortunately, I can't say it's perfect across all viewsizes and the desktop window is definitely the preferred method to view the ad. 
 
  Most Taco Bell promotional material is very heavy on imagery. That was one path I could have gone down though I figured that the hidden imagery component would have gotten lost in the noise. As for color scheme, I tried to hew as much as possible to Taco Bell's preferred palette. I was also able to find a Taco Bell font online which I think works well. The columns placed on either side of the ad are of debatable utility. They bring a bit more pizazz and brand recognition than if they were absent, though I had some trouble formatting them to fit perfectly on a mobile landscape. 

  Thank you again for taking the time to look at this and feel free to reach out with any questions or feedback. 