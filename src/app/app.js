import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);





const PulpFiction = {
    name : "pulp-fiction",
    template : `
    
        <div class="film-item container">
        <h2 class="text-center">Pulp Fiction</h2>
        <div class="container">
        <div class="row">
            <div class="col-lg-4">
            <img class="img-fluid" src="https://i.pinimg.com/originals/b8/22/d2/b822d2ce13350d133774c03fe2150856.jpg" alt="">
            </div>
            <div class="col-lg-8">
            <p class='desc'>
                Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino. The film is based on a story by Tarantino and Roger Avary,[4] and starred John Travolta, Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman. It tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.

            Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Its plot occurs out of chronological order. The film is also self-referential from its opening moments, beginning with a title card that gives two dictionary definitions of "pulp". Considerable screen time is devoted to monologues and casual conversations with eclectic dialogue revealing each character's perspectives on several subjects, and the film features an ironic combination of humor and strong violence. Columbus TriStar reportedly turned down the script as "too demented". Miramax co-chairman Harvey Weinstein was enthralled, however, and the film became the first that Miramax fully financed.

            Pulp Fiction won the Palme d'Or at the 1994 Cannes Film Festival, and was a major critical and commercial success. It was nominated for seven Oscars, including Best Picture, and won Best Original Screenplay; it earned Travolta, Jackson, and Thurman Academy Award nominations and revitalized and/or elevated their careers. Its development, marketing, distribution, and profitability had a sweeping effect on independent cinema.

            Pulp Fiction has been widely regarded as Tarantino's masterpiece, with particular praise for its screenwriting.[5] The self-reflexivity, unconventional structure, and extensive homage and pastiche have led critics to describe it as a touchstone of postmodern film. It is often considered a cultural watershed, influencing movies and other media that adopted elements of its style. In 2008, Entertainment Weekly named it the best film since 1983[6] and it has appeared on many critics' lists of the greatest films ever made. In 2013, Pulp Fiction was selected for preservation in the United States National Film Registry by the Library of Congress as "culturally, historically, or aesthetically significant".[7]
            </p>
            </div>
        </div>
        </div>

        </div>  
        `
}


const ReservoirDogs = {
    name : "reservoir-dogs",
    template : `
                
        <div class="film-item container">
        <h2 class="text-center">Reservoir Dogs</h2>
        <div class="container">
        <div class="row">
            <div class="col-lg-4">
            <img class="img-fluid" src="https://ih1.redbubble.net/image.14065809.0558/flat,550x550,075,f.u2.jpg" alt="">
            </div>
            <div class="col-lg-8">
            <p class="desc">
                Reservoir Dogs is a 1992 American heist film written and directed by Quentin Tarantino in his feature-length debut. It stars Harvey Keitel, Tim Roth, Chris Penn, Steve Buscemi, Lawrence Tierney, Michael Madsen, Tarantino, and criminal-turned-author Edward Bunker, as diamond thieves whose planned heist of a jewelry store goes terribly wrong. The film depicts the events before and after the heist. Kirk Baltz, Randy Brooks and Steven Wright also play supporting roles. It incorporates many motifs that have become Tarantino's hallmarks: violent crime, pop culture references, profanity, and nonlinear storytelling.

                The film is regarded as a classic of independent film and a cult film,[3] and was named "Greatest Independent Film of all Time" by Empire. Although controversial for its depictions of violence and use of profanity, Reservoir Dogs was generally well received, with the cast being praised by many critics. Despite not being heavily promoted during its theatrical run, the film became a modest success in the United States after grossing $2.8 million against its $1.2 million budget, and was more successful in the United Kingdom, grossing nearly £6.5 million. It achieved higher popularity after the success of Tarantino's next film, Pulp Fiction (1994). A soundtrack was released featuring songs used in the film, which are mostly from the 1970s.
            </p>
            </div>
        </div>
        </div>

        </div>

    `
}


const Django = {
    name : "Django",
    template:  `
        <div class="film-item container">
        <h2 class="text-center">Django Unchained</h2>
        <div class="container">
        <div class="row">
            <div class="col-lg-4">
            <img class="img-fluid" src="https://imgc.allpostersimages.com/img/print/posters/django-unchained_a-G-9831444-0.jpg" alt="">
            </div>
            <div class="col-lg-8">
            <p class="desc">
            Django Unchained is a 2012 American revisionist Western film written and directed by Quentin Tarantino, starring Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, and Samuel L. Jackson, with Walton Goggins, Dennis Christopher, James Remar, and Don Johnson in supporting roles. Set in the Old West and Antebellum South, it is a highly stylized tribute to Spaghetti Westerns, in particular the 1966 Italian film Django by Sergio Corbucci, whose star Franco Nero has a cameo appearance.

            Development of Django Unchained began in 2007 when Tarantino was writing a book on Corbucci. By April 2011, Tarantino sent his final draft of the script to The Weinstein Company. Casting began in the summer of 2011, with Michael K. Williams and Will Smith being considered for the role of the title character before Foxx was cast. Principal photography took place from November 2011 to March 2012 in California, Wyoming and Louisiana.
            
            Django Unchained premiered at the Ziegfeld Theatre in New York City on December 11, 2012, and was released on December 25, 2012, in the United States. The film was nominated for several film industry awards, including five Academy Awards. Waltz won several awards for his performance, among them Best Supporting Actor at the Golden Globes, BAFTAs, and Academy Awards. Tarantino won an Academy Award, a Golden Globe, and a BAFTA award for writing the film's original screenplay. The film grossed over $425 million worldwide in theaters against its $100 million budget, making it Tarantino's highest-grossing theatrical release.
            </p>
            </div>
        </div>
        </div>

        </div>
    `
}

const routes = [
    {
        path : "/",
        component : {
        name : "index-blurb",
        template : `<h2 class="text-center">Pick a Quentin Tarantino Movies</h2>`,
    }
    },
    {path : "/pulpfiction",component : PulpFiction},
    {path : "/reservoirdogs",component : ReservoirDogs},
    {path : "/django",component : Django},
    {path : "*",
        component : {
            name : "not-found-blurb",
            template : `<h2>Not Found :( Pick a movie from the list!</h2>`
        }
    }
];


export const router = new VueRouter({
    mode : "history",
    routes,
})



const App = {
    name : "App",
    template  : `
        
<div id="app">
<div class="movies">
  <h2 class="text-center">Which Movie</h2>
  <div class="text-center links">
  <router-link to="/pulpfiction">Pulp Fiction</router-link>
  <router-link to="/reservoirdogs">Reservoir Dogs</router-link>
  <router-link to="/django">Django Unchained</router-link>
  </div>
  <router-view></router-view>
</div>
</div>
    `
}



export default App;



    