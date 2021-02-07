import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Hobbies() {
  return (
    <Layout>
      <Head>
        <title>My Accomplishments/Skills</title>
      </Head>
      <h1><u>My Accomplishments/Skills</u></h1>
      <section>
      <p> • I played for the Boston Bolts Academy in the DA league for 7 years. Now I am a part of the MLS Next League.  </p>
      <p> • I captained the team for 2 years</p>
      <p>Click {" "} <a href="https://www.hudl.com/profile/8387949/Alexzander-Sansiveri">here </a>{" "}to view a few old highlights of mine</p>
      <p>Click {" "} <a href="https://youtu.be/Rqxk3NE-vmQ">here </a>{" "}to view this year's highlights</p>
      <hr></hr>
      <p> • I am fluent in Russian</p>
      <img src="/images/russia.jpg" alt="Image of russian flag" className={utilStyles.hobbyImage}/>
      <hr></hr>
      <p> • I have a third place trophy for the Pike Schoool Speech COmpetition in Dramatic Performance</p>
      </section>
    </Layout>
  )
}


//If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
//If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.