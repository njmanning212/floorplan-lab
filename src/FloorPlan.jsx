import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return ( 
    <div>
      < Bedroom bedNum={1} />
      < Bath />
      < Bedroom bedNum={2} />
      < Kitchen />
      < Bath />
      < LivingRoom />
      < Bedroom bedNum={3} />
    </div>
  )
}

export default FloorPlan