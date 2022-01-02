## Inspiration
For this project, our inspiration was our mutual interest in zoology. While learning about zoology, we noticed how a lot of zoology resources are either aimed at young children or provide an overwhelming about of information, something that we wanted to change while making Wayward Zoo.

See Waywardzoo in action [link](https://waywardzoo.surge.sh/)

## What it does
Wayward Zoo is a Web App containing a collection of information about various marine animals. When a user presses the button to learn, Wayward Zoo provides them with a randomized species and interesting information related to it. This information includes name, habitat, biology, texture, taste, and images. If the species is overfished/threatened, Wayward Zoo will specify the conservation status of said species as well.

## How we built it
Wayward Zoo uses an HTTPS request to acquire the information from the FishWatch API. This is an API that offers information about most fish in the world, from consumed texture to the population status. It then takes the information about a random species and displays the relevant information. This was built using React.js and it was hosted using Surge. In order to access the API information, we had to create a proxy using Heroku.

## Challenges we ran into
- randomly added characters from the JSON
- randomly whiting out
- the fact that a proxy had to be created
- general lack of experience with the utilized tools

## Accomplishments that we're proud of
- the design of the Web App
- the functionality of the Web App
- the Web App's ease of use
- the fact that we were able to submit a functional application in the time given, especially given our lack of experience
- making this without a guide

## What we learned
- how to use HTTPS requests in React.js
- general React.js syntax
- debugging strategies, specifically rubber ducking with React.js Dev Tools
- how to create a proxy
- geoducks are disgusting

## What's next for Wayward Zoo
Some of the things that we'd like to improve in Wayward Zoo include changing the images of certain species so they are all of the species mentioned and not something else, such as meals or cuts of meat. One of the challenges we had was with random JSON characters so, to improve Wayward Zoo, we'd like to find a way to remove all of these instances.

One of the most significant improvements we'd like to make with Wayward Zoo is the addition of other types of animals so Wayward Zoo can move from marine zoology to a general zoology site for all. With this improvement, we'd like to add the ability to filter results based on the different types of animals so users can target their personal interests if they wanted. To make it even easier for users to target their interests, we thought about the addition of a search function where users are able to search for any animal species individually, this would be complete with an autocompletion feature that could it easier for users to speed up their search. Something we'd like to add to Wayward Zoo is more personalized profiles for every species, making it more specific and relevant to each animal and not exclusively based on information fetched from the API. We think a tracking function would also be beneficial to the site, making it so users can avoid repeats of animals they've already seen and continue learning new things from the site.

# Team Members
Created with Vicky Li @incoherentparakeet
