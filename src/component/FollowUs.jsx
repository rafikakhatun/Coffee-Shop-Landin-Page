import bgFollow from "../assets/cofeebg.jpg"

const FollowUs = () => {
    return (
       <>
      <section className="w-full py-12">
        <div style={{backgroundImage:`url(${bgFollow})`}}  className="w-full h-[450px] relative bg-no-repeat bg-center bg-cover">
            {/*overlay div */}
            <div className="absolute inset-0 bg-black/30"></div>

        </div>
      </section>

       
       
       </>
    );
};

export default FollowUs;