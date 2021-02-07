import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Hobbies() {
  return (
    <Layout>
      <Head>
        <title>My Hobbies</title>
      </Head>
      <h1><u>My Hobbies</u></h1>
      <section>
      <p> • <u>Soccer</u> - I've played it ever since I first learned to walk </p>
      <img src="/images/soccer.jpg" alt="Me playing soccer" className={utilStyles.hobbyImage}/>
      <hr></hr>
      <p> • <u>Chess</u> - Chess puzzles are my favorite thing to play</p>
      <img src="/images/chess.jpg" alt="Image of chess" className={utilStyles.hobbyImage}/>
      <hr></hr>
      <p> • <u>Gardening</u> - I enjoy noticing how plants change and grow</p>
      <img src="/images/nursery.jpg" alt="Image of a nursery" className={utilStyles.hobbyImage}/>
      <hr></hr>
      <p> • <u>Programming</u> - I haven't done too many projects but making a Chess AI using reinforcement learning is my next idea</p> 
      <img src="/images/AI.jpg" alt="Image of a chess board using AI" className={utilStyles.hobbyImage}/>
      <hr></hr>
      <p> • <u>Piano</u> - I've been self-learning piano for about a year and a half now. I know a few songs such as Sleeping Lotus, Moonlight Sonata, Passacaglia, and I'm currently learning Standchen</p> 
      <img src="/images/piano.jpg" alt="Image of a piano" className={utilStyles.hobbyImage}/>
      </section>
    </Layout>
  )
}


//If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
//If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.