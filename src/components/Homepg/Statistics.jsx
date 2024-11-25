import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Slider = () => {
  const carouselData = [
    {
      aspect: ' Influencer Discovery',
      before: {
        value: '68%',
        description: 'of brands reported that finding the right influencers manually is time-consuming and inefficient',
      },
      after: {
        value: '60%',
        description: " of time spent for influencer finding is reduced by Automation",
      },
    },
    {
      aspect: 'Streamlined Communication',
      before: {
        value: '57%',
        description: 'of brands struggled with maintaining consistent messaging across different influencers, leading to fragmented brand identity',
      },
      after: {
        value: '40%',
        description: 'improvement in influencer response rates is achieved as Biglinkz automates outreach with personalized templates and organized communication, ensuring clear and effective messaging.',
      },
    },
    {
      aspect: 'Data-Driven Budgeting',
      before: {
        value: '52%',
        description: 'of marketers found budget estimation a challenge, leading to overspending or inefficient allocations.',
      },
      after: {
        value: '25%',
        description: 'savings on budget mismanagement is achieved through Biglinkz’s automated budget calculation, which uses historical data to predict costs accurately and maximize campaign reach.',
      },
    },
  ];

  return (
    <div className="carousel-container w-[90%]">
      <h2>How Biglinkz Outperforms Traditional Approaches</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        interval={7000}
        transitionTime={500}
        showStatus={false}
        stopOnHover={true}
        ariaLabel="Before and After Statistics Carousel"
      >
        {carouselData.map((item, index) => (
          <div
            className="slide-content animate__animated animate__fadeInUp "
            key={index}
          >
            <h3>{item.aspect}</h3>
            <div className="before-after">
              <div className="before h-[300px] flex flex-col items-center justify-center">
                <h4>Before</h4>
                <p className="value">{item.before.value}</p>
                <p className="description">{item.before.description}</p>
              </div>
              <div className="after h-[300px] flex flex-col items-center justify-center">
                <h4>After</h4>
                <p className="value">{item.after.value}</p>
                <p className="description">{item.after.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
