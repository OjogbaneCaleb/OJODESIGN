import{Title} from "@/components/common/Title"
import{expertise} from "@/assets/data/dummydata"
import { Card } from "./common/Card"
const Expertise = () => {
  return (
    <>
    <section className="Expertise" >
    <div className='container'>
            <div className='heading-title'>
              <Title title = 'The last digital agency you would ever need' />
              <p>We offer the most fantastic services to fit your every need, and we don't just stop there, we are ready to satisfy your every website desire, feedback and design intuition</p>
              <div className="hero-content grid-4">
            {expertise.map( (item,i) =>(
              <div className="box" key={i}>
                <Card data = {item} key= {item.i} caption= 'learn more ' />
                
                </div>
            ))}
          </div>
          </div>
    </div>
    </section>
    
    </>
  )
}

export default Expertise