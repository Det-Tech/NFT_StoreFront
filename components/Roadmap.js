import constants from './constants/Constant'

export default function RoadMap() {

    const roadMapAdapter = constants.roadMapAdapter
    
    const roadMapItem = function(data, i) {

        let direction = 'left'
        if(i % 2 === 1) {
            direction = 'right'
        }

        return (
            <div className={`container ${direction}`} key={i}>
                <div className="content">
                    <h1 className='date'>{ data.date }</h1>
                    <h2 className='title'>{ data.title }</h2>
                    <p className='text'>
                        { data.content }
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col place-items-center space-y-12" id="roadmapSection">
            <h1 className="text-white text-5xl font-bold italic">Roadmap</h1>
            <div className="timeline">
                { roadMapAdapter.map((data, i) => {
                    return roadMapItem(data, i)
                })}
            </div>
        </div>
    )
}
