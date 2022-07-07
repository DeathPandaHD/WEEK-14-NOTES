import React from "react";
import Movie from "./movie";
import "../styles/movieList.css";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          id: 0,
          poster:
            "https://i.pinimg.com/originals/dd/f9/1d/ddf91d9cb1b1be8f19d3a42766e99a59.jpg",
          title: "Spirited Away(2001)",
          synopsis:
            "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          runtime: "2h 5m",
          rating: "pg",
          streaming: "HBO Max",
          reviews: [
            {
              text: "Personally, I've never seen anything as original in an animated film as in this deeply mythical fairytale. What a surreal idea for a movie! It's hard to find an adequate description (because I also don't want to spoil this in the slightest way) but this film has a sense of \"otherness\" to it - for lack of a better word - like none I've ever seen. And the strange, mythical nature of this film - apart from the amazing artwork - is probably one of the main reasons for its appeal to me. Maybe the themes of the story don't feel quite as strange to an eastern audience because they fit to a certain degree with some eastern/Asian mythologies - to me, this beautiful piece of wonder was something new. And a profoundly moving experience.Outstanding animation; funny, weird, scary and touching at the same time, this unique work of art is one I can't recommend enough. 5 out of 5.",
              author: "AnimeLord9997",
              date: "12/26/2013",
              rating: "5\u{2605}",
            },
          ],
        },
        {
          id: 1,
          poster:
            "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2015/5/w1280/jVYqJSwnRrQAcpxJKcApIiXM0WQ.jpg",
          title: "Mushi-Shi: Bell Droplets(2015)",
          synopsis:
            "An adaptation of the last arc in the manga, Mushishi Zoku Shou: Suzu no Shizuku follows Ginko's peculiar journey amidst the occult to unravel the mystery behind the enigmatic girl called Kaya and the mountain that has become her home.",
          runtime: "47m",
          rating: "pg",
          streaming: "totally not illegal streaming site",
          reviews: [
            {
              text: 'Although a man can dream, it seems pretty definitive that "Suzu no Shizuku" will remain the final "Mushi-shi" adaptation to come from this team. Fortunately, it is a more than fitting farewell to the series, as understated and visually poetic as we have come to expect.In his final recorded case, Ginko is called upon by a family whose daughter keeps running off into the forest. Ginko traces the girl and discovers she has been chosen by nature to serve as the new \'mountain lord\', a being tasked to look after a mountain\'s well-being. This produces the two-fold complication that Kaya can no longer live with her family, whilst the mountain\'s vegetable, animal, and mineral inhabitants aren\'t sure how to respond to a human overseer.To put the success of "Suzu no Shizuku" into perspective, let\'s compare it to the series\' other double episode, "Hihamukage". Fine though that special was, its story focussed more on external conflict, a grand event that could impact all life on Earth, whilst offering relatively little thematic depth. "Suzu no Shizuku", on the other hand, has only the life of one little girl at stake, but manages to explore man\'s relationship with nature through her story.It is with such craft that "Mushi-shi" has given us some of the finest miniatures in anime. Reflecting on its two seasons, I am reminded of how Yasujirô Ozu used to call himself a tofu-maker. \'I can make fried tofu, boiled tofu, stuffed tofu. Cutlets and other fancy stuff, that\'s for other directors,\' he supposedly said. The creators of "Mushi-shi" have likewise carved themselves a beautiful little niche with these miniature marvels. "Suzu no Shizuku" is not a grand finale, nor should it be. It is a gentle coda to a body of work that anime fans will keep revisiting for decades to come.',
              author: "MaidInAbyss",
              date: "1/20/2022",
              rating: "4\u{2605}",
            },
          ],
        },
        {
          id: 2,
          poster: "https://flxt.tmsimg.com/assets/p158931_p_v8_aa.jpg",
          title: "Grave of the Fireflies",
          synopsis:
            "A young boy and his little sister struggle to survive in Japan during World War II.",
          runtime: "1h 29m",
          rating: "R",
          streaming: "Netflix",
          reviews: [
            {
              text: "I decided to watch Grave of the Fireflies yesterday. My friends told me it was extremely moving and sad. I hesitated at first, but then I said \"Oh well, I'll give it a try.\" At the end of the film, I was crying my eyes out. This was the best animated film, I've ever seen.This is a moving depiction of the fates of cast-off children who become casualties of war.",
              author: "yung.porco.rosso",
              date: "4/12/2005",
              rating: "5\u{2605}",
            },
          ],
        },
        {
          id: 3,
          poster:
            "https://m.media-amazon.com/images/I/81CFw86GbzL._AC_SX342_.jpg",
          title: "Foodfight!",
          synopsis:
            "The evil Brand X joins a supermarket that becomes a city after closing time.",
          runtime: "1h 31m",
          rating: "pg",
          streaming: "Hell",
          reviews: [
            {
              text: "Breathtaking, just breathtaking",
              author: "tony",
              date: "3/12/2010",
              rating: "5\u{2605}",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <h1 id="title">Anime Review!</h1>
        <Movie movie={this.state.movieList[0]} />
        <Movie movie={this.state.movieList[1]} />
        <Movie movie={this.state.movieList[2]} />
        <Movie movie={this.state.movieList[3]} />
      </div>
    );
  }
}
