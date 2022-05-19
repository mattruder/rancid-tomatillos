describe('rancid-tomatillos movie display app', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: [
          {
            id: 694919,
            poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            title: "Money Plane",
            average_rating: 6.875,
            release_date: "2020-09-29"
            },
            {
            id: 337401,
            poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            title: "Mulan",
            average_rating: 5.1,
            release_date: "2020-09-04"
            },
            {
            id: 718444,
            poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
            title: "Rogue",
            average_rating: 7.333333333333333,
            release_date: "2020-08-20"
            },
            {
            id: 539885,
            poster_path: "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
            title: "Ava",
            average_rating: 5.875,
            release_date: "2020-07-02"
            },
            {
            id: 581392,
            poster_path: "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
            title: "Peninsula",
            average_rating: 7.166666666666667,
            release_date: "2020-07-15"
            }
        ]
      }
    })
    cy.visit('http://localhost:3000')
  })

  it('User should see the Rancid Tomatillos navbar', () => {
    cy.get('nav').contains('Rancid Tomatillos')
  })

  // Replace this with Search when we add that feature!

  it('User should see Pick A Movie in the navbar', () => {
    cy.get('nav').contains('Pick A Movie!')
  })

  it('User should see 5 movie previews at the homepage', () => {
    cy.get('.movie-container').contains('Money Plane')
    cy.get('.movie-container').contains("Mulan")
    cy.get('.movie-container').contains("Ava")
    cy.get('.movie-container').contains("Rogue")
    cy.get('.movie-container').contains("Peninsula")
  })

  it('Should be able to click a movie and view the details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        movie: {
              id: 694919,
              title: "Money Plane",
              poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
              backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
              release_date: "2020-09-29",
              overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
              genres: [
              "Action"
              ],
              budget: 0,
              revenue: 0,
              runtime: 82,
              tagline: "",
              average_rating: 6.875
            }

      }
    })
    cy.get('div #694919').click()
    .url().should('include', '/movies/694919')
    .get('.movie-text').contains("Genres: Action")
  })

  it('Should be able to return home after displaying movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        movie: {
              id: 694919,
              title: "Money Plane",
              poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
              backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
              release_date: "2020-09-29",
              overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
              genres: [
              "Action"
              ],
              budget: 0,
              revenue: 0,
              runtime: 82,
              tagline: "",
              average_rating: 6.875
            }

      }
    })
    cy.visit('http://localhost:3000/movies/694919')
    cy.get('.home').click()
    .url().should('eq', 'http://localhost:3000/')
  })



})
