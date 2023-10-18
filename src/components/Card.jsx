/* eslint-disable react/prop-types */

export default function Card({ data, toggleDetails }) {
  return (
    <div className="grid-item col-md-12 col-lg-6 col-xl-4 apps wow zoomIn" onClick={toggleDetails}>
      <div className="img-place" data-src="../assets/img/work/work-1.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>">
        <img src={data.img} alt="" />
        <div className="img-caption">
          <h5 className="fg-theme">{data.title}</h5>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  )
}
