import './testimonial-css.css'

function Testimonial(props) {
    return <div className='testimonialCard' id={props.data.id}>
        <div className='cardInner'>
            <div className='nameTitle'>
                <h4>{props.data.name}</h4>
                <h5>{props.data.title}</h5>
            </div>
            <img src={props.data.img} alt={props.data.name} className='testImage'/>
        </div>
        <p className='testimony'>{props.data.testimony}</p>
    </div>
}

export default Testimonial