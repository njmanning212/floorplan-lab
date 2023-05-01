import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = () => {
  return ( 
    <div>
      < Bedroom bedNum={1} />
      < Bath type='Half'/>
      < Bedroom bedNum={2} />
      < Kitchen />
      < Bath type='Full'/>
      < LivingRoom />
      < Bedroom bedNum={3} />
    </div>
  )
}

export default FloorPlan