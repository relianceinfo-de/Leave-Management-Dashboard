import Onleave from '../../app-components/Cards/Onleave';
import leaves from '../../app-components/Cards/Onleave';


function OnleaveBoard() {
  return (
    <div className='w-2/5 border rounded'>
        <h3 className="font-semibold border-b pl-3 py-3">Who's On Leave?</h3>
            
            <div className="flex items-center gap-x-2 pl-3 mt-3">
              <h2 className="font-semibold">on leave:</h2> <div className="font-semibold text-sm text-[#ff4dff]">{leaves.length}</div>
            </div>

            <div className="mt-3 flex flex-col pl-3 gap-y-4">
              <Onleave />
            </div>
    </div>
  )
}

export default OnleaveBoard